import './AdminBooks.css';
import('../../interfaces/Books')
const AdminbooksRow = ({book}) =>{


    return(
                    <tr>
                        <th className="tableData">
                            #{book.id}
                        </th>
                        <th className="tableData">
                            {book.book_name}
                        </th>
                        <th className="tableData">
                          Quantity:{book.quantity_in_stock}
                        </th>
                        <th className="tableData">
                           {book.genre} 
                        </th>
                    </tr>
    )
}

export default AdminbooksRow