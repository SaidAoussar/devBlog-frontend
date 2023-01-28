import { Typography, Radio as RadioAnt } from "antd";
import styled from "styled-components";

export const CustomizationSetting = styled.section`
  background-color: ${(props) => props.theme.cardBg};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.cardBorder};
`;

export const Title = styled(Typography.Title)`
  && {
    color: ${(props) => props.theme.cardColor};
  }
`;

export const ThemeSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 16px;
`;

export const RadioWrapper = styled.label`
  display: grid;
  grid-template-columns: 1.5em 1fr;
  background-color: ${(props) => props.theme.cardBgSecondary};
  padding: 16px;
  border: 1px solid ${(props) => props.theme.base[10]};
  cursor: pointer;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme.bodyBg};
    box-shadow: 0 0 0 4px ${(props) => props.theme.bodyBg};
  }
`;

export const Radio = styled(RadioAnt)`
  && {
    .ant-radio-inner {
      background-color: ${(props) => props.theme.cardBg};
      border-color: ${(props) => props.theme.base[50]};
    }
    .ant-radio-checked .ant-radio-inner {
      border-color: #1668dc;
      background-color: #1668dc;
    }
  }
`;

export const Image = styled.img`
  border-radius: 6px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.headerShadow};
`;
