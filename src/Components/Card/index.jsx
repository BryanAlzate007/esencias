import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import imagenLocal from '../../assets/images.jpeg'
import { PlusIcon } from '@heroicons/react/16/solid'

const Card = () => {

    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const arrayprueba = {
        'tipo': 'cerbeza',
        'producto': 'Poker',
        'precio': '67000',
        'antes': '12235'
    }

    const addProductsToCart = (productData) => {
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        console.log('CART', context.cartProducts)
    }

    return (
        <div
        className="bg-white cursor-pointer w-45 h-60 rounded-lg"
        onClick={() => showProduct(arrayprueba)
        }
        
        >
            <figure className="relative mb-2 w-full h-4/5">
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                >
                <PlusIcon onClick={() => addProductsToCart(arrayprueba)} className='h-6 w-6 text-black'></PlusIcon>    
                </div>
                <img className="w-full h-full object-cover" src={imagenLocal} alt="" />
            </figure>
            <p className="flex flex-col items-center">
                <span className="text-sm font-light">TIPO</span>
                <span className="text-sm font-light">producto</span>
                <span className="text-sm font-light">$67000</span>
                <span className="text-sm font-black ">antes $12234</span>
            </p>
        </div>
    )
}

export default Card            