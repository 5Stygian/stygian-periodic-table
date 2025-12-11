import { HasChildren } from '../../util/types';
import Element from './elements/element';

export default function PeriodicTable({ children }: HasChildren) {
  return (
    <div className="grid grid-cols-18 grid-rows-7 gap-2">
      <Element empty={true} />
      <Element symbol='H' name='Hydrogen' atomicNumber={1} color="gray-400" />
      {children}
    </div>
  );
}
