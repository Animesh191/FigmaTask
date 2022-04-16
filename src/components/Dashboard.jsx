import React from 'react'
import './Dashboard.css'

export const Dashboard = () => {
    return <>
        <div className="dashboard">
            <div className="left">
                <h1>This is left</h1>
            </div>
            <div className="right">
                <div className="navbar">
                    <h1>This is navbar</h1>
                  {/* <div className="icons">
                      <h1>i</h1>
                  </div>
                  <div className="iconRight">
                      <h1>Right Icons</h1>
                  </div> */}
                </div>
                <div className="first">
                    <div className="welcome">
                        <div className="welcome-left">
                            <h1>Welcome</h1>
                        </div>
                        <div className="welcome-right">
                           <img src="https://i.pinimg.com/originals/2c/a1/2b/2ca12b5dcf8d4531139a30c3999dfba9.png" alt="" />
                        </div>
                    </div>
                    <div className="carousel">
                        <div className="image"></div>
                    </div>
                </div>
                <div className="second">
                    <div className="widget1"></div>
                    <div className="widget2"></div>
                    <div className="widget3"><div className="card3"></div></div>
                </div>
                <div className="third">
                    <div className="currentDownload">
                        <h1>Current Download</h1>
                    </div>
                    <div className="totalInstalled">
                        <h1>Total Installed</h1>
                    </div>
                </div>
                <div className="fourth">
                    <div className="newInvoice">
                        <h1>New Invoice</h1>
                    </div>
                    <div className="totalRelatedApplication">
                        <h1>Total Related app</h1>
                    </div>
                </div>
                <div className="fifth">
                    <div className="countries">India</div>
                    <div className="authors">Animesh</div>
                    <div className="kuchbhi">Chutiya</div>
                </div>
            </div>
        </div>
    </>
}
