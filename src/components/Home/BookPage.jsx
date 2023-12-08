import { Link } from 'react-router-dom'
import Navbar from '../NavAndFooter/Navbar';
import testbook from '../../components/assets/testbook.jpg';
import './BookPage.css'
const BookPage = () => {
return (
        <div>
            <Navbar />
            <div className='book_page_cont'>
                <div className='edit_book_card_cont'>
                    <div className='book_page_head'>Edit Book:</div>
                    <div className='book_cover_cont'>
                        <img src={testbook} className='book_cover_page' />
                        <span className='edit_book_cover'>Edit Cover</span>
                        <div className="edit_book_page_buttons_cont">
                            <button type="submit" className="edit_book_page_buttons" >Save Changes</button>
                        </div>
                        <div className="edit_book_page_buttons_cont">
                            <button type="submit" className="edit_book_page_buttons" >Delete</button> 
                        </div>
                    </div>
                </div>
                <div className='book_details_cont'>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>ID:</span>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Name:</span>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Author:</span>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Genre:</span>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Description:</span>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Price:</span>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Rates:</span>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Number of sales:</span>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Quantity in Stock:</span>
                    </div>
                </div>
            </div>
        </div>
      )}

export default BookPage
