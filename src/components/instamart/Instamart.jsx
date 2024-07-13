import React, { useState } from 'react'

const Section = ({title, description, isVisible, setISVisible})=>{
  // const [isVisible, setISVisible] = useState(false)
  console.log(isVisible, 'isvisble')
  return(
    // This featurs is known as Accordion 
    <div style={{border:'1px solid black', padding:"5px"}}>
      <h3 >{title}</h3>
      <button onClick={()=>setISVisible(!isVisible)}>
        {isVisible?'Hide' : 'Show'}
      </button>
      {
        isVisible&& <p>{description}</p>
      }

    </div>

  )
}

const Instamart = () => {
  const [visibleSection, setVisisbleSection] = useState("")
  return (
    <div>
        <h1>Instamart</h1>
        <Section title={"About Instamart"}  description={"It is India's last minute app here you can order 100000+ products we can delivered whithin 30 mins!!"}
         isVisible={visibleSection==='about'}
         setISVisible={()=>setVisisbleSection('about')}
        />
        <Section title={"Team Instamart"}  description={"It is India's last minute app here you can order 100000+ products we can delivered whithin 30 mins!!"}
        isVisible={visibleSection==='team'}
        setISVisible={()=>setVisisbleSection('team')}
        />

        
    </div>
  )
}

export default Instamart