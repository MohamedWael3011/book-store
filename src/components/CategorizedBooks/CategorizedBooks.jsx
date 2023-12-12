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
import { getGenres } from '../../controller/GenreController';
import { useQuery } from 'react-query';

const CategorizedBooks = () => {

    const {data:genreData} = useQuery({
        queryFn: getGenres,
        queryKey: ["genres"]
    });

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

              
               {genreData?.map((genre) =>(
                <div key={genre.id} className='genrename'> 
                <label className="genreee"> {genre.name} <input className='checkaya' type="checkbox" name='genree'/> </label> 
                </div>

               ))}

        </div> 



        </div>



      
        <div className='displaybooks'>
            <div className="booksrow"> 
            


            </div>

                <div className="booksrow"> 


            </div>
            <div className="booksrow"> 
                


            </div>
            <div className="booksrow"> 
                


            </div>
            <div className="booksrow"> 


            </div>
        
        </div>
           
        <Footer/>
        
    </div>

);

}
export default CategorizedBooks;