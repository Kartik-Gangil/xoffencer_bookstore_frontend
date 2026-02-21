import MainContext from './MainContext';
import { useState } from 'react';
import axios from 'axios';

const contextProvider = ({ children }) => {

  const [book, SetBook] = useState([])
  const [cart, SetCart] = useState([])
  const [bookDetail, SetBookDetail] = useState({})

  const fetchBook = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/books');
      // console.log(response.data.results);
      const books = response.data.results.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.cover_image,
        author: item.author || 'Unknown Author',
      }));
      SetBook(books);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchBookDetail = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/books/${id}`);
      // console.log(response.data);
      SetBookDetail(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchCart = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/cart', {
        headers: {
          "Authorization": "Token badf4921986da065b035b1b4e95a5b6c1c11362e"
        }
      });

      // this response coming from the server is in the form of array of objects, where each object contains the details of the book added to the cart, and the quantity of that book added to the cart. so we need to map through that array and create a new array of objects, where each object contains the details of the book and the quantity of that book added to the cart.

      /* console.log(response.data.items);
      [0: {
      book: 
      {cover_image: "http://localhost:8000/media/book_additional_images/KRYUK.png",
      format_name: "spiral A4 70GSM - hindi",
      id: 1,
      mrp: "20.00",
      title: "xyz"
    }}]
*/

      // this format you design to map the data comping from the server , if you want any other field feel free to update the format as per above given output format

      /*
                 bookname: "Maaza Mango Drink",
                 author: 'marry sahu',
                 noofqty: "1",
                 stock: 5,
                 price: '$32',
                 offerprice: '$24',
                 picture: book,
                 */

      const CART = response.data.items.map((item) => ({
        id: item.id,
        bookname: item?.book?.title,
        price: item?.book?.mrp,
        image: item?.book?.cover_image,
        qty: item.quantity,
      }));


      SetCart(CART)
    } catch (error) {
      console.error(error);
    }
  }

  const AddCartItem = async (bookId, quantity = 1) => {
    try {
      console.log("hitt")
      const response = await axios.post('http://localhost:8000/api/cart/add-item/', {
        book_format_id: bookId,
        quantity: quantity
      }, {
        headers: {
          "Authorization": "Token badf4921986da065b035b1b4e95a5b6c1c11362e"
        }
      });
      console.log(response)
      // fetchCart();
    } catch (error) {
      console.error(error)
    }
  }


  const UpdateCartItem = async (cartItemId, sign) => {
    try {
      const url = 'http://localhost:8000/api/cart/';
      if (sign === '+') {
        await axios.post(`${url}increase-quantity/`, {
          cart_item_id: cartItemId,
        }, {
          headers: {
            "Authorization": "Token badf4921986da065b035b1b4e95a5b6c1c11362e"
          }
        });
      }
      else if (sign === '-') {
        await axios.post(`${url}decrease-quantity/`, {
          cart_item_id: cartItemId,
        }, {
          headers: {
            "Authorization": "Token badf4921986da065b035b1b4e95a5b6c1c11362e"
          }
        });
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <MainContext.Provider value={{ book, SetBook, fetchBook, fetchBookDetail, bookDetail, fetchCart, cart, AddCartItem, UpdateCartItem }}>
      {children}
    </MainContext.Provider>
  )
}

export default contextProvider
