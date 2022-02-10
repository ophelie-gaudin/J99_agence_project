import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import studyCases from "../../../../datas/studyCases";

function StudyCase() {
  const { studyCaseSlug } = useParams();
  const [currentStudyCase, setCurrentStudyCase] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch study case using the studyCaseSlug
    const foundCase = studyCases.find(
      (studyCase) => studyCase.slug === studyCaseSlug
    );
    setCurrentStudyCase(foundCase);
    setLoading(false);
    console.log(foundCase);
  }, [studyCaseSlug]);

  if (loading) {
    return <div>En cours de chargement...</div>;
  }

  return (
    <div className="StudyCase w-full">
      <div className="container w-full">
        <div className="border border-black w-[60%] p-4 mx-auto">
          <h1 className="mt-5">{currentStudyCase.title}</h1>
          {/* <h6 className="mb-5">The study case slug is, {studyCaseSlug}</h6> */}
          <p>{currentStudyCase.description}</p>
        </div>
      </div>
    </div>
  );
}

export default StudyCase;
