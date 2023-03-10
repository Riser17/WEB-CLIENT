import React from 'react';
import './Banner_image.css';
import banner_img from '../../assets/Banner-image.png'

function Banner_image() {
  return (
    <div className='banner-image1'>
        <img src={banner_img} alt="Banner_Image" className='banner-image' />

    </div>
  )
}

export default Banner_image