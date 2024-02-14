import React, { useState } from "react";
import CardHomme from "./CardHomme";


const Homme = () => {
  const [product, setproduct] = useState([
    {
      name: "Nike air force",
      descrip: "39/40/42/44",
      price: "240dt",
      photo:
        "https://i8.amplience.net/t/jpl/jdfr_product_list?plu=jd_680691_al&qlt=85&exclusive=1&qlt=92&wid=320&hei=320&v=1&fmt=auto",
    },
    {
      name: "Nike Air Force 1",
      descrip: "41/42/43/44",
      price: "200dt",
      photo:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6ef8f54a-1dda-49b8-9097-34c9c3dc766e/chaussure-court-vision-low-next-nature-pour-X4wrxh.png",
    },
    {
      name: "Nike FR",
      descrip: "44/45",
      price: "180dt",
      photo:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e61522b0-9444-4b96-90dd-30247cae76bc/chaussure-air-max-tw-pour-2fb6jT.png",
    },
    {
      name: "Adidas Stan smith",
      descrip: "39/40/41/42",
      price: "190dt",
      photo:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e8ad905b6b446b896a3ac1e01049147_9366/chaussure-stan-smith.jpg",
    },
    {
      name: "Adidas N90",
      descrip: "42/43",
      price: " 210dt",
      photo:
        "https://images.asos-media.com/products/adidas-originals-ny-90-baskets-blanc/21267593-1-white?$n_640w$&wid=513&fit=constrain",
    },
    {
      name: "Puma Lift",
      descrip: "41/42/43",
      price: " 300dt",
      photo:
        "https://cityfashion.ma/15030-home_default/carina-lift-puma.jpg",
    },

    
  ]);
  return (
    <div>
      <h1 className="h">Homme</h1>
      <h2 className="tag">
        Pour vous messieurs nous créons chaque année des tendances afin de vous
        présenter une collection d’espadrilles chics et décontractées pour
        parfaire votre dressing. Construisez votre style en commençant par le
        bas en vous laissant guider par nos différents modèles, n’hésitez plus
        est optez pour nos espadrilles !
      </h2>
      <div className="box">
{product.map((el)=><CardHomme data={el}/>)}
      </div>    
    </div>

  );
};

export default Homme;
  
