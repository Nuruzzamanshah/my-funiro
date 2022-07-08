import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
       <nav>
         <div className='navbar'>
            <div className='logo'><a href='#'>Funiro.</a></div>
            <div className='nav-links'>
                <ul className='links'>
                    <li>
                        <a href='#'>Products</a>
                        <i class='bx bxs-chevron-down arrow htmlcss-arrow'></i>
                        <ul className='htmlcss-sun-menu sub-menu'>
                            <li><a href='#'>Products-1</a></li>
                            <li><a href='#'>Products-2</a></li>
                            <li><a href='#'>Products-3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href='#'>Rooms</a>
                        <i class='bx bxs-chevron-down arrow js-arrow'></i>
                        <ul className='js-sun-menu sub-menu'>
                            <li><a href='#'>Rooms-1</a></li>
                            <li><a href='#'>Rooms-2</a></li>
                            <li><a href='#'>Rooms-3</a></li>
                        </ul>
                    </li>
                    <li><a href='#'>Inspirations</a></li>
                </ul>
            

                <div className="form-control">
                    <div className="input-group">
                        <button className="input input-bordered input-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <input type="text" placeholder="Search for minimalist chai"className="input input-bordered input-lg" />
                        
                    </div>
                </div>
                
                    <div className="flex-none intro">
                        <div className="dropdown dropdown-end">
                        <label tabindex="0" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                        </label>
                        <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            
                        </div>
                        </div>
    
                    </div>
  
                        <div className="indicator intro1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </div>


                <div className="dropdown dropdown-end intro2">
                <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                    </div>
                </label>
                <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li><a>Md. Nuruzzaman</a></li>
                    <li><a>Order Id:12345</a></li>
                    <li>
                    <a className="justify-between">
                        View Profile
                        {/* <span className="badge">New</span> */}
                    </a>
                    </li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
       </nav>
    );
};

export default Navbar;