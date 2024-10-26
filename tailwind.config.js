/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    lineHeight: {
      shrink: 0.75,
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    extend: {
      rotate: {
        4: "4deg",
      },
      spacing: {
        88: "22rem", // 352px
        104: "26rem", // 416px
        112: "28rem", // 448px
        120: "30rem", // 480px
        128: "32rem", // 512px
        136: "34rem", // 544px
        144: "36rem", // 576px
        152: "38rem", // 608px
        160: "40rem", // 640px
        168: "42rem", // 672px
        176: "44rem", // 704px
        184: "46rem", // 736px
        192: "48rem", // 768px
        200: "50rem", // 800px
        208: "52rem", // 832px
        216: "54rem", // 864px
        224: "56rem", // 896px
        232: "58rem", // 928px
        240: "60rem", // 960px
        248: "62rem", // 992px
        256: "64rem", // 1024px
        264: "66rem", // 1056px
        272: "68rem", // 1088px
        280: "70rem", // 1120px
        288: "72rem", // 1152px
        296: "74rem", // 1184px
        304: "76rem", // 1216px
        312: "78rem", // 1248px
        320: "80rem", // 1280px
        328: "82rem", // 1312px
        336: "84rem", // 1344px
        344: "86rem", // 1376px
        352: "88rem", // 1408px
        360: "90rem", // 1440px
        368: "92rem", // 1472px
        376: "94rem", // 1504px
        384: "96rem", // 1536px
        392: "98rem", // 1568px
        400: "100rem", // 1600px
        408: "102rem", // 1632px
        416: "104rem", // 1664px
        424: "106rem", // 1696px
        432: "108rem", // 1728px
        440: "110rem", // 1760px
        448: "112rem", // 1792px
        456: "114rem", // 1824px
        464: "116rem", // 1856px
        472: "118rem", // 1888px
        480: "120rem", // 1920px
        488: "122rem", // 1952px
        496: "124rem", // 1984px
        504: "126rem", // 2016px
      },
      fontFamily: {
        primary: ["Pretendard_Medium", "Arial", "sans-serif"],
        accent: ["Pretendard_SemiBold", "Georgia", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        page: "var(--Neutral200)",
        footer: "var(--Secondary)",
        primary: "var(--Neutral600)",
        secondary: "var(--Neutral400)",
        white: "var(--NeutralWhite)",
        point: "var(--Primary)",
      },
      textColor: {
        black: "var(--NeutralBlack)",
        white: "var(--NeutralWhite)",
        primary: "var(--Neutral600)",
        secondary: "var(--Neutral400)",
        point: "var(--Primary)",
      },
      borderColor: {
        primary: "var(--Neutral600)",
        secondary: "var(--Neutral400)",
        white: "var(--NeutralWhite)",
      },
    },
  },

  plugins: [
    function ({ addUtilities, theme }) {
      const breakpoints = theme("screens");

      addUtilities(
        {
          ".text-2xs": {
            fontSize: "0.625rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-2xs)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-sm)", 
            },
          },
          ".text-xs": {
            fontSize: "0.75rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-sm)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-base)", 
            },
          },
          ".text-sm": {
            fontSize: "0.875rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-base)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-lg)", 
            },
          },
          ".text-base": {
            fontSize: "1rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-lg)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-xl)", 
            },
          },
          ".text-lg": {
            fontSize: "1.125rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-xl)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-2xl)", 
            },
          },
          ".text-xl": {
            fontSize: "1.25rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-2xl)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-3xl)", 
            },
          },
          ".text-2xl": {
            fontSize: "1.5rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-3xl)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-4xl)", 
            },
          },
          ".text-3xl": {
            fontSize: "1.875rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-4xl)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-5xl)", 
            },
          },
          ".text-4xl": {
            fontSize: "2.25rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-5xl)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-6xl)", 
            },
          },
          ".text-5xl": {
            fontSize: "3rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-6xl)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-7xl)", 
            },
          },
          ".text-6xl": {
            fontSize: "3.75rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-7xl)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-8xl)", 
            },
          },
          ".text-7xl": {
            fontSize: "4.5rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-8xl)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-9xl)", 
            },
          },
          ".text-8xl": {
            fontSize: "6rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-9xl)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-10xl)", 
            },
          },
          ".text-9xl": {
            fontSize: "8rem", // 기본 값
            [`@media (min-width: ${breakpoints.lg})`]: {
              fontSize: "var(--text-10xl)",
            },
            [`@media (min-width: ${breakpoints.xl})`]: {
              fontSize: "var(--text-11xl)", 
            },
          },
        },
        { variants: ["responsive"] }
      ); // 반응형 설정
    },
  ],
};

// addUtilities({
//   '.text-sm': {
//     fontSize: '1rem', // 기본 값
//     lineHeight: '1.5',
//     [`@media (min-width: ${breakpoints.sm})`]: {
//       fontSize: '1.25rem', // sm 브레이크포인트 이상
//       lineHeight: '1.75',
//     },
//     [`@media (min-width: ${breakpoints.md})`]: {
//       fontSize: '1.5rem', // md 브레이크포인트 이상
//       lineHeight: '2',
//     },
//     [`@media (min-width: ${breakpoints.lg})`]: {
//       fontSize: '1.75rem', // lg 브레이크포인트 이상
//       lineHeight: '2.25',
//     },
//     [`@media (min-width: ${breakpoints.xl})`]: {
//       fontSize: '2rem', // xl 브레이크포인트 이상
//       lineHeight: '2.5',
//     },
//   },
// }, { variants: ['responsive'] }); // 반응형 설정
