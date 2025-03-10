import React from "react";
export default function payment(){
    return(
        <div className="flex flex-col min-h-screen text-gray-900 " style={{backgroundColor: "#c9c9c9"}} >
            <a href="/"> <div className="w-2/3 m-auto flex mt-3 justify-center" >
            <img alt="logo" src="/assets/logo.svg" className="h-10" /><span className="ml-1 text-3xl font-head text-gray-900">OMPUFEST</span> 
            </div></a>
        <div className="flex" style={{height: "90vh"}}>
            <div className="p-4 gap-5 lg:flex lg:justify-between m-auto">
        <div className=" w-full m-auto lg:flex">
          <div className="h-48 h-auto w-48 m-auto flex-none bg-cover text-center overflow-hidden"
        //    style={{backgroundImage: 'url("./assets/imgs/paymentUPI.jpg")'}} 
           title="Mountain">
               <img alt="logo" src="./assets/imgs/paymentUPI.jpg"/>
          </div>
          <div className="m-auto w-min font-bold pt-1">&nbsp;Pay&nbsp;via&nbsp;UPI&nbsp;</div>
          <div className="m-auto w-min font-bold pt-1"> OR&nbsp;&nbsp;</div>
          <div id="accDetails" className="border border-gray-400 border-gray-700 bg-white rounded p-4 flex flex-col justify-between leading-normal" style={{backgroundColor:"#ebe6e6"}}>
            <div >
              <div className="text-gray-900 font-bold text-xl mb-2 lg:mb-4" >For International Payments</div>
              <p className="text-gray-700 text-base">Account holder name: YASHWANTRAO CHAVHAN COLLEGE OF ENGINEERING </p>
              <p className="text-gray-700 text-base">Account no: 1472002100003909 </p>
              <p className="text-gray-700 text-base">RTGS/NEFT IFS CODE : PUNB0147200</p>
              <p className="text-gray-700 text-base">Amount : As per Event</p>
            </div>
          </div>
        </div>
      </div>
        </div>
        
        </div>
    )
}
  