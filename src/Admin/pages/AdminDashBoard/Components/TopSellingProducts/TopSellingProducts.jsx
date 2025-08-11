import React from 'react'
import ProductImg from '../Assets/ProductImg.png'

const TopSellingProducts = () => {
  return (
    <div className="bg-[#fafafa] lg:ml-[295px] ">
        <div  className="md:p-6 p-4">
<div className='bg-white p-4 rounded-lg flex md:justify-between justify-center md:flex-nowrap flex-wrap gap-4'>
    {/* left side  */}
<div><img src={ProductImg} className='h-58 md:w-52 w-full rounded-lg  object-cover'/></div>
{/* Center  */}
<div className='w-full'>
    <p className='text-[20px] font-[400]'>Advanced Dissection Kit Biology Lab Anatomy Dissecting Set with Stainless Steel Scalpel Knife Handle Blades for Medical</p>
    <div>

    </div>
</div>
{/* Right side  */}
<div>
    kkk
</div>
</div>
        </div>
     
    </div>
  )
}

export default TopSellingProducts
