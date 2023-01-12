import React from 'react'
import bag from '../../assets/emptybag.png'
import { ArrowLeftIcon  } from '@heroicons/react/24/outline';

const CartEmpty = ({ onCartToggle}) => {
  return (
    <div className='flex items-center gap-7 text-center px-11 justify-center flex-col h-screen'>          
      <img src={bag} alt=''className='w-40 lg:w-36 sm:w-28 object-fill transition duration-300 active:scale-110'/>
      <button type='button' className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110' onClick={onCartToggle}>
            <ArrowLeftIcon className='w-5 h-5 text-slate-900' />
            <span className=''>Back To Nike Store</span>
        </button>
    </div>
  )
}

export default CartEmpty