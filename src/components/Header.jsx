import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between w-screen px-[30px] py-[10px] fixed'>
        <div className='flex space-x-20'>
            <p className='font-bold text-xl'>Rayhan</p>
            <div className='flex  space-x-4'>
                <p className='font-light text-xl'>about</p>
                <p className='font-light text-xl'>project</p>
                <p className='font-light text-xl'>sertifikat</p>
            </div>
        </div>
        <button className='py-3 w-[120px] border rounded-[20px]'>
            <p>get my cv</p>
        </button>
    </div>
  )
}

export default Header