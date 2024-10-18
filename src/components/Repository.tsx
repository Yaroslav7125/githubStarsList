import { FC } from "react";
import { nFormatter } from "../utils";
import { ExternalLink, Star } from "lucide-react";

interface RepositoryProps {
  name: string;
  starCount: number;
  href: string;
  description: string;
}

export const Repository: FC<RepositoryProps> = (props) => {
  return (
    <div className=" flex flex-col border p-7 gap-2 rounded-lg">
      <div className="flex items-center gap-2">
        <h1> {props.name} </h1>
        <a href={props.href} target="_blank" className="inline-block">
          <ExternalLink />
        </a>
      </div>
      <p>{props.description}</p>
      <div className="flex gap-3">
        <Star color="gold" fill="gold" />
        <span> {nFormatter(props.starCount)} </span>
      </div>
    </div>
  );
};
