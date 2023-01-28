import { Typography } from "antd";
import styled from "styled-components";

export const User = styled.div`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  background-color: ${(props) => props.theme.cardBg};
  padding: 20px;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.cardBorder};
`;

export const Image = styled.img`
  border-radius: 100%;
`;

export const Title = styled(Typography.Title)`
  && {
    color: ${(props) => props.theme.cardColor};
    font-weight: 700;
    margin: 0;
  }
`;

export const Text = styled(Typography.Text)`
  && {
    color: ${(props) => props.theme.cardColorTertiary};
  }
`;
