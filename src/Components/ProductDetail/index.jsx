import { useContext } from "react"
import { XMarkIcon } from "@heroicons/react/16/solid"
import { ShoppingCartContext } from "../../Context"
import imagenLocal from '../../assets/images.jpeg'
import "./styles.css"




const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    console.log('PRODUCT TO SHOW: ', context.productToShow)

return(
    <aside
    className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detalles</h2>
            <div onClick={() => context.closeProductDetail()}>
            <XMarkIcon className=" h-6 w-6 text-black cursor-pointer"
            ></XMarkIcon>
            </div>
        </div>
        <figure className="px-6">
            <img className="w-full h-full rounded-lg"
            src={imagenLocal}
            alt="" />
        </figure>
        <p className="flex flex-col p-6">
            <span className="font-medium text-2xl">${context.productToShow.precio}</span>
            <span className="font-medium text-2xl">{context.productToShow.producto}</span>
            <span className="font-medium text-2xl">{context.productToShow.tipo}</span>
        </p>
    </aside>
)

}
export default ProductDetail