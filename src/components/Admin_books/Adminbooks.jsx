import Navbar from "../NavAndFooter/Navbar";
import Footer from '../NavAndFooter/Footer';
import Trash from "../assets/Trash.png";
import './AdminBooks.css';
import { getBooks } from "../../controller/BooksController.ts"
import { useQuery } from "react-query";
import AdminbooksRow from "./AdminbooksRow.jsx";

const AdminBooks = () => {
   
    const {data:bookData} = useQuery({
        queryFn: getBooks,
        queryKey: ["books"]
    });
    

return(
    <div className="AdminBookPage">

             <Navbar/>
             <h3 className="PageTitle">Available Books</h3>

             <div className="BookList">
                <table className="bookTable">
                        <tbody>
                            {bookData?.map((book)=>
                            { 
                            return (<AdminbooksRow key={book.id} book={book}/>)}
                                )}
                        </tbody>
                </table>
                <div className="vLine"> </div>
                <div className="Trashpic">
                    <div className="pic-text">
                    <img  className="tpic" src={Trash} alt="" />
                    <a className="etext">Edit</a>
                    </div>

                    <div className="pic-text">
                    <img  className="tpic" src={Trash} alt="" />
                    <a className="etext">Edit</a>
                    </div>
                    <div className="pic-text">
                    <img  className="tpic" src={Trash} alt="" />
                    <a className="etext">Edit</a>
                    </div>
                    <div className="pic-text">
                    <img  className="tpic" src={Trash} alt="" />
                    <a className="etext">Edit</a>
                    </div>
                    <div className="pic-text">
                    <img  className="tpic" src={Trash} alt="" />
                    <a className="etext">Edit</a>
                    </div>
                    <div className="pic-text">
                    <img  className="tpic" src={Trash} alt="" />
                    <a className="etext">Edit</a>
                    </div>
                    <div className="pic-text">
                    <img  className="tpic" src={Trash} alt="" />
                    <a className="etext">Edit</a>
                    </div>
                    <div className="pic-text">
                    <img  className="tpic" src={Trash} alt="" />
                    <a className="etext">Edit</a>
                    </div>
                    <div className="pic-text">
                    <img  className="tpic" src={Trash} alt="" />
                    <a className="etext">Edit</a>
                    </div>
                    <div className="pic-text">
                    <img  className="tpic" src={Trash} alt="" />
                    <a className="etext">Edit</a>
                    </div>
                    
                   
                </div>

                <h3 className="loadmore">Tap to load more</h3>

                
              

             </div>
             
             <button type="submit" className="NewButton" >Add new books</button>  
           
             <div className="Last"> <Footer/></div>
    </div>
);

}
export default AdminBooks;