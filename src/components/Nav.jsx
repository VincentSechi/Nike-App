import { headerLogo } from '../assets/images';
import { hamburger, chevronLeft } from '../assets/icons';
import { navLinks } from '../constants';

import { useState } from 'react';

const Nav = () => {

    const [toggle,setToggle] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container"> 
            <a href="/">
                <img
                    src={headerLogo}
                    alt="NikeLogo"
                    width={130}
                    height={29}
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red duration-500"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="max-lg:block hidden">
                <img
                    src={toggle ? hamburger : hamburger}
                    alt="hamburger"
                    width={25}
                    height={25}
                    className="object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} mt-3 absolute right-0 sm:mr-10 xs:mr-3 `}>
                <ul className="list-none flex-1 flex flex-col justify-end items-center gap-3">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="font-montserrat leading-normal text-slate-gray hover:text-coral-red"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Nav