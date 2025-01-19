import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  LinearProgress,
  Button,
  Avatar,
  Grid2,
} from "@mui/material";
import "./allProjectTable.scss";

const projects = [
  {
    id: 1,
    name: "Techyon Software",
    percentage: 50,
    owner: "Techyon",
    tasksCompleted: 10,
    tasksTotal: 20,
    status: "Not Started",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 2,
    name: "Techyon Software",
    percentage: 50,
    owner: "Techyon",
    tasksCompleted: 10,
    tasksTotal: 20,
    status: "In Progress",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 3,
    name: "Techyon Software",
    percentage: 50,
    owner: "Techyon",
    tasksCompleted: 10,
    tasksTotal: 20,
    status: "Completed",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 4,
    name: "Techyon Software",
    percentage: 50,
    owner: "Techyon",
    tasksCompleted: 10,
    tasksTotal: 20,
    status: "Archived",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 5,
    name: "Techyon Software",
    percentage: 50,
    owner: "Techyon",
    tasksCompleted: 10,
    tasksTotal: 20,
    status: "Archived",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 6,
    name: "Techyon Software",
    percentage: 50,
    owner: "Techyon",
    tasksCompleted: 10,
    tasksTotal: 20,
    status: "Archived",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 7,
    name: "Techyon Software",
    percentage: 50,
    owner: "Techyon",
    tasksCompleted: 10,
    tasksTotal: 20,
    status: "Archived",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 8,
    name: "Techyon Software",
    percentage: 50,
    owner: "Techyon",
    tasksCompleted: 10,
    tasksTotal: 20,
    status: "Archived",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 9,
    name: "Techyon Software",
    percentage: 50,
    owner: "Techyon",
    tasksCompleted: 10,
    tasksTotal: 20,
    status: "Archived",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  {
    id: 10,
    name: "Techyon Software",
    percentage: 50,
    owner: "Techyon",
    tasksComphleted: 10,
    tasksTotal: 20,
    status: "Archived",
    startDate: "29/10/2024",
    endDate: "29/10/2025",
  },
  // Add more rows as needed
];

const statusColors = {
  "Not Started": "#b0bec5",
  "In Progress": "#2196f3",
  Completed: "#4caf50",
  Archived: "#78909c",
};

const ProjectTable = () => {
  return (
    <Grid2>
      <TableContainer>
        <table className="project-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Project Name</th>
              <th>%</th>
              <th>Owner</th>
              <th>Tasks</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(
              ({
                id,
                name,
                startDate,
                endDate,
                tasksComphleted,
                status,
                percentage,
                owner,
              }) => (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{percentage}%</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Avatar />
                      {owner}
                    </div>
                  </td>
                  <td>
                    <div className="progress-bar">
                      <div className="progress" style={{ width: "50%" }}></div>
                      <span>50%</span>
                    </div>
                  </td>
                  <td className="status not-started">{status}</td>
                  <td>{startDate}</td>
                  <td>{endDate}</td>
                </tr>
              )
            )}
            {/* <tr>
              <td>1</td>
              <td>Techyon Software</td>
              <td>50%</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar />
                  Techyon
                </div>
              </td>
              <td>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "50%" }}></div>
                  <span>50%</span>
                </div>
              </td>
              <td className="status not-started">Not Started</td>
              <td>29/10/2024</td>
              <td>29/10/2025</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Techyon Software</td>
              <td>50%</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar />
                  Techyon
                </div>
              </td>
              <td>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "50%" }}></div>
                  <span>50%</span>
                </div>
              </td>
              <td className="status in-progress">In Progress</td>
              <td>29/10/2024</td>
              <td>29/10/2025</td>
            </tr> */}
          </tbody>
        </table>
      </TableContainer>
    </Grid2>
  );
};

export default ProjectTable;
