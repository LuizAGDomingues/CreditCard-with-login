import * as React from "react"

function SvgComponent(props) {
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
        d="M60 105c24.853 0 45-20.147 45-45S84.853 15 60 15 15 35.147 15 60s20.147 45 45 45z"
        stroke="#E1E1E6"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 75c10.355 0 18.75-8.395 18.75-18.75S70.355 37.5 60 37.5s-18.75 8.395-18.75 18.75S49.645 75 60 75zM29.906 93.469a33.75 33.75 0 0160.188 0"
        stroke="#E1E1E6"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgComponent
