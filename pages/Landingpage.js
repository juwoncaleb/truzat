import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion, stagger, useScroll, useTransform } from "framer-motion"

export default function Landingpage() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  return (
    <div className='land'>
      <Header />
      <div>
        <div className='hero_section'>
          <motion.div style={{ y }} className=' hero_page '>
            {/* TEXTS */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }} className='hero_text'>
              <p className='hero_text_main'>Save, Buy & trade cryptocurrency</p>
              <p className='hero_text_main'>the smart way</p>

              <div className='flex hero_buttons mb-14 mt-10'>
                <button className='text_btn_1 mr-6 '>
                  Download
                </button>
                <button className='text_btn_2'>
                  View pricing
                </button>
              </div>
            </motion.div>
            {/* IMAGE */}

          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }} className='hero_lap '>
            <img className='hero_lap' src='https://ik.imagekit.io/juwoncaleb/land2_TFDslvSNw.webp?updatedAt=1682340752799' />
          </motion.div>

        </div>
        <motion.div


          className='features flex justify-around '>
          {/* TEXTS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.6
            }}
            className='features_texts'>
            <p className='feature_head'>Truzact is a safe, fast </p>
            <p className='feature_head'> and secure way to save,</p>
            <p className='feature_head'> invest, store and transact</p>
            <p className='feature_head'>crypto assesst</p>
            <p className='feature_sub mt-10'>The secure digital asset management platform you can trust with </p>
            <p className='feature_sub'>a strong Next-of-Kin design. Earn 5-20% on your investments.</p>
            <div className='flex mt-8'>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=" #1E90FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>

              <p className='ml-8'>Fast Transactions</p>
            </div>
            <div className='flex mt-2'>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=" #1E90FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>

              <p className='ml-8'>Auto Save</p>
            </div>
            <div className='flex mt-2'>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=" #1E90FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>

              <p className='ml-8'>Fast Transactions</p>
            </div>
            <div className='flex mt-2'>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke=" #1E90FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>

              <p className='ml-8'>Auto Save</p>
            </div>
          </motion.div>
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.68
            }}
            className='images_Section  '>
            <img className='lock' src='https://ik.imagekit.io/juwoncaleb/phone2_qq_ffdkw3.webp?updatedAt=1682341085477' />

          </motion.div>

        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring', stiffness: 100, damping: 10, duration
            : 0.6
        }}
        className='security flex justify-center'>
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring', stiffness: 100, damping: 10, duration
              : 0.6
          }}
          className='verification  '>
          <img className='code' src='https://ik.imagekit.io/juwoncaleb/phone1_tuD7wOwZV.webp?updatedAt=1682341285038' />

        </motion.div>

        {/* TEXTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring', stiffness: 100, damping: 10, duration
              : 0.78
          }}
          className='verificaton_text'>
          <p className='feature_head mt-4'>Bulletproof </p>
          <p className='feature_head'> security by design</p>
          <p className='feature_sub mt-4'>The secure digital asset management platform you can trust with </p>
          <p className='feature_sub mb-6'>a strong Next-of-Kin design. Earn 5-20% on your investments.</p>
          <div className='card mt-18 flex grid sm:grid-cols-2'>
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


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring', stiffness: 100, damping: 10, duration
            : 0.6
        }}
        className='cta flex justify-between'>
        <div>
          <p className='feature_head'> Fully featured to <span className='neon'>buy</span></p>
          <p className='feature_head'><span className='neon'>trade and invest </span>in crypto</p>
        </div>
        <div className='ftred mt-14'>
          <button className='cta_btn_1'>
            Download app
          </button>
          <button className='cta_btn_2 ml-8'>
            Learn More
          </button>
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring', stiffness: 100, damping: 10, duration
            : 0.6
        }}
        className='grid  grid-cols-1 md:grid-cols-3 truzact_feature'>


        <div className=' md:col-span-2 truzact_border'>
          <p className='kinp mb-4 mt-2 ml-10 top'>Next of kins</p>
          <p className='ml-10 '>Truzact uses a strong NEXT-OF-KIN policy that lets you transfer your </p>
          <p className='ml-10 mt-1'>digital asset to your loved ones or family in sad cases of death or absence</p>

          <div className='flex ml-10 mt-4'>
            <p className='learn'>Learn More</p>
            <img className='arroww ml-4' src="./arrow.png" />
          </div>
          <img className='bills mb-4 mt-4' src='https://ik.imagekit.io/juwoncaleb/b2_yr29hXcGs.webp?updatedAt=1682341388785' />


        </div>


        <div className='truzact_border'>
          <img className='icon mb-2 mt-20' src='https://ik.imagekit.io/juwoncaleb/wall_9TZHPxkvK1.webp?updatedAt=1682341533272' />
          <p className='kin mb-6 '>Secure and encripted wallet</p>
          <p className=''>Truzact uses a strong NEXT-OF-KIN policy that lets you transfer your </p>

        </div>
        <div className='truzact_border'>
          <img className='transfer mb-6 mt-20' src='https://ik.imagekit.io/juwoncaleb/tranfer_VjlGiJ8238.webp?updatedAt=1682341532216' />
          <p className='kin mb-6 '>Fast Tranfer</p>
          <p className=''>Deposit , sell, swap assests on Truzact in minutes  </p>
          <p>Tranfer ca be done with username or phone number on contact list</p>

        </div>
        <div className='truzact_border'>
          <img className='icon mb-6 mt-20' src='https://ik.imagekit.io/juwoncaleb/donation_vGJHI40V9.webp?updatedAt=1682341533399' />
          <p className='kin mb-6 '>Donation</p>
          <p className=''>Raise funds from private and public donations from   </p>
          <p className=''>anyone on the globe with the use of uniquw donation link, which can be shared to anyone </p>

        </div>
        <div className='truzact_border'>
          <img className='icon mb-2 mt-20' src='https://ik.imagekit.io/juwoncaleb/referral_yOfuqfLoz.webp?updatedAt=1682341615510' />
          <p className='kin mb-6 '>Refferal</p>
          <p className=''>$10 worth of USDT commission when the person you referred saves or invest in Truzact 🙌🏽</p>
          <p>Eiusmod eu commodo quis officia minim ut velit quis.</p>
        </div>
      </motion.div>

      <div

        className=' mb-10 port cta2 flex justify-between '>
        {/* IMAGES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring', stiffness: 100, damping: 10, duration
              : 0.6
          }}
          className="flex  ">
          <img className='phone' src='https://ik.imagekit.io/juwoncaleb/banner_tlymfmQ-nc.webp?updatedAt=1682341830945' />
          
        </motion.div>

        {/* TEXTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring', stiffness: 100, damping: 10, duration
              : 0.6
          }}
          className='trial'>
          <p className=' text-black mt-20 cta3'> Try Truzact Today </p>
          <p className=' text-black cta3'>trade and invest </p>
          <div className='trial_btn flex mb-10 mt-6'>
            <button className='text_btn_1 apple mr-6 flex justify-center'>
              <p className='mt-3'> Get The app on
              </p>
              <img className='store2' src="https://img.icons8.com/sf-black/64/null/mac-os.png" />
            </button>
            <button className='text_btn_2 flex justify-center'>
              <p className='mt-3'>  Get The app on</p>
              <img className='store' src="https://img.icons8.com/fluency/48/null/google-play-store-new.png" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* TUTORIAL */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring', stiffness: 100, damping: 10, duration
            : 0.6
        }}
        className='tutorial'>
        <p className='tutorial_text mt-20 '> Watch how easy it is to </p>
        <p className='tutorial_text  '>use <span className='neon'>Truzact app</span> </p>
        <div className='tutor mt-20 flex'>
          <div className='tutorial_video'>

          </div>
          <div className=' step grid grid-cols-1'>
            <div className='step1 download flex justify-around'>
              <div className='flex justify-around '>
                <img className='icon ' src='./upload.png' />
                <p className='step2'>Download the app</p>
              </div>
            </div>
            <div className='step1 flex justify-around'>
              <div className='flex justify-around'>
                <img className='icon 'src='https://ik.imagekit.io/juwoncaleb/wall_9TZHPxkvK1.webp?updatedAt=1682341533272' />
                <p className='step2'>Download the app</p>
              </div>
            </div>
            <div className='step1 trader flex justify-around'>
              <div className='flex justify-around'>
                <img className='icon ' src='./eth.png' />
                <p className='step2'>Buy, trade & sell </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className='testimonial'>
        <p className='tutorial_text mt-20 '> What our cients </p>
        <p className='tutorial_text  '>say <span className='neon'>about us</span> </p>
        <motion.div className='mt-20 grid md:grid-cols-3 gap-6'>
          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.6
            }} className='testimonal_card'>
            <p className='step2'>Buy, trade & sell your assests</p>
            <p className='testimonal_sub mt-6'>Tempor incididunt eu non mollit irjokefpmcl okrpmgcef oimpklecfwdReprehenderit ut magna id dolore cupidatat est commodo.</p>
            <div className='flex mr-auto mt-8 mb-4'>
              <img className='test_img mr-6 ml-8' src='./john.jpg' />
              <div>
                <p>John Carter</p>
                <p className='neon'>@johncarter</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.63
            }} className='testimonal_card'>
            <p className='step2 '>The best tool for my team</p>
            <p className='testimonal_sub mt-6'>Tempor incididunt eu non mollit irjokefpmcl okrpmgcef oimpklecfwdReprehenderit ut magna id dolore cupidatat est commodo.</p>
            <div className='flex mr-auto mt-8 mb-4'>
              <img className='test_img mr-6 ml-8' src='./jc.jpg' />
              <div>
                <p>Soneye Omojuwon</p>
                <p className='neon'>@juwoncaleb</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring', stiffness: 100, damping: 10, duration
                : 0.66
            }} className='testimonal_card'>
            <p className='step2'>The future of crypto trading</p>
            <p className='testimonal_sub mt-6'>Tempor incididunt eu non mollit irjokefpmcl okrpmgcef oimpklecfwdReprehenderit ut magna id dolore cupidatat est commodo.</p>
            <div className='flex mr-auto mt-8 mb-4 ml-8'>
              <img className='test_img mr-6' src='./sophie.jpg' />
              <div>
                <p>charles kenths</p>
                <p className='neon'>@charlie</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring', stiffness: 100, damping: 10, duration
            : 0.66
        }} className='blogs'>
        <div className='flex justify-between mb-14'>
          <p className='tutorial_text  '>Latest <span className='neon'>Blogs</span> </p>
        </div>
        <div className=' grid md:grid-cols-2 grid-cols-1 gap-4'>
          <div className='blogspost'>
            <img src='./blog1.png' />
            <p className='date'>Apps - Jan 6, 2023</p>
            <p className='title'>Best platform to trade BTC </p>

            <div className='flex ml-1 md:ml-14 mt-4'>
              <p className='learn'>Learn More</p>
              <img className='arroww ml-4' src="./arrow.png" />
            </div>

          </div>
          <div className='blogspost'>
            <img src='./blog2.png' />
            <p className='date'>Products - Jan 6, 2023</p>
            <p className='title'>What is the best & most secure  </p>

            <div className='flex ml-10 md:ml-14 mt-4'>
              <p className='learn'>Learn More</p>
              <img className='arroww ml-4' src="./arrow.png" />
            </div>
          </div>
        </div>
        <button className='text_btn_2  mr-auto  ml-auto  mt-20 flex justify-center'>
          <p className='mt-3'> Get The app on
          </p>
        </button>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring', stiffness: 100, damping: 10, duration
            : 0.66
        }} className='cta4 mt-24 grid md:flex justify-around'>

        <div className=''>
          <p className=' final_cta mt-20'> <span className='neon'>Download</span> the crypto </p>
          <p className=' final_cta'>wallet of the future today</p>
          <div className='flex mb-10 mt-6'>
            <button className='text_btn_1 apple mr-6 flex justify-center'>
              <p className='mt-3'> Get The app on
              </p>
              <img className='store2' src="https://img.icons8.com/sf-black/64/null/mac-os.png" />
            </button>
            <button className='text_btn_2 flex justify-center'>
              <p className='mt-3'>  Get The app on</p>
              <img className='store' src="https://img.icons8.com/fluency/48/null/google-play-store-new.png" />
            </button>
          </div>
        </div>
        <img className='land_lap' src='./float.png' />
      </motion.div>
      <Footer />
    </div>
  )
}
