import { useContext } from "react";
import book from "../../../assets/book.png";
import PlusMinusCart from "../bookdetailpage/PlusMinusCart";
import MainContext from "../../../context/MainContext";
import { useEffect } from "react";

export default function MyCart() {
    const { cart, fetchCart } = useContext(MainContext)
    useEffect(() => { fetchCart() }, [])
    console.log(cart)
    /*var data = [
        {
            bookname: "Maaza Mango Drink",
            author: 'marry sahu',
            noofqty: "1",
            stock: 5,
            price: '$32',
            offerprice: '$24',
            picture: book,
        },
    ]
*/
    const cartDetails = () => {
        return cart.map((item, i) => {
            const saveAmount = (item.price - item.offerprice) * item.noofqty;

            return (<div key={i}>

                <div style={{ display: 'flex' }}>
                    <img src={item.image} style={{ width: '12.5%', cursor: 'pointer', margin: 5, padding: 2 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 25, marginTop: 40 }}>
                        <div style={{ fontSize: 22, fontWeight: 545, fontFamily: 'newsreader,selief', lineHeight: 1.2, letterSpacing: 0.5 }}>
                            {item.bookname}
                        </div>

                        <div style={{ fontSize: 18, fontWeight: 545, fontFamily: 'newsreader,selief', lineHeight: 1.2, letterSpacing: 0.5, color: "darkgrey", marginTop: 6 }}>
                            {item.bookname}
                        </div>

                        <div>
                            <span style={{ margin: 2, fontSize: 19, fontWeight: 550 }}>{item.price}</span>
                            <span style={{ margin: 2, fontSize: 14, fontWeight: 550, color: 'darkgrey' }}><s>{item.price}</s></span>
                        </div>
                    </div>

                    <div style={{ marginLeft: 'auto', marginRight: 25, cursor: 'pointer' }}>
                        <i className="bi bi-heart" style={{ fontSize: 25 }}></i>
                    </div>

                </div>

                <div>
                    <PlusMinusCart qty={item.qty} id={item.id} />
                </div>



            </div>)
        })

    }


    const showAddress = () => {
        return (<div style={{ fontFamily: 'JioType, helvetica, arial, sans-serif', fontWeight: 500, fontSize: 16, marginTop: 25, marginLeft: 100, width: '50%', border: '0.5px solid #e2e2e2', borderRadius: 20, padding: 20 }}>
            <div style={{ fontFamily: 'JioType, helvetica, arial, sans-serif', fontWeight: 'bold', fontSize: 18 }}>Delivery Address: </div>
            <div>Himanshu Sharma</div>
            <div>Krishna Puri Morar</div>
            <div>House No:149</div>
            <div>Madhya Pradesh, Gwalior-474006</div>

        </div>)
    }


    return (<div>
        <div style={{ fontSize: 28, fontWeight: 750, padding: 10, margin: 10, lineHeight: 1.1, letterSpacing: 0.5, marginLeft: 50, fontFamily: 'Newsreader,serif', marginTop: 20 }}>
            My Cart
        </div>

        <div>
            {showAddress()}
        </div>


        <div style={{ fontSize: 28, fontWeight: 800, padding: 10, margin: 10, lineHeight: 1.1, letterSpacing: 0.5, marginLeft: 50, fontFamily: 'Newsreader,serif', marginTop: 20 }}>Your Collection</div>
        <div style={{ border: '0.5px solid #e2e2e2', width: '70%', marginLeft: 100, borderRadius: 20, padding: 15 }}>
            {cartDetails()}

        </div>








    </div>)
}