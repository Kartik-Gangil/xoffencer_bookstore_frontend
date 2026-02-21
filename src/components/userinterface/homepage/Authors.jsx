import Footer from "./Footer";
import Header from "./Header";

export default function Authors()
{
    const data=[{authorid:'AUTHOR00123P',name:'Anjali Bhadoriya',role:'Editor',pic:'/AnjaliEdit.jpeg'},
            {authorid:'AUTHOR00123P',name:'Anjali Bhadoriya',role:'Editor',pic:'/AnjaliEdit.jpeg'},
            {authorid:'AUTHOR00123P',name:'Anjali Bhadoriya',role:'Editor',pic:'/AnjaliEdit.jpeg'},
            {authorid:'AUTHOR00123P',name:'Anjali Bhadoriya',role:'Editor',pic:'/AnjaliEdit.jpeg'},
            {authorid:'AUTHOR00123P',name:'Anjali Bhadoriya',role:'Editor',pic:'/AnjaliEdit.jpeg'},
            
            
    ]

      const showData = () => {
    return data.map((item, i) => (
      <div key={i} className="col-md-6 col-lg-4 mb-4">
        <div className="card shadow-sm h-100 border-0">
          <div className="card-body text-center">

            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <img src={item.pic} alt={item.name} className="rounded-circle mb-3" style={{ width: 160, height: 160, objectFit: "cover"}} />
           </div>

            <h5 className="fw-bold mb-1">{item.name}</h5>

            <p className="text-muted mb-2">{item.role}</p>

            <hr />

            <div className="text-start">
              <p className="mb-1">
                <strong>Author ID:</strong> {item.authorid}
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
  };



    return(<div>
        <div>
            <Header/>
        </div>

        <div style={{margin:10,padding:10,marginTop:20}}>
            <div style={{fontSize:38,fontWeight:650,fontFamily:'Newsreader',display:'flex',alignItems:'center',justifyContent:'center'}}>Meet Our Author Authors & Editors</div>
        </div>

        <div className="container py-4 mt-5">
          <div className="row">{showData()}</div>
       </div>

       <div>
        <Footer/>
       </div>

        

    </div>)
}