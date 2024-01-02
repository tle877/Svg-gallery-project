import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CommentCard from "./CommentCard";
const RepliesSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={'mt-5'}>
      {expanded ? (
        <span onClick={handleExpandClick}>
          Wrap up 34 replies <ExpandLessIcon />
        </span>
      ) : (
        <span onClick={handleExpandClick}>
          Expand 34 replies <ExpandMoreIcon />
        </span>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CommentCard />
      </Collapse>
    </div>
  );
};

export default RepliesSection;
