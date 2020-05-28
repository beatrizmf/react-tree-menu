import { uuid } from "uuidv4";
import { TreeProps } from "./props";

export const tree: TreeProps[] = [
  {
    id: uuid(),
    name: "Electronics",
    branches: [
      {
        id: uuid(),
        name: "Computers",
        branches: [
          { id: uuid(), name: "Desktops" },
          {
            id: uuid(),
            name: "Portables",
            branches: [
              { id: uuid(), name: "Smartphones" },
              {
                id: uuid(),
                name: "Tablets",
                branches: [{ id: uuid(), name: "Apple" }],
              },
            ],
          },
        ],
      },
      {
        id: uuid(),
        name: "TV",
        branches: [
          {
            id: uuid(),
            name: "Accessories",
            branches: [{ id: uuid(), name: "Remotes" }],
          },
        ],
      },
    ],
  },
  { id: uuid(), name: "Camping" },
];
