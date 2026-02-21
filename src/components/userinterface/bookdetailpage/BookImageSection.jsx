

export default function BookImageSection({book}) {
  return (
    <div style={{marginLeft:50}}>
      <div className="card shadow-sm" style={{ padding: "20px",width:'80%',height:530 }}>
        <div className="card-body text-center p-3">
          <div className="bg-light rounded shadow-sm d-flex align-items-center justify-content-center p-3 book-image-container">
            <img
              src={book}
              alt="Book Cover"
              className="img-fluid book-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
