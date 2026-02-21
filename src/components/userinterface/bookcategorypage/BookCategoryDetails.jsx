import Footer from "../homepage/Footer";
import Header from "../homepage/Header";
import BookLeftDetails from "./BookLeftDetails";
import BookRightDetails from "./BookRightDetails";
//import BookLeftDetails from "./BookLeftDetails";

export default function BookCategoryDetails()
{
    return(<div>

        <div> 
            <Header/>
        </div>

        <div className="row m-2">
            <div className="col-lg-3">
                <BookLeftDetails/>
            </div>

             <div className="col-lg-9">
                <BookRightDetails/>
            </div>

        </div>

        <div>
            <Footer/>
        </div>

    </div>)
}