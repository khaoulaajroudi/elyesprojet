import React from 'react'

const Footer = () => {
  return (
    
    <div   className='foot' >
        <div  className='boxss' >
       
        <ul  className='contact' >
            <h2> about us</h2>
          
            <li>contacter moi</li> 
            <li>mon compte</li> 
            <li>livraison</li> 

        </ul>
        
      
            <ul  className='apropos' >
                <h2>a propos de Elyesshopshoes</h2>
                <li>entreprise</li>
                <li>newsroom</li>
               
            </ul>
           
        </div>
        
<div  className='insta' >
    <ul  className='social' >
        <li> <img  className='img'  src='https://img.freepik.com/vecteurs-premium/logo-medias-sociaux-bleu_197792-1759.jpg?size=626&ext=jpg&ga=GA1.2.1888570457.1701682274&semt=sph'></img>FACEBOOK </li>
        <li>   <img  className='img'  src='https://img.freepik.com/vecteurs-libre/instagram-icone-nouveau_1057-2227.jpg?w=740&t=st=1707494502~exp=1707495102~hmac=645f870752030f84333c96831030449d1544ecd6081ddf6018ac677efb74baa3'></img>INSTAGRAM </li>
        <li>  <img  className='img'  src='https://img.freepik.com/psd-premium/icone-concept-logo-style-3d-isometrique-twitter-dans-carre-angle-rond-isole_446709-407.jpg?w=740'></img> TWITTER </li>
    </ul>
</div>
    </div>
  )
}

export default Footer