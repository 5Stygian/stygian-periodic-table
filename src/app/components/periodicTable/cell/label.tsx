interface LabelProps {
  text: string;
  isPeriod?: boolean;
}

export default function Label({
  text,
  isPeriod = false
}: LabelProps) {
  let textStyle = "text-2xl font-bold";

  if (!isPeriod) {
    textStyle = `${textStyle} xl:pt-16`;
  } else {
    textStyle = `${textStyle} lg:pl-10 xl:pl-10`;
  }
  
  return (
    <div className="flex min-w-32 min-h-25 justify-center items-center">
      <div className={textStyle}>{text}</div>
    </div>
  );
}
