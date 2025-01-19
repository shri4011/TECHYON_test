import { Button, Container, Grid2, Typography } from "@mui/material";
import React, { useState } from "react";
import BasicSelect from "../../components/CommonSelector";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import ProjectsLayout from "../../components/ProjectCard";
import ProjectTable from "../../components/allProjectTable/AllProjectTable";
import AllTasksTable from "../../components/allTasksTable/AllTasksTable";
import FilterAltSharpIcon from "@mui/icons-material/FilterAltSharp";

function Home() {
  const [selectorValue, setSelectorValue] = useState("");
  const [allProjectsShowInGridform, setAllProjectsShowInGridform] =
    useState(true);

  const [allTasksShowInGridform, setAllTasksShowInGridform] = useState(true);

  const [manu] = useState([
    {
      mValue: "all_project",
      mTitle: "All Project",
    },
  ]);

  const allProjects = [
    { label: "Not Started", count: 3, color: "", showTag: false },
    { label: "In Progress", count: 3, color: "primary", showTag: false },
    { label: "Archived", count: 3, color: "warning", showTag: false },
    { label: "Completed", count: 3, color: "success", showTag: false },
  ];

  const allTasks = [
    {
      label: "Not Started",
      count: 3,
      color: "",
      showTag: true,
      tagTextCode: "On Track",
      tagColorCode: "#D6B70A",
      tagLabelColor: "#ffffff",
    },
    {
      label: "In Review",
      count: 3,
      color: "primary",
      showTag: true,
      tagTextCode: "Delayed",
      tagColorCode: "#ff0000",
      tagLabelColor: "#ffffff",
    },
    {
      label: "In Revision",
      count: 3,
      color: "warning",
      showTag: true,
      tagTextCode: "On Track",
      tagColorCode: "#D6B70A",
      tagLabelColor: "#ffffff",
    },
    {
      label: "Completed",
      count: 3,
      color: "success",
      showTag: true,
      tagTextCode: "Completed",
      tagColorCode: "#D6B70A",
      tagLabelColor: "#ffffff",
    },
  ];

  const handelOnChage = (e) => {
    setSelectorValue(e.target.value);
  };

  const showAllProjectInGridForm = (status) => {
    setAllProjectsShowInGridform(status);
  };

  const showAllTasksInGridForm = (status) => {
    setAllTasksShowInGridform(status);
  };

  return (
    <>
      <Container>
        <Grid2>
          <Grid2
            display={"flex"}
            justifyContent={"space-between"}
            alignContent={"center"}
          >
            <Grid2
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Typography variant="h4" mr={2}>
                Projects
              </Typography>

              <Button
                variant="contained"
                sx={{
                  background: "#2E3B55",
                  color: "white",
                  textTransform: "none",
                }}
              >
                + Projects
              </Button>
            </Grid2>
            <Grid2
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Typography variant="p">Dashboard / Project Overview</Typography>
            </Grid2>
          </Grid2>
          <Grid2
            display={"flex"}
            justifyContent={"space-between"}
            alignContent={"center"}
            mt={5}
          >
            <Grid2
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
              mb={3}
            >
              <BasicSelect
                label={"All Project"}
                value={selectorValue}
                menuList={manu}
                onChange={(e) => handelOnChage(e)}
              />
            </Grid2>
            <Grid2
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Button
                onClick={() => showAllProjectInGridForm(true)}
                sx={{
                  background: "#2E3B55",
                  height: "45px",
                  marginRight: "2px",
                }}
              >
                <CalendarViewDayIcon
                  sx={{ fontSize: "25px", color: "white" }}
                />
              </Button>
              <Button
                sx={{ background: "#2E3B55", height: "45px" }}
                onClick={() => showAllProjectInGridForm(false)}
              >
                <CalendarViewMonthIcon
                  sx={{ fontSize: "25px", color: "white" }}
                />
              </Button>
              {!allProjectsShowInGridform && (
                <Button
                  sx={{
                    background: "#2E3B55",
                    height: "45px",
                    marginLeft: "2px",
                  }}
                  onClick={() => showAllProjectInGridForm(false)}
                >
                  <FilterAltSharpIcon
                    sx={{ fontSize: "25px", color: "white" }}
                  />
                </Button>
              )}
            </Grid2>
          </Grid2>

          <Grid2>
            {allProjectsShowInGridform ? (
              <ProjectsLayout list={allProjects} />
            ) : (
              <ProjectTable />
            )}
          </Grid2>

          <Grid2
            display={"flex"}
            justifyContent={"space-between"}
            alignContent={"center"}
            mt={5}
          >
            <Grid2
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
              mb={3}
            >
              <BasicSelect
                label={"All Tasks"}
                value={selectorValue}
                menuList={manu}
                onChange={(e) => handelOnChage(e)}
              />
            </Grid2>
            <Grid2
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
            >
              <Button
                onClick={() => showAllTasksInGridForm(true)}
                sx={{
                  background: "#2E3B55",
                  height: "45px",
                  marginRight: "2px",
                }}
              >
                <CalendarViewDayIcon
                  sx={{ fontSize: "25px", color: "white" }}
                />
              </Button>
              <Button
                sx={{ background: "#2E3B55", height: "45px" }}
                onClick={() => showAllTasksInGridForm(false)}
              >
                <CalendarViewMonthIcon
                  sx={{ fontSize: "25px", color: "white" }}
                />
              </Button>
              {!allTasksShowInGridform && (
                <Button
                  sx={{
                    background: "#2E3B55",
                    height: "45px",
                    marginLeft: "2px",
                  }}
                  onClick={() => showAllProjectInGridForm(false)}
                >
                  <FilterAltSharpIcon
                    sx={{ fontSize: "25px", color: "white" }}
                  />
                </Button>
              )}
            </Grid2>
          </Grid2>
          <Grid2>
            {allTasksShowInGridform ? (
              <ProjectsLayout list={allTasks} />
            ) : (
              <AllTasksTable />
            )}
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}

export default Home;
