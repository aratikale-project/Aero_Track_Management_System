// import React from 'react';
// import {Navbar,Container} from "react-bootstrap"
// import { Link } from 'react-router-dom'
// import whatsapplogo from "../images/whatsapplogo.png"
// import instalogo from "../images/intsalogo.png"
// import facebooklogo from "../images/facebooklogo.png"

// /**
//  *
//  * This component renders Footer 
//  */
// function Footer() {
//     return (
//         <div style={footerStyle.pos}>
           



//             <Navbar bg="dark" variant="dark">
           
            
        
//     <Container>
//       <Navbar.Brand className="m-auto">
        
//        Copyright © All rights reserved Airline Ticket Reservations, 2022.
       
     
//       </Navbar.Brand>
//       <div  className="col md-3">
    
//     <a href="facebook.com"  class="ri-instagram-line icon" >
//       <img src={whatsapplogo} alt="image" height={30 } width={30} />
//     </a> 
//     <a href="www.google.com"  class="ri-facebook-line icon">
//       <img src={instalogo} alt="image"  height={30} width={30} />
//     </a>  &nbsp;
//     <a href="www.google.com" class="ri-whatsapp-line icon">
//       <img src={facebooklogo} alt="image" height={23} width={23} />
//     </a>  
//   </div> 
     
//     </Container>
    
//   </Navbar>
  
  
//         </div>
        
//     );
// };

// let footerStyle = {
//     pos : {
//         position : "relative"
//     },
//     bg : {
//         background : "midnightBlue"
//     }
// }

// export default Footer;


import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import whatsapplogo from '../images/whatsapplogo.png';
import instalogo from '../images/intsalogo.png';
import facebooklogo from '../images/facebooklogo.png';

/**
 * This component renders Footer
 */
function Footer() {
  return (
    <div style={footerStyle.pos}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="m-auto">
            Copyright © All rights reserved Airline Ticket Reservations, 2022.
          </Navbar.Brand>
          <div className="col md-3">
            <a href="https://www.facebook.com" className="ri-instagram-line icon">
              <img src={whatsapplogo} alt="whatsapp" height={30} width={30} />
            </a>
            <a href="https://www.google.com" className="ri-facebook-line icon">
              <img src={instalogo} alt="instagram" height={30} width={30} />
            </a>
            &nbsp;
            <a href="https://www.google.com" className="ri-whatsapp-line icon">
              <img src={facebooklogo} alt="facebook" height={23} width={23} />
            </a>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

const footerStyle = {
  pos: {
    position: 'relative',
  },
  bg: {
    background: 'midnightBlue',
  },
};

export default Footer;
