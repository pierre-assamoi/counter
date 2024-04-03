import { useState } from "react"

const Home = () => {
  const [counter, setCounter] = useState(0)


  const changeCounter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.value === '+') setCounter(prev => prev + 1)
    if ((e.currentTarget.value === '-') && counter > 0) setCounter(prev => prev - 1)
  }

  return (
    <>
      <div className=' h-screen flex flex-col bg-slate-600 items-center justify-center text-slate-200'>
        <h1 className=' text-4xl font-bold'>Counter</h1>
        <p className='text-2xl'>This is my standard counter app.</p>
        <h1 className={counter > 10 ? `text-4xl` : 'text-2xl'}>{counter}</h1>
        <div className="flex mt-4 w-24 items-center justify-around">
          <button
            className="px-4 py-2 border-2 border-slate-200 rounded h-[40px] w-[40px] flex items-center justify-center"
            onClick={changeCounter}
            value={'+'}>+</button>
          <button
            className="px-4 py-2 border-2 border-slate-200 rounded h-[40px] w-[40px] flex items-center justify-center"
            onClick={changeCounter}
            value={'-'}>-</button>
        </div>
      </div>
    </>
  )
}

export default Home
