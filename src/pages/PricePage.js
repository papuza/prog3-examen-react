import React from "react";
import { useParams } from "react-router-dom";

const PricePage = () => {
  const { id } = useParams();

  return (
    <div>
      Price details
      {id}
    </div>
  );
};

export default PricePage;
