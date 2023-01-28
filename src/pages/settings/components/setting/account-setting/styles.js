import { Form, Input, Typography } from "antd";
import styled from "styled-components";

export const AccountSetting = styled.section`
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

export const Item = styled(Form.Item)`
  margin-bottom: 18px;
`;
export const LabelText = styled(Typography.Text)`
  && {
    color: ${(props) => props.theme.cardColor};
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Password = styled(Input.Password)`
  && {
    background-color: ${(props) => props.theme.formBg};
    border: 1px solid ${(props) => props.theme.formBorder};

    input {
      background-color: ${(props) => props.theme.formBg};
      color: ${(props) => props.theme.bodyColor};
    }

    &:focus-within {
      background-color: ${(props) => props.theme.formBgFocus};
      border-color: ${(props) => props.theme.focus};
      box-shadow: 0 0 0 1px ${(props) => props.theme.focus};
    }

    &:hover {
      border-color: ${(props) => props.theme.formBorderHover};
    }

    &::placeholder {
      color: ${(props) => props.theme.formPlaceholderColor};
    }
    .ant-input-password-icon {
      color: ${(props) => props.theme.base[60]};
    }

    .ant-input-password-icon:hover {
      color: ${(props) => props.theme.base[70]};
    }
  }
`;
