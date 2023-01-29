import { Button as ButtonAnt, Typography } from "antd";
import styled from "styled-components";

export const ProfileHeader = styled.header`
  color: ${(props) => props.theme.cardColor};
  background-color: ${(props) => props.theme.cardBg};
  margin-top: 100px;
  margin-bottom: 8px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.cardBorder};
`;

export const HeaderTop = styled.div`
  position: relative;
  height: 76px;
`;

export const Button = styled(ButtonAnt)`
  position: absolute;
  top: 20px;
  right: 15px;
`;

export const Image = styled.img`
  border: solid 8px #3063b0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  object-fit: cover;
`;

export const HeaderDetails = styled.div`
  text-align: center;
  padding-bottom: 30px;
`;

export const Title = styled(Typography.Title)`
  && {
    color: ${(props) => props.theme.base[100]};
    font-weight: 700;
    margin-top: 16px;
  }
`;

export const Bio = styled(Typography.Text)`
  && {
    color: ${(props) => props.theme.base[90]};
    display: block;
    font-size: 18px;
    margin-bottom: 14px;
  }
`;

export const Date = styled(Typography.Text)`
  display: block;
  color: ${(props) => props.theme.base[60]};
`;
