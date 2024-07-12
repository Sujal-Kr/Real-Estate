import React from 'react'
import asset from '../assets/asset'
import BuyerForm from '../components/BuyerForm/BuyerForm'

const SellerHome = () => {
  return (
    <div className='min-h-[90.3vh] bg-[#122B49] p-16'>
      <div className='text-white '>
        <h2 className='text-3xl'>Sell or Rent your Property For Free</h2>
        <p className='max-w-3xl py-3'>Whether you’re ready to sell or looking for answers, we’ll guide you with data and expertise specific to your needs.</p>
      </div>
      <div className='my-20 flex flex-wrap justify-around '>
        <div className=' text-white   '>
        <p className='max-w-xs text-xl'>Upload your property in 4 simple steps</p>
        <ul className='text-sm flex flex-col gap-5 my-5'>
          <li className='flex items-center '>
            <img src={asset.checkList} alt="" />
            <p>Add property to <b>Basic Details</b></p>
          </li>
          <li className='flex items-center '>
            <img src={asset.checkList} alt="" />
            <p>Add property  <b>Location</b></p>
          </li>
          <li className='flex items-center '>
            <img src={asset.checkList} alt="" />
            <p>Add property <b>Featues and amenities</b></p>
          </li>
          <li className='flex items-center '>
            <img src={asset.checkList} alt="" />
            <p>Add your best <b>Property Shots</b></p>
          </li>
          
        </ul>
        </div>
        <div className='w-[32rem] '>
          <BuyerForm/>
        </div>
      </div>
      
    </div>
  )
}

export default SellerHome
