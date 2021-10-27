import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";

const Displaytable = () => {
  const columns = [
    { title: "Name", field: "name" },
    { title: "Experinece", field: "experience" },
    { title: "SeeMore", field: "seemore" },
  ];
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    //let mount = true;
    const fetchdata = async () => {
      const res = await fetch(
        "https://6171c3fac20f3a001705fecd.mockapi.io/api/users"
      );
      const finalData = await res.json();

      finalData.forEach((value, index) => {
        // if (mount)
        {
          setTableData((tableData) => [
            ...tableData,
            {
              name: value.name,
              experience: value.experience,
              seemore: "showMore",
            },
          ]);
        }
      });
      return tableData;
    };
    fetchdata();
    // return () => {
    //   mount = false;
    // };
  }, []);

  return (
    <div>
      {/* {tableData && JSON.stringify(tableData)} */}
      <MaterialTable
        title="Material-Table"
        data={tableData}
        columns={columns}
      />
    </div>
  );
};

export default Displaytable;
