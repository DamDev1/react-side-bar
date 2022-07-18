import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegStickyNote } from 'react-icons/fa'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { HiOutlineShieldCheck } from 'react-icons/hi'
import { FaRegFlag } from 'react-icons/fa'
import { HiOutlineShieldExclamation } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { IoIosFlash } from 'react-icons/io'
import { AiOutlineDown } from 'react-icons/ai'
import { AiOutlineSetting } from 'react-icons/ai'

function SideBar() {
    
    function showSideBar() {
        document.querySelector(".sideBar").classList.toggle("active")
    }

    function changBg(){
        document.querySelector(".sideBar").classList.toggle("bgchange")
    }

  return (
    <div className="sidebarContainer">
        <div className="sideBar">
            <div className="header">
                <div className="brand">Sisy<span>phus</span></div>

                <div className="switch">
                    <a href="#" onClick={changBg} className="changeInnerHtml">Mode</a>
                </div>
            </div>

            <div className="miniShowcase">
                <div className="home">
                    <a href="#">
                        <AiOutlineHome />
                    </a>
                    <div>
                        <span>Home</span>
                    </div>
                </div>
                <div className="report">
                    <a href="#">
                        <FaRegStickyNote />
                    </a>
                    <div>
                        <span>Report</span>
                    </div>
                </div>
            </div>

            <hr />

            <div className="mainShowcase">
                <div className="showcasItems">
                    <div className="content">
                        <a href="#">
                            <TbBrandGoogleAnalytics />
                        </a>
                        <div>
                            <span>Overview</span>
                        </div>
                    </div>

                    <div className="content">
                        <a href="#">
                            <HiOutlineShieldCheck />
                        </a>
                        <div>
                            <span>Risk Profile</span>
                        </div>
                    </div>

                    <div className="content">
                        <a href="#">
                            <FaRegFlag />
                        </a>
                        <div>
                            <span>Remediation</span>
                        </div>
                    </div>

                    <div className="content">
                        <a href="#">
                            <HiOutlineShieldExclamation />
                        </a>
                        <div>
                            <span>Vulnerabilities</span>
                        </div>
                    </div>

                    <div className="content">
                        <a href="#">
                            <CgProfile />
                        </a>
                        <div>
                            <span>Identity breaches</span>
                        </div>
                    </div>

                    <div className="content">
                        <a href="#">
                            <HiOutlineShieldCheck />
                        </a>
                        <div>
                            <span>Report</span>
                        </div>
                    </div>

                    <div className="content">
                        <a href="#">
                            <IoIosFlash />
                        </a>
                        <div>
                            <span>Security profile</span>
                        </div>
                    </div>

                </div>
            </div>

            <hr />
            
            <div className="vendor">
                <p>Vendor</p>
                <a href="#">
                    <AiOutlineDown/>
                </a>
            </div>

            <hr />

            <div className="service">
                <p>MANAGE SERVICE</p>

                <a href="#">
                    <AiOutlineDown/>
                </a>
            </div>

            <div className="user">
                <div className="userImag"></div>
                <div className="userName">
                    <h3>John Deo</h3>
                    <p>johndeo@gmail.com</p>
                </div>
                <div className="user-setting">
                    <a href="#">
                        <AiOutlineSetting />
                    </a>
                </div>
            </div>

        </div>

        <div className="bar" onClick={showSideBar}>
            <GiHamburgerMenu className='bars'/>
        </div>
    </div>
  )
}

export default SideBar