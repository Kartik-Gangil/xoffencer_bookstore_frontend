import Header from "./Header";
import logo from "../../../assets/logo.png";

export default function Aboutus()
{
    return(<div style={{backgroundColor: "#f5f5f5"}}>
        <div>
            <Header/>
        </div>

        <div className="row m-5 p-5">
            <div className="col-lg-6">
                <img src={logo} style={{width:'40%'}}/>
            </div>

            <div className="col-lg-6">
                 <div style={{width:'85%',height:'auto', borderRadius:10,backgroundColor:'white',margin:5,marginTop:30,display:'flex',border:'1px solid grey'}}>      
                    <div style={{padding:20,margin:10}}>
                        <h1>About Xoffencer</h1>

                        <div style={{fontSize:16,fontWeight:400,color:'#956f6f'}}>
                            Your Gateway to New Worlds And Timeless Stories
                        </div>

                        <div style={{margin:5,marginTop:20,fontSize:18,fontWeight:500,lineHeight:1.2,letterSpacing:0.5,fontFamily:'Newsreader,serlief'}}>
                            Wellcome to the xoffencer international Book Publication House.Our mission is to discover And
                            champion both new and established voices in the literary world. We believe a great book is a
                            conversation and our goal is to publish works that inspire, challenges, and entertrain.

                        </div>
                        
                    </div>

                    
                    

                 </div>
           

            </div>

        </div>

    </div>)
}