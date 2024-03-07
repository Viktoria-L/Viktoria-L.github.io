import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"


const Root = () => {
  return (

    <div className="bg-my-400 h-screen flex justify-between flex-col m-0 p-0 overflow-x-hidden overflow-y-auto scroll-smooth relative min-h-screen">
      <Header />     
      <Outlet />  
      <Footer />
    </div>
    

  )
}

export default Root