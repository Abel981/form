
import { create } from "zustand";

const createPlanStore =(set) =>(
    {
        plan:{
            planName:'',
            planPrice:'',
            planLength: 'Monthly'
        },
        setPlan: (pName,price) => set((state) => ({
            plan:  {
                ...state.plan,
                planPrice:price,
                planName:pName
            }
        })),
        setLength: () => set((state) => ({
            plan: {
                ...state.plan,
                planLength:state.plan.planLength == 'Monthly' ? 'Yearly':'Monthly'
            }
        }))
    }
)

const createAddOnsStore = (set) => (
    {
        addOns:[],
        pushAddOns: (obj) => set((state) => ({addOns:[...state.addOns,obj]})),
        deleteAddOns:(obj)=> set((state) => ({addOns:state.addOns.filter((addOn) => {
           return (obj.name !== addOn.name || obj.price !== addOn.price);
        })})),
        resetAddOns:() => set((state) => ({addOns:[]}))
    }
)
const createPageStore = (set) => (
    {
        pageNumber:1,
        incrementPage: () => set((state) => ({pageNumber:state.pageNumber+1})),
        decrementPage: () => set((state) => ({pageNumber:state.pageNumber-1})) 
    }
)

export  const useCombinedStore = create((...params) => ({
    ...createPageStore(...params),
    ...createPlanStore(...params),
    ...createAddOnsStore(...params)
}))



