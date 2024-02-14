import React, { useState } from "react";
import "./Promos.css";
import Card from "./Card";
import Cardch from "./Card";

const Promos = ({data}) => {

  const [promos, setpromos] = useState([
    {
      id:1,
      name: "Adidas superstar",
      oldprice: "250",
      newprice: "180",
      taille: "43",
      img: "https://www.mimanerashop.com/images/adidas-superstar-shiny-leo-1.1200x1200.14325.webp",
    },
    {
      id:2,
      name: "Nike airwinflo",
      oldprice: "260",
      newprice: "200",
      taille: "41",
      img: "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/00/4415/1.jpg?6668",
    },
    {
      id:3,
      name: "Nike airforce",
      oldprice: "300",
      newprice: "220",
      taille: "40",
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/chaussure-air-force-1-07-pour-GjGXSP.png",
    },
    {
      id:4,
      name: "Puma metric",
      oldprice: "160",
      newprice: "140",
      taille: "44",
      img: "https://www.tuttosport.com.tn/38783-large_default/puma-chaussures-rs-metric.jpg",
    },
  ]);
  return(
    <>
    <h1>Top Promos </h1>
   <div className="content">
{promos.filter((el)=>el.name.toLowerCase().includes(data.toLowerCase())).map((el)=><Cardch data={el}/>)}
   </div>
   
</>
   );
};

export default Promos;
