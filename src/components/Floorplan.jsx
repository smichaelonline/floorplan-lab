import React from "react"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

function Floorplan(props) {
  return (
    <>
      <Kitchen /> 
      <LivingRoom />
      <Bedroom bedNum={1}/>
      <Bedroom bedNum={2}/>
      <Bedroom bedNum={3}/>
      <Bath size={'Half'}/> 
      <Bath size={'Full'}/> 
    </>
  )
}

export default Floorplan