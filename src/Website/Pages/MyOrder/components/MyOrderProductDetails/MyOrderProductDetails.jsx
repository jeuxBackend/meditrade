import React from "react";
import closeicon from "../Assets/closeicon.png";
import bpimg1 from '../Assets/bpimg1.png'
import bpimg2 from '../Assets/bpimg2.png'
import bpimg3 from '../Assets/bpimg3.png'
import bpimg4 from '../Assets/bpimg4.png'
import bpimg5 from '../Assets/bpimg5.png'

function MyOrderProductDetails() {
  return (
    <div className=" px-3 md:px-7 py-4 mt-7">
      <div className="flex items-center gap-3">
        <img src={closeicon} alt="" className="h-9" />
        <p className="text-2xl font-semibold">Product Details</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 pb-4 border-b-2 border-dashed border-[#a3a3a3]">
        <div>
            <div>
                <img src={bpimg1} alt="" className="" />
            </div>
            <div className="flex items-center gap-1 md:gap-3">
                 <img src={bpimg2} alt="" className="h-20 w-20 md:h-35 md:w-35 rounded-xl" />
                 <img src={bpimg3} alt="" className=" h-20 w-20 md:h-35 md:w-35 rounded-xl" />
                 <img src={bpimg4} alt="" className="h-20 w-20 md:h-35 md:w-35 rounded-xl" />
                <div className="relative">
                     <img src={bpimg5} alt="" className="h-20 w-20 md:h-35 md:w-35 rounded-xl" />
                     <p className="absolute top-5 md:top-13 right-6 md:right-15 text-lg md:text-2xl  text-white rounded-full ">+3</p>
                </div>
            </div>
        </div>
        <div>
            <p className="text-[#8f8f8f] font-semibold">Product Title</p>
            <p >Electrocardiography, Model 14032</p>

        </div>

      </div>
    </div>
  );
}

export default MyOrderProductDetails;
