import React from "react";
import UserImg from "./Assets/UserImg.png";
import OrderImg from './Assets/OrderImg.png'
import ArrowImg from './Assets/ArrowImg.png'

const AdminDashboard = () => {
  return (
    <div className="bg-[#fafafa]">
      <div className="md:p-6 p-4 ">
        <div className="space-y-2">
          <p className="md:text-3xl text-[25px] font-semibold text-black">
            Welcome back, Scott J.
          </p>
          <p>
            <span className="text-black">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>

            <span className="text-[#8E8F96]">
              &nbsp; Here is a quick snapshot of the overall business
            </span>
          </p>
        </div>
        <div className="my-4 bg-white rounded-lg p-4 border border-[#dededf]">
          <div className="flex items-center gap-3">
            <img src={UserImg} className="w-8 h-8" />
            <p className="font-[500] text-[24px]">Platform Users</p>
          </div>
          {/* Platform User Details  */}
          <div>         
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-3">
  {/* Total Users */}
  <div className="flex flex-col items-center justify-center">
    <p className="text-[#00427E] text-[20px] font-[500]">Total Users</p>
    <p className="font-[700] text-[30px]">1,905</p>
  </div>

  {/* Active Users with gradient left/right border */}
  <div
    className="flex flex-col items-center justify-center"
    style={{
      borderLeft: "3px solid",
      borderRight: "3px solid",
      borderImage: "linear-gradient(to bottom, transparent, #e4e4e4, transparent) 4",
    }}
  >
    <p className="text-[#00427E] text-[20px] font-[500]">Active Users</p>
    <p className="font-[700] text-[30px]">3,526</p>
  </div>

  {/* Blocked Users */}
  <div className="flex flex-col items-center justify-center">
    <p className="text-[#00427E] text-[20px] font-[500]">Blocked Users</p>
    <p className="font-[700] text-[30px]">54</p>
  </div>
</div>
{/* second  */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 my-8">
  {/* Total Users */}
  <div className="flex flex-col items-center justify-center">
    <p className="text-[#00427E] text-[20px] font-[500]">Total Doctors</p>
    <p className="font-[700] text-[30px]">1,905</p>
  </div>

  {/* Active Users with gradient left/right border */}
  <div
    className="flex flex-col items-center justify-center"
    style={{
      borderLeft: "3px solid",
      borderRight: "3px solid",
      borderImage: "linear-gradient(to bottom, transparent, #e4e4e4, transparent) 4",
    }}
  >
    <p className="text-[#00427E] text-[20px] font-[500]">Total Hospitals</p>
    <p className="font-[700] text-[30px]">3,526</p>
  </div>

  {/* Blocked Users */}
  <div className="flex flex-col items-center justify-center">
    <p className="text-[#00427E] text-[20px] font-[500]">Total Laboratories</p>
    <p className="font-[700] text-[30px]">54</p>
  </div>
</div>
{/* third  */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
  {/* Total Users */}
  <div className="flex flex-col items-center justify-center">
    <p className="text-[#00427E] text-[20px] font-[500]">Total Pharmacies</p>
    <p className="font-[700] text-[30px]">1,905</p>
  </div>

  {/* Active Users with gradient left/right border */}
  <div
    className="flex flex-col items-center justify-center"
    style={{
      borderLeft: "3px solid",
      
      borderImage: "linear-gradient(to bottom, transparent, #e4e4e4, transparent) 4",
    }}
  >
    <p className="text-[#00427E] text-[20px] font-[500]">Total Distributors</p>
    <p className="font-[700] text-[30px]">3,526</p>
  </div>


</div>
 </div>

        </div>
        {/* order Section  */}
        <div className="my-4 bg-white rounded-lg p-4 border border-[#dededf]">
          <div className="flex items-center gap-3">
            <img src={OrderImg} className="w-8 h-8" />
            <p className="font-[500] text-[24px]">Orders</p>
          </div>
          {/* Order Details  */}
          <div>         
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-3">
  {/* Total Users */}
  <div className="flex flex-col items-center justify-center">
    <p className="text-[#00427E] text-[20px] font-[500]">Total Orders</p>
    <p className="font-[700] text-[30px]">1,905</p>
  </div>

  {/* Active Users with gradient left/right border */}
  <div
    className="flex flex-col items-center justify-center"
    style={{
      borderLeft: "3px solid",
      borderRight: "3px solid",
      borderImage: "linear-gradient(to bottom, transparent, #e4e4e4, transparent) 4",
    }}
  >
    <p className="text-[#00427E] text-[20px] font-[500]">Added to Cart</p>
    <p className="font-[700] text-[30px]">3,526</p>
  </div>

  {/* Blocked Users */}
  <div className="flex flex-col items-center justify-center">
    <p className="text-[#00427E] text-[20px] font-[500]">Pending Orders</p>
    <p className="font-[700] text-[30px]">54</p>
  </div>
</div>
{/* second  */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 my-8">
  {/* Total Users */}
  <div className="flex flex-col items-center justify-center">
    <p className="text-[#00427E] text-[20px] font-[500]">Confirmed Orders</p>
    <p className="font-[700] text-[30px]">1,905</p>
  </div>

  {/* Active Users with gradient left/right border */}
  <div
    className="flex flex-col items-center justify-center"
    style={{
      borderLeft: "3px solid",
      borderRight: "3px solid",
      borderImage: "linear-gradient(to bottom, transparent, #e4e4e4, transparent) 4",
    }}
  >
    <p className="text-[#00427E] text-[20px] font-[500]">In transit</p>
    <p className="font-[700] text-[30px]">3,526</p>
  </div>

  {/* Blocked Users */}
  <div className="flex flex-col items-center justify-center">
    <p className="text-[#00427E] text-[20px] font-[500]">Out for delivery</p>
    <p className="font-[700] text-[30px]">54</p>
  </div>
</div>
{/* third  */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
  {/* Total Users */}
  <div className="flex flex-col items-center justify-center">
    <p className="text-[#00427E] text-[20px] font-[500]">Delivered</p>
    <p className="font-[700] text-[30px]">1,905</p>
  </div>




</div>
 </div>
 

        </div>
        {/* Top Seller section  */}
         <div className="my-4 bg-white rounded-lg p-4 border border-[#dededf]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 mt-3">
  {/* Total Users */}
  <div className="bg-[#fafafa] border border-[#dededf] rounded-lg p-4  relative">

 
  <div className="flex flex-col mt-6 pl-4">
    <p className="text-[#00427E] text-[20px] font-[500]">Top selling products</p>
    <p className="font-[700] text-[30px]">1500</p>
    <img src={ArrowImg} className="w-7 absolute top-3 right-4"/>
  </div>
   </div>
 <div className="bg-[#fafafa] border border-[#dededf] rounded-lg p-4  relative">

 
  <div className="flex flex-col  mt-6 pl-6" >
    <p className="text-[#00427E] text-[20px] font-[500]">Recent orders</p>
    <p className="font-[700] text-[30px]">800</p>
    <img src={ArrowImg} className="w-7 absolute top-3 right-4"/>
  </div>
   </div>

 
 


  

   
 </div>
 

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
