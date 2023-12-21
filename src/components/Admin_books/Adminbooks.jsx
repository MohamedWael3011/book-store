import Navbar from "../NavAndFooter/Navbar";
import Footer from '../NavAndFooter/Footer';
import Trash from "../assets/Trash.png";
import './AdminBooks.css';
import { getBooks } from "../../controller/BooksController.ts"
import { useQuery } from "react-query";
import AdminbooksRow from "./AdminbooksRow.jsx";

const AdminBooks = () => {

    const { data: bookData } = useQuery({
        queryFn: getBooks,
        queryKey: ["books"]
    });
    return (
        <>
            <Navbar />
            <div className="AdminBookPage">
                <h3 className="PageTitle">Available Books</h3>
                <div className="BookList">
                    <table className="bookTable">
                        <tbody>
                            {bookData?.map((book) => { return (<AdminbooksRow key={book.id} book={book} />) })}
                        </tbody>
                    </table>
                </div>
                <div className="NewButtonCont">
                    <button type="submit" className="NewButton" >Add new books</button>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default AdminBooks;