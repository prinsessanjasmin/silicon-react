import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const location = useLocation(); 
    const pathnames = location.pathname.split('/').filter((x) => x);

    const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    //^Code from ChatGPT

    return (
        <section>
            <div className="breadcrumb-container container">
                {/* <h1>{pathnames[pathnames.length - 1]?.replace(/-/g, ' ') || 'Home'}</h1> */}
                <ul className='breadcrumb'>
                    <li ><Link to='/' className='home-link'>
                        <span>
                            <i className="fa-solid fa-house"></i>
                        </span>
                        <p>Homepage</p>
                    </Link></li>
                    {
                        pathnames.map((value, index) => {
                            const to = `/$pathnames.slice(0, index + 1).join('/')}`;

                            return (
                                <li className='breadcrumb-link' key={to}>
                                    { index === pathnames.length -1
                                        ? (<span className='active'>{capitalizeFirstLetter(value.replace(/-/g, ' '))}</span>)
                                        : (<Link to={to} > ` ${capitalizeFirstLetter(value.replace(/-/g, ' '))}`</Link>)} 
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </section>
    );
};
    

export default Breadcrumb



