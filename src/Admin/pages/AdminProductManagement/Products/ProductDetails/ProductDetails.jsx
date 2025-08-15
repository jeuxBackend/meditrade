import React from 'react'
import ProductDetailImg from '../../Assets/ProductDetailsImg.png'

const ProductDetails = () => {
  return (
       <div className="bg-[#fafafa] lg:ml-[295px]">
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
         <div className="md:p-6 p-4">
            <div className='flex gap-3 md:flex-nowrap flex-wrap'>
                {/* left side  */}
                <div>
                    <div className='md:w-92 w-full'>
   <img  src={ProductDetailImg} className='w-full rounded-lg h-99 object-cover'/>
                    </div>
                 
                </div>
                {/* right side  */}
                <div className='w-full'>
                   
                  <p className='text-[15px] font-[400] text-[#8F8F8F]'>Product Title</p>
                  <p className='text-[30px] font-[500]'>Electrocardiography, Model 14032</p>
                  {/* products details  */}
                  <div className='grid grid-cols-2 gap-4 border-b-2 border-dashed border-[#a3a3a3] pb-3'>
                    <div>
                           
                  <p className='text-[15px] font-[400] text-[#8F8F8F]'>Doctor:</p>
                  <p className='text-[20px] font-[400]'>$100.00 + $1(Tax)</p>
                    </div>
                    <div>
                           
                  <p className='text-[15px] font-[400] text-[#8F8F8F]'>Hospital/Clinic:</p>
                  <p className='text-[20px] font-[400]'>$100.00 + $1(Tax)</p>
                    </div>
                    <div>
                           
                  <p className='text-[15px] font-[400] text-[#8F8F8F]'>Laboratory:</p>
                  <p className='text-[20px] font-[400]'>$100.00 + $1(Tax)</p>
                    </div>
                    <div>
                           
                  <p className='text-[15px] font-[400] text-[#8F8F8F]'>Pharmacy:</p>
                  <p className='text-[20px] font-[400]'>$100.00 + $1(Tax)</p>
                    </div>
                    <div >
                           
                  <p className='text-[15px] font-[400] text-[#8F8F8F]'>Distributor:</p>
                  <p className='text-[20px] font-[400]'>$100.00 + $1(Tax)</p>
                    </div>
                  </div>
                  <div className='border-b-2 border-dashed border-[#a3a3a3] py-5'>
                           
                  <p className='text-[15px] font-[400] text-[#8F8F8F]'>Sold:</p>
                  <p className='text-[20px] font-[400]'>12,423</p>
                    </div>
                    {/* Brand  */}
                    <div className='grid grid-cols-2 gap-4  py-3'>
                    <div>
                           
                  <p className='text-[15px] font-[400] text-[#8F8F8F]'>Brand:</p>
                  <p className='text-[20px] font-[400]'>Rossmax</p>
                    </div>
                    <div>
                           
                  <p className='text-[15px] font-[400] text-[#8F8F8F]'>Country of Origin:</p>
                  <p className='text-[20px] font-[400]'>America</p>
                    </div>
                    <div>
                           
                  <p className='text-[15px] font-[400] text-[#8F8F8F]'>Technical sheet:</p>
                  <p className='text-[20px] font-[400] text-[#6a38ff]'>PDF download</p>
                    </div>
                    <div>
                           
                  <p className='text-[15px] font-[400] text-[#8F8F8F]'>Company:</p>
                  <p className='text-[20px] font-[400]'>America</p>
                    </div>
                   <div>
                    <p className='font-[600] text-[18px]'>Description:</p>
                    <p className='text-[400] text-[15px]'>Lorem ipsum dolor sit amet, consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. consetetur sadi pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna. consetetur sadi pscing elitr. See More....</p>
                   </div>
                  </div>
                  
                </div>
            </div>
         </div>
       </div>
  )
}

export default ProductDetails
