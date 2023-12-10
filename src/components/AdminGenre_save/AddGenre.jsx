import React from "react";
import './AddGenre.css';
import {Link} from 'react-router-dom'
import Navbaradmin from "../../components/NavAndFooter/NavAdmin"
// import Fotterr from "../../components/NavAndFooter/Footer.jsx"
import Genre_txt from './Genre_txt.jsx';
import { register } from '../controller/UserController';import { useEffect, useState } from 'react';
import Footer from "../NavAndFooter/Footer.jsx";
const AddGenre = () => {

    const[category,setCategory] = useState([
        {title:'Romance'},{title:'Informational'},{title:'Fiction'},{title:'Mystery'},{title:'Psychology'}
    ])

    const[addcat,setCategorynew]=useState("")
    const onAddCategory = event => {
        setCategory(event.target.value);
    };
    

    return (
    <div className="Addmain">
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
       <div className="AdminNav"> <Navbaradmin/> </div>
       
       <div>
        <h3 className="Addheading">
            Available Categories:
        </h3>
       </div>
      
       <div className="Addfilled-box">
            <div className="Addrow">
                <div className="Addcategoryitem"><Genre_txt genre={category[0]}/></div>
                <div className="Addcategoryitem"><Genre_txt genre={category[1]}/></div>
                <div className="Addcategoryitem"><Genre_txt genre={category[2]}/></div>
                <div className="Addcategoryitem"><Genre_txt genre={category[3]}/></div>
                <div className="Addcategoryitem"><Genre_txt genre={category[4]}/></div>
            </div>
               
                <hr className="Addline"/>
                
            <div className="Addrow">
                <div className="Addcategoryitem"><Genre_txt genre={category[0]}/></div>
                <div className="Addcategoryitem"><Genre_txt genre={category[1]}/></div>
                <div className="Addcategoryitem"><Genre_txt genre={category[2]}/></div>
                <div className="Addcategoryitem"><Genre_txt genre={category[3]}/></div>
                <div className="Addcategoryitem"><Genre_txt genre={category[4]}/></div>
            </div>
                
                <hr className="Addline"/>
        
            <div className="Addrow">
                <div className="Addcategoryitem"><Genre_txt genre={category[0]}/></div>
                <div className="Addcategoryitem"><Genre_txt genre={category[1]}/></div>
                <div className="Addcategoryitem"><Genre_txt genre={category[2]}/></div>
                <div className="Addcategoryitem"><Genre_txt genre={category[3]}/></div>
                <div className="Addcategoryitem"><Genre_txt genre={category[4]}/></div>
            </div>
            <hr className="Addline"/>

            <div className="addCatcontainer-save">

                    <input className="inputCat" type="text" placeholder="Add New Category" value={addcat} onChange={onAddCategory}/>

                    {/* <input input className="inputCat" type="text" placeholder ="Add New Category"/> */}
            </div>
        </div>
        
        <div className="AddBox">
             <div className="Addrectangle"></div>
        </div>

        <div className="Addbuttonsactions">
            <button type="submit" className="Addsavebutton" >Save</button> 
            <button type="submit" className="Addremovebutton" >Remove</button> 
        </div>  

        <div className="AdminNav"> <Footer/></div>


    </div>
    )
}
export default AddGenre