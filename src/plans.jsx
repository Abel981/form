import { useCombinedStore } from "./Store";
import Switch  from "@mui/material/Switch";

const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function Plan() {
    const {pageNumber,incrementPage,decrementPage,plan,setPlan,setLength,resetAddOns} = useCombinedStore();
    const pageNo = pageNumber
        const pageInc = incrementPage
        const pageDec = decrementPage

        console.log('plan com')

       

    return (
        <div className="flex flex-col h-2/3 bg-slate-200 justify-between">
            <div className="p-4 space-y-4 m-2 -mt-[29px] bg-white rounded-lg">
                <h2 className="text-violet-900 text-2xl font-bold">Select your plan</h2>
                <p className="text-slate-400">You have the option of monthly or yearly billing.</p>
                <ul className="space-y-2">
                    <li>
                        <button className={`flex justify-start space-x-6  w-full p-4 border ${plan.planName == 'Arcade'?'border-violet-900 bg-violet-100':'border-slate-300'} rounded-lg hover:border-violet-900`} onClick={() => {
                            setPlan('Arcade','9')
                        }}>
                            <img src="./images/icon-arcade.svg" alt="arcade logo"/>
                            <div className="flex flex-col items-start">
                                    <div>Arcade</div>
                                    {plan.planLength=='Monthly'?<div>$9/mo</div>:<div>$90/yr</div>}
                                    {plan.planLength=='Yearly'?<div>2 months free</div>:''}

                            </div>
                        </button>
                    </li>
                    <li>
                    <button className={`flex justify-start space-x-6  w-full p-4 border ${plan.planName == 'Advanced'?'border-violet-900 bg-violet-100':'border-slate-300'} rounded-lg hover:border-violet-900`} onClick={() => {
                            setPlan('Advanced','12')
                    }}>
                            <img src="./images/icon-advanced.svg" alt="Advanced icon" />
                            <div className="flex flex-col items-start">
                                    <div>Advanced</div>
                                    {plan.planLength=='Monthly'?<div>$12/mo</div>:<div>$120/yr</div>}
                                    {plan.planLength=='Yearly'?<div>2 months free</div>:''}

                            </div>
                        </button>
                    </li>
                    <li>
                    <button className={`flex justify-start space-x-6  w-full p-4 border ${plan.planName == 'Pro'?'border-violet-900 bg-violet-100':'border-slate-300'} rounded-lg hover:border-violet-900`} onClick={() => {
                            setPlan('Pro','15')
                    }}>
                            <img src="./images/icon-pro.svg" alt="Pro icon" />
                            <div className="flex flex-col items-start">
                                    <div>Pro</div>
                                    {plan.planLength=='Monthly'?<div>$15/mo</div>:<div>$150/yr</div>}
                                    {plan.planLength=='Yearly'?<div>2 months free</div>:''}

                            </div>
                        </button>
                    </li>
                </ul>
                <div className="text-center bg-slate-100">
                    <span  className={`${plan.planLength == 'Monthly'?'text-violet-900':''}`}>Monthly</span>
                <Switch checked={plan.planLength == 'Yearly'} onChange={() => {
                    setLength()
                    resetAddOns()
                }} />
                    <span className={`${plan.planLength == 'Yearly'?'text-violet-900':''}`}>Yearly</span>
                </div>
            </div>
            <div className={`flex  p-4 justify-between bg-white`}>
        <button className={`w-auto px-4 py-1 text-slate-500 hover:text-violet-900`}
                 onClick={() => pageDec()}>Go Back</button>
        <button className='w-auto px-4 py-1 bg-violet-800 text-white rounded-md hover:bg-violet-900'
          onClick={() => {
            if(plan.planName.length != 0) {pageInc()}
          }}
        >Next Step</button>
            </div>
        </div>

    );
}