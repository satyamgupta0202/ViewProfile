import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProfileData from "./ProfileData";
const Displaytable = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const columns = [
    {
      title: "Name",
      field: "name",

      headerStyle: {
        backgroundColor: "#039be5",
      },
    },
    {
      title: "Experinece",
      field: "experience",
      headerStyle: {
        backgroundColor: "#039be5",
      },
    },
    {
      title: "SeeMore",
      field: "seemore",
      headerStyle: {
        backgroundColor: "#039be5",
      },
    },
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
              // ShowMore: <Link to={`/${value.id}`}> ShowMore</Link>,
              seemore: <a href={`/profile${value.id}`}>ShowMore</a>,
              // seemore: <a href={<ProfileData data={1} />}>Show More</a>,
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
        title="View My Profile"
        data={tableData}
        columns={columns}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
          }),
        }}
      />
    </div>
  );
};

export default Displaytable;
