import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'

import { FaYoutubeSquare } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'

import { FiMenu } from 'react-icons/fi'
import logo from './assets/logo.png'
import applestore from './assets/store.png'
import complaint from './assets/compliant.png'
import screen from './assets/Screenss.png'
import quality1 from './assets/smartlink.png'
import quality2 from './assets/api.png'
import quality3 from './assets/user.png'
import smart from './assets/smart image.png'
import api from './assets/api image.png'
import security from './assets/security image.png'
import vopay from './assets/vopay.png'

function App() {
  const [navopen, setNavopen] = useState(false)
  const [modal, setModal] = useState(false)
  const handleOpen = () => {
    setNavopen(() => !navopen)
    setModal(() => !modal)
  }

  return (
    <>
      <header className='header '>
        <nav>
          <div className='underline'></div>
          <div className='mobile-nav section-center'>
            <div className='nav-logo'>
              <img src={logo} alt='logo' className='logo' />
            </div>
            <div className='action'>
              <button className='nav-btn'>Get Gopaii</button>
              {navopen ? (
                <GrClose className='menu1' onClick={handleOpen} />
              ) : (
                <FiMenu className='menu' onClick={handleOpen} />
              )}
            </div>
            <div className='nav-big nav-open'>
              <div className='nav-links '>
                <ul>
                  <li>Home</li>
                  <li>Policies</li> <li>About us</li> <li>FAQ</li>
                  <li>Documentation</li>
                  <li>T&C</li>
                </ul>
              </div>
            </div>
            <button className='nav-btn nav-btn1'>Get Gopaii</button>
          </div>
          <div className='underline'></div>
        </nav>
        <section className='section-center header-info'>
          <div className='header-text'>
            <div className='hero-text'>
              <h1>
                Create,
                <br />
                Get paid,
                <br />
                And Manage.
              </h1>
              <p>
                Gopaii helps to receive payments for your business, for those
                with website businesses, stores and other platforms. Also for
                those who don't own a business website but still need to collect
                payment from customers. Our solutions cut both sides.
              </p>
            </div>
            <div className='apple-store'>
              <img src={applestore} alt='apple store' className='applestore' />
            </div>
            <div className='compliant'>
              <h4>PCI DSS Compliant</h4>
              <div className='compliant-img'>
                <img src={complaint} alt='compliant' className='com-img' />
              </div>
            </div>
          </div>
          <div className='header-image'>
            <img src={screen} alt='scren' className='screen' />
          </div>
        </section>
      </header>
      <section>
        <div className='quality section-center section-align'>
          <p>QUALITY FEATURES</p>
          <h1>Experience Our Unique Features</h1>
          <div className='features'>
            {/* feature1 */}
            <div className='feature'>
              <div className='feature-img'>
                <img src={quality1} alt='icon' className='quality-icon' />
              </div>
              <div className='feature-text'>
                <h3> Sharable Smartlink</h3>
                <p>
                  get a sharable smartLink that can be shared with your
                  potential customers to enable them make payment
                </p>
              </div>
              {/* feature2 */}
              <div className='feature'>
                <div className='feature-img'>
                  <img src={quality2} alt='icon' className='quality-icon' />
                </div>
                <div className='feature-text'>
                  <h3> Api Integration</h3>
                  <p>
                    payment links can be integrated into your websites and other
                    platforms to enable payment for customers
                  </p>
                </div>
              </div>
              {/* feature3 */}
              <div className='feature'>
                <div className='feature-img'>
                  <img src={quality3} alt='icon' className='quality-icon' />
                </div>
                <div className='feature-text'>
                  <h3> User-Friendly Interface</h3>
                  <p>
                    Gopaii solution is easy and simple to use, hence it requires
                    no extra nor prior knowledge.
                  </p>
                </div>
              </div>
              {/* end of feaute */}
            </div>
          </div>
        </div>
      </section>
      <section className='section-center section-align detail-flex'>
        {/* single detail */}
        <div className='detailed-information'>
          <div className='information-img'>
            <img src={smart} alt='smart' className='smart' />
          </div>
          <div className='information-text'>
            <h3> Generate and share your smartLink</h3>
            <p>
              We designed Gopaii app for you with maximum simplicity. There’s no
              need to share your account details before you can recieve
              payments. From our app you simply generate a smart payment link
              that can be shared with your potential customers to enable them
              make payments. No stress, no hassle.
            </p>
          </div>
        </div>
        {/* single detail */}
        <div className='detailed-information detailed-information1'>
          <div className='information-img'>
            <img src={api} alt='smart' className='smart' />
          </div>
          <div className='information-text information-text1'>
            <h3> Api Integration is made available for your website</h3>
            <p>
              Should require our payment solution for your website platforms, we
              got you covered with a API Integration feature. You can easily
              implement our it on your website and start receiving payments from
              your clients without any delay and/or interruptions.
            </p>
          </div>
        </div>
        {/* single detail */}
        <div className='detailed-information'>
          <div className='information-img'>
            <img src={security} alt='smart' className='smart' />
          </div>
          <div className='information-text'>
            <h3> Safety and security of all transactions is 100% assured</h3>
            <p>
              Our solution as a payment gateway has satisfied all the required
              levels of Security Audit and it is PCI DSS Compliant. We take
              security seriously therefore every payment made via our solutions
              are 100% secure..
            </p>
          </div>
        </div>
      </section>
      <section className='pricing section-center section-align'>
        <div className='pricing-text'>
          <h3>
            Our Product Pricing is Clear and Affordable for all businesses
          </h3>
          <p>
            We offer affordable and transparent pricing on all payments for all
            businesses.
          </p>
          <div className='full-pricing'>
            <div className='price1'>
              <div className='price-details'>
                <h4>For Local transactions</h4>
              </div>
              <p>
                <span className='price-span'>1.3%</span> <br />
                <span className='card-p'>card processing fee</span> <br />
                Accept payments from all local bank cards
              </p>
            </div>
            <div className='price1'>
              <div className='price-details'>
                <h4>For International Transactions</h4>
              </div>
              <p>
                <span className='price-span'>4% + 50 cent</span> <br />
                <span className='card-p'>card processing fee</span> Accept
                payments from all international debit cards
                <br />
                Accept payments from all international credit cards
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className='company-details section-center '>
          <div className='company-adres'>
            <div className='company-logo'>
              <img src={logo} alt='logo' className='logooo' />
            </div>
            <div className='company-info'>
              <h6>
                1st floor Sky Mall Building,
                <br /> songotedo Lekki - Epe <br /> Express way, Lagos.
              </h6>
            </div>
            <div className='company-icon'>
              <FaFacebookSquare />
              <FaInstagramSquare />
              <FaTwitterSquare />
              <FaYoutubeSquare />
            </div>
          </div>
          <div className='company-links'>
            <div className='link1'>
              <h4>Company</h4>
              <ul>
                <li>About us</li>
                <li>Documentation Support Private Policy</li>
              </ul>
            </div>
            <div className='link2'>
              <h4>Support</h4>
              <ul>
                <li>Terms and condition</li>
              </ul>
            </div>
            <div className='link1'>
              <h4>Contact</h4>
              <ul>
                <li>Phone: +234(0)905-960-7062</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='underlane '>
          <div className='underlane-info section-center'>
            <p>© 2022 Gopaii, all right reserved</p>
            <div className='powered'>
              <p>powered by</p>
              <img src={vopay} alt='logo' className='logo-power' />
            </div>
          </div>
        </div>
      </footer>
      <div className={`${navopen ? 'nav-li' : 'navoo'} `}>
        <ul>
          <li>Home</li>
          <li>Policies</li> <li>About us</li> <li>FAQ</li>
          <li>Documentation</li>
          <li>T&C</li>
        </ul>
      </div>
      <div className={`${modal ? 'modal' : ''}`}></div>
    </>
  )
}

export default App
