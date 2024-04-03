import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/counter/'} element={<Home />} />
      </Routes>
    </>
  )
}

export default App
