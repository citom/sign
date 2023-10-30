import { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132 132" {...props}>
      <rect fill="currentColor" x="49.02" width="82.98" height="32.76" />
      <polygon
        fill="currentColor"
        points="132 49.62 49.02 49.62 49.02 81.96 49.02 82.38 49.02 132 82.98 132 82.98 82.38 132 82.38 132 49.62"
      />
      <polygon
        fill="currentColor"
        points="0 0 0 51.81 0 52.49 0 132 33.97 132 33.97 52.49 33.97 51.81 33.97 0 0 0"
      />
      <rect fill="currentColor" x="98.03" y="99.24" width="33.97" height="32.76" />
    </svg>
  );
};
