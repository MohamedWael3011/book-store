import Navbar from "../NavAndFooter/Navbar";
import Footer from '../NavAndFooter/Footer';
import Trash from "../assets/Trash.png";
import './AdminBooks.css';

const AdminBooks = () => {
   
return(
    <div className="AdminBookPage">

             <Navbar/>
             <h3 className="PageTitle">Available Books</h3>

             <div className="BookList">
                <table className="bookTable">
                    <tr>
                        <th className="tableHeading">
                            ID
                        </th>
                        <th className="tableHeading">
                            Name
                        </th>
                        <th className="tableHeading">
                            Stock
                        </th>
                        <th className="tableHeading">
                            Genre
                        </th>

                    </tr>

                    <tr>
                        <th className="tableData">
                            #800
                        </th>
                        <th className="tableData">
                            ItEndsWithUs
                        </th>
                        <th className="tableData">
                          Quantity:50
                        </th>
                        <th className="tableData">
                           Romance 
                        </th>

                    </tr>

                    <tr>
                        <th className="tableData">
                            #800
                        </th>
                        <th className="tableData">
                            ItEndsWithUs
                        </th>
                        <th className="tableData">
                          Quantity:50
                        </th>
                        <th className="tableData">
                           Romance 
                        </th>

                    </tr>
                    <tr>
                        <th className="tableData">
                            #800
                        </th>
                        <th className="tableData">
                            ItEndsWithUs
                        </th>
                        <th className="tableData">
                          Quantity:50
                        </th>
                        <th className="tableData">
                           Romance 
                        </th>

                    </tr>
                    <tr>
                        <th className="tableData">
                            #800
                        </th>
                        <th className="tableData">
                            ItEndsWithUs
                        </th>
                        <th className="tableData">
                          Quantity:50
                        </th>
                        <th className="tableData">
                           Romance 
                        </th>

                    </tr>
                    <tr>
                        <th className="tableData">
                            #800
                        </th>
                        <th className="tableData">
                            ItEndsWithUs
                        </th>
                        <th className="tableData">
                          Quantity:50
                        </th>
                        <th className="tableData">
                           Romance 
                        </th>

                    </tr>
                    <tr>
                        <th className="tableData">
                            #800
                        </th>
                        <th className="tableData">
                            ItEndsWithUs
                        </th>
                        <th className="tableData">
                          Quantity:50
                        </th>
                        <th className="tableData">
                           Romance 
                        </th>

                    </tr>
                    <tr>
                        <th className="tableData">
                            #800
                        </th>
                        <th className="tableData">
                            ItEndsWithUs
                        </th>
                        <th className="tableData">
                          Quantity:50
                        </th>
                        <th className="tableData">
                           Romance 
                        </th>

                    </tr>
                    <tr>
                        <th className="tableData">
                            #800
                        </th>
                        <th className="tableData">
                            ItEndsWithUs
                        </th>
                        <th className="tableData">
                          Quantity:50
                        </th>
                        <th className="tableData">
                           Romance 
                        </th>

                    </tr>
                    <tr>
                        <th className="tableData">
                            #800
                        </th>
                        <th className="tableData">
                            ItEndsWithUs
                        </th>
                        <th className="tableData">
                          Quantity:50
                        </th>
                        <th className="tableData">
                           Romance 
                        </th>

                    </tr>
                    <tr>
                        <th className="tableData">
                            #800
                        </th>
                        <th className="tableData">
                            ItEndsWithUs
                        </th>
                        <th className="tableData">
                          Quantity:50
                        </th>
                        <th className="tableData">
                          Mystery & thriller
                        </th>

                    </tr>

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