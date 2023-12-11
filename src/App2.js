
import App from "./App"
import Layout from "./layout"
import { useEffect,useState,Ref } from "react"
import { Suspense } from "react"

const Application = ()=>{

    const [paint,setPaint] = useState('#DB9B3A')
    const [wheel,setWheel] = useState('black')

    useEffect(()=>{
        console.log(paint,wheel,'here')
    },[paint,wheel])

    return(<>
    
    <Suspense fallback={null}>
    <div className='flex flex-row-reverse h-screen w-screen bg-black overflow-hidden'>
      <div className='w-[70%]'>
        <App setWheel={setWheel} wheel={wheel} paint={paint} setPaint={setPaint}/>
      </div>
      <div className='w-[30%]'>
        <Layout setWheel={setWheel} wheel={wheel} paint={paint} setPaint={setPaint}/>
      </div>
    </div>
    {/* <Leva collapsed /> */}
  </Suspense>
    </>)
}

export default Application