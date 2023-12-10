import React from "react";
import './Statistics.css';
import {Link} from 'react-router-dom'
import Navbaradmin from "../../components/NavAndFooter/NavAdmin"
// import Genre_txt from './Genre_txt.jsx';
import { register } from '../controller/UserController';
import { useEffect, useState } from 'react';
import Footer from "../NavAndFooter/Footer.jsx";
import Book from "../Home/Book.jsx";
const Statistics = (props) => {
    
    const {bookcover,title,id}=props.books;

    const[addcat,setCategorynew]=useState("")
    const onAddCategory = event => {
        setCategory(event.target.value);
    };

    // const Book = (props) => {
    //     const { book_cover, title, author, price } = props.book;
    

    return (
    <div className="Statsmain">
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
       <div className="AdminNav"> <Navbaradmin/> </div>
       
       <div> 
        <h3 className="Statsheading"> Statistics:
         </h3> 
         </div>

         <div className="StatsBox">
            <div className="Shapeparts">
            <div className="Shape1"></div>
            <div className="ChartText"> 60% <br/> Language </div>

            </div>

            <div className="Shapeparts">
            <div className="Shape2"></div>
            <div className="ChartText"> 80% <br/> Horror </div>

            </div>

            <div className="Shapeparts">
            <div className="Shape3"></div>
            <div className="ChartText"> 40% <br/> Psychology </div>

            </div>

            <div className="Shapeparts">
            <div className="Shape4"></div>
            <div className="ChartText"> 70% <br/> Mystery </div>

            </div>

            <div className="Shapeparts">
            <div className="Shape5"></div>
            <div className="ChartText"> 90% <br/> Romance </div>

            </div>

            <div className="Shapeparts">
            <div className="Shape6"></div>
            <div className="ChartText"> 20% <br/> Classic </div>

            </div>

            <div className="Shapeparts">
            <div className="Shape7"></div>
            <div className="ChartText"> 70% <br/> Fantasy </div>

            </div>
            
          
         </div>
 
  
       <div className="Performancebox">
        
            <h4 className="TitleText">
                Performance
            </h4>

            <div className="Parts">
            <div className="percentage"> +24% </div>
            <p className="text">Orders Placed By Customers</p> 
            </div>

            <div className="Parts">
            <div className="percentage"> 2% </div>
            <p className="text">Refund for orders that don't reach the customer</p> 
            </div>
           
            <div className="Parts">
            <div className="percentage"> 98% </div>
            <p className="text">Completed Orders</p> 
            </div>
            
        </div>

        <div className="TopBooksBox">
            <div className="TitleText">Top Books</div>
            <div className="Books">
            <div className='book_cover' >
            <img src={book_cover} className='book_cover_img'/>
            </div>
            </div>

        </div>

        <div className="Footer"> <Footer/></div>
      
        
    

        

       

    </div>
    )
}
export default Statistics