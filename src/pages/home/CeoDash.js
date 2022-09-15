import React from "react"
import { ReactComponent as HomeIcon } from '../../assets/Home.svg';
import { ReactComponent as ChevronRightIcon } from '../../assets/ChevronRight.svg';
import MyMap from "../../components/MyMap"
import './styles/Dashboard.css'
import { useState } from "react"


export default function CeoDashboard(){
    return(
        
        <>
        
        <div className="ceoDashboard"> 

            <div className="col-span-7">
            <div className="content-path">
				<HomeIcon /><a href='/usermanagement'>Home</a><ChevronRightIcon /><span>Dashboard</span>
			</div>
            {/* <div className="addressMenu pt-6 pl-8 pb-10 ">
            <p> <span className="pr-4"><img className="sideMenuImg" src={homeImg} alt="logo"/></span>
                <span className="pr-4"><img className="sideMenuImg" src={rightIcon} alt="logo"/></span>
                CEO Dashboard    
            </p>
            </div> */}

            <div className="grid grid-cols-12 gap-8 dashboard">
                <div className="col-span-1"></div>
                <div className="col-span-4">
                <div className="grid grid-rows-3 gap-4 ">
                    <div className="blocks rounded-xl">
                        <div className="">
                            <div className="card_header">
                                <p className="heading" >Blocked Units</p>
                            </div>
                            <div className="grid grid-cols-2 text-center pt-4">
                                <div>
                                    <p className="count1">51</p>
                                    <p>Loaned to SEC</p>
                                </div>
                                <div>
                                    <p className="count1">34</p>
                                    <p>Election Petition</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="blocks rounded-xl">
                        <div className="">
                         
                        <div className="card_header">
                                <p className="heading" >Defective  Units</p>
                        </div>
                           
                

                            <div className="grid grid-cols-2 pt-6 text-center">
                            
                                <div>
                                    <p className="font-semibold">District</p>
                                    <hr></hr>
                                    <div className="text-md text-center">
                                    <p>Bhind</p>
                                    <p>Gwalior</p>
                                    <p>Indore</p>
                                    <p>Gwalior</p>
                                    <p>Indore</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold">Count</p>
                                    <hr></hr>
                                    <div className="text-md">
                                    <p>25</p>
                                    <p>32</p>
                                    <p>14</p>
                                    <p>32</p>
                                    <p>14</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blocks rounded-xl">
                            <div className="">
                            <div className="card_header">
                                <p className="heading" >Alerts and Notifications</p>
                        </div>
            
                                <div className="pl-2 pb-2">
                                <p className="text-sm pt-2">Today</p>
                                <p className="notifs pl-2 pb-4">First Randomisation completed in districts- Bhind, Gwalior, Indore, Bhopal</p>
                                <p className="notifs pl-2 pb-2">First Level Check completed in districts of Madhya Pradesh</p>

                                <hr></hr>

                                <p className="text-sm pt-2">Past Notifications</p>
                                <p className="notifs pl-2 pt-2"><span className="text-red-500">Action Required-</span> Request Ticket raised by DEO Gwalior regarding movement of units.</p>
                           
                                </div>
                         </div>
                    </div>
                </div>
                </div>
                <div className="col-span-6">
                <div className="grid grid-rows-3 gap-4 ">

                    <div className="blocks rounded-xl ">
                            <div className="">
                            <div className="card_header">
                                <p className="heading" >Unit Control</p>
                        </div>
                           
                

                                <div className="grid grid-cols-3 text-center pt-8">
                                    <div>
                                        <p className="count2"> 40,087</p>
                                        <p> Ballot Units</p>
                                    </div>
                                    <div>
                                        <p className="count2"> 36,080</p>
                                        <p> Control Units</p>
                                    </div>
                                    <div>
                                        <p className="count2"> 52,107</p>
                                        <p> VVPAT</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="blocks row-span-2 rounded-xl">
                            <div className="">
                            <div className="card_header">
                                <p className="heading" >India</p>
                        </div>
                           
                
                                <div className=" flex justify-center items-center">
                                <MyMap/> 
                                </div>
                            </div>
                    </div>

                </div>
                </div>
                <div className="col-span-1"></div>
            </div>
        </div>
        </div>
        </>
    )
}