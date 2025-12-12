/** page content that is not in the sidebar */

import { JSX } from 'react';
import { HasChildren } from '../../util/types';

export default function MainPage({ children }: HasChildren): JSX.Element {
  return (
    <div className="float-left w-full pl-1 -pt-24">
      {children}
    </div>
  );
}