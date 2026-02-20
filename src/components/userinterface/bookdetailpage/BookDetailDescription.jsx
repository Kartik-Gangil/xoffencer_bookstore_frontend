


export default function BookDetailDescription({ bookDetail, AddCartItem }) {

  const data = {
    good: "BESTSELLER",
    type: "HARDCOVER",
    name: "The Silent Patient",
    author: "Alex Michaelides",
    rating: "⭐⭐⭐⭐⭐",
    des: "Timeless lessons on wealth, greed, and happiness. Doing well with money isn’t necessarily about what you know. It’s about how you behave.",
    offerprice: '$24.69',
    price: '$32.65',
    publicer: 'celadon Book',
    date: '05 Feb 2025',
    page: '565',
    issn: '14597823568'
  };

  const showData = () => {
    return (
      <div>
        <div className="d-flex align-items-center mb-2">
          {bookDetail.is_book_of_the_month && <span className="badge bg-primary me-3">Book Of The Month</span>}
          {bookDetail.is_book_of_the_year && <span className="badge bg-primary me-3">Book Of The Year</span>}
          {bookDetail.is_featured && <span className="badge bg-primary me-3">Featured Book</span>}

          <span className="text-muted fw-semibold">{data.type}</span>
        </div>

        <div style={{ fontSize: 35, fontWeight: 700 }}>
          {bookDetail.title}
        </div>

        <div className="text-muted fs-5 mb-2">
          – {bookDetail?.participants?.map((participant) => participant?.author?.user?.username).join(', ')}
        </div>

        <div className="mb-3" style={{ color: "#f5c518" }}>
          {data.rating}
        </div>

        <div style={{ fontSize: 18, letterSpacing: 0.3 }}>
          <p className="text-muted">
            {bookDetail.description}
          </p>
        </div>

        <div style={{ width: '75%', height: 100, borderRadius: 10, backgroundColor: 'white', margin: 5, marginTop: 30, display: 'flex', alignItems: 'center' }}>
          <div style={{ padding: 20 }}>
            <div style={{ color: "#c3b8b8" }}>PRICE</div>
            <div style={{ fontSize: 20, fontWeight: 700 }}>{data.offerprice} <span style={{ margin: 2, fontSize: 16, color: "#c3b8b8" }}><s>{data.price}</s></span></div>
          </div>

          <div style={{ marginLeft: 'auto', marginRight: 25 }}>
            <button type="button" className="btn btn-primary" onClick={()=>AddCartItem(bookDetail.id)} style={{ fontWeight: 400, fontSize: 20 , cursor:"pointer" }}>Add To Cart</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50, height: 50, border: '1px solid lightgrey', marginRight: 15, borderRadius: 5 }}>
            <i className="bi bi-heart-fill" style={{ fontSize: 25 }}></i>
          </div>

        </div>


        <div style={{ margin: 10, marginTop: 40 }}>
          <div style={{ display: "flex", gap: 90, flexWrap: "wrap" }}>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: 'darkgrey', fontSize: 12, fontWeight: 600, lineHeight: 1, letterSpacing: 0.3 }}>PUBLISHER</div>
              <div style={{ marginTop: 6, fontSize: 14, fontWeight: 500 }}>{bookDetail?.publication?.name}</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: 'darkgrey', fontSize: 12, fontWeight: 600, lineHeight: 1, letterSpacing: 0.3 }}>DATE</div>
              <div style={{ marginTop: 6, fontSize: 14, fontWeight: 500 }}>{bookDetail.publication_date}</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: 'darkgrey', fontSize: 12, fontWeight: 600, lineHeight: 1, letterSpacing: 0.3 }}>PAGES</div>
              <div style={{ marginTop: 6, fontSize: 14, fontWeight: 500 }}>{bookDetail?.pages}</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: 'darkgrey', fontSize: 12, fontWeight: 600, lineHeight: 1, letterSpacing: 0.3 }}>ISBN</div>
              <div style={{ marginTop: 6, fontSize: 14, fontWeight: 500 }}>{bookDetail.isbn}</div>
            </div>

          </div>
        </div>


      </div>
    );
  };

  return (<div>

    <div>
      {showData()}
    </div>



  </div>
  );
}
