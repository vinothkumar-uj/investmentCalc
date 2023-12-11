import { useState } from "react"

import Header from "./Component/Header"
import InvestCalc from "./Component/CalcForm"
import Result from "./Component/Result"

function App() {
  const [initialInvest,setInvest]=useState({
    'iniInvest':10000,
    'annInvest':1200,
    'expReturn':6,
    'duration':5
})
function changingEntries(entriesKey,entriesVal){
   setInvest(prevEntry=>({
    ...prevEntry,
    [entriesKey]:+entriesVal
   }))
}
  return <>
    <Header/>
    <InvestCalc currEntries={initialInvest} changingEntries={changingEntries}/>
    <Result initialInvest={initialInvest}/>
  </>
  
}

export default App
