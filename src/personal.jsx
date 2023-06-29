import { useState, useRef, useEffect } from "react";

import { useCombinedStore } from "./Store";
import produce from "immer";



let information = {
    name: "",
    email: "",
    phone: ""
};



export default function UserInfo() {
    const [info, setInfo] = useState(() => {
        const storedValue = localStorage.getItem('personalInf');
        return storedValue ? JSON.parse(storedValue): information;
    });
   
const {pageNumber, incrementPage} = useCombinedStore()
    
    const pageNo = pageNumber
    const pageInc = incrementPage
    console.log('user info rendering');
    
        // console.log('render')
    const myRef = useRef(null);
    const spRef = useRef(null);
    const phRef = useRef(null);
    
       function handleClick() {
        

        if(spRef.current &&info.phone.length == 0) {
            spRef.current.classList.remove('hidden')
            console.log('hh');
            phRef.current.classList.remove('border-slate-300')
            phRef.current.classList.add('border-pink-500')
        }
        else{
            spRef.current.classList.add('hidden')
            
            if(pageNo<4){
                pageInc();
            }
            localStorage.setItem('personalInf', JSON.stringify(info));
        }
    }
    console.log(localStorage.getItem('personalInf'));
    
    
      

    return (
        <div className=" flex flex-col h-2/3 bg-slate-200 justify-between">
            <div className="p-4 space-y-4 m-2 -mt-[29px] bg-white rounded-lg">
                <h2 className="text-violet-900 text-2xl font-bold">Personal info</h2>
                <p className="text-slate-400">Please provide your name, email address, and phone number</p>
                <form>
                    <label className="block">
                        <span className="block text-violet-900">Name</span>
                        <input type="text" placeholder="e.g. Stephen King" value={info.name} 
                            onChange={(e) => {
                                setInfo(produce(info, draftState => {
                                    draftState.name = e.target.value;
                                }))
                            }}
                        className="my-2 w-full px-3 py-2 bg-white border border-slate-300
                         rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500"/>
                    </label>
                    <label className="block">
                        <span className="block text-violet-900">Email Address</span>
                        <input type="email" value={info.email} placeholder="e.g. stephenking@lorem.com" className="my-2 w-full px-3 py-2 bg-white border border-slate-300
                         rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500"
                            onChange={(e) => {
                                setInfo(produce(info, draftState => {
                                    draftState.email = e.target.value;
                                }))
                            }}
                         />
                    </label>
                    <label className="block">
                        <div className="flex justify-between">
                        <span className="text-violet-900">Phone Number</span>
                        <span ref={spRef} className={`text-pink-600 hidden`}>This field is required</span>

                        </div>
                        <input id="phone" ref={phRef} value={info.phone} type="text" placeholder="e.g. +1 234 567 890" className="my-2 w-full px-3 py-2 bg-white border border-slate-300
                         rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500"
                               onChange={(e)=>{
                                spRef.current.classList.add('hidden')
                                phRef.current.classList.remove('border-pink-500')
                                setInfo(produce(info,draftState =>{
                                draftState.phone = e.target.value;
                                
                               }))}}
                         />
                    </label>
                </form>
            </div>
            <div  className='flex  p-4 justify-end bg-white'>
                <button ref={myRef} className='w-auto px-4 py-1 bg-violet-800 text-white rounded-md hover:bg-violet-900'
                    onClick={handleClick}
                >Next Step</button>
            </div>
        </div>
    );

}
