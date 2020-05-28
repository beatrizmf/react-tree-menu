export interface TreeProps {
  id: string;
  name: string;
  branches?: TreeProps[];
}