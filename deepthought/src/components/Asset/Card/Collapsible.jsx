import React, { useEffect, useRef } from 'react'
import './Collapsible.css'
function Collapsible() {
   
         let  coll = document.getElementsByClassName("collapsible");
         
         let Inref=useRef()

     
        let handleFunc=()=>{
   
            // Inref.current.addEventListener("click", function () {
                Inref.current.classList.toggle("active");
          
            var content = Inref.current.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } 
            else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        // }); 
        }
      
  
    

   
    return (
        <div>

            <button className="collapsible" onClick={handleFunc} ref={Inref}>Open Collapsible</button>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>




        </div>
    )
}

export default Collapsible