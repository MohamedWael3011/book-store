import BackButtonWhite from '../BackButton/BackButtonWhite'
import Footer from '../NavAndFooter/Footer'
import Navbar from '../NavAndFooter/Navbar'
import Cover from '../assets/book_cover_test.png'
import './BookPage.css'
const BookPage = () =>{
    return(
        <div>
            <Navbar/>
                <div className='book_page_main_container'>
                    <div className='book_page_secondary_container'>
                        <div className='book_page_details_user'>
                            <div className='book_page_title_author'>
                                <span className='title_user'>Twisted love</span>
                                <span className='author_user'>ANA HUANG</span>
                            </div>
                            <div className='book_page_genre'>
                                Genre: romantic
                            </div>
                            <div className='book_page_desc'>
                                He has a heart of ice…but for her, he’d burn the world.
                                Alex Volkov is a devil blessed with the face of an angel and cursed with a past he can’t escape.
                                Driven by a tragedy that has haunted him for most of his life, his ruthless pursuits for success and vengeance leave little room for matters of the heart.
                                But when he’s forced to look after his best friend’s sister, he starts to feel something in his chest:
                                A crack.A melt.A fire that could end his world as he knew it.
                            </div>
                            <div className='book_page_price'>
                                PRICE: <span className='book_page_price_text'></span> EGY
                            </div>
                            <div className='book_page_user_buttons'>
                                <button type="submit" className="add_cart">Add to cart</button>
                            </div>
                        </div>
                        <div className='book_page_cover_cont_user'>
                            <img src={Cover} className='img_cont'/>
                            <div className='rectangle_user'>
                                 <div className='back_button_container'>
                                    <BackButtonWhite/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default BookPage