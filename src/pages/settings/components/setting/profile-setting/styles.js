import { Form, Input as InputAnt, Typography, Button as ButtonAnt } from "antd";
import styled from "styled-components";

export const ProfileSetting = styled.section`
  padding: 16px;
  background-color: ${(props) => props.theme.cardBg};
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.cardBorder};
`;

export const Title = styled(Typography.Title)`
  && {
    color: ${(props) => props.theme.cardColor};
  }
`;

export const LabelText = styled(Typography.Text)`
  && {
    color: ${(props) => props.theme.cardColor};
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Item = styled(Form.Item)`
  margin-bottom: 18px;
`;

export const Input = styled(InputAnt)`
  && {
    background-color: ${(props) => props.theme.formBg};
    color: ${(props) => props.theme.bodyColor};
    border: 1px solid ${(props) => props.theme.formBorder};

    &:hover {
      border-color: ${(props) => props.theme.formBorderHover};
    }

    &:focus {
      background-color: ${(props) => props.theme.formBgFocus};
      border-color: ${(props) => props.theme.focus};
      box-shadow: 0 0 0 1px ${(props) => props.theme.focus};
    }

    &::placeholder {
      color: ${(props) => props.theme.formPlaceholderColor};
    }
  }
`;

export const TextArea = styled(InputAnt.TextArea)`
  && {
    background-color: ${(props) => props.theme.formBg};
    color: ${(props) => props.theme.bodyColor};
    border: 1px solid ${(props) => props.theme.formBorder};
    &:hover {
      border-color: ${(props) => props.theme.formBorderHover};
    }

    &:focus {
      background-color: ${(props) => props.theme.formBgFocus};
      border-color: ${(props) => props.theme.focus};
      box-shadow: 0 0 0 1px ${(props) => props.theme.focus};
    }

    &::placeholder {
      color: ${(props) => props.theme.formPlaceholderColor};
    }
  }
`;

export const UploadContainer = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

export const ImageWrapper = styled.span`
  width: 48px;
  height: 48px;
  background-color: #525252;
  border-radius: 100%;
`;

export const Button = styled(ButtonAnt)`
  && {
    color: ${(props) => props.theme.bodyColor};
    background-color: transparent;
    border-color: ${(props) => props.theme.base[40]};
  }
`;
