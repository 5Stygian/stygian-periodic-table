interface LabelProps {
  text: string;
  isPeriod?: boolean;
}

export default function Label({
  text,
  isPeriod = false
}: LabelProps) {
  let textStyle = "text-2xl font-bold select-none";

  if (!isPeriod) {
    textStyle = `${textStyle} lg:pt-16`;
  } else {
    textStyle = `${textStyle} lg:pl-0 xl:pl-10`;
  }
  
  return (
    <div className="flex min-w-32 min-h-25 justify-center items-center">
      <div className={textStyle}>{text}</div>
    </div>
  );
}
