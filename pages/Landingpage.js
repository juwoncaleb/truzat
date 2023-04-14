import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { motion, stagger, useScroll, useTransform } from "framer-motion"

export default function Landingpage() {
  let {scrollYProgress} = useScroll();
  let y = useTransform(scrollYProgress ,[0,1], ["0%", "100%"])
  return (
    <div className='land'>
      <Header />
      <div>
        <motion.div style={{y}} className='flex justify-between  hero_page '>
          {/* TEXTS */}
          <div className='hero_text'>
            <p className='hero_text_main'>Save, Buy & trade</p>
            <p className='hero_text_main'>cryptocurrency</p>
            <p className='hero_text_main'>the smart</p>
            <p className='hero_text_main'>way</p>
            <p className='mt-4'> Magna et id non quis in sint est enim dolor laborum
              adipisicing.eniam anim anim voluptate <br />
              ex eu enim laboris qui duis occaecat labore esse commodo minim
              . Laborum aliquip ipsum nostrud sint laboris.</p>
            <div className='flex hero_buttons mb-10 mt-6'>
              <button className='text_btn_1 mr-6 '>
                Download
              </button>
              <button className='text_btn_2'>
                View pricing
              </button>
            </div>
          </div>
          {/* IMAGE */}
          <div className='hero_images '>
            <img className='hero_lap' src='./laptop.png' />
          </div>
        </motion.div>

        <div className='features flex justify-around '>
          {/* TEXTS */}
          <div className='features_texts'>
            <p className='feature_head'>Truzact is a safe, fast </p>
            <p className='feature_head'> and secure way to save,</p>
            <p className='feature_head'> invest, store and transact</p>
            <p className='feature_head'>crypto assesst</p>
            <p className='feature_sub mt-10'>The secure digital asset management platform you can trust with </p>
            <p className='feature_sub'>a strong Next-of-Kin design. Earn 5-20% on your investments.</p>
            <div className='flex mt-8'>
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_17_30413)">
                  <path d="M13.998 26.6484C21.1779 26.6484 26.998 20.8283 26.998 13.6484C26.998 6.46854 21.1779 0.648438 13.998 0.648438C6.81815 0.648438 0.998047 6.46854 0.998047 13.6484C0.998047 20.8283 6.81815 26.6484 13.998 26.6484Z" fill="#B0F127" />
                  <path d="M8.11523 14.488L11.4771 17.8499L19.8816 9.44531" stroke="#060606" stroke-width="2" />
                </g>
                <defs>
                  <clipPath id="clip0_17_30413">
                    <rect width="26" height="26" fill="white" transform="translate(0.998047 0.648438)" />
                  </clipPath>
                </defs>
              </svg>
              <p className='ml-8'>Fast Transactions</p>
            </div>
            <div className='flex mt-2'>
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_17_30413)">
                  <path d="M13.998 26.6484C21.1779 26.6484 26.998 20.8283 26.998 13.6484C26.998 6.46854 21.1779 0.648438 13.998 0.648438C6.81815 0.648438 0.998047 6.46854 0.998047 13.6484C0.998047 20.8283 6.81815 26.6484 13.998 26.6484Z" fill="#B0F127" />
                  <path d="M8.11523 14.488L11.4771 17.8499L19.8816 9.44531" stroke="#060606" stroke-width="2" />
                </g>
                <defs>
                  <clipPath id="clip0_17_30413">
                    <rect width="26" height="26" fill="white" transform="translate(0.998047 0.648438)" />
                  </clipPath>
                </defs>
              </svg>
              <p className='ml-8'>Auto Save</p>
            </div>
            <div className='flex mt-2'>
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_17_30413)">
                  <path d="M13.998 26.6484C21.1779 26.6484 26.998 20.8283 26.998 13.6484C26.998 6.46854 21.1779 0.648438 13.998 0.648438C6.81815 0.648438 0.998047 6.46854 0.998047 13.6484C0.998047 20.8283 6.81815 26.6484 13.998 26.6484Z" fill="#B0F127" />
                  <path d="M8.11523 14.488L11.4771 17.8499L19.8816 9.44531" stroke="#060606" stroke-width="2" />
                </g>
                <defs>
                  <clipPath id="clip0_17_30413">
                    <rect width="26" height="26" fill="white" transform="translate(0.998047 0.648438)" />
                  </clipPath>
                </defs>
              </svg>
              <p className='ml-8'>Fast Transactions</p>
            </div>
            <div className='flex mt-2'>
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_17_30413)">
                  <path d="M13.998 26.6484C21.1779 26.6484 26.998 20.8283 26.998 13.6484C26.998 6.46854 21.1779 0.648438 13.998 0.648438C6.81815 0.648438 0.998047 6.46854 0.998047 13.6484C0.998047 20.8283 6.81815 26.6484 13.998 26.6484Z" fill="#B0F127" />
                  <path d="M8.11523 14.488L11.4771 17.8499L19.8816 9.44531" stroke="#060606" stroke-width="2" />
                </g>
                <defs>
                  <clipPath id="clip0_17_30413">
                    <rect width="26" height="26" fill="white" transform="translate(0.998047 0.648438)" />
                  </clipPath>
                </defs>
              </svg>
              <p className='ml-8'>Auto Save</p>
            </div>
          </div>
          {/* IMAGE */}
          <div className='images_Section  '>
            <img className='lock' src='./lock.png' />
            <img className='graph' src='./graph.png' />
            <img className='btc' src='./btc.png' />
          </div>

        </div>
      </div>

      <div className='security flex justify-center'>
        {/* IMAGE */}
        <div className='verification  '>
          <img className='code' src='./code.png' />
          <img className='padlock' src="./padlock.png" />

        </div>

        {/* TEXTS */}
        <div className='verificaton_text'>
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
        </div>
      </div>


      <div className='cta flex justify-between'>
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
      </div>


      <div className='grid  grid-cols-1 md:grid-cols-3 truzact_feature'>


        <div className=' md:col-span-2 truzact_border'>
          <p className='kinp mb-4 mt-2 ml-10 top'>Next of kins</p>
          <p className='ml-10 '>Truzact uses a strong NEXT-OF-KIN policy that lets you transfer your </p>
          <p className='ml-10 mt-1'>digital asset to your loved ones or family in sad cases of death or absence</p>

          <div className='flex ml-10 mt-4'>
            <p className='learn'>Learn More</p>
            <img className='arroww ml-4' src="./arrow.png" />
          </div>
          <img className='bills mb-4 mt-4' src='./b2.png' />

        </div>


        <div className='truzact_border'>
          <img className='icon mb-2 mt-20' src='./wall.png' />
          <p className='kin mb-6 '>Secure and encripted wallet</p>
          <p className=''>Truzact uses a strong NEXT-OF-KIN policy that lets you transfer your </p>

        </div>
        <div className='truzact_border'>
          <img className='transfer mb-6 mt-20' src='./tranfer.png' />
          <p className='kin mb-6 '>Fast Tranfer</p>
          <p className=''>Deposit , sell, swap assests on Truzact in minutes  </p>
          <p>Tranfer ca be done with username or phone number on contact list</p>

        </div>
        <div className='truzact_border'>
          <img className='icon mb-6 mt-20' src='./donation.png' />
          <p className='kin mb-6 '>Donation</p>
          <p className=''>Raise funds from private and public donations from   </p>
          <p className=''>anyone on the globe with the use of uniquw donation link, which can be shared to anyone </p>

        </div>
        <div className='truzact_border'>
          <img className='icon mb-2 mt-20' src='./referral.png' />
          <p className='kin mb-6 '>Refferal</p>
          <p className=''>$10 worth of USDT commission when the person you referred saves or invest in Truzact 🙌🏽</p>
          <p>Eiusmod eu commodo quis officia minim ut velit quis.</p>
        </div>
      </div>

      <div className=' mb-10 port cta2 flex justify-between '>
        {/* IMAGES */}
        <div className="flex  slot_img">
          <img className='phone' src='./portfolio.png' />
          <img className='eth' src='./eth.png' />

          <img className='slot' src='./slot.png' />
          <img className='con coin1' src='./lana.png' />
          <img className='coin2 con mt-24' src='./btc.png' />
        </div>

        {/* TEXTS */}
        <div className='trial'>
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
        </div>
      </div>

      {/* TUTORIAL */}
      <div className='tutorial'>
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
                <img className='icon ' src='./wall.png' />
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
      </div>
      <div className='testimonial'>
        <p className='tutorial_text mt-20 '> What our cients </p>
        <p className='tutorial_text  '>say <span className='neon'>about us</span> </p>
        <div className='mt-20 grid md:grid-cols-3 gap-6'>
          <div className='testimonal_card'>
            <p className='step2'>Buy, trade & sell your assests</p>
            <p className='testimonal_sub mt-6'>Tempor incididunt eu non mollit irjokefpmcl okrpmgcef oimpklecfwdReprehenderit ut magna id dolore cupidatat est commodo.</p>
            <div className='flex mr-auto mt-8 mb-4'>
              <img className='test_img mr-6 ml-8' src='./john.jpg' />
              <div>
                <p>John Carter</p>
                <p className='neon'>@johncarter</p>
              </div>
            </div>
          </div>
          <div className='testimonal_card'>
            <p className='step2 '>The best tool for my team</p>
            <p className='testimonal_sub mt-6'>Tempor incididunt eu non mollit irjokefpmcl okrpmgcef oimpklecfwdReprehenderit ut magna id dolore cupidatat est commodo.</p>
            <div className='flex mr-auto mt-8 mb-4'>
              <img className='test_img mr-6 ml-8' src='./jc.jpg' />
              <div>
                <p>Soneye Omojuwon</p>
                <p className='neon'>@juwoncaleb</p>
              </div>
            </div>
          </div>
          <div className='testimonal_card'>
            <p className='step2'>The future of crypto trading</p>
            <p className='testimonal_sub mt-6'>Tempor incididunt eu non mollit irjokefpmcl okrpmgcef oimpklecfwdReprehenderit ut magna id dolore cupidatat est commodo.</p>
            <div className='flex mr-auto mt-8 mb-4 ml-8'>
              <img className='test_img mr-6' src='./sophie.jpg' />
              <div>
                <p>charles kenths</p>
                <p className='neon'>@charlie</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='blogs'>
        <div className='flex justify-between mb-14'>
          <p className='tutorial_text  '>Latest <span className='neon'>Blogs</span> </p>
        </div>
        <div className=' grid grid-cols-2 gap-4'>
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
      </div>

      <div className='cta4 mt-24 grid md:flex justify-between'>

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
        <img className='land_lap' src='./laptop.png' />
      </div>
      <Footer />
    </div>
  )
}
