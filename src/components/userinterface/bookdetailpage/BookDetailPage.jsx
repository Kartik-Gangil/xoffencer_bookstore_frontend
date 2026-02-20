import EditorScroll from "../homepage/EditorScroll";
import Footer from "../homepage/Footer";
import Header from "../homepage/Header";
import BookDetailDescription from "./BookDetailDescription";
import BookImageSection from "./BookImageSection";
import { useContext } from "react";
import MainContext from "../../../context/MainContext";
import { useEffect } from "react";


export default function BookDetailPage() {
    const { fetchBookDetail, bookDetail, AddCartItem } = useContext(MainContext)
    useEffect(() => {
        fetchBookDetail(2);
    }, [])
    // console.log(bookDetail)


    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <div>
                <Header />
            </div>

            <div className="row m-3 mt-5" style={{ marginLeft: 20 }}>
                <div className="col-lg-6">
                    <BookImageSection book={bookDetail?.cover_image} />
                </div>

                <div className="col-lg-6">
                    <BookDetailDescription bookDetail={bookDetail} AddCartItem={AddCartItem} />
                </div>
            </div>

            <div style={{ marginTop: 40 }}>
                <div style={{ fontSize: 28, fontWeight: 550, padding: 20, marginLeft: 60, fontFamily: 'Helvetica' }}>Recommened For You</div>
                <div>
                    <EditorScroll show='recommand' />
                </div>
            </div>

            <div>
                <Footer />
            </div>


        </div>)
}