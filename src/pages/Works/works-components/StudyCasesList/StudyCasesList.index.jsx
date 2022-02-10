import React from "react";
import { Link } from "react-router-dom";
import studyCases from "../../../../datas/studyCases";

function StudyCasesList() {
  return (
    <div className="StudyCasesList">
      <div className="container">
        <p className="text-center mt-5">Retrouvez nos cas d'étude :</p>

        <div className=" w-full mx-12 flex justify-around">
          {studyCases.map((studyCase) => (
            <Link
              key={studyCase.slug}
              className="text-link font-bold text-lime-400"
              to={"/works/" + studyCase.slug}
            >
              {" "}
              {studyCase.name}{" "}
            </Link>
          ))}
          <br />
        </div>
        <br />
      </div>
    </div>
  );
}

export default StudyCasesList;
