import styled from "styled-components";
import { device } from "../../../../utils/device";

export const SidebarLeft = styled.aside`
  grid-row-end: span 2;

  @media ${device.md} {
    grid-row-end: initial;
  }
`;

export const Actions = styled.div`
  display: grid;
  position: sticky;
  top: 70px;
`;

export const ActionsInner = styled.div`
  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

export const Reaction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .anticon {
    font-size: 24px;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
