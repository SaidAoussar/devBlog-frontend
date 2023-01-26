import styled from "styled-components";
import {
  Typography,
  Form,
  Upload as UploadAnt,
  Input,
  Select as SelectAnt,
} from "antd";

const { Text } = Typography;
const { TextArea: TextAreaAnt } = Input;
const { Item: ItemAnt } = Form;
const heights = {
  page: "100vh",
  nav: "48px",
  footer: "56px",
};

export const CustomCreatePost = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.bodyBg};
  color: ${(props) => props.theme.bodyColor};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`;

export const LeftNav = styled.div``;

export const Logo = styled(Text)`
  color: ${(props) => props.theme.bodyColor};
  font-size: 24px;
  font-weight: 700;
  margin-right: 16px;
`;

export const ActionText = styled(Text)`
  color: ${(props) => props.theme.bodyColor};
  font-size: 16px;
  font-weight: 500;
`;

export const FormMain = styled.main`
  background-color: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.cardColor};
  height: ${() => `calc(${heights.page} - ${heights.nav} - ${heights.footer})`};
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.cardBorder};
  overflow-wrap: anywhere;
  overflow-y: auto;
`;

export const FormMainTop = styled.div`
  padding: 0px 48px 32px;
`;

export const Upload = styled(UploadAnt)`
  && {
    .ant-upload.ant-upload-select {
      color: ${(props) => props.theme.bodyColor};
      background-color: transparent !important;
      border: none !important;
      width: auto !important;
    }

    .ant-upload.ant-upload-select > .ant-upload {
      font-size: 16px;
      font-weight: 500;
      width: auto !important;
      height: auto !important;
      margin-top: 32px;
      padding: 6px 12px;
      border: 2px solid ${(props) => props.theme.base[30]};
      box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.1);
      border-radius: 6px;
    }
  }
`;

export const Item = styled(ItemAnt)`
  margin-bottom: 0px;
`;

export const TextArea = styled(TextAreaAnt)`
  && {
    color: ${(props) => props.theme.bodyColor};
    font-size: 30px;
    font-weight: 700;
    line-height: 1.25;
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    width: 100%;
    box-shadow: none;
    resize: none;
    transition: none;

    &::placeholder {
      color: ${(props) => props.theme.formPlaceholderColor};
    }
  }
`;

export const Select = styled(SelectAnt)`
  && {
    .ant-select-selector {
      padding-left: 0px;
      border: none;
    }

    .ant-select-selection-placeholder {
      color: ${(props) => props.theme.formPlaceholderColor};
      font-size: 16px;
      left: 0px;
    }

    .ant-select-selection-search {
      color: ${(props) => props.theme.bodyColor};
      margin-left: 0px;
    }

    .ant-select-selection-item {
      background-color: ${(props) => props.theme.base[20]};
    }

    .ant-select-selection-item-content {
      color: ${(props) => props.theme.base[70]};
    }

    .ant-select-selection-item-remove {
      color: ${(props) => props.theme.base[70]};
    }

    .ant-select-clear {
      color: ${(props) => props.theme.base[50]};
      background-color: transparent;
    }
  }
`;

export const FormFooter = styled.footer`
  height: 56px;
  display: flex;
  align-items: center;
  gap: 16px;
`;
