import { useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import SearchBar from "./SearchBar";

export default function Header()
{
    const navigate=useNavigate();

    return(<div style={{display:'flex',alignItems:'center',width:'100%',background: "#ffffff", height: 60, borderBottom: "2px solid #eee",flexWrap:'wrap' }}>
        <div onClick={()=>navigate('/')} style={{display:'flex',justifyContent:'center',alignItems:'center',margin:10,marginLeft:25,cursor:'pointer'}}>
            <img src={logo} style={{width:40,height:40}}/>
            <div style={{fontSize:22,fontWeight:'bold',marginLeft:5}}>Xoffencer Bookstore</div>
        </div>

        
            <ul style={{ display: "flex",listStyle: "none", gap: 30, margin: 0,padding: 0,flexGrow: 1, justifyContent: "center",fontWeight: 500, fontSize:16,cursor:'pointer'}}>
                <li onClick={()=>navigate('/bookcategorydetails')}>Store</li>
                <li onClick={()=>navigate('/author')}>Author</li>
                <li onClick={()=>navigate('/public')}>Publication</li>
                <li onClick={()=>navigate('/contact')}>Contact Us</li>
                <li onClick={()=>navigate('/about')}>About me</li>
            </ul>

            <SearchBar/>
        

          <div style={{ display: "flex", gap: 15 }}>
             <button onClick={()=>navigate('/wish')} className="btn d-lg-block d-none" type="button">
                <i className="bi bi-heart-fill" style={{ fontSize: 20 }}></i>
            </button>

               <button onClick={()=>navigate('/cart')} className="btn d-lg-block d-none" type="button">
                <i className="bi bi-bag-fill" style={{ fontSize: 20 }}></i>
              </button>

               <button className="btn d-lg-block d-none" type="button">
                <i className="bi bi-person-circle" style={{ fontSize: 20 }}></i>
              </button>
         
        </div>
    </div>)
}