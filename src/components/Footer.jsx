import React from 'react'
import '../styles/footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="popular">
                <h4>POPULAR CATEGORIES</h4>
                <p>Cars</p>
                <p>Flats for rent</p>
                <p>Mobile Phones</p>
                <p>Jobs</p>
            </div>
            <div className="trending">
                <h4>TRENDING SEARCHES</h4>
                <p>Bikes </p>
                <p>Watches</p>
                <p>Books</p>
                <p>Dogs</p>
            </div>
            <div className="about">
                <h4>ABOUT US</h4>
                <p>About Dubizzle Group</p>
                <p>OLX Blog</p>
                <p>Contact Us</p>
                <p>OLX for Businesses</p>
            </div>
            <div className="olx">
                <h4>OLX</h4>
                <p>Help</p>
                <p>Site Map</p>
                <p>Terms of use</p>
                <p>Privacy Policy</p>
            </div>
            <div className="socialIcons">
                <i class="fa-brands fa-twitter socialIcon"></i>
                <i class="fa-brands fa-facebook-f socialIcon"></i>
                <i class="fa-brands fa-instagram socialIcon"></i>
                <i class="fa-solid fa-play socialIcon"></i>
            </div>
        </div>
    )
}
