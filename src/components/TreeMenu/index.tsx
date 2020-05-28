import React, { useCallback } from "react";
import { TreeProps } from "./props";
import { BranchedBranch, BranchlessBranch } from "./Branches";

import { tree } from "./tree";

import { Container } from "./styles";

const TreeMenu: React.FC = () => {
  const buildBranches = useCallback(
    (branches: TreeProps[]) => (
      <ol>
        {branches.map((branch) =>
          branch.branches ? (
            <BranchedBranch key={branch.id} branch={branch}>
              {buildBranches(branch.branches)}
            </BranchedBranch>
          ) : (
            <BranchlessBranch key={branch.id} branch={branch} />
          )
        )}
      </ol>
    ),
    []
  );

  return <Container>{buildBranches(tree)}</Container>;
};

export default TreeMenu;
