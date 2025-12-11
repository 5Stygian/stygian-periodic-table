import { JSX } from 'react';
import { HasChildren } from '../../util/types';

interface SidebarElementProps {
  text: string;
  color?: string;
};

export function SidebarElement({
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

export default function Sidebar({ children }: HasChildren): JSX.Element {
  return (
    <aside className="float-left min-h-screen w-1/5 bg-sky-950 border-solid border-r-4 border-cyan-700">
      {children}
    </aside>
  );
}