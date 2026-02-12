import Footer from "../homepage/Footer";
import Header from "../homepage/Header";
import MyCart from "./MyCart";
import PaymentDetail from "./PaymentDetail";
export default function DisplayCartDetail()
{
    return(<div>
        <div>
            <Header/>
        </div>

        <div className="row">
            <div className="col-lg-8">
                <MyCart/>
            </div>

            <div className="col-lg-4 mt-5">
                <PaymentDetail/>
            </div>

            
        </div>

       
    </div>)
}