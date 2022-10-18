import React from "react";

function Filters(props: any) {
  const showAll = () => {
    props.dispatch({ type: "SHOW_ALL" });
  };
  const showActive = () => {
    props.dispatch({ type: "SHOW_ACTIVE" });
  };
  const showCompleted = () => {
    props.dispatch({ type: "SHOW_COMPLETED" });
  };
  return (
    <div className="filters btn-group stack-exception">
      <button type="button" className="btn toggle-btn" onClick={showAll}>
        All
      </button>
      <button type="button" className="btn toggle-btn" onClick={showActive}>
        Active
      </button>
      <button type="button" className="btn toggle-btn" onClick={showCompleted}>
        Completed
      </button>
    </div>
  );
}

export default Filters;
