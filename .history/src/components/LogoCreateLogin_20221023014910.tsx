import { SVGAttributes } from 'react';

interface LogoSignInProps extends React.SVGAttributes<HTMLOrSVGElement>{}

export function LogoSignIn(props: LogoSignInProps) {
  return (
    <svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M60 75c10.355 0 18.75-8.395 18.75-18.75S70.355 37.5 60 37.5s-18.75 8.395-18.75 18.75S49.645 75 60 75zM29.907 93.469a33.75 33.75 0 0160.187 0M82.5 26.25H105M93.75 15v22.5"
        stroke="#E1E1E6"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M104.438 52.922A43.7 43.7 0 01105 60a44.999 44.999 0 01-89.135 8.779A45 45 0 0160 15c2.37-.005 4.738.183 7.078.563"
        stroke="#E1E1E6"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
