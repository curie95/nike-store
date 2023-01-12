import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from "../../app/CartSlice.js";

const CartItem = ({ item: { id, title, text, img, color, shadow, price, cartQuantity } }) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  const onIncreaseItemQTY = () => {
    dispatch(setIncreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }
  const onDecreaseItemQTY = () => {
    dispatch(setDecreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  } 
   return (
    <>
    <div className="grid items-center grid-cols-3 gap-5
    rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105"
  >      
  <div className={`relative bg-gradient-to-b ${color} ${shadow} rounded-xl p-3  w-full hover:scale-105 transition-all duration-75 ease-in-out`}>
    <img src={img} alt=''className=" w-36 h-auto object-fill lg:w-28"/>   <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme top-0 absolute right-0">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div></div>
  <div className="flex-row">
    <h1 className="font-medium text-lg lg:text-sm text-slate-900">{title}</h1>
    <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
    <div className="flex items-center justify-around flex-row gap-4" >
      <div className='w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center'>
    <MinusIcon onClick={()=>onDecreaseItemQTY()}className='w-5 h-5 stroke-[2] text-white rounded bg-theme-cart active:scale-90 p-0.5'/></div>
    <div className='w-7 h-6 lg:w-6 lg:h-5 text-white rounded bg-theme-cart active:scale-90 p-0.5 text-center justify-center flex font-medium  lg:text-xs'>
    {cartQuantity}</div>
    <div className='w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center'>
    <PlusIcon onClick={()=>onIncreaseItemQTY()}className='w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2] rounded bg-theme-cart active:scale-90 p-0.5'/>
  </div></div></div>
  <div className="gap-5 grid items-center justify-center">
  <h1 className="font-medium text-lg lg:text-base text-slate-900">
  ${(price*cartQuantity)}</h1>
  <div className='w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center p-1'>
    <TrashIcon onClick={()=>onRemoveItem()}className='w-5 h-5 text-white stroke-[2] rounded bg-theme-cart active:scale-90 cursor-pointer'/>
  </div>  </div>
      </div>
      </>
  )
}

export default CartItem