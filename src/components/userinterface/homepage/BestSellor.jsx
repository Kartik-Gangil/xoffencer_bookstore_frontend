import book from "../../../assets/book.png";

export default function BestSellor()
{
    const data = [{sno: 1,title: "The Alchemist",author: "Paulo Coetho",rating: "*****",image: book},
                {sno: 2,title: "The Alchemist",author: "Paulo Coetho",rating: "*****",image: book},
                {sno: 3,title: "The Alchemist",author: "Paulo Coetho",rating: "*****",image: book},
                {sno: 4,title: "The Alchemist",author: "Paulo Coetho",rating: "*****",image: book},
      ];

      const showData=()=>{
        return data.map((item,i)=>{
            return(<div style={{margin:10}}>

                <div style={{display:'flex'}}>

                 <img src={item.image}  style={{width:'30%',height:'15%', cursor:'pointer'}}/>

                    <div style={{display:'flex',flexDirection:'column',margin:20}}>
                      <div style={{fontSize:16,fontWeight:'bold', color:'#6c757d'}}> {item.sno} </div>
                      <div style={{fontSize:16,fontWeight:'bold',}}> {item.title}</div>
                      <div style={{fontSize:16,fontWeight:'bold', color:'#6c757d'}}> {item.author} </div>
                      <div style={{fontSize:24,fontWeight:'bold', color:'blue'}}> {item.rating} </div>
                    </div>

               </div>

                
                
            </div>)
        })
      }


    return(<div style={{background:'#fffcfc'}}>
         <div className="d-flex justify-content-between align-items-center mb-4 m-2 p-2 me-5">
          <div style={{marginLeft:20}}>
            <small className="text-primary fw-semibold">
              TRENDING NOW
            </small>
            <h2 className="fw-bold mt-1">Best Sellers</h2>
          </div>
        </div>

        <div style={{ display:'flex',marginLeft:50}}>
            {showData()}
        </div>

    </div>)
}