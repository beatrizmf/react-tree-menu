import React, { useState, useCallback } from "react";
import { TreeProps } from "./props";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface BranchProps {
  branch: TreeProps;
}

export const BranchedBranch: React.FC<BranchProps> = ({ branch, children }) => {
  const [open, setOpen] = useState(false);

  const handleToggleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      setOpen(!open);
    },
    [open]
  );

  return (
    <li
      onClick={handleToggleClick}
      className={open ? "has-branch open" : "has-branch"}
    >
      <span>
        {branch.name}
        {open ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
      </span>

      {children}
    </li>
  );
};

export const BranchlessBranch: React.FC<BranchProps> = ({ branch }) => (
  <li>
    <span>{branch.name}</span>
  </li>
);
