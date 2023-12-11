import './userorder.css';
import { useState } from 'react';
import OrderItem from '../../components/UserOrders/OrderItem.jsx'
// import Deliverydetails from './Deliverydetails ';
import arrow from '../../components/assets/Vector 2.png';


const UsersOrders  = () => {
  
  
    const [items, setitems] = useState([
      { book_name:'Twisted Hate ', quantity:3, price:750 } ,
      { book_name:'King Of Wrath', quantity:1, price: 250},
      { book_name:'It Ends With Us', quantity:1, price: 500}
      ]);

      // const [delivery, setdelvirydata] = useState([
      //   {order_id:,shipping:'', Address:'', Status:''} , 

      // ]);

return(
    <div>
      
      <div className="orrder">

          <label className="ordernum"> <h3><u>order ID 200</u></h3> 
      
          <button  type="button"><img className='arow' src= {arrow}/> </button>
          
         
          </label>

        <div className='orrderdetails'>
            <span className='totalitems'>total items 3</span>
      
          <div className='orderitemsandDelivery'>

            <div className='item'> <OrderItem items={items[0]}/> </div> 
            <div className='item'> <OrderItem items={items[1]}/> </div>
            <div className='item'> <OrderItem items={items[2]}/> </div> 
            
            <div class="vline"></div>
          
            <div className='Deliveryinfo'>

                <div className='delinfo'> <span className='mark' > Delivery shipping: </span> <span className='mark2'> 50 EGY </span> <br /> </div>  
                <div className='delinfo'> <span className='mark' > Address: </span> <span className='mark2'> Cairo-Naser city </span> <br /> </div> 
                <div className='delinfoo'> <span className='mark' > Status: </span> <span className='mark2'> pending </span> </div> 
        
            </div>

            
          </div>
          <button className='Acceptbutton' type="button"><span> Accept </span></button> 
          <button className='Rejectbutton' type="button"><span > Reject </span></button> 
          
        </div>

      </div>


    </div>
    
    );
}
export default UsersOrders;