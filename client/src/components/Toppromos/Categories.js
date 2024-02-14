import React, { useState } from "react";
import Cardcat from "./Cardcat";

const Categori = () => {
    const [Categories, setcategories] = useState([
      {
        name: "Pour Homme",
        img: "https://img.freepik.com/photos-gratuite/baskets-cheville-pour-hommes-shoot-vetements-style-urbain-blanc_53876-119733.jpg?w=740&t=st=1702377288~exp=1702377888~hmac=d23937d0f424d1bd676beb4c63e6a85b3b3ed33e6ed1d30fab76f1a05d4af6b0",
      },
      {
        name: "Pour Femme",
        img: "https://img.freepik.com/photos-premium/tenue-urbaine-mode-style-vetements-decontracte-au-quotidien-jambes-feminines-jeans-baskets-blanches_106885-615.jpg?w=360",
      },
      {
        name: "offre spécial",
        img: "https://img.freepik.com/photos-gratuite/fille-cool-plein-coup-posant_23-2149067064.jpg?w=360&t=st=1702378690~exp=1702379290~hmac=cb3c20ea7527adf1e641499b004570c68c17c4366e19d5efebcabd084de42745",
      },
    ]);
  return (
    
    <div className="text-deco">
      {/* Elyesshoesshop : CRÉATEUR D'ESPADRILLES Aux origines de la marque il y a
      une magnifique collection d'espadrilles pour hommes et femmes. Totalement
      revisitée par les créateurs de la marque, l'espadrille devient la
      chaussure indispensable à tous les hommes et femmes qui souhaitent adopter
      un look moderne, chic et décontracté. */}
      <div className="box-categ">
{Categories.map((el)=><Cardcat  data={el}/>)}
      </div>
    </div>
  )
  }

export default Categori;
