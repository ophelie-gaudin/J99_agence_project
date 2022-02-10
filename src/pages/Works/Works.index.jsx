import React from "react";
import { Outlet } from "react-router-dom";
import StudyCasesList from "./works-components/StudyCasesList/StudyCasesList.index";

function Works() {
  return (
    <div className="Works">
      <div className="container !w-full">
        <h1>Au fil des années, nous avons pu accompagner les meilleurs. </h1>
        <p>
          Découvrez pas à pas comment nous avons été présent pour lancer vos
          marques préférées.
        </p>
        <br />
        <hr />
        <StudyCasesList />
        <Outlet />
        {/* Outlet renders the child routes element if there is one. We 
        will discuss the child routes later when declaring all the routes. */}
      </div>
    </div>
  );
}

export default Works;
