import React from "react";

const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <label>
        {" "}
        Filter
        <input name="filter" type="text" value={filter} onChange={onChange} />
      </label>
    </div>
  );
};

export default Filter;
