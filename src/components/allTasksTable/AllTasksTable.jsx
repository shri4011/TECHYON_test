import React from "react";
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
    // position: "sticky",
    // left: 0,
    overflow: "scroll",
    background: "white",
    // boxShadow: "5px 2px 5px grey",
    // borderRight: "2px solid black"
  },
});

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <>
      <Grid2>
        {/* <TableContainer> */}
        {/* <table className="all-project-table ">
          <thead className="all-project-thead">
            <tr className="all-project-tr">
              <th className="all-project-th">Column 1</th>
              <th className="all-project-th">Column 2</th>
              <th className="all-project-th">Column 3</th>
              <th className="all-project-th">Column 4</th>
              <th className="all-project-th">Column 4</th>
              <th className="all-project-th">Column 5</th>
              <th className="all-project-th">Column 6</th>
              <th className="all-project-th">Column 1</th>
              <th className="all-project-th">Column 2</th>
              <th className="all-project-th">Column 3</th>
              <th className="all-project-th">Column 4</th>
              <th className="all-project-th">Column 5</th>
              <th className="all-project-th">Column 6</th>
            </tr>
          </thead>
          <tbody className="all-project-tbody">
            <tr className="all-project-tr">
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn 4</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
            </tr>
            <tr className="all-project-tr">
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn 4</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
            </tr>
            <tr className="all-project-tr">
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn 4</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
            </tr>
            <tr className="all-project-tr">
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn 4</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
            </tr>
            <tr className="all-project-tr">
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn 4</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
            </tr>
            <tr className="all-project-tr">
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn 4</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
            </tr>
            <tr className="all-project-tr">
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn 4</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
            </tr>
            <tr className="all-project-tr">
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn 4</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
            </tr>
            <tr className="all-project-tr">
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn 4</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
            </tr>
            <tr className="all-project-tr">
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
              <td className="all-project-td">Coulumn 1</td>
              <td className="all-project-td">Coulumn 2</td>
              <td className="all-project-td">Coulumn 3</td>
              <td className="all-project-td">Coulumn 4</td>
              <td className="all-project-td">Coulumn 5</td>
              <td className="all-project-td">Coulumn 6</td>
            </tr>
          </tbody>
        </table> */}
        <div class="table-container">
          <table class="pinned-columns">
            <thead>
              <tr>
                <th>ID</th>
                <th>Task Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>T1</td>
                <td>Task Number 1</td>
              </tr>
              <tr>
                <td>T1</td>
                <td>Task Number 1</td>
              </tr>
            </tbody>
          </table>
          <div class="scrollable-table">
            <table>
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
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>

        {/* </TableContainer> */}
      </Grid2>
    </>
  );
}
