import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 text-base-content">
            <div>
                <span className="footer-title">Funiro.</span> 
                <a className="link link-hover">Worldwide furniture store since<br></br> 2020. We sell over 1000+ branded<br></br> products on our website</a> 
                <a className="link link-hover">Sawojajar Malang, Indonesia</a> 
                <a className="link link-hover">+6289 456 3455</a> 
                <a className="link link-hover">www.funiro.com</a>
            </div> 
            <div>
                <span className="footer-title">Menu</span> 
                <a className="link link-hover">Products</a> 
                <a className="link link-hover">Rooms</a> 
                <a className="link link-hover">Inspirations</a> 
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Terms & Policy</a>
            </div> 
            <div>
                <span className="footer-title">Account</span> 
                <a className="link link-hover">My Account</a> 
                <a className="link link-hover">Checkout</a> 
                <a className="link link-hover">My Cart</a>
                <a className="link link-hover">My catalog</a>
            </div> 
            <div>
                <span className="footer-title">Stay Connected</span> 
                <a className="link link-hover">Facebook</a> 
                <a className="link link-hover">Instagram</a> 
                <a className="link link-hover">Twitter</a>
            </div> 
            <div>
                <span className="footer-title">Stay Updated</span> 
                <div className="form-control w-80">
                <div className="relative">
                    <input type="text" placeholder="Enter your email" className="input input-bordered w-full pr-16" /> 
                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                </div>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;