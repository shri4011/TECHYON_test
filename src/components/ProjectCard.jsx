import React, { useMemo } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  AvatarGroup,
  Avatar,
  Grid2,
  Chip,
  Button,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
function ProjectCard({
  showTag,
  index,
  status,
  tagColorCode,
  tagTextColor,
  tagText,
}) {
  return (
    <>
      <Card
        style={{
          margin: "7px",
          boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
          position: "relative",
        }}
      >
        <CardContent>
          <Grid2
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            pt={2}
          >
            <Typography variant="h6">Project Name</Typography>
            <Typography variant="body2" color="textSecondary">
              ID: P-11
            </Typography>
          </Grid2>

          <Box my={2}>
            <LinearProgress
              variant="determinate"
              color="success"
              value={50}
              style={{ height: "8px", borderRadius: "4px" }}
            />
            <Typography variant="body2" color="textSecondary">
              50%
            </Typography>
          </Box>
          <Grid2 display={"flex"}>
            <Typography variant="body2">01/01/2024 - 31/01/2024</Typography>
          </Grid2>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={2}
          >
            <AvatarGroup max={4}>
              <Avatar alt="Person 1" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Person 2" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Person 3" src="/static/images/avatar/3.jpg" />
            </AvatarGroup>
            <Grid2 display={"flex"} justifyContent={"center"}>
              <AttachFileIcon />
              <Typography variant="body2">12 Files</Typography>
            </Grid2>
          </Box>
          {showTag && index === 0 && status !== "Completed" && (
            <Grid2
              sx={{
                position: "absolute",
                right: "0px",
                top: "10px",
                background: tagColorCode,
                padding: "1px 18px",
                borderRadius: "2px",
              }}
            >
              <Typography
                variant="p"
                sx={{ color: tagTextColor, fontSize: "13px" }}
              >
                {tagText}
              </Typography>
            </Grid2>
          )}
        </CardContent>
      </Card>
    </>
  );
}

function ProjectsLayout({ list }) {
  const renderCards = useMemo(() => {
    return list.map((status, index) => (
      <Grid2 item size={{ xs: 12, md: 6, lg: 3 }} key={index}>
        <Grid2 display={"flex"} mb={2}>
          <Chip
            label={`${status.label} ${status.count}`}
            color={status.color}
          />
        </Grid2>
        {Array.from({ length: status.count }).map((_, idx) => (
          <ProjectCard
            key={idx}
            status={status.label}
            showTag={status.showTag}
            index={idx}
            tagColorCode={status.tagColorCode}
            tagTextColor={status.tagLabelColor}
            tagText={status.tagTextCode}
          />
        ))}
      </Grid2>
    ));
  }, [list]);

  return (
    <>
      <Box display="flex" height="100vh">
        <Box flex={1} bgcolor="#f9f9f9" sx={{ overflow: "scroll" }}>
          <Box p={3}>
            <Grid2 container spacing={2}>
              {renderCards}
            </Grid2>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProjectsLayout;
