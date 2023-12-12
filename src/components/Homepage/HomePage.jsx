import Navbar from "../NavAndFooter/Navbar";
import Fotterr from "../../components/NavAndFooter/Footer.jsx";
import './HomePage.css';
import Bookdisc from '../../components/assets/disbook.jpg'
import DiscountImg from '../../components/assets/DiscountPartImg.jpg'
import Fiximgslide from '../../components/assets/slideimghome.png';
import CatePic from '../../components/assets/horrorCat.png';
import authourpic from '../../components/assets/colleen-hoover1-removebg-preview 1.png';
import { useEffect, useState } from 'react';
import Book from "../Home/Book.jsx";
import GenreCard from "../Homepage/GenreCard.jsx";
import Cover from "../assets/book_cover_test.png"
import {  useQuery } from "react-query";
import { getBooks } from "../../controller/BooksController.ts"
import { getGenres } from "../../controller/GenreController.ts";

const HomePage = () => {

const {data:bookData} = useQuery({
    queryFn: getBooks,
    queryKey: ["books"]
});

const {data:genreData} = useQuery({
    queryFn: getGenres,
    queryKey: ["genres"]
});
      
return(
   
    <div className="HomePageStylee">
        <div>
            {<Navbar/>}
        </div>
        
        <div className="allslideimg flex">
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
            {bookData?.map((book)=>
                { 
                   return (<Book key={book.id} book={book} className='book_cont'/>)}
            )}
                
        </div>

        <div>
            <h3 className="headinggs">For You</h3>
            <h3 className="seeall">See All </h3>
        </div>
        <div className="booksrowHome"> 
        {bookData?.map((book)=>
                { 
                   return (<Book key={book.id} book={book} className='book_cont'/>)}
            )}
        </div>

        <div className="w-full h-full flex authorslid">
            <div className="py-5">
                <h3 className="authornamee">Colleen Hover</h3>  
                <h3 className="author_detailsslid">American author who primarily writes novels in the romance and young adult fiction genres. She is best known for her 2016 romance novel It Ends with Us.</h3> 
            </div>
            <img src={authourpic} alt="image" className="mt-[-150px]" /> 
            </div>

        
        <div className="genresPart">
            <h3 className="headinggs">Genres</h3>
            <h3 className="seeall">See All</h3>
            {genreData?.map((genre)=>
                { 
                   return (<GenreCard key={genre.id} genre={genre} />)}
            )}
        </div>

        <div className="CategoryRow"> 

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
            <h3 className="childrenheading">{" Childrens'"}</h3>
            <h3 className="seeall">See All </h3>
        </div>
        <div className="childBooks">
        </div>
        <div className="childBooks">
        </div>
        <div className="childBooks">
        </div>
        
        </div>
        
        <div className="ffot">
        <Fotterr/>
        </div>
    </div>


);
}
export default HomePage