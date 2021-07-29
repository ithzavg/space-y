/*Import Libraries */
import React, { useState } from "react";


/*Import Components */
import Link from 'next/link';
import Menu from "./Menu";





const Navbar =() =>{
    const [showMenu, setShowMenu] = useState(false);

    let menu;

    if(showMenu){
        menu = <Menu></Menu>
        
    }

    return (
        <header>
            <nav className="px-4 content-center bg-gray-600  font-russo text-white">
                    <div className="flex justify-between">
                        <Link href="/" >
                            <a className="mt-2 flex justify-between items-center xs:w-full">
                                <p className="text-lg">space-y</p> 
                            </a>  
                        </Link>
                        <p onClick={() => setShowMenu(!showMenu)} className="text-3xl">&equiv;</p>
                    </div>

                    {menu}       
            </nav>
        </header>
    )
}

export default Navbar;