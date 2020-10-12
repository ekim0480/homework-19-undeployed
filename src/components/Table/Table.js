import React from "react";
import Body from "../Body/Body";
import "./Table.css";

function Table({ headings, users, handleSort }) {
  return (
    <div className="datatable mt-5">
      <table id="table" className="table table-striped">
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
        <Body users={users} />
      </table>
    </div>
  );
}

export default Table;
