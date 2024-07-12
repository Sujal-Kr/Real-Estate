import React from 'react'
import {Link} from 'react-router-dom'

const BuyerForm = () => {
    return (
        <div className='rounded-2xl w-full   text-[#122B49]   bg-white  '>
            <div className='bg-[#FCF8F4] p-5 rounded-t-2xl'>
                <h1 className='text-xl uppercase'>lets get you started!</h1>
            </div>
            <form action="" className='p-5 flex  gap-4 flex-col max-h-44 overflow-y-auto '>
                <p htmlFor="">I am :</p>
                <div className='flex gap-10'>
                    <div className='flex gap-2'>
                        <input type="radio" name='type' value="owner" />
                        <label htmlFor="type">Owner</label>
                    </div>

                    <div className='flex gap-2'>
                        <input type="radio" name='type' value="builder" />
                        <label htmlFor="type">Builder</label>
                    </div>
                </div>
                <div className='flex flex-col gap-2 '>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" className='p-2 border border-slate-600 outline-none max-w-sm rounded-sm' placeholder='Name' p />
                </div>
                <div className='flex flex-col gap-2 '>
                    <label htmlFor="country">Country</label>
                    <select name="" id="" className='p-2 border border-slate-600 outline-none max-w-sm rounded-sm'>
                        <option value="india">India</option>
                        <option value="australia">Australia</option>
                        <option value="zimbabe">Zimbabe</option>
                        <option value="nigeria">Nigeria</option>
                    </select>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="phone">Phone</label>
                    <div className='flex gap-2 max-w-sm'>
                        <select name="phone" id="" className='p-2 border border-slate-600 outline-none max-w-fit rounded-sm'>
                            <option value="+91">+91</option>
                            <option value="+87">+87</option>
                            <option value="+66">+66</option>
                        </select>
                        <input type="number" name="" id="" className='p-2 border border-slate-600 outline-none w-full rounded-sm' />
                    </div>
                </div>
                <p>OR</p>
                <div>
                    <p>Email <span className='text-red-500'>*</span></p>
                    <input type="email" name="" id="" className='p-2 border border-slate-600 outline-none w-full max-w-sm rounded-sm' />
                </div>
            </form>
            <div className='bg-[#FCF8F4] p-5 rounded-b-2xl flex justify-between items-end'>
                <h1 className='text-xs uppercase'>Need Help? <b>Call 9999999999</b></h1>
                <button className='text-xs text-white bg-[#122B49] px-8 py-2 rounded'><Link to='/propertylisting'>Next</Link> </button>
            </div>

        </div>
    )
}

export default BuyerForm
