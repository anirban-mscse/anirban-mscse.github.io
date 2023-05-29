import { memo, SVGProps } from 'react';

const ImageIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 7H18V11H0V7Z' fill='#666666' />
  </svg>
);

const Memo = memo(ImageIcon2);
export { Memo as ImageIcon2 };
