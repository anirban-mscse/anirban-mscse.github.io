import { memo, SVGProps } from 'react';

const Heading2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 52 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_115_77)'>
      <path
        d='M16.3296 24C13.4368 24.0893 11.0707 25.2321 9.23142 27.4286H5.64214C4.17785 27.4286 2.94571 27.067 1.94571 26.3437C0.945709 25.6205 0.445709 24.5625 0.445709 23.1696C0.445709 16.8661 1.55285 13.7143 3.76714 13.7143C3.87428 13.7143 4.26267 13.9018 4.93232 14.2768C5.60196 14.6518 6.4725 15.0312 7.54392 15.4152C8.61535 15.7991 9.67785 15.9911 10.7314 15.9911C11.9279 15.9911 13.1154 15.7857 14.2939 15.375C14.2046 16.0357 14.16 16.625 14.16 17.1429C14.16 19.625 14.8832 21.9107 16.3296 24ZM45.0171 41.0625C45.0171 43.2054 44.3654 44.8973 43.0618 46.1384C41.7582 47.3795 40.0261 48 37.8654 48H14.4546C12.2939 48 10.5618 47.3795 9.25821 46.1384C7.95464 44.8973 7.30285 43.2054 7.30285 41.0625C7.30285 40.1161 7.3341 39.192 7.3966 38.2902C7.4591 37.3884 7.5841 36.4152 7.7716 35.3705C7.9591 34.3259 8.19571 33.3571 8.48142 32.4643C8.76714 31.5714 9.15107 30.7009 9.63321 29.8527C10.1154 29.0045 10.6689 28.2812 11.2939 27.683C11.9189 27.0848 12.6823 26.6071 13.5841 26.25C14.4859 25.8929 15.4814 25.7143 16.5707 25.7143C16.7493 25.7143 17.1332 25.9062 17.7225 26.2902C18.3118 26.6741 18.9636 27.1027 19.6779 27.5759C20.3921 28.0491 21.3475 28.4777 22.5439 28.8616C23.7404 29.2455 24.9457 29.4375 26.16 29.4375C27.3743 29.4375 28.5796 29.2455 29.7761 28.8616C30.9725 28.4777 31.9279 28.0491 32.6421 27.5759C33.3564 27.1027 34.0082 26.6741 34.5975 26.2902C35.1868 25.9062 35.5707 25.7143 35.7493 25.7143C36.8386 25.7143 37.8341 25.8929 38.7359 26.25C39.6377 26.6071 40.4011 27.0848 41.0261 27.683C41.6511 28.2812 42.2046 29.0045 42.6868 29.8527C43.1689 30.7009 43.5529 31.5714 43.8386 32.4643C44.1243 33.3571 44.3609 34.3259 44.5484 35.3705C44.7359 36.4152 44.8609 37.3884 44.9234 38.2902C44.9859 39.192 45.0171 40.1161 45.0171 41.0625ZM15.5796 2.00893C15.5796 2.00893 15.9145 2.34375 16.5841 3.01339C17.2537 3.68304 17.5886 4.96429 17.5886 6.85714C17.5886 8.75 16.9189 10.3661 15.5796 11.7054C14.2404 13.0446 12.6243 13.7143 10.7314 13.7143C8.83857 13.7143 7.2225 13.0446 5.88321 11.7054C4.54392 10.3661 3.87428 8.75 3.87428 6.85714C3.87428 4.96429 4.54392 3.34821 5.88321 2.00893C7.2225 0.669642 8.83857 -4.76837e-07 10.7314 -4.76837e-07C12.6243 -4.76837e-07 14.2404 0.669642 15.5796 2.00893ZM33.4323 9.87054C33.4323 9.87054 33.9345 10.3728 34.939 11.3772C35.9435 12.3817 36.4457 14.3036 36.4457 17.1429C36.4457 19.9821 35.4412 22.4062 33.4323 24.4152C31.4234 26.4241 28.9993 27.4286 26.16 27.4286C23.3207 27.4286 20.8966 26.4241 18.8877 24.4152C16.8787 22.4062 15.8743 19.9821 15.8743 17.1429C15.8743 14.3036 16.8787 11.8795 18.8877 9.87054C20.8966 7.86161 23.3207 6.85714 26.16 6.85714C28.9993 6.85714 31.4234 7.86161 33.4323 9.87054ZM51.8743 23.1696C51.8743 24.5625 51.3743 25.6205 50.3743 26.3437C49.3743 27.067 48.1421 27.4286 46.6779 27.4286H43.0886C41.2493 25.2321 38.8832 24.0893 35.9904 24C37.4368 21.9107 38.16 19.625 38.16 17.1429C38.16 16.625 38.1154 16.0357 38.0261 15.375C39.2046 15.7857 40.3921 15.9911 41.5886 15.9911C42.6421 15.9911 43.7046 15.7991 44.7761 15.4152C45.8475 15.0312 46.718 14.6518 47.3877 14.2768C48.0573 13.9018 48.4457 13.7143 48.5529 13.7143C50.7671 13.7143 51.8743 16.8661 51.8743 23.1696ZM46.4368 2.00893C46.4368 2.00893 46.7716 2.34375 47.4412 3.01339C48.1109 3.68304 48.4457 4.96429 48.4457 6.85714C48.4457 8.75 47.7761 10.3661 46.4368 11.7054C45.0975 13.0446 43.4814 13.7143 41.5886 13.7143C39.6957 13.7143 38.0796 13.0446 36.7404 11.7054C35.4011 10.3661 34.7314 8.75 34.7314 6.85714C34.7314 4.96429 35.4011 3.34821 36.7404 2.00893C38.0796 0.669642 39.6957 -4.76837e-07 41.5886 -4.76837e-07C43.4814 -4.76837e-07 45.0975 0.669642 46.4368 2.00893Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_115_77'>
        <rect width={51.44} height={48} fill='white' transform='matrix(1 0 0 -1 0.440002 48)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(Heading2Icon);
export { Memo as Heading2Icon };
