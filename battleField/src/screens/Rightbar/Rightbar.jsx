
import React, { useState } from 'react'
import "./Righbar.css"
import join from "../../images/join.png";
import squad from "../../images/squad.png";
import friend1 from "../../images/friend profile pic.png";
import friend2 from "../../images/friend profile pic (1).png";
import offline from "../../images/offline.png";
import online from "../../images/online.png";

const Rightbar = () => {
  
  const  [isVisible , setIsVisible] = useState(false)
  
  const handleMouseEnter = () =>{
    setIsVisible(true)
    console.log('setIsVisible :: ',isVisible);
  }
  const CommonComponent = ({src1,src2 ,name, type ,status}) => {
    return(
      <div className='firstDiv'>
        <div className='header' >
        <img src={src1} alt='rightbar' className='icon' style={{height:10}} />
        {
          isVisible && <div className="type" >{type}</div>
        }
        </div>
        <div className='content'>
        <img src={src2} alt='rightbar' style={{height:40,width:"20%"}}/>
        {isVisible && <div className='info'>
            <div className='name'>{name}</div>
            <div className='name'>{status}</div>
          </div>}
        </div>
        </div>
    )
  }
  return (
    <div className="main-rightbar" onMouseEnter={handleMouseEnter} onMouseLeave={()=>{setIsVisible(false)}}>
        <CommonComponent 
            src1={squad} 
            src2={join} 
            type={'SQUAD'}
            name={'Squad Join'}
            />
        <CommonComponent src1={online} src2={friend1} 
     
        type={'SQUAD'}
        title={'Squad Join'}
        name={'MaryJane'}
        status={'Online'}
        />
        <CommonComponent src1={offline} src2={friend2} 
        
        type={'SQUAD'}
        title={'Squad Join'}
        name={'420'}
        status={'Offline'}/>
    </div>
  )
}

export default Rightbar