import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
export default function blog() {
    return (
        <div className='blogsPost'>
            <Header />
            <p className='resource mt-20'><span className='neon'>Resource</span> center.</p>
            <p className='res mt-4'>Sit sunt amet cillum irure  jklfkdmac lkwmaclsx lkwm,ecsx lkmac jlknmcasx kljwnkecm.</p>
            <p className='res'>Sit sjklfkdmac lkwmaclsx lkwm,ecsx lkmac jlknmcasx kljwnkecm.</p>

            <div className=' flex justify-between mt-20 blog_content'>
                <img className='blog_hero' src='./blog/hero.png' />
                <div className='blog_head'>
                    <p className='blog_sub'>Apps ---- jan 6 2023</p>
                    <p className='blog_header mt-8'>Best platform to trade BTC </p>
                    <p className='blog_header mb-2'>on your phone</p>
                    <p className='blog_sub'>Laborum culpa et pariatur officia cillum eiusmod. Eiusmod occaecat aute dolor adipisicing do
                        sint eiusmod voluptate nulla cillum dolor voluptate nostrud proident. Consequat est
                        duis ex occaecat ut tempor mollit amet elit ullamco.</p>

                    <div className='flex mt-10'>
                        <p className='blog_sub'>Read article</p>
                        <img className='greenArrow' src="./career/arrow.png" />
                    </div>
                </div>
            </div>

            <div className='newletter '>
                <div className='news flex'>
                    <div className='news_text'>
                        <p className='subscibe'>Subscribe to our</p>
                        <p className='subscibe letter'>newsletter</p>
                        <p>Irure eiusmod ullamco nostrud magna magna non sunt duis aliqua ea jhdsm kjnac hjwbecsx ibecxs  do ad ea.</p>
                        <p>Irure eiusmod ullamco nostrud m ibecxs  do ad ea.</p>
                        <div className='flex '>
                            <input className='input' />
                            <button className='subs'>
                                 Subscribe
                            </button>
                        </div>
                    </div>
                    <img className='blog_img' src='./blog/pc.png' />
                </div>
            </div>
            <Footer />

        </div>
    )
}