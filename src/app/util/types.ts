export type HasChildren = React.PropsWithChildren<{}>;

export interface Config {
  colors: {
    hydrogen: string;
    nobleGasses: string;
  };
}

export interface PeriodProps {
  className?: string;
  style?: React.CSSProperties;
}