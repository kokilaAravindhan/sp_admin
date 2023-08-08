import React from 'react'
import { useState } from 'react';
import './Dashboard.css'
import DashboardHeading from '../DashboardHeading';


const Dashboard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div style={{
        position:"absolute",
        top: "0px",
        left:0,
        width:"14rem",
        backgroundColor:"#4e73df",
        height:"300%"
    }}
    >
      <div class="flex">
        <div class="row">
          <div class="col-sm">
            <i className="fa-solid fa-face-laugh-wink" style={{
                  color:"white",
                  fontSize:"30px",
                  padding:"20px 0 0 10px",
                  rotate:"340deg"}}></i>
            <span className='heading-classname'> SP <sup>2</sup> ADMIN</span>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <hr></hr>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
          <nav className='navbar bg-body-tertiary'>
                  <a href='index.html' style={{color:"white",blockSize:"2 0px"}}>
                    <i className="fa-solid fa-gauge-high" style={{color:"white",fontSize:"15px", padding:"20px 10px 0 10px"}}></i>
                      Dashboard
                  </a>
                </nav>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <hr></hr>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <span className='interface-heading'>INTERFACE</span>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <i className="fa-solid fa-gear" style={{color:"white",fontSize:"15px", padding:"20px 10px 0 10px"}}></i>
            <span className='heading-components' onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} > Components</span>
                {isHovered && (
                  <div className="dropdown-content">
                    <p>Buttons</p>
                    <p>Cards</p>
                    
                  </div>
                 )}
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
          <i class="fas fa-fw fa-wrench" style={{color:"white",fontSize:"15px", padding:"20px 10px 0 10px"}}></i>
          <span className='heading-utilities'>Utilities</span>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <hr></hr>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <span className='interface-heading'>ADDONS</span>
          </div>
        </div>

        <DashboardHeading
          icon={<i class="fa-solid fa-folder" style={{color:"white",fontSize:"15px", padding:"20px 10px 0 10px"}}></i>}
          title={"Pages"}
          
        />    
        <DashboardHeading
          icon={<i class="fas fa-fw fa-chart-area" style={{color:"white",fontSize:"15px", padding:"20px 20px 0 10px"}}></i>}
          title={"Charts"}
          
        />


      </div>
    </div>


  )
}

export default Dashboard