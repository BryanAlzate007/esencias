import { useContext } from "react"
import { XMarkIcon } from "@heroicons/react/16/solid"
import { ShoppingCartContext } from "../../Context"
import imagenLocal from '../../assets/images.jpeg'
import OrderCard from "../../Components/OrderCard"
import "./styles.css"




const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    console.log('PRODUCT TO SHOW: ', context.productToShow)


return(
    <aside
    className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Mi Orden</h2>
            <div onClick={() => context.closeCheckoutSideMenu()}>
            <XMarkIcon className=" h-6 w-6 text-black cursor-pointer"></XMarkIcon>
            </div>
        </div>
        <figure className="px-6">
            <img className="w-full h-full rounded-lg"
            src={imagenLocal}
            alt="" />
        </figure>
       
    </aside>
)

}
export default CheckoutSideMenu

