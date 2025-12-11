interface ElementProps {
  // element data
  symbol: string;
  name: string;
  atomicNumber: number;
  
  // display
  color: string;
}

export default function Element({
  symbol,
  name,
  atomicNumber,
  color,
}: ElementProps) {
  const blockStyle = `min-w-25 min-h-25 border-2 shadow-2x1 shadow-${color} text-${color}`;

  return (
    <div className={blockStyle}>
      <span className="text-lg pl-1.5">{atomicNumber}</span>
      <div className="text-center text-5xl -mt-2">{symbol}</div>
      <div className="text-center">{name}</div>
    </div>
  );
}
