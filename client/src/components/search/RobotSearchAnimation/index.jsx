import React from "react";

const RobotSearchAnimation = () => {
  React.useEffect(() => {
    var newElement = document.createElement("div");

    // Optionally, set attributes or properties
    newElement.classList.add('fade-in'); // Add a class for the fade-in animation
    newElement.style.position = 'fixed'; // Fixed positioning to cover the viewport
    newElement.style.top = '0';
    newElement.style.left = '0';
    newElement.style.width = '100%';
    newElement.style.height = '100%';
    newElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    newElement.style.zIndex = '1301';
    // Append the element to the body
    document.body.appendChild(newElement);

    return () => {
      document.body.removeChild(newElement);
    };
  }, []);

  return (
    <div id="robot-animation">
      <div id="webgl"></div>
      <div class="svg-box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
          <defs />
          <defs>
            <clipPath id="clip-path">
              <rect
                id="graph-line-mask"
                width="105.2"
                height="66.7"
                x="439.5"
                y="186.6"
                fill="none"
              />
            </clipPath>
            <clipPath id="clip-path-2">
              <path
                id="body-mask"
                fill="none"
                d="M490.4 368.3c0 63.7-38 140-84.7 140s-84.8-76.3-84.8-140 38-90.6 84.8-90.6 84.7 26.9 84.7 90.6z"
              />
            </clipPath>
          </defs>
          <g id="Ship">
            <g id="mid-display">
              <rect
                width="320.3"
                height="207"
                x="248.8"
                y="116.3"
                fill="#282e39"
                stroke="#0ff"
                stroke-miterlimit="10"
                stroke-width="5"
                opacity=".8"
                rx="18.4"
              />
              <g id="graph-btm">
                <path
                  id="graph-left"
                  fill="#0ff"
                  d="M439.7 292.1s4.5-19.4 8.7-19c3.6.3 4.6 9.2 7.3 9 3.4-.2 4-14 7.3-14.3 3-.2 4.7 10 8.3 10 4 0 5.1-12.6 8.8-12.8 4.1-.2 7.2 27.1 7.2 27.1z"
                />
                <path
                  id="graph-morph1"
                  fill="none"
                  d="M439.7 292.1s2.2-10.8 6.5-10.4c3.5.3 8.3-18.9 11-19 3.4-.3 5.6 9 9 8.7 3-.3 3.5-3.2 7-3.2 4 0 5.9 10.6 9.5 10.4 4.2-.2 4.7 13.5 4.7 13.5z"
                />
                <path
                  id="graph-right"
                  fill="
                                       "
                  d="M502.6 292.1s4.5-19.4 8.8-19c3.5.3 4.6 9.2 7.3 9 3.4-.2 3.9-14 7.3-14.3 3-.2 4.7 10 8.3 10 4 0 5-12.6 8.7-12.8 4.2-.2 7.3 27.1 7.3 27.1z"
                />
                <path
                  id="graph-morph2"
                  fill="none"
                  d="M502.6 292.1s4.5-9.8 8.8-9.4c3.5.3 4.6-6.8 7.3-7 3.4-.2 3.9 6.6 7.3 6.4 3-.3 4.7-17.9 8.3-17.9 4 0 5 16.5 8.7 16.3 4.2-.2 7.3 11.6 7.3 11.6z"
                />
              </g>
              <g id="planet">
                <circle
                  id="planet-base"
                  cx="332.2"
                  cy="207.8"
                  r="37.3"
                  fill="#34496a"
                />
                <ellipse
                  id="planet-circle"
                  cx="331.5"
                  cy="207.8"
                  fill="none"
                  stroke="#0ff"
                  stroke-miterlimit="10"
                  stroke-width="5"
                  rx="61.8"
                  ry="12.7"
                />
                <path
                  id="planet-top"
                  fill="#34496a"
                  d="M294.9 207.8a37.3 37.3 0 0174.6 0z"
                />
              </g>
              <g class="graph-circle-lb" id="graph-cir-left">
                <circle cx="290.4" cy="287.5" r="20.8" fill="#34496a" />
                <path
                  fill="#0ff"
                  d="M290.4 287.5l5.3-20.1a20.8 20.8 0 0115.5 20z"
                />
              </g>
              <g class="graph-circle-lb" id="graph-cir-mid">
                <circle cx="345.4" cy="287.5" r="20.8" fill="#34496a" />
                <path
                  fill="#0ff"
                  d="M345.4 287.5l5.2-20.1a20.8 20.8 0 0115.5 20z"
                />
              </g>
              <g id="graph-cir">
                <circle
                  cx="396.4"
                  cy="292.1"
                  r="16.4"
                  fill="none"
                  stroke="#34496a"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <circle
                  cx="396.4"
                  cy="292.1"
                  r="20.8"
                  fill="none"
                  stroke="#34496a"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <circle
                  cx="396.4"
                  cy="292.1"
                  r="11.6"
                  fill="none"
                  stroke="#34496a"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <circle
                  id="graph-cir-1"
                  cx="408"
                  cy="292.1"
                  r="2.3"
                  fill="#0ff"
                />
                <circle
                  id="graph-cir-2"
                  cx="396.4"
                  cy="275.7"
                  r="2.3"
                  fill="#0ff"
                />
                <circle
                  id="graph-cir-3"
                  cx="417.2"
                  cy="292.1"
                  r="2.3"
                  fill="#0ff"
                />
                <circle
                  id="graph-cir-mid-2"
                  cx="396.4"
                  cy="292.1"
                  r="2.3"
                  fill="#0ff"
                  data-name="graph-cir-mid"
                />
              </g>
              <g id="graph-big" clip-path="url(#clip-path)">
                <path
                  id="graph-line"
                  fill="none"
                  stroke="#0ff"
                  stroke-miterlimit="10"
                  stroke-width="5"
                  d="M439.7 206.4c26.3 0 26.3 34.2 52.6 34.2s26.3-34.2 52.6-34.2 26.3 34.2 52.6 34.2 26.3-34.2 52.6-34.2"
                />
              </g>
              <circle cx="275.7" cy="139.7" r="11.8" fill="#34496a" />
              <circle
                id="left-top-circle"
                cx="275.7"
                cy="139.7"
                r="11.8"
                fill="#0ff"
              />
              <line
                x1="300.8"
                x2="387.1"
                y1="134.3"
                y2="134.9"
                fill="none"
                stroke="#34496a"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="5"
              />
              <line
                x1="300.8"
                x2="338.5"
                y1="143.7"
                y2="143.9"
                fill="none"
                stroke="#34496a"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="5"
              />
              <circle
                cx="448.1"
                cy="161.4"
                r="13.3"
                fill="none"
                stroke="#34496a"
                stroke-miterlimit="10"
                stroke-width="5"
              />
              <path
                class="circles-top"
                id="circle-l"
                fill="none"
                stroke="#0ff"
                stroke-miterlimit="10"
                stroke-width="5"
                d="M448 148.2a13.3 13.3 0 11-13.2 13.3 13.3 13.3 0 0113.3-13.3"
              />
              <circle
                cx="491.2"
                cy="161.4"
                r="13.3"
                fill="none"
                stroke="#34496a"
                stroke-miterlimit="10"
                stroke-width="5"
              />
              <path
                class="circles-top"
                id="circle-m"
                fill="none"
                stroke="#0ff"
                stroke-miterlimit="10"
                stroke-width="5"
                d="M491.2 148.2a13.3 13.3 0 11-13.3 13.3 13.3 13.3 0 0113.3-13.3"
              />
              <circle
                cx="534.4"
                cy="161.4"
                r="13.3"
                fill="none"
                stroke="#34496a"
                stroke-miterlimit="10"
                stroke-width="5"
              />
              <path
                class="circles-top"
                id="circle-r"
                fill="none"
                stroke="#0ff"
                stroke-miterlimit="10"
                stroke-width="5"
                d="M534.4 148.2a13.3 13.3 0 11-13.3 13.3 13.3 13.3 0 0113.3-13.3"
              />
            </g>
            <g id="btm-display">
              <g id="right-display">
                <g id="right-display-display">
                  <path
                    fill="#282e39"
                    stroke="#0ff"
                    stroke-miterlimit="10"
                    stroke-width="5"
                    d="M654.7 461H508.6c-10.5 0-15.8-8.5-12-19l26.2-72a29.9 29.9 0 0125.8-18.9h146c10.5 0 15.8 8.5 12 19l-26.2 72a29.9 29.9 0 01-25.7 18.8z"
                    opacity=".8"
                  />
                  <g id="bars">
                    <polygon
                      id="bar-3-btm"
                      fill="#34496a"
                      points="656.9 441.2 642.4 441.2 667.6 371.7 682.2 371.7 656.9 441.2"
                    />
                    <polygon
                      id="bar-3-top"
                      fill="#0ff"
                      points="656.9 441.2 642.4 441.2 653 412 667.5 412 656.9 441.2"
                    />
                    <polygon
                      id="bar-2-btm"
                      fill="#34496a"
                      points="633.7 441.2 619.2 441.2 644.5 371.7 659 371.7 633.7 441.2"
                    />
                    <polygon
                      id="bar-2-top"
                      fill="#0ff"
                      points="633.7 441.2 619.2 441.2 636 395.1 650.5 395.1 633.7 441.2"
                    />
                    <polygon
                      id="bar-1-btm"
                      fill="#34496a"
                      points="610.6 441.2 596.1 441.2 621.4 371.7 635.9 371.7 610.6 441.2"
                    />
                    <polygon
                      id="bar-1-top"
                      fill="#0ff"
                      points="610.6 441.2 596.1 441.2 604 419.5 618.5 419.5 610.6 441.2"
                    />
                  </g>
                  <g id="btns" fill="#0ff">
                    <ellipse
                      cx="546.8"
                      cy="379.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 546.8 379.3)"
                    />
                    <ellipse
                      cx="562.7"
                      cy="379.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 562.7 379.3)"
                    />
                    <ellipse
                      cx="578.6"
                      cy="379.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 578.6 379.3)"
                    />
                    <ellipse
                      cx="594.5"
                      cy="379.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 594.5 379.3)"
                    />
                    <ellipse
                      cx="540.6"
                      cy="396.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 540.6 396.3)"
                    />
                    <ellipse
                      cx="556.5"
                      cy="396.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 556.5 396.3)"
                    />
                    <ellipse
                      cx="572.4"
                      cy="396.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 572.4 396.3)"
                    />
                    <ellipse
                      cx="588.3"
                      cy="396.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 588.4 396.3)"
                    />
                    <ellipse
                      cx="534.4"
                      cy="413.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 534.4 413.3)"
                    />
                    <ellipse
                      cx="550.3"
                      cy="413.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 550.3 413.3)"
                    />
                    <ellipse
                      cx="566.2"
                      cy="413.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 566.2 413.3)"
                    />
                    <ellipse
                      cx="582.1"
                      cy="413.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 582.2 413.3)"
                    />
                    <ellipse
                      cx="528.2"
                      cy="430.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 528.2 430.3)"
                    />
                    <ellipse
                      cx="544.1"
                      cy="430.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 544.1 430.3)"
                    />
                    <ellipse
                      cx="560"
                      cy="430.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.6 562.3 429.7)"
                    />
                    <ellipse
                      cx="575.9"
                      cy="430.3"
                      rx="6.5"
                      ry="4.6"
                      transform="rotate(-39.8 576 430.3)"
                    />
                  </g>
                </g>
                <ellipse
                  id="right-display-shadow"
                  cx="593.3"
                  cy="508.4"
                  fill="#1e3855"
                  rx="74"
                  ry="10.9"
                />
              </g>
              <g id="left-display">
                <g id="left-display-display">
                  <path
                    fill="#282e39"
                    stroke="#0ff"
                    stroke-miterlimit="10"
                    stroke-width="5"
                    d="M299 461H153c-10.4 0-22-8.5-25.8-19L101 370c-3.8-10.4 1.6-18.9 12-18.9h146c10.5 0 22 8.5 25.9 18.9l26.2 72c3.8 10.4-1.6 19-12 19z"
                    opacity=".8"
                  />
                  <polygon
                    fill="#0ff"
                    points="153.1 433.3 155.7 440.3 158.2 447.3 153.6 443.8 148.9 440.3 151 436.8 153.1 433.3"
                  />
                  <polygon
                    fill="#0ff"
                    points="143 433.3 146.4 433.3 151.9 448.4 148.5 448.4 143 433.3"
                  />
                  <polygon
                    fill="#0ff"
                    points="193.8 448.4 191.3 441.4 188.7 434.4 193.4 437.9 198 441.4 195.9 444.9 193.8 448.4"
                  />
                  <polygon
                    fill="#0ff"
                    points="203.9 448.4 200.6 448.4 195.1 433.3 198.4 433.3 203.9 448.4"
                  />
                  <polygon
                    fill="#0ff"
                    points="164.4 433.3 167.8 433.3 173.3 448.4 169.9 448.4 164.4 433.3"
                  />
                  <polygon
                    fill="#0ff"
                    points="174 433.3 177.4 433.3 182.9 448.4 179.5 448.4 174 433.3"
                  />
                  <ellipse
                    cx="199"
                    cy="377.7"
                    fill="#34496a"
                    rx="5.4"
                    ry="7.7"
                    transform="rotate(-50.2 199 377.7)"
                  />
                  <polygon
                    fill="#0ff"
                    points="198.2 380.9 197 377.7 195.9 374.6 199.2 376.1 202.6 377.7 200.4 379.3 198.2 380.9"
                  />
                  <line
                    x1="217.3"
                    x2="267.5"
                    y1="377.7"
                    y2="377.7"
                    fill="#282e39"
                    stroke="#0ff"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="5"
                    opacity=".8"
                  />
                  <ellipse
                    cx="206.2"
                    cy="397.6"
                    fill="#34496a"
                    rx="5.4"
                    ry="7.7"
                    transform="rotate(-50.2 206.2 397.6)"
                  />
                  <polygon
                    fill="#0ff"
                    points="205.4 400.7 204.2 397.6 203.1 394.4 206.4 396 209.8 397.6 207.6 399.2 205.4 400.7"
                  />
                  <line
                    x1="224.5"
                    x2="274.8"
                    y1="397.6"
                    y2="397.6"
                    fill="#282e39"
                    stroke="#0ff"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="5"
                    opacity=".8"
                  />
                  <ellipse
                    cx="213.5"
                    cy="417.5"
                    fill="#34496a"
                    rx="5.4"
                    ry="7.7"
                    transform="rotate(-50.2 213.4 417.4)"
                  />
                  <polygon
                    fill="#0ff"
                    points="212.6 420.6 211.5 417.5 210.3 414.3 213.7 415.9 217 417.5 214.8 419 212.6 420.6"
                  />
                  <line
                    x1="231.8"
                    x2="282"
                    y1="417.5"
                    y2="417.5"
                    fill="#282e39"
                    stroke="#0ff"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="5"
                    opacity=".8"
                  />
                  <ellipse
                    cx="220.7"
                    cy="437.3"
                    fill="#34496a"
                    rx="5.4"
                    ry="7.7"
                    transform="rotate(-50.2 220.7 437.3)"
                  />
                  <polygon
                    fill="#0ff"
                    points="219.8 440.5 218.7 437.3 217.6 434.2 220.9 435.8 224.3 437.3 222.1 438.9 219.8 440.5"
                  />
                  <line
                    x1="239"
                    x2="289.2"
                    y1="437.3"
                    y2="437.3"
                    fill="#282e39"
                    stroke="#0ff"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="5"
                    opacity=".8"
                  />
                  <path
                    fill="#34496a"
                    d="M190.5 424.4h-46a7.4 7.4 0 01-6.5-4.7l-15.8-43.5c-1-2.6.4-4.7 3-4.7h46a7.4 7.4 0 016.5 4.7l15.8 43.5c1 2.6-.4 4.7-3 4.7z"
                  />
                  <ellipse
                    cx="157.8"
                    cy="398"
                    fill="#282e39"
                    rx="17.5"
                    ry="25.1"
                    transform="rotate(-50.2 157.8 398)"
                  />
                  <ellipse
                    cx="157.8"
                    cy="398"
                    fill="#282e39"
                    rx="5.1"
                    ry="7.3"
                    transform="rotate(-50.2 157.8 398)"
                  />
                  <path
                    fill="#0ff"
                    d="M159.8 405a10 10 0 01-8.8-6.4 5.8 5.8 0 01.5-5.4 5.3 5.3 0 014.4-2.2 10 10 0 018.8 6.4 5.8 5.8 0 01-.5 5.4 5.3 5.3 0 01-4.4 2.1zm-3.9-10.6a2 2 0 00-1.6.7 2.5 2.5 0 000 2.3 6.6 6.6 0 005.4 4 2 2 0 001.7-.6 2.5 2.5 0 000-2.3 6.6 6.6 0 00-5.5-4zM173.6 405h14.5l-5.1-14h-14.4a1.8 1.8 0 00-1.7 2.6l3.2 8.7a4.1 4.1 0 003.5 2.6z"
                  />
                </g>
                <ellipse
                  id="left-display-shadow"
                  cx="224.5"
                  cy="511.5"
                  fill="#1e3855"
                  rx="74"
                  ry="10.9"
                />
              </g>
            </g>
            <g id="robot">
              <path
                id="body-base"
                fill="#fff"
                d="M490.4 368.3c0 63.7-38 140-84.7 140s-84.8-76.3-84.8-140 38-90.6 84.8-90.6 84.7 26.9 84.7 90.6z"
              />
              <g id="robot-body">
                <ellipse
                  id="robot-shadow"
                  cx="405.6"
                  cy="543.9"
                  fill="#1e3855"
                  rx="44.5"
                  ry="7.1"
                />
                <g clip-path="url(#clip-path-2)">
                  <g id="faces">
                    <g id="face">
                      <ellipse
                        id="face-back"
                        cx="560"
                        cy="340.9"
                        fill="#34496a"
                        rx="61.5"
                        ry="32.2"
                      />
                      <g class="eyes" id="eyes" fill="#0ff">
                        <ellipse cx="539.8" cy="340.9" rx="7.3" ry="13.7" />
                        <ellipse cx="579.1" cy="340.9" rx="7.3" ry="13.7" />
                      </g>
                    </g>
                    <g id="face-2" data-name="face">
                      <ellipse
                        id="face-back-2"
                        cx="256.9"
                        cy="340.9"
                        fill="#34496a"
                        data-name="face-back"
                        rx="61.5"
                        ry="32.2"
                      />
                      <g class="eyes" id="eyes-2" fill="#0ff" data-name="eyes">
                        <ellipse cx="236.7" cy="340.9" rx="7.3" ry="13.7" />
                        <ellipse cx="275.9" cy="340.9" rx="7.3" ry="13.7" />
                      </g>
                    </g>
                    <g id="charge">
                      <circle cx="406.8" cy="340.9" r="16.2" fill="#34496a" />
                      <rect
                        width="4.1"
                        height="13.9"
                        x="398.7"
                        y="334"
                        fill="#fff"
                      />
                      <rect
                        width="4.1"
                        height="13.9"
                        x="410.8"
                        y="334"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <path
                id="right-hand"
                fill="#fff"
                d="M549.7 400.7c0 15.6-31.2 28.2-56.2 28.2s-34.2-12.6-34.2-28.2 9.2-28 34.2-28 56.2 12.5 56.2 28z"
              />
              <path
                id="left-hand"
                fill="#fff"
                d="M255.6 400.7c0-15.5 31.2-28 56.2-28s34.2 12.5 34.2 28-9.3 28.2-34.2 28.2-56.2-12.6-56.2-28.2z"
              />
            </g>
          </g>
        </svg>
      </div>
      <canvas class="webgl2"></canvas>
    </div>
  );
};

export default RobotSearchAnimation;
