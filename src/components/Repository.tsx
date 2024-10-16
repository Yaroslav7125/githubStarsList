import { FC } from "react";

interface RepositoryProps {
  name: string;
  starCount: string;
}

export const Repository: FC<RepositoryProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        padding: "30px",
        gap: "8px",
      }}
    >
      <h1> {props.name} </h1>
      <div> {props.starCount} </div>
    </div>
  );
};
