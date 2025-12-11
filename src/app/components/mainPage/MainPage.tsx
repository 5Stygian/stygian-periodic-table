import { JSX } from 'react';
import { HasChildren } from '../../util/types';

export default function MainPage({ children }: HasChildren): JSX.Element {
  return (
    <div className="float-left pl-8 pt-12">
      {children}
    </div>
  );
}