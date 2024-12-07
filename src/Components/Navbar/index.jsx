import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from '@heroicons/react/16/solid'


const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    const context = useContext(ShoppingCartContext)


    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-bold text-lg">
                    <NavLink 
                    to='/'
                    className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                        Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/new-products'
                    className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                        New Products
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/reviews'
                    className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                        Reviews
                    </NavLink>
                </li>

            </ul>
            <ul className="flex items-center gap-3">
                <li>
                <NavLink 
                to='/'
                className={({ isActive }) => isActive ? activeStyle : undefined
                    }>
                    <div className=''>
                         <a href=""><img src="../../../WhatsApp Image 2024-11-11 at 16.22.17.jpeg" alt="" className="w-32 h-32"/></a>
                    </div>
                </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li>
                    <NavLink>
                        buscar
                    </NavLink>
                </li>
                <li className="flex items-center">
                    <NavLink to='/'>
                    <div><ShoppingCartIcon onClick={() => {context.openCheckoutSideMenu()}} className='h-6 w-6 text-black'></ShoppingCartIcon></div>
                    <div>{context.count}</div>
                   
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Sign-in'>
                        Segn in
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar

