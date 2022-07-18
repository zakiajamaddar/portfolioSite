import React from "react";
import { useParams } from "react-router-dom";

const PortfolioItemPage = (props) => {
  console.log(props)
  const { id } = useParams()
  
  return ( 
    <div>
      <h1>A thing I have done! {id}</h1>
      <p>This page is for the item with the id {id} </p>
      <p>Let's have fun!!!</p>
    </div>
  )
};

export default PortfolioItemPage;
