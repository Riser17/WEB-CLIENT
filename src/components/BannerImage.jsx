import React from 'react'
import '../components/ContactUsImage/ContactUsImage.css'
import imga from '../assets/contact-banner1.jpg'
const BannerImage = (props) =>{
    const myStyle={
        backgroundImage: `url(.${imga})`,
        backgroundPosition: 'center',
        backgroundRepeat:"no-repeat"
    };
    return(
        <div class="container1" style={myStyle}>
                    <div className="centered">{props.text}</div>
                   
        </div>
    )
}


export default BannerImage