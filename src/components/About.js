import React from "react";
import Studentdetails from "./Studentdetails";

function About() {
  return (
    <>
      <div className="row">
        <div className="col">
            <Studentdetails name= "David" email= "david@gmail.com" age={12}/>
        </div>
        <div className="col">
        <Studentdetails name= "Eugine" email= "eugin@gmail.com" age={13}/>

        </div>
        <div className="col">
        <Studentdetails name= "Mike" email= "mike@gmail.com" age={14}/>

        </div>
      </div>
      
    </>
  );
}

export default About;
