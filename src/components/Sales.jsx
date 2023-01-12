import React from 'react'
import Item from './utils/Item.jsx'
import Title from'./utils/Title.jsx'

const Sales = ({ifExists, endpoint: {title, items }}) => {
    return (
    <>
    <div className=" nike-container">
    <Title title={title} />
    <div className={`grid items-center gap-4 
    justify-items gap-7 lg:gap-5 mt-7 ${ifExists?'grid-cols-3 xl:grid-col-2 sm:grid-cols-1':'xl:grid-cols-3 sm:grid-cols-1 grid-cols-4 '}
    md:grid-cols-2`}>
        {items?.map((item,i)=>(<Item {...item}key={i}ifExists={ifExists}/>))}</div></div>
    </>
  )
}

export default Sales