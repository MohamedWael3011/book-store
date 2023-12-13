import BackButtonWhite from '../BackButton/BackButtonWhite'
import Footer from '../NavAndFooter/Footer'
import Navbar from '../NavAndFooter/Navbar'
import Cover from '../assets/book_cover_test.png'
import testbook from '../assets/testbook.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import Book from './Book';
import './BookPage.css'
import ReviewsProp from '../PropsAndComps/ReviewsProp';
import star from '../../components/assets/star.svg'
import StarRatingAndReview from '../PropsAndComps/StarRatingAndReview';
import { useNavigate, useParams } from 'react-router-dom';
import BookNotFound from '../Home/BookNotFound'
import { getBook } from '../../controller/BooksController'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { getBooks } from "../../controller/BooksController.ts"

const BookPage = () =>{
    const navigate=useNavigate();
    const [books, setBooks] = useState([
        { book_cover: testbook, title: 'Moghamrat Anso', author: 'Anso', price: 250, book_id:55 },
        { book_cover: Cover, title: 'Moghamrat Anso', author: 'Anso', price: 250, book_id:65 },
        { book_cover: Cover, title: 'Moghamrat Anso', author: 'Anso', price: 250, book_id:75 },
        { book_cover: Cover, title: 'Moghamrat Anso', author: 'Anso', price: 250, book_id:85 },
        { book_cover: Cover, title: 'Moghamrat Anso rakam id 155', author: 'Anso', price: 250, book_id:155 }
      ]);
    const [review, setReview] = useState([
        {username: 'Anso', content: "classic case of “i would never tolerate this mans behavior in real life,but i cant get enough of it in books” kind of romance's would say we should all form a support group,but im pretty sure that's what booktok has become by this point. lol.",rating:4.5},
        {username: 'Anso', content: "classic case of “i would never tolerate this mans behavior in real life,but i cant get enough of it in books” kind of romance's would say we should all form a support group,but im pretty sure that's what booktok has become by this point. lol.",rating:1}

    ])
    
    const {bookid} = useParams()
    const {data:bookDetails} = useQuery({
        queryFn: ()=>getBook(bookid),
        queryKey: [`book ${bookid}`] 
    });
    
    const {data:bookData} = useQuery({
        queryFn: getBooks,
        queryKey: ["books"]
    });
    
    const specificBook = bookDetails;

  
    if (!specificBook) {
        return <div><BookNotFound/></div>;
      }


    return(
        <div>
            <Navbar/>
                <div className='book_page_main_container'>
                    <div className='book_page_secondary_container'>
                        <div className='book_page_details_user'>
                            <div className='book_page_title_author'>
                                <span className='title_user'>{specificBook.book_name}</span>
                                <span className='author_user'>{specificBook.author.author_name}</span>
                            </div>
                            <div className='book_page_genre'>
                                Genre: {specificBook.book_name}
                            </div>
                            <div className='book_page_desc'>
                                {specificBook.description}
                            </div>
                            <div className='book_page_price'>
                                PRICE: <span className='book_page_price_text'>{specificBook.price}</span> EGY
                            </div>
                            <div className='book_page_user_buttons'>
                                <button  onClick={()=>navigate('/cart', {state:{bookid}})} className="add_cart">Add to cart</button>
                            </div>
                        </div>
                        <div className='book_page_cover_cont_user'>
                            <img src={specificBook.image_url} className='img_cont'/>
                            <div className='rectangle_user'>
                                 <div className='back_button_container'>
                                    <BackButtonWhite/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom_page_author_cont'>
                        <div className='author_desc_cont'>
                            <div className='about_author'>
                                <span className='subtitle_cont'>
                                    About author:
                                </span>
                                <span className='author_name_desc'>
                                    {specificBook.author.author_name}
                                </span>
                            </div>
                            <div className='desc_cont'>
                                 Ana Huang is a New York Times, USA Today, international, and #1 Amazon bestselling author.
                                 Best known for her Twisted series, she writes New Adult and contemporary romance with deliciously alpha heroes, strong heroines, and plenty of steam, angst, and swoon sprinkled in. Her books have been sold to over two dozen foreign publishers for translation and featured in outlets such as NPR, Cosmopolitan, Financial Times, and Glamour UK.A self-professed travel enthusiast, she loves incorporating beautiful destinations into her stories and will never say no to a good chai latte. When she’s not reading or writing, Ana is busy daydreaming and scouring Yelp for her next favorite restaurant.
                            </div>
                        </div>
                        <div className='book_recommendations'>
                        {bookData?.map((book)=>{return (<Book key={book.id} book={book} className='book_cont'/>)})}
                        </div>
                    </div>
                    <div className='reviews_title_rating_sales_cont'>
                        <span className='subtitle_cont'>
                            Reviews & Feed Back
                        </span>
                        <div className='sales_rating_main_cont'>
                            <span className='sales_rating_cont'>
                                Sales: {specificBook.sales}
                            </span>
                            <span className='sales_rating_cont'>
                                Rating:
                            </span>
                            <div className='book_rating_cont'>
                                <div className='book_star_cont'>
                                    <img src={star}/>
                                </div>
                                <span className='book_rating_num'>
                                    4.5
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='reviews_cont'>
                        <ReviewsProp review={review[0]}/>
                        <ReviewsProp review={review[1]}/>
                    </div>
                    <div>
                        <StarRatingAndReview/>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default BookPage