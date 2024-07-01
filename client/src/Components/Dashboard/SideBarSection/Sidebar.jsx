import React from 'react'
import './sidebar.css'
import logo from '../../../Assets/logo.png'
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md'
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle } from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp, BiLogOutCircle } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo} alt="Logo" />
        <h2>EMD</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Dashboard
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">
                Services
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">
                File Download
              </span>
            </a>
          </li>
        </ul>
      </div>


      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">
                Client Earning
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">
                Contact
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/" className="menuLink flex">
              <BiLogOutCircle className="icon" />
              <span className="smallText">
                Log Out
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Having trouble in EMD, please contact us from for more questions.</p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar