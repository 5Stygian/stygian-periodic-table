import { JSX } from "react";

interface SidebarElementProps {
  text: string;
  color?: string;
};

export default function SidebarElement({
  text,
  color = "text-cyan-50"
}: SidebarElementProps): JSX.Element {
  const style: string = `display-inline mx-8 my-12 px-1.5 py-px ${color} rounded-lg border-2 border-sky-50 hover:bg-sky-600`;

  return (
    <div className={style}>
      {text}
    </div>
  );
}
