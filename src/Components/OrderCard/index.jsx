import { XMarkIcon } from "@heroicons/react/16/solid"

const OrderCard = props => {
    const { tipo, precio } = props

return (
    <div className="flex justify-between items-center">
        <div className='flex items-center gap-2'>
            <figure className='w-20 h-20'>
                <img className='w-full h-full rounded-lg object-cover' src="" alt="" />
            </figure>
            <p className='text-sm font-light'>{tipo}</p>
        </div>
        <div className='flex items-center gap-2'>
            <p className='text-lg font-medium'> {precio}</p>
            <XMarkIcon className=" h-6 w-6 text-black cursor-pointer"></XMarkIcon>
        </div>

    </div>
)

}

export default OrderCard

