import React from 'react'
import ProductImg from '../Assets/ProductImg.png'

const TopSellingProducts = () => {
  return (
    <div className="bg-[#fafafa] lg:ml-[295px] ">
        <div  className="md:p-6 p-4">
<div className='bg-white p-4 rounded-lg'>
<div><img src={ProductImg} className='h-58 w-52 rounded-lg  object-cover'/></div>
</div>
        </div>
     
    </div>
  )
}

export default TopSellingProducts
