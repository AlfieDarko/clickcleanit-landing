import styled, { css } from "styled-components";

export const spacing = {
  XXXXXS: 0.4,
  XXXS: 0.8,
  XXS: 1.2,
  XS: 1.6,
  S: 2.4,
  M: 3.2,
  L: 6.4,
  XL: 9.6,
  XXL: 12.8,
  XXXL: 19.2,
  XXXXL: 25.6,
  XXXXXL: 38.4
};

export const font = {
  S: 0.8,
  M: 1.6,
  L: 2.4,
  XL: 3.2,
  XXL: 4.8,
  XXXL: 6.4,
  XXXXL: 9.6
};

export const color = {
  primaryCol: "#36c7b3",
  primaryTextCol: "#3b3b3b",
  offwhiteBG: "#f7f9f9",
  primaryDarkerCol: "#007599",
  heroCTAbtn: "#ff4c40",
  navbarCTAbtn: "#ff4c40",
  learnMoreCTAbtn: "#174959",
  whyChooseUsParagraph: "#174959",
  navbarTextColor: "#ffffff",
  navbarCTAtext: "#ffffff",
  bulletCardBG: "#f6f6f6",
  bulletCardTitleColor: "#3b3b3b",
  bulletContainerBG: "#fff",
  bulletCardTextColor: "#3b3b3b",
  bulletCardContainerBG: "#7b9a9a",
  sectionBGlight: "#fff",
  heroSubTitleText: "#fff",
  altBtnBG: "#fff"
};

const maxBreakpoints = {
  mobile: 360,
  mobileLarge: 504,
  tablet: 755,
  tabletLarge: 1007,
  desktop: 1259
};

const minBreakpoints = {
  mobile: 361,
  mobileLarge: 505,
  tablet: 756,
  tabletLarge: 1008,
  desktop: 1260,
  desktopLarge: 1512
};

export const maxMedia = Object.keys(maxBreakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${maxBreakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const minMedia = Object.keys(minBreakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${minBreakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
