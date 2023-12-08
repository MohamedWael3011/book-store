import { Link } from 'react-router-dom'
import Navbar from '../NavAndFooter/Navbar';
import testbook from '../../components/assets/testbook.jpg';
import './EditBookPage.css'
import Footer from '../NavAndFooter/Footer';
const EditBookPage = () => {
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
                        <span className='input_book_details'></span>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Name:</span>
                        <input type='text' className='input_book_details'></input>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Author:</span>
                        <input type='text' className='input_book_details'></input>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Genre:</span>
                        <input type='text' className='input_book_details'></input>
                    </div>
                    <div className='book_desc_item_cont'>
                        <span className='book_details_item_title'>Description:</span>
                        <textarea rows="4" cols="50" className='input_book_desc'>
                        </textarea>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Price:</span>
                        <input type='text' className='input_book_details'></input>
                        <span className='units'>EGP</span>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Rates:</span>
                        <input type='text' className='input_book_details'></input>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Number of sales:</span>
                        <input type='text' className='input_book_details'></input>
                        <span className='units'>Copy</span>
                    </div>
                    <div className='book_details_item_cont'>
                        <span className='book_details_item_title'>Quantity in Stock:</span>
                        <input type='text' className='input_book_details'></input>
                        <span className='units'>Copy</span>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
      )}

export default EditBookPage
