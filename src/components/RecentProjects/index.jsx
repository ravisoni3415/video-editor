import React from "react";
import VideoEditorConfig from "../../videoEditorConfig.json";
import { useNavigate } from "react-router-dom";
import Video from "../Common/Video";

import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const RecentVideos = () => {
  const navigate = useNavigate();

  const navigateToProject = (path) => {
    navigate(path);
  };

  return (
    <>
      <h2>Recent Videos</h2>
      <Flex>
        {VideoEditorConfig.projects.map((config) => {
          return (
            <Video
              key={config.projectID}
              config={config}
              handleVideoClick={navigateToProject}
              width="320"
              height="180"
            />
          );
        })}
      </Flex>
    </>
  );
};

export default RecentVideos;
