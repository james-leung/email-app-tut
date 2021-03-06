// SurveyField contains logic to render a single label and text input

import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    // Take Event Handlers from redux-form and wire them up to default input tag

    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
