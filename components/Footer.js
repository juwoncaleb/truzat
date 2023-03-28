import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='flex justify-between footerItem '>
                <div>
                    <p className='text-2xl mb-4'>Company</p>
                    <p  >About </p>
                    <p className='mt-2'>Blogs</p>
                    <p className='mt-2'>Features</p>
                    <p  className='mt-2'>Services</p>
                </div>
                <div>
                    <p className='text-2xl mb-4'>Product</p>
                    <p  className='mt-2'>Buy </p>
                    <p  className='mt-2'>Sell</p>
                    <p  className='mt-2'>Staking</p>
                    <p  className='mt-2'>Hedge Fund</p>
                    <p  className='mt-2'>OTC</p>
                </div>
                <div>
                    <p className='text-2xl mb-4'>Learn </p>
                    <p  className='mt-2'>Blog</p>
                    <p  className='mt-2'>Learning Portal</p>
                    <p  className='mt-2'> Help center</p>
                    <p  className='mt-2'>Create tickets</p>
                </div>
                <div>
                    <p className='text-2xl mb-4'>Legal </p>
                    <p  className='mt-2'>Privacy Policy</p>
                    <p  className='mt-2'>Anti-Money Laundering Policy</p>
                    <p  className='mt-2'>Terms of Service</p>
                    <p  className='mt-2'>Risk Disclosure</p>
                </div>
            </div>

        </div>
    )
}