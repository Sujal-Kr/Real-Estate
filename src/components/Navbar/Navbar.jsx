import React from 'react'
import asset from '../../assets/asset'
import { Link } from 'react-router-dom'
import { MdOutlineTranslate } from "react-icons/md";
import { LuUser } from "react-icons/lu";
const Navbar = () => {
    return (
        <nav className=' flex justify-between px-5 py-2 items-baseline bg-[#FCF8F4] font-bold'>
            <div className="nav-logo">
                <img src={asset.navLogo} alt="" />
            </div>
            <div className='nav-list uppercase flex gap-5 '>
                <Link>properties</Link>
                <Link>mydashboard/myactivity</Link>
                <Link className='underline'>list your property</Link>
                <Link>contact us</Link>
                <Link>more</Link>
                <div>|</div>
                <div className="right-logo flex items-baseline text-2xl gap-5">
                    <MdOutlineTranslate />
                    <LuUser />
                </div>

            </div>

        </nav>
    )
}

export default Navbar
