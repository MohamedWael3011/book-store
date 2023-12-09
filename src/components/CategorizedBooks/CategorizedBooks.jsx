import './CategorizedBooks.css';
import Navbar from "../NavAndFooter/Navbar";
import Book from "../Home/Book";
import { useState } from 'react';
import testbook from '../../components/assets/testbook.jpg';
import Footer from '../NavAndFooter/Footer';
import BackButton from '../BackButton/BackButton';
import Genre from './Genre';
 import Recymen from '../../components/assets/Rectangle33.png';
import Recshmal from '../../components/assets/Rectangle34.png';


const CategorizedBooks = () => {
    const [books, setBooks] = useState([
        { book_cover: testbook, title: 'Moghamrat Anso', author: 'Anso', price: '250' },
        { book_cover: testbook, title: 'Moghamrat Anso', author: 'Anso', price: '250' },
        { book_cover: testbook, title: 'Moghamrat Maryam', author: 'Anso', price: '250' },
        { book_cover: testbook, title: 'Moghamrat Maryam', author: 'Anso', price: '250' }
      ]);

      const[genre,setgenre] = useState([
        {genre:'romance' }, {genre:'mystery' },   {genre:'Informational' },  {genre:'fiction' },  {genre:'language' }, 
        {genre:'classic' },  {genre:'horror' },  {genre:'psychology' },  {genre:'fantasy' },
      ])


return(
    <div className="page">

             <Navbar/>
             <div className='BackButtonn'><BackButton/></div>


            <div className='recymen'> <img src={Recymen}/> </div>
            <div className='recshmal'> <img src={Recshmal}/> </div>

          
        <div className='genrelist'>
        <div className='ay7aga'>
        
             <h3 className='listname'>Genre</h3>
             <hr className='line'/>

              
               
                <div className='genrename'> <label className="genreee"> <Genre genre={genre[0]}/> <input className='checkaya' type="checkbox" name='genree'/> </label>  </div>
                <div className='genrename'> <label className="genreee"> <Genre genre={genre[1]}/> <input className='checkaya' type="checkbox" name='genree'/> </label>  </div>
                <div className='genrename'> <label className="genreee"> <Genre genre={genre[2]}/> <input className='checkaya' type="checkbox" name='genree'/> </label>  </div>
                <div className='genrename'> <label className="genreee"> <Genre genre={genre[3]}/> <input className='checkaya' type="checkbox" name='genree'/> </label>  </div>
                <div className='genrename'> <label className="genreee"> <Genre genre={genre[4]}/> <input className='checkaya' type="checkbox" name='genree'/> </label>  </div>
                <div className='genrename'> <label className="genreee"> <Genre genre={genre[5]}/> <input className='checkaya' type="checkbox" name='genree'/> </label>  </div>
                <div className='genrename'> <label className="genreee"> <Genre genre={genre[6]}/> <input className='checkaya' type="checkbox" name='genree'/> </label>  </div>
                <div className='genrename'> <label className="genreee"> <Genre genre={genre[7]}/> <input className='checkaya' type="checkbox" name='genree'/> </label>  </div>
                <div className='genrename'> <label className="genreee"> <Genre genre={genre[8]}/> <input className='checkaya' type="checkbox" name='genree'/> </label>  </div> 

        </div> 



        </div>



      
        <div className='displaybooks'>
            <div className="booksrow"> 
            
                <div className='book'> <Book book={books[0]}/> </div> 
                <div className='book'> <Book book={books[1]}/> </div> 
                <div className='book'> <Book book={books[2]}/> </div> 
                <div className='book'> <Book book={books[3]}/> </div> 

            </div>

                <div className="booksrow"> 
                <div className='book'> <Book book={books[0]}/> </div> 
                <div className='book'> <Book book={books[1]}/> </div> 
                <div className='book'> <Book book={books[2]}/> </div> 
                <div className='book'> <Book book={books[3]}/> </div> 

            </div>
            <div className="booksrow"> 
                
                <div className='book'> <Book book={books[0]}/> </div> 
                <div className='book'> <Book book={books[1]}/> </div> 
                <div className='book'> <Book book={books[2]}/> </div> 
                <div className='book'> <Book book={books[3]}/> </div> 

            </div>
            <div className="booksrow"> 
                
                <div className='book'> <Book book={books[0]}/> </div> 
                <div className='book'> <Book book={books[1]}/> </div> 
                <div className='book'> <Book book={books[2]}/> </div> 
                <div className='book'> <Book book={books[3]}/> </div> 

            </div>
            <div className="booksrow"> 
                <div className='book'> <Book book={books[0]}/> </div> 
                <div className='book'> <Book book={books[1]}/> </div> 
                <div className='book'> <Book book={books[2]}/> </div> 
                <div className='book'> <Book book={books[3]}/> </div> 

            </div>
        
        </div>
           
        <Footer/>
        
    </div>
);

}
export default CategorizedBooks;