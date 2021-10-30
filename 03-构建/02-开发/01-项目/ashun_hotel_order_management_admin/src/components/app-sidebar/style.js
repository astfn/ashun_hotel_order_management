import styled from "styled-components";

const sidebar_bg = require("@/assets/images/sidebar_bg.png").default;
export const AppSideBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${sidebar_bg}) -800px 0 / auto 100% no-repeat;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
