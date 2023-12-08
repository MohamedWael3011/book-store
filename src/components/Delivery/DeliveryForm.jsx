import React from "react";
import './delivery.css';

const DeliveryForm = () => {
  const [deliveryData, setDeliveryData] = React.useState({
    address: "",
    city: "",
    buildingno: "",
    phoneno: "",
    comment: ""
  });

  console.log(deliveryData);

  function handleChange(event) {
    const { name, value } = event.target;
    setDeliveryData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
        deliveryData.address.trim() !== "" &&
        deliveryData.buildingno.trim() !== "" &&   deliveryData.city.trim() !== "" &&
        deliveryData.comment.trim() !== "" &&
        deliveryData.phoneno.trim() !== ""
      ) {
        console.log("Successful");
      } else {
        console.log("Data required");
        return;
      }
    }
  
    return (
      <div>
      <div >
        <div className="delform">
        <div className="myform">
          <div>
            <h2 className="cashOnDel">Cash on Delivery</h2>
          </div>
          <div className="form">
          <div className="left-form">
            <input
              type="text"
              placeholder="City"
              onChange={handleChange}
              name="city"
              value={deliveryData.city}
            />
            <input
              type="text"
              placeholder="Phone no."
              onChange={handleChange}
              name="buildingno"
              value={deliveryData.buildingno}
            />
            <input
              type="text"
              placeholder="Building no."
              onChange={handleChange}
              name="phoneno"
              value={deliveryData.phoneno}
            />
          </div>
  
          <div className="right-form">
            <div className="AdrText">
            <input
            type="text"
            placeholder="Address"
            onChange={handleChange}
            name="address"
            value={deliveryData.address}
            required = "required"
          />
        </div>
        <div className="CommentText">
          <input
            type="text"
            placeholder="Comment"
            id="CommentText"
            onChange={handleChange}
            name="comment"
            value={deliveryData.comment}
          />
        </div>
      </div>
      </div>
    </div>
 
    </div>
    <div className="total">
    <div className="leftText">Order amount:</div>
    <div className="leftText">Delivery amount:</div>
    <div className="leftText">Total amount:</div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="904" height="4" viewBox="0 0 904 4" fill="none">
    <path d="M2 2H902" stroke="#9D8B70" strokeWidth="4" strokeLinecap="round"/>
    </svg>
    <div className="btn">
        <button type="submit" className="text-3xl" onClick={handleSubmit}>
          Confirm
        </button>
      </div>

  </div>
  </div>
);
};

export default DeliveryForm;