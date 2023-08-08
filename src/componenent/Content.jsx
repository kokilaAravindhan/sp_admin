import React from 'react'
import ColorCard from '../ColorCard'
import DashboardCard from '../DashboardCard'
import LineChart from '../LineChart'
import DoughnutChart from '../Doughnut'

const Content = () => {
  return (
    <div style={{
        position:"relative",
        top:"75px",
        left:"185px",
        width:"1099px",
        background:"#f3f3f3",
        height:"100%"

    }}>
      <div className="d-sm-flex align-items-center justify-content-between mb-6">
        <h1 className="h3 mb-0 text-gray-800" style={{color: "#5a5c69!important"}}>Dashboard</h1>
        <a href="/" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent:'space-between',
          background:"#f3f3f3",
          padding: 24
        }}
      >
      <ColorCard
          color={'blue'}
          title={"Earnings"}
          value={'$40,000'}
          icon={<i className="fa-solid fa-house fa-2x" style={{ color: "#d6d6d6" }}></i>}
        />
        <ColorCard
          color={'green'}
          title={"Annual"}
          value={'$215,000'}
          icon={<i className="fa-solid fa-dollar-sign fa-2x" style={{ color: "#d6d6d6",padding:'0 30px 0 30px' }}></i>}
        />
        <ColorCard
          color={'yellow'}
          title={"Task"}
          value={'50%'}
          icon={<i className="fa-solid fa-calendar fa-2x" style={{ color: "#d6d6d6" ,textAlign:'right',padding:'0 30px 0 30px'}}></i>}
        />
        <ColorCard
          color={'orange'}
          title={"Pending Request"}
          value={'18'}
          icon={<i class="fa-solid fa-comments fa-2x" style={{ color: "#d6d6d6" }}></i>}
        /></div>
        <div style={{
          display: 'flex',
          background:"#f3f3f3",
          padding: 24
        }}
      >
         <DashboardCard
          title={'Earnings Overview'}
          width={'col-12  col-md-6'}
        >
          <LineChart />
        </DashboardCard>
        <DashboardCard
          title={'Revenuse Sources'}
          width={'col-12 col-sm-12 col-md-4'}
          innerHtml={<DoughnutChart />}
        />
        
      </div>
      <div style={{
          display: 'flex',
          background:"#f3f3f3",
         
          padding: 24
        }}>
        <DashboardCard
          title={'Projects'}
          width={' col-sm-5 col-md-5 '}
          innerHtml={<div><h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>
          <div className="progress mb-4">
            <div className="progress-bar bg-danger" role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
         </div>
            <h4 className="small font-weight-bold">Sales Tracking <span class="float-right">40%</span></h4>
         <div className="progress mb-4">
            <div className="progress-bar bg-warning" role="progressbar" style={{width: "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className="small font-weight-bold">Customer Database <span class="float-right">60%</span></h4>
          <div className="progress mb-4">
            <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className="small font-weight-bold">Payout Details <span class="float-right">80%</span></h4>
          <div className="progress mb-4">
            <div class="progress-bar bg-info" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <h4 className="small font-weight-bold">Account Setup <span className="float-right">Complete!</span></h4>
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          </div>}
         
        />
        <DashboardCard
          title={'Illustrations'}
          width={'col-12 col-sm-12 col-md-4'}
          innerHtml={<div><img src='img/unposting_draw.svg'  className="img-fluid px-3 px-sm-4 mt-3 mb-4" alt='.../'style={{width: "25rem"}} />
                <p>Add some quality, svg illustrations to your project courtesy of 
                   <a target="blank"  href="https://undraw.co/"> unDraw</a>, a
                  constantly updated collection of beautiful svg images that you can use
                  completely free and without attribution!<br></br><br></br><a target="blank"  href="https://undraw.co/">Browse Illustrations on
                  unDraw →</a></p>
                </div>}
        />
      </div>
      <div style={{
          display: 'flex',
          background:"#f3f3f3",
          justifyContent:'space-around',
          padding: 24
        }}  >
          <div className='col-sm-6 col-md-6'>
            <div class="card bg-primary text-white shadow">
              <div class="card-body">
                Primary
                <div class="text-white-50 small">#4e73df</div>        
              </div>           
            </div>
            <br></br>
            <div class="card bg-success text-white shadow">
              <div class="card-body">
                Success
              <div class="text-white-50 small">#1cc88a</div>
            </div>
            </div>
            <br></br>
            <div class="card bg-info text-white shadow">
              <div class="card-body">
              Info
              <div class="text-white-50 small">#36b9cc</div>
              </div>
            </div>
            <br></br>  
            <div class="card bg-warning text-white shadow">
              <div class="card-body">
              Warning
              <div class="text-white-50 small">#f6c23e</div>
              </div>
            </div>  
            <br></br> 
            <div class="card bg-danger text-white shadow">
              <div class="card-body">
              Danger
              <div class="text-white-50 small">#e74a3b</div>
              </div>
            </div>
            <br></br>
            <div class="card bg-secondary text-white shadow">
              <div class="card-body">
              Secondary
              <div class="text-white-50 small">#858796</div>
            </div>
          </div>
          <br></br>
          <div class="card bg-light text-black shadow">
            <div class="card-body">
              Light
            <div class="text-black-50 small">#f8f9fc</div>
            </div>
          </div>
          <br></br>
          <div class="card bg-dark text-white shadow">
            <div class="card-body">
            Dark
            <div class="text-white-50 small">#5a5c69</div>
            </div>
          </div>
          </div>
          <DashboardCard
            title={'Development Approach'}
            width={' col-sm-6 col-md-5'}
            innerHtml={<div><div class="card-body">
            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                CSS bloat and poor page performance. Custom CSS classes are used to create
                custom components and custom utility classes.
            Before working with this theme, you should become familiar with the
                Bootstrap framework, especially the utility classes.</p>
              </div>            
            </div>}
          />      
        </div>
      
    </div>
  

  )
}

export default Content