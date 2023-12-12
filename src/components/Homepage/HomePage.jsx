import Navbar from "../NavAndFooter/Navbar";
import Fotterr from "../../components/NavAndFooter/Footer.jsx";
import './HomePage.css';
import React from "react";
import Bookdisc from '../../components/assets/disbook.jpg'
import DiscountImg from '../../components/assets/DiscountPartImg.jpg'
import Fiximgslide from '../../components/assets/slideimghome.png';
import CatePic from '../../components/assets/horrorCat.png';
import authourback from '../../components/assets/Frame 21.png';
import testbook from '../../components/assets/testbook.jpg';
import authourpic from '../../components/assets/colleen-hoover1-removebg-preview 1.png';
import { useState } from 'react';
import Book from "../Home/Book.jsx";
import Genre from"../AdminGenre_save/Genre_txt.jsx";
import GenreCard from "../Homepage/GenreCard.jsx";
import Cover from "../assets/book_cover_test.png"



const HomePage = () => {
    const [books, setBooks] = useState([
        { book_cover: Cover, title: 'Moghamrat Anso sda sad dsadsa da ssa dsa ds', author: 'Anso', price: 250, book_id:155 },
        { book_cover: Cover, title: 'Moghamrat Anso', author: 'Anso', price: 250, book_id:12 },
        { book_cover: Cover, title: 'Moghamrat Anso', author: 'Anso', price: 250, book_id:13 },
        { book_cover: Cover, title: 'Moghamrat Anso', author: 'Anso', price: 250, book_id:14 },
        { book_cover: Cover, title: 'Moghamrat Anso', author: 'Anso', price: 250, book_id:15 }
      ]);

      const[genre,setgenre] = useState([
        {genre:'romance' }, {genre:'mystery' },   {genre:'Informational' },  {genre:'fiction' },  {genre:'language' }, 
        {genre:'classic' },  {genre:'horror' },  {genre:'psychology' },  {genre:'fantasy' },
      ]);

      const[genrepics,setgenrespic]=useState([
        {picc:CatePic,genrename:"horror"},{picc:CatePic,genrename:"horror"},{picc:CatePic,genrename:"horror"},{picc:CatePic,genrename:"horror"},
        {picc:CatePic,genrename:"horror"},{picc:CatePic,genrename:"horror"},{picc:CatePic,genrename:"horror"},{picc:CatePic,genrename:"horror"}
      ])
      
return(
   
    <div className="HomePageStylee">
        <div>
            {<Navbar/>}
        </div>
        
        <div className="allslideimg">
            <img src={Fiximgslide} alt="slideimg" className="firstslideimg" />
            <div className="firstslideimgstyle">
             <h3 className="slideimgtitle">CHECK THE NEWEST BOOKS</h3>
            </div>
        </div>

        <div>
            <h3 className="headinggs">Trending Books</h3>
            <h3 className="seeall">See All </h3>
        </div>
     

        <div className="booksrowHome"> 
                <div className='bookk'> <Book book={books[0]}/> </div> 
                <div className='bookk'> <Book book={books[1]}/> </div> 
                <div className='bookk'> <Book book={books[2]}/> </div> 
                <div className='bookk'> <Book book={books[3]}/> </div> 
                <div className='bookk'> <Book book={books[4]}/> </div> 
                
        </div>

        <div>
            <h3 className="headinggs">For You</h3>
            <h3 className="seeall">See All </h3>
        </div>
        <div className="booksrowHome"> 
                <div className='bookk'> <Book book={books[0]}/> </div> 
                <div className='bookk'> <Book book={books[1]}/> </div> 
                <div className='bookk'> <Book book={books[2]}/> </div> 
                <div className='bookk'> <Book book={books[3]}/> </div> 
                <div className='bookk'> <Book book={books[4]}/> </div> 
        </div>

        <div className="authorslid">
            <img src={authourback} alt="slideimg" className="authorslideback" />
            <div className="authorlayer">
                <h3 className="authornamee">Colleen Hover</h3>  
                <h3 className="author_detailsslid">American author who primarily writes novels in the romance and young adult fiction genres. She is best known for her 2016 romance novel It Ends with Us.</h3> 
                 <img src={authourpic} alt="slideimg" className="authorrPic" /> 
            </div>
        </div>
        
        <div className="genresPart">
        <div>
            <h3 className="headinggs">Genres</h3>
            <h3 className="seeall">See All </h3>
        </div>
        </div>

        <div className="CategoryRow"> 
                <div className='ca'> <GenreCard picc={genrepics[0]}/> </div> 
                <div className='ca'> <GenreCard picc={genrepics[1]}/> </div> 
                <div className='ca'> <GenreCard picc={genrepics[2]}/> </div> 
                <div className='ca'> <GenreCard picc={genrepics[3]}/> </div> 
                <div className='ca'> <GenreCard picc={genrepics[0]}/> </div> 
                <div className='ca'> <GenreCard picc={genrepics[0]}/> </div> 
                <div className='ca'> <GenreCard picc={genrepics[0]}/> </div> 
                <div className='ca'> <GenreCard picc={genrepics[0]}/> </div> 
        </div>

        <div className="DiscountPart">
            <img src={DiscountImg} alt="" className="discount_img" />
            <div className="imgbookdisRow1">
                <img className="imgdis"src={Bookdisc}/>
                <img className="imgdis"src={Bookdisc}/>
                <img className="imgdis"src={Bookdisc}/>
            </div>
            <div className="imgbookdisRow2">
                <img className="imgdis"src={Bookdisc}/>
                <img className="imgdis"src={Bookdisc}/>
            </div>
        </div>

        <div className="childrenPart">
        <div>
            <h3 className="childrenheading">Children's</h3>
            <h3 className="seeall">See All </h3>
        </div>
        <div className="childBooks">
                <div className='bookk'> <Book book={books[0]}/> </div> 
                <div className='bookk'> <Book book={books[1]}/> </div> 
        </div>
        <div className="childBooks">
                <div className='bookk'> <Book book={books[0]}/> </div> 
                <div className='bookk'> <Book book={books[1]}/> </div> 
        </div>
        <div className="childBooks">
                <div className='bookk'> <Book book={books[0]}/> </div> 
                <div className='bookk'> <Book book={books[1]}/> </div> 
        </div>
        
        </div>
        
        <div className="ffot">
        <Fotterr/>
        </div>
    </div>


);
}
export default HomePage