import React from "react";
import './AddGenre.css';
import {Link} from 'react-router-dom'
import Navbaradmin from "../../components/NavAndFooter/NavAdmin"
import Genre_txt from './Genre_txt.jsx';
import { register } from '../controller/UserController';import { useEffect, useState } from 'react';
const AddGenre = () => {
    
    const[category,setCategory] = useState([
        {title:'Romance'},{title:'Informational'},{title:'Fiction'},{title:'Mystery'},{title:'Psychology'}
    ])

    const[addcat,setCategorynew]=useState("")
    const onAddCategory = event => {
        setCategory(event.target.value);
    };
    

    return (
    <div className="main">
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
       <div className="AdminNav"> <Navbaradmin/> </div>
       
       <div>
        <h3 className="heading">
            Available Categories:
        </h3>
       </div>
      
       <div className="filled-box">
            <div className="row">
                <div className="categoryitem"><Genre_txt genre={category[0]}/></div>
                <div className="categoryitem"><Genre_txt genre={category[1]}/></div>
                <div className="categoryitem"><Genre_txt genre={category[2]}/></div>
                <div className="categoryitem"><Genre_txt genre={category[3]}/></div>
                <div className="categoryitem"><Genre_txt genre={category[4]}/></div>
            </div>
               
                <hr className="line"/>
                
            <div className="row">
                <div className="categoryitem"><Genre_txt genre={category[0]}/></div>
                <div className="categoryitem"><Genre_txt genre={category[1]}/></div>
                <div className="categoryitem"><Genre_txt genre={category[2]}/></div>
                <div className="categoryitem"><Genre_txt genre={category[3]}/></div>
                <div className="categoryitem"><Genre_txt genre={category[4]}/></div>
            </div>
                
                <hr className="line"/>
        
            <div className="row">
                <div className="categoryitem"><Genre_txt genre={category[0]}/></div>
                <div className="categoryitem"><Genre_txt genre={category[1]}/></div>
                <div className="categoryitem"><Genre_txt genre={category[2]}/></div>
                <div className="categoryitem"><Genre_txt genre={category[3]}/></div>
                <div className="categoryitem"><Genre_txt genre={category[4]}/></div>
            </div>
            <hr className="line"/>

            <div className="addCatcontainer">

                    <input className="inputCat" type="text" placeholder="Add New Category" value={addcat} onChange={onAddCategory}/>

                    {/* <input input className="inputCat" type="text" placeholder ="Add New Category"/> */}
            </div>
        </div>
        
        <div className="Box">
             <div className="rectangle"></div>
        </div>

        <div className="buttonsactions">
            <button type="submit" className="savebutton" >Save</button> 
            <button type="submit" className="removebutton" >Remove</button> 
        </div>  

        <div className="AdminNav"> <Navbaradmin/></div>

    </div>
    )
}
export default AddGenre