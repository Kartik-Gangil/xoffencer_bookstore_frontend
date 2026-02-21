import Header from "./Header";
import logo from "../../../assets/logo.png";
import Footer from "./Footer";

export default function Aboutus()
{
    return(<div style={{backgroundColor: "#f5f5f5"}}>
        <div>
            <Header/>
        </div>


        <div className="container py-5">

            <div className="row align-items-center g-4">
                <div className="col-12 col-lg-6 text-center">
                  <img src={logo}  style={{ maxWidth: "280px" }}/>
                </div>


                <div className="col-12 col-lg-6">
                    <div className="bg-white shadow-sm p-4 p-md-5" style={{borderRadius: 12,border: "1px solid #e0e0e0"}}>      
                        <h1>About Xoffencer</h1>

                        <div style={{fontSize:16,fontWeight:400,color:'#956f6f'}}>
                            Your Gateway to New Worlds And Timeless Stories
                        </div>

                        <div style={{margin:5,marginTop:20,fontSize:18,fontWeight:500,lineHeight:1.2,letterSpacing:0.5,fontFamily:'Newsreader,serlief'}}>
                            Wellcome to the xoffencer international Book Publication House.Our mission is to discover And
                            champion both new and established voices in the literary world. We believe a great book is a
                            conversation and our goal is to publish works that inspire, challenges, and entertrain
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