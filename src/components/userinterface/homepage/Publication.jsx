import Header from "./Header";
import logo from "../../../assets/logo.png";
import Footer from "./Footer";

export default function Publication()
{
    return(<div style={{backgroundColor: "#f5f5f5"}}>
        <div>
            <Header/>
        </div>

        <div className="row m-5 p-5 me-5">
            <div className="col-lg-6">
                <img src={logo} style={{width:'40%'}}/>
            </div>

            <div className="col-lg-6">
                 <div style={{width:'85%',height:'auto', borderRadius:10,backgroundColor:'white',margin:5,marginTop:30,display:'flex',border:'1px solid grey'}}>      
                    <div style={{padding:20,margin:10}}>
                        <h1>Xoffencer International Book Publication House</h1>

                        <div style={{fontSize:16,fontWeight:400,color:'#956f6f'}}>
                            International Publisher
                        </div>

                        <div style={{margin:5,marginTop:20,fontSize:18,fontWeight:500,lineHeight:1.2,letterSpacing:0.5,fontFamily:'Newsreader,serlief'}}>
                           Xoffencer International is a leading publisher dedicated to bringing new
                           and established voices to a global audience, focusing on academic
                           technical and literary works

                        </div>

                        <div style={{fontSize:16,fontWeight:400,color:'#956f6f',marginTop:25}}>
                            contact@xoffencerpublication.in
                        </div>

                        <div style={{fontSize:16,fontWeight:400,color:'#956f6f'}}>
                            www.xoffencerpublication.in
                        </div>
                        
                    </div>

                    
                    

                 </div>
           

            </div>

        </div>


<div>
    <Footer/>
</div>
    </div>)
}