import React from 'react'
import A from './A'
import Card from './Card'
import Card0 from './Card0.jsx'
import './Dashboard.css';
import Card1 from './Card1.jsx'

export const Dashboard = () => {
    return <>
        <div className="dashboard">
            <div className="left">
                <h1>This is left</h1>
                <div className='left0'></div>
                <div className='left1'></div>
                <Card/>
                <Card1/>
                <Card0/>

            </div>
            <div className="right">
                <div className="navbar">
                    <h1>This is navbar</h1>
                    
                  {/* <h2 className="icons">
                      1st
                  </h2>
                  <h2 className="iconRight">
                      2nd
                  </h2> */}
                </div>
                <div className="first">
                    <div className="welcome">
                    {/* <div className="image1"></div> */}
                        
                        <div className="welcome-left">
                            <h1>Welcome</h1>
                        </div>
                        <div className="welcome-right">
                           {/* <img src="https://i.pinimg.com/originals/2c/a1/2b/2ca12b5dcf8d4531139a30c3999dfba9.png" alt="" /> */}
                        </div>
                    </div>
                    <div className="carousel">
                        <div className="image"></div>
                    </div>
                </div>
                <div className="second">
                    <div className="widget3" ><h4 className="card" style={{textAlign:"center" , backgroundColor:"pink"}}>Widget 1</h4></div>
                    <div className="widget2"><h4 className="card" style={{textAlign:"center" , backgroundColor:"grey"}}>Widget 2</h4></div>
                    <div className="widget1" style={{textAlign:"center"}}><h4 className="card" style={{ backgroundColor:"orange"}}>Widget 3</h4></div>
                </div>
                <div className="third">
                    <div className="currentDownload">
                    <div className="innercurrentDownload">chart</div>
                    </div>
                    <div className="totalInstalled">
                        <h4 className='totalInstalled1'>Total Installed 1</h4>
                        <h4 className='totalInstalled2'>Total Installed 2</h4>
                        
                        <h4 className='totalInstalled3'>Total Installed 3</h4>
                    </div>
                </div>
                <div className="fourth">
                    <div className="newInvoice">
                        <h1>New Invoice</h1>
                        <A/>
                    </div>
                    <div className="totalRelatedApplication">
                        <h1>Total Related app</h1>
                        
                            <h3>1. Drive</h3>
                            <h3>2. Chrome</h3>
                            <h3>3. Instagram</h3>

                        
                    </div>
                </div>
                <div className="fifth">
                    <div className="countries" style={{ backgroundColor:"grey"}}>
                            <h3>INDIA</h3>
                    </div>
                    <div className="authors" style={{ backgroundColor:"orange" }}><h3>
                            AUTHOR 
                        </h3></div>
                    <div className="kuchbhi" style={{backgroundColor:"cyan"}}><h3>
                            Charts
                        </h3></div>
                </div>
            </div>
        </div>
    </>
}
