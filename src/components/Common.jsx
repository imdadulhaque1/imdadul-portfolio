import React from "react";
import web from "../images/2.gif";
import { NavLink } from "react-router-dom";

const Common = () =>{
  return(
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
               <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                 <h1>
                   Welcome to Common Page <strong className="brand-name">Imdadul Haque</strong>
                 </h1>
                 <h2 className="my-3">
                   We are team of talented developer making websites
                 </h2>
                 <div className="mt-3">
                   <NavLink to="/service" className="btn-get-started">
                       {/* <button className="btn" type="button">Get Started</button> */}
                       Get Started
                    </NavLink>
                 </div>
               </div>

               <div className="col-lg-6 order-1 order-lg-2 header-img">
                 <img src={web} className="img-fluid animated" alt="Common Image" />
               </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
