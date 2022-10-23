import React from 'react'
import '../main.js'
import '../css/base.css'
import '../css/credit-card.css'
import '../css/form.css'
import '../css/index.css'

export function CreditCard() {
  return (
    <body>
      <div id="app">
        <header>
          <img src="logo.svg" alt="ícone rocketpay" />
        </header>

        <section className="cc">
          <div className="cc-bg">
            <svg
              width="360"
              height="230"
              viewBox="0 0 360 230"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_3_2547"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="360"
                height="230"
              >
                <rect width="360" height="230" rx="15.4011" fill="#16084C" />
              </mask>
              <g mask="url(#mask0_3_2547)">
                <g filter="url(#filter0_f_3_2547)">
                  <path
                    d="M451.518 -135.506C473.881 -89.3531 414.166 -13.4917 318.142 33.9349C222.118 81.3615 126.147 82.3939 103.784 36.2409C81.4215 -9.91221 141.136 -85.7735 237.16 -133.2C333.184 -180.627 429.156 -181.659 451.518 -135.506Z"
                    fill="black"
                  />
                </g>
                <g filter="url(#filter1_f_3_2547)">
                  <path
                    d="M399.134 -169.756C421.497 -123.603 361.783 -47.742 265.758 -0.315356C169.734 47.1113 73.7629 48.1437 51.4003 1.99062C29.0377 -44.1624 88.7521 -120.024 184.776 -167.45C280.8 -214.877 376.772 -215.909 399.134 -169.756Z"
                    fill="gray"
                  />
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_f_3_2547"
                  x="43.2629"
                  y="-225.286"
                  width="468.777"
                  height="351.306"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="27.9144"
                    result="effect1_foregroundBlur_3_2547"
                  />
                </filter>
                <filter
                  id="filter1_f_3_2547"
                  x="-9.12087"
                  y="-259.536"
                  width="468.777"
                  height="351.306"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="27.9144"
                    result="effect1_foregroundBlur_3_2547"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div className="cc-logo">
            <span><img src="/cc-icon.svg" alt="ícone padrão de cartão" /></span>
            <span
              ><img
                src="/cc-default.svg"
                alt="ícone do cartão de crédito selecionado"
            /></span>
          </div>

          <div className="cc-info">
            <div className="cc-number">1234 5678 9012 3456</div>

            <div className="cc-holder">
              <div className="label">Nome do titular</div>
              <div className="value">EXEMPLO DE NOME</div>
            </div>

            <div className="cc-extra">
              <div className="cc-expiration">
                <div className="label">Expiração</div>
                <div className="value">02/32</div>
              </div>
              <div className="cc-security">
                <div className="label">CVC</div>
                <div className="value">123</div>
              </div>
              <img src="/cc-chip.svg" alt="ícone de chip de cartão de crédito" />
            </div>
          </div>
        </section>

        <form action="">
          <div className="input-wrapper">
            <label htmlFor="card-number">Número do cartão</label>
            <input id="card-number" />
          </div>

          <div className="input-wrapper">
            <label htmlFor="card-holder">Nome do titular</label>
            <input id="card-holder" />
          </div>

          <div className="flex">
            <div className="input-wrapper">
              <label htmlFor="expiration-date">Expiração</label>
              <input id="expiration-date" />
            </div>

            <div className="input-wrapper">
              <label htmlFor="security-code">CVC</label>
              <input id="security-code" />
            </div>
          </div>

          <button id="add-card">ADICIONAR CARTÃO</button>
        </form>
      </div>
      <script type="module" src="../src/main.js"></script>
    </body>
  )
}
