import React, { Component } from 'react'
import '../Assects/Css/Logo.css';
import Logo1 from '../Assects/Images/l1.png';
import Logo2 from '../Assects/Images/l2.png';
import Logo3 from '../Assects/Images/l3.png';
import Logo4 from '../Assects/Images/l4.png';
import Logo5 from '../Assects/Images/l5.png';

class BrandLogo extends Component {
    render() {
        return (
            <>
                <div className='Brand-logo'>
                    <div className='logos-box'>
                        <ul className='all-logos'>
                            <li>
                                <img src={Logo3} alt="" />
                            </li>
                            <li>
                                <img src={Logo2} alt="" width='100%' height='100%'/>
                            </li>
                            <li>
                                <img src={Logo1} alt="" />
                            </li>
                            <li>
                                <img src={Logo5} alt="" />
                            </li>
                            <li>
                                <img src={Logo4} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
export default BrandLogo;