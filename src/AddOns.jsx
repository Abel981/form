import { useCombinedStore } from "./Store";
import Checkbox from '@mui/material/Checkbox';


export default function AddOns() {

const {plan,incrementPage,decrementPage,addOns,pushAddOns,deleteAddOns} = useCombinedStore();

const pageInc = incrementPage
const pageDec = decrementPage

console.log('addons');



    return (
        <div className="flex flex-col h-2/3 bg-slate-200 justify-between">
            <div className="p-4 space-y-4 m-2 -mt-[29px] bg-white rounded-lg">
                <h2 className="text-violet-900 text-2xl font-bold">Pick add-ons</h2>
                <p className="text-slate-400">Add-ons help enhance your gaming experience</p>
                <ul className="space-y-2 ">
                    <li>
                        <button className={`flex justify-between space-x-6 w-full p-4 border rounded-lg hover:border-violet-900 ${(addOns.some(addon => {return (addon.name == 'Online service' && addon.price == (plan.planLength == 'Monthly'? 1:10))}
                                
                                ))?'border-violet-900 bg-violet-100':'border-slate-300'}`} 
                             onClick={() =>{ (addOns.some(addon =>
                                 {return (addon.name == 'Online service' && addon.price == (plan.planLength == 'Monthly'? 1: 10))}))?
                                    deleteAddOns({name:'Online service',price:(plan.planLength == 'Monthly'? 1: 10)}):
                                    pushAddOns({name:'Online service',price:(plan.planLength == 'Monthly'? 1:10)})}}>
                       <div className="flex space-x-3 ">
                        <Checkbox  checked={
                            (addOns.some(addon => {return (addon.name == 'Online service' && addon.price == (plan.planLength == 'Monthly'? 1: 10))}))} />
                            <div className="flex flex-col items-start">
                                    <div className="text-violet-900 font-bold">Online service</div>
                                    <div className="text-slate-400 text-sm">Access to multiplayer games</div>

                            </div>
                        </div> 
                            <div className="text-violet-900 text-sm">{plan.planLength == 'Monthly'?'+$1/mo':'+$10/yr'}</div>
                        </button>
                    </li>
                    <li>
                    <button className={`flex justify-between space-x-6 w-full p-4 border rounded-lg hover:border-violet-900 ${(addOns.some(addon => {return (addon.name == 'Larger storage' && addon.price == (plan.planLength == 'Monthly'?2:20))}
                                
                                ))?'border-violet-900 bg-violet-100':'border-slate-300'}`} 
                             onClick={() =>{ (addOns.some(addon =>
                                 {return (addon.name == 'Larger storage' && addon.price == (plan.planLength == 'Monthly'? 2: 20))}))?
                                    deleteAddOns({name:'Larger storage',price:(plan.planLength == 'Monthly'? 2 : 20)}):
                                    pushAddOns({name:'Larger storage',price:(plan.planLength == 'Monthly'? 2 : 20)})}}>
                     <div className="flex space-x-3 ">
                           <Checkbox  checked={
                            (addOns.some(addon => {return (addon.name == 'Larger storage' && addon.price == (plan.planLength == 'Monthly'? 2: 20 ))}))} />

                           <div className="flex flex-col items-start">
                                    <div className="text-violet-900 font-bold">Larger storage</div>
                                    <div className="text-slate-400 text-sm">Extra 1TB of cloud save</div>

                            </div>
                        </div>
                            <div className="text-violet-900 text-sm">{plan.planLength == 'Monthly'?'+$2/mo':'+$20/yr'}</div>
                        </button>
                    </li>
                    <li>
                    <button className={`flex justify-between space-x-6  w-full p-4 border rounded-lg hover:border-violet-900 ${(addOns.some(addon => {return (addon.name == 'Customizable profile' && addon.price == (plan.planLength == 'Monthly'?2:20))}
                                
                                ))?'border-violet-900 bg-violet-100':'border-slate-300'}`} 
                             onClick={() =>{ (addOns.some(addon =>
                                 {return (addon.name == 'Customizable profile' && addon.price == (plan.planLength == 'Monthly'? 2: 20))}))?
                                    deleteAddOns({name:'Customizable profile',price:(plan.planLength == 'Monthly'? 2 : 20 )}):
                                    pushAddOns({name:'Customizable profile',price:(plan.planLength == 'Monthly'? 2 : 20)})}}>
                    <div className="flex space-x-3 ">

                    <Checkbox  checked={
                        (addOns.some(addon => {return (addon.name == 'Customizable profile' && addon.price == (plan.planLength == 'Monthly'? 2: 20))}))} />
                            <div className="flex flex-col items-start">
                                    <div className="text-violet-900 font-bold">Customizable profile</div>
                                    <div className="text-slate-400 text-sm">Custom theme on your profile</div>

                            </div>
                     </div>
                            <div className="text-violet-900 text-sm">{plan.planLength == 'Monthly'?'+$2/mo':'+$20/yr'}</div>
                        </button>
                    </li>
                </ul>
               
            </div>
            <div className={`flex  p-4 justify-between bg-white`}>
        <button className={`w-auto px-4 py-1 text-slate-500 hover:text-violet-900`}
                 onClick={() => pageDec()}>Go Back</button>
        <button className='w-auto px-4 py-1 bg-violet-800 text-white rounded-md hover:bg-violet-900'
                onClick={() => {pageInc()}}
        >Next Step
        </button>
            </div>
        </div>

    );
}