import React, { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Button,
  Avatar,
  Container,
  Grid2,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./allTasksTable.scss";

const statusColors = {
  "In Review": "#2196f3",
  "On Track": "#ffeb3b",
  Delayed: "#f44336",
  "In Revision": "#607d8b",
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  sticky: {
    position: "sticky",
    left: 0,
    background: "white",
    boxShadow: "5px 2px 5px grey",
    borderRight: "2px solid black",
  },
  scroll: {
    overflow: "scroll",
    background: "white",
  },
});

function AllTaskTable() {
  const [reMountAllProjectTable, setReMountAllProjectTable] = useState(false);
  const [tableRow, setTableRow] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const renderAllProjectTable = useMemo(() => {
    return (
      <div className="table-container">
        <table className="pinned-columns">
          <thead>
            <tr>
              <th>ID</th>
              <th>Task Name</th>
            </tr>
          </thead>
          <tbody>
            {tableRow.map((ele) => (
              <tr>
                <td>T1</td>
                <td>Task Number 1</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="scrollable-table">
          <table>
            {tableRow.map((ele) => (
              <thead>
                <tr>
                  <th>Associated Team</th>
                  <th>Owner</th>
                  <th>Status</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Exp. Start Date</th>
                  <th>Exp. End Date</th>
                  <th>End Date</th>
                  <th>Duration</th>
                  <th>众 Priority</th>
                  <th>• Created By</th>
                  <th>Task Completed</th>
                  <th>% Sub Task Completed</th>
                  <th>Completion Date</th>
                  <th>© Work Hours</th>
                  <th>Deference</th>
                  <th># Billing Type</th>
                  <th>Files count</th>
                  <th>Last Edited Date</th>
                  <th> Requirement Id</th>
                  <th>Files count</th>
                </tr>
              </thead>
            ))}

            {/* <tbody>
              <tr>
                <td>Not Associated</td>
                <td>Techyon</td>
                <td>In Review</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>Not Associated</td>
                <td>Techyon</td>
                <td>In Review</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
              </tr>
              <tr>
                <td>Not Associated</td>
                <td>Techyon</td>
                <td>On Track</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>Not Associated</td>
                <td>Techyon</td>
                <td>In Review</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
                <td>00-00-2024</td>
              </tr>
            </tbody> */}
          </table>
        </div>
      </div>
    );
  }, [reMountAllProjectTable]);

  return (
    <>
      <Grid2>{renderAllProjectTable}</Grid2>
    </>
  );
}

export default AllTaskTable;
