import React from 'react'
import experience from '../data/experience.json'

const Experience = () => {
  return (
    <>
     <div className="container ex">
      <h1>Experience</h1>
      {
        experience.map((data)=>{
          return(
            <>
            <div key={data.id} className="ex-items text-center my-5">
                <div className="left">
                  <img src={`assets/${data.imageSrc}`} alt="" />
                </div>
                <div className="right">
                  <h4>{data.role}</h4>
                  <h5><span style={{color:'yellowgreen'}}>{data.startDate}{" "}{data.endDate}</span><span style={{color:'yellow'}}> {data.location}</span></h5>
                  <h6 style={{color:'yellow'}}>{data.experiences[0]}</h6>
                  <h6  style={{color:'yellow'}}>{data.experiences[1]}</h6>
                </div>
            </div>
            </>
          )
        })
      }
     </div>
    </>
  )
}

export default Experience
