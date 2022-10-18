import React from "react";

const Filters: React.FC<{ dispatch: any }> = React.memo(
  ({ dispatch }): JSX.Element => {
    const showAll = React.useCallback(() => {
      dispatch({ type: "SHOW_ALL" });
    }, [dispatch]);
    const showActive = React.useCallback(() => {
      dispatch({ type: "SHOW_ACTIVE" });
    }, [dispatch]);
    const showCompleted = React.useCallback(() => {
      dispatch({ type: "SHOW_COMPLETED" });
    }, []);
    return (
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" onClick={showAll}>
          All
        </button>
        <button type="button" className="btn toggle-btn" onClick={showActive}>
          Active
        </button>
        <button
          type="button"
          className="btn toggle-btn"
          onClick={showCompleted}
        >
          Completed
        </button>
      </div>
    );
  }
);

export default Filters;
