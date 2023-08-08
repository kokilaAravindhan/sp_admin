import React from 'react'

const Header = () => {
  
  return (
    <div 
    className='flex'
    style={{
        position:"absolute",
        top:0,
        left:"185px",
        width:"1099px",
        backgroundColor:"#fffff"
        
    }}>
      <div className='container'>
      <div className='row'>
        <div className='col-sm-5'>
          <nav class="navbar">
         
              <input type="text"  style={{width:"8.5cm",border:"0",padding:"20px"}}placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
              <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
              </button>
          </nav>
        </div>
        <div className='col-sm-5' style={{textAlign:"right",paddingTop:"20px"}}>
            <i className="fa-solid fa-bell fa-2xl" style={{color: "#b5becf"}}></i>
            &nbsp;&nbsp;
            <i className="fa-solid fa-envelope fa-2xl" style={{color: "#b5becf"}}></i> &nbsp;&nbsp;|
        </div>
        <div className='col-sm' style={{paddingTop:"15px"}}>
        <img src='img/undraw_profile_3.svg'  style={{width: "40px",height:"30px",alignSelf:"left"}} className ="img-profile rounded-circle" alt='.../' ></img>
    
        
        </div>
    </div>
    </div>
    
    </div>
  )
}

export default Header