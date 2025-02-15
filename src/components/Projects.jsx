import React from "react";
import projects from "../data/projects.json";
const Projects = () => {
  return (
    <>
      <div className="container projects">
        <h1>Projects</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {projects.map((data) => {
            return (
              <>
                <div key={data.key} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
                  <div className="card bg-dark text-light" style={{width:"18rem", border:"1px solid yellow",boxShadow:"5px 5px 10px 10px rgba(101,175,10,0.5)"}}>
                    <div className="img d-flex justify-content-center align-content-center p-3">
                    <img src={data.imageSrc} className="card-img-top" alt=""
                    style={{width:"200px",
                      height:"200px",
                      border:"2px solid yellow",
                      borderRadius:"10px"
                    }}/>
                
                    </div>
                   <div className="card-body text-center">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">
                       {data.description}
                      </p>
                      <a href="#" class="btn btn-primary mx-3">
                       Demo
                      </a>
                      <a href="#" class="btn btn-warning">
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
