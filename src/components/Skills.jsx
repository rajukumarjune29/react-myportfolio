import React from "react";
import skills from "../data/skills.json";
const Skills = () => {
  return (
    <>
      <div className="container skills">
        <h1>Skills</h1>
        <div className="items">
        {skills.map((data) => {
          return (
            <> 
                <div key={data.id} className="item">
                  <img src={`assets/${data.imageSrc}`} alt="" />
                  <h5>{data.title}</h5>
                </div>
              
            </>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default Skills;
