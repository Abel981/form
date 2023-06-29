import UserInfo from './personal'
import Plan from './plans'
import AddOns from './AddOns'
import Finish from './finish'
import { useCombinedStore } from './Store'
import './App.css'

function App() {
  const {pageNumber} = useCombinedStore();
  
  const pageNo = pageNumber
  
  console.log('this is app component rendering');
  function renderSwitch(num) {
    switch (num) {
      case 1:
        return <UserInfo />
      case 2:
        return <Plan />
      case 3:
        return <AddOns />
      case 4:
        return <Finish />
    
      default:
        break;
    }
  }
  return (
   <>
   <div className='h-1/3 flex justify-center items-start bg-[url("/images/bg-sidebar-mobile.svg")] bg-no-repeat bg-cover p-5'>
      <div className='flex space-x-4 justify-center items-center'>

          <div className={`w-6 h-6 flex justify-center items-center text-sm rounded-full border ${ pageNo == 1?'bg-slate-300 text-black':'text-white '}`}>1</div>
          <div className={`w-6 h-6 flex justify-center items-center text-sm rounded-full border ${ pageNo === 2?'bg-slate-300 text-black':'text-white '}`}>2</div>
          <div className={`w-6 h-6 flex justify-center items-center text-sm rounded-full border ${ pageNo === 3?'bg-slate-300 text-black':'text-white '}`}>3</div>
          <div className={`w-6 h-6 flex justify-center items-center text-sm rounded-full border ${ pageNo === 4?'bg-slate-300 text-black':'text-white '}`}>4</div>
      </div>

   </div>
    {renderSwitch(pageNo)}
    
    
  
      {/* component */}
      {/* <div className={`flex  p-4 ${pageNo == 1 ? 'justify-end':'justify-between'}`}>
        <button className={`w-auto px-4 py-1 text-slate-500 hover:text-violet-900 ${pageNo == 1 ?'hidden':''}`}
          onClick={() => {
            if(pageNo-1 >=0) {pageDec()}
          }}
        >Go Back</button>
        <button className='w-auto px-4 py-1 bg-violet-800 text-white rounded-md hover:bg-violet-900'
          onClick={() => {
            if(pageNo+1 <=4) {pageInc()}
          }}
        >Next Step</button>
      </div> */}
   </>
  )
}

export default App
