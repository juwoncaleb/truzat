import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion, stagger, useScroll, useTransform } from "framer-motion"

export default function About() {
    return (
        <div className='about_us'>
            <Header />
            <div className='about_header'>
                <motion.div initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='mission'>
                    <p className='mt-14'>Our main mission is to </p>
                    <p className='neon mb-40'>democratize finance</p>
                </motion.div>
                <div className='coins'>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }} className='flex justify-center'>
                        <img className='about_eth' src='./about/eth.png' />
                        <img className='about_sola' src='./about/sola.png' />
                        <img className='about_btc' src='./about/btc.png' />
                        <img className='about_lana' src='./about/lana.png' />
                    </motion.div>


                </div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}>
                    <img className='globe' src='./about/abt.png' />
                </motion.div>

            </div>
            <motion.div className=' flex justify-between achievement'>
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.6
                    }} className='verificatin_accom' >
                    <p className='achieve_text'><span className='neon'>Take a look </span>at what </p>
                    <p className='achieve_text mb-8'>we've accomplished</p>
                    <p className='achieve_seb'>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                    <p className='achieve_seb'>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                    <p className='achieve_seb'>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                    <button className='text_btn_1 mt-10 mr-6 '>
                        Download
                    </button>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.8
                    }} className='verificaton_text'>
                    <div className='card mt-18 flex grid sm:grid-cols-2 '>
                        <div className='card_sub card_sub_1'>
                            <p className='card_header'>CISA <span className='neon'>+</span></p>
                            <p>Security incident</p>

                        </div>
                        <div className='card_sub card_sub_2'>
                            <p className='card_header'>0 <span className='neon'>.</span></p>
                            <p>Security incident</p>
                        </div>
                        <div className='card_sub card_sub_3'>
                            <p className='card_header'>256<span className='neon'>bits</span></p>
                            <p>Security incident</p>

                        </div>
                        <div className='card_sub card_sub_4'>
                            <p className='card_header'>100<span className='neon'>%</span></p>
                            <p>Security incident</p>

                        </div>

                    </div>
                </motion.div>
            </motion.div>
            <div className='flex justify-between system_class'>
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.6
                    }} >
                    <img className='system' src='./about/system.png' />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.8
                    }} >
                    <div className='system_text' >
                        <p className='syste'><span className='neon'>Take a look </span>at what </p>
                        <p className='syste mb-8'>we've accomplished</p>
                        <p>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                        <p>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                        <p>Ut sit quis proident id uhjkj hiuoj ijlkjhkj hikjli ipsum qui.</p>
                        <button className='text_btn_1 mt-10 mr-6 '>
                            Download
                        </button>

                    </div>
                </motion.div>
            </div>
            <div className='team'>
                <motion.div initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.5
                    }} className='team_member' >
                    <p className='achieve_text'><span className='neon'>Meet </span>the team </p>
                    <p className='achieve_text mb-8'>behind Truzact</p>
                </motion.div>
                <motion.div  initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring', stiffness: 100, damping: 10, duration
                            : 0.8
                    }}  className='grid grid-cols-3'>
                    <div className='team_card'>
                        <img src='./about/g1.jpg' />
                    </div>
                    <div>
                        <img src='./about/g2.jpg' />

                    </div> <div>
                        <img src='./about/g3.jpg' />

                    </div>
                    <div>
                        <img src='./about/g4.jpg' />

                    </div>
                    <div>
                        <img src='./about/g5.jpg' />

                    </div> <div>
                        <img src='./about/g6.jpg' />

                    </div>
                </motion.div>


            </div>
            <Footer />
        </div>
    )
}
