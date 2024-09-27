import React from "react";
import { useState, useEffect } from "react";
function Contact() {
  const [resource, setResource] = useState("Post");

  useEffect(()=>{
    console.log("Something was rendered")
  },[resource])

  return (
    <>
      <div className="container my-5">
        <div>
          <button onClick={()=>{setResource("User")}}>user</button>
          <button onClick={()=>{setResource("Resource")}}>Resource</button>
          <button onClick={()=>{setResource("Post")}}>Post</button>
        </div>

        <div>{resource}</div>
      </div>
    </>
  );
}

export default Contact;
