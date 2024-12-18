import { useState } from "react";
import { RxTextAlignJustify } from "react-icons/rx";
import { Menu } from "../menu/Menu";
import { Link } from "react-router-dom";


export const TopBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }
    return (
        <>
            <div className="flex m-4">
                <h1 className="grow hover:text-slate-500 transition-colors text-slate-900 text-2xl font-bold">
                    <Link to="/">
                        ArquiTec
                    </Link>
                </h1>
                <RxTextAlignJustify 
                    className="text-3xl cursor-pointer"
                    onClick={toggleMenu}/>
            </div>

            <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)}/>
        </>
    )
}