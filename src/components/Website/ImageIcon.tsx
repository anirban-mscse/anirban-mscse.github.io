import { memo, SVGProps } from 'react';

const ImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_115_83)'>
      <path d='M18 7H11V0H7V7H0V11H7V18H11V11H18V7Z' fill='#666666' />
    </g>
    <defs>
      <clipPath id='clip0_115_83'>
        <rect width={18} height={18} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(ImageIcon);
export { Memo as ImageIcon };
