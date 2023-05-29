import { memo, SVGProps } from 'react';

const DivSiteMobileMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 43 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M24.6935 0.288086L14.8327 0.520508L24.6935 0.75293L22.2076 0.811523L12.3467 0.579102L2.48592 0.811523L0 0.75293L9.86083 0.520508L0 0.288086L2.48592 0.229492L12.3467 0.461914L22.2076 0.229492L24.6935 0.288086Z'
      fill='#CFCFD1'
    />
  </svg>
);

const Memo = memo(DivSiteMobileMenuIcon);
export { Memo as DivSiteMobileMenuIcon };
