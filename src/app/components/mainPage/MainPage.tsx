/** page content that is not in the sidebar */

import { JSX } from 'react';
import { HasChildren } from '../../util/types';

export default function MainPage({ children }: HasChildren): JSX.Element {
  return (
    <div className="float-left pl-1 pt-12">
      {children}
    </div>
  );
}