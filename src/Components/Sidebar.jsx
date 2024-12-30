import React, {useState, useEffect} from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
    const [switchSiderbar, setSwitchSidebar] = useState(false)

    return(
        <>
            <div className={`h-screen ${switchSiderbar ? 'w-1/5' : 'w-1/12'} 
                bg-[#1F2937] text-white transition-all duration-300 ease-in-out`}>       
                <div className="cont-test flex justify-end p-3">
                    <i className={`bi bi-layout-sidebar-inset${!switchSiderbar ?'-reverse':''} text-[25px] cursor-pointer`} 
                        onClick={()=>setSwitchSidebar(prev=>!prev)}></i>
                </div>
            </div>
        </>
    )
}

export default Sidebar