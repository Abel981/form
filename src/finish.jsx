import { useCombinedStore } from "./Store";


export default function Finish() {
    const {plan,incrementPage,decrementPage,addOns,} = useCombinedStore();
    const addOnItems = addOns.map((addon,index) => <li key={index}>
    <div className="flex justify-between p-4">
        <div className="text-slate-500">{addon.name}</div>
        <div className="text-violet-600">{`+$${addon.price}/${plan.planLength == 'Monthly'?'mo':'yr'}`}</div>

    </div>
        </li>);
        const addOnSum = addOns.reduce((sum,curr)=>sum+curr.price,0);
    return (
        <div className="flex flex-col h-2/3 bg-slate-200 justify-between">
            <div className="p-4 space-y-4 m-2 -mt-[29px] bg-white rounded-lg">
                <h2 className="text-violet-900 text-2xl font-bold">Finishing up</h2>
                <p className="text-slate-400">Double-check everything looks OK before confirming.</p>
                <ul className="space-y-2 bg-violet-100 rounded-lg">
                    <li>
                     <div className="flex justify-between items-center rounded-lg p-4 text-violet-800 font-bold">
                        <div className="flex flex-col">
                            {`${plan.planName}(${plan.planLength == 'Monthly'?'mo':'yr'})`}
                            <a className="text-slate-400 font-normal" href="#">Change</a>
                        </div>
                        {`$${plan.planPrice}/${plan.planLength=='Monthly'?'mo':'yr'}`}
                     </div>
                     <hr className="" />
                    </li>
                   {addOnItems}
                </ul>
                <div className="flex justify-between p-4">
                
                    <div>{`Total (per ${plan.planLength == 'Monthly'?'month':'year'})`}</div>
                <div className="text-violet-800 font-bold">{`+$m${addOnSum+Number(plan.planPrice)}/${plan.planLength =='Monthly' ? 'mo':'yr'}`}</div>
                </div>
            </div>
            <div className={`flex  p-4 justify-between bg-white`}>
        <button className={`w-auto px-4 py-1 text-slate-500 hover:text-violet-900`}
                 onClick={() => decrementPage()}>Go Back</button>
        <button className='w-auto px-4 py-1 bg-violet-800 text-white rounded-md hover:bg-violet-900'
          onClick={() => {incrementPage()}}
        >Confirm</button>
            </div>
        </div>

    );
}