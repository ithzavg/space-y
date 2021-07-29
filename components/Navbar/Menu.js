import React from 'react';

/*Import Components */
import Link from 'next/link';
import Image from 'next/image';

/*Import Assets */
import iconAbout from '../../assets/img/astronaut.svg';
import iconLaunch from '../../assets/img/project.svg';


const Menu =() =>{
    return (
        <div className="flex justify-center">
            <Link href="/">
                <a className="flex items-center mr-3">
                    <Image src={iconAbout} width={40} height= {40} alt="icon menu about"></Image>
                    <span className="ml-1 text-m">About</span>
                </a>
            </Link>
            <Link href="/launches" >
                <a className="flex items-center">
                    <Image src={iconLaunch} width={35} height= {35} alt="icon menu launches"></Image>
                    <span className="ml-1">Past Launches</span>
                </a>
            </Link> 
        </div>
    )
}

export default Menu;