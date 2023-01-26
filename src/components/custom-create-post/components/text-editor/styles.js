import ReactQuill from "react-quill";
import styled from "styled-components";

export const ReactQuillWrapper = styled(ReactQuill)`
  && {
    code {
      color: white;
      background: #08090a;
      word-wrap: break-word;
      box-decoration-break: clone;
      border-radius: 0.2rem;
      padding: 8px;
      display: inline;
    }

    .ql-toolbar.ql-snow {
      position: sticky;
      top: 0;
      z-index: 50;
      background-color: ${(props) => props.theme.base.inverted};
      padding-left: 48px;
      padding-right: 48px;
      border-left: none;
      border-right: none;
      margin-bottom: 24px;
    }

    .ql-toolbar .ql-fill {
      fill: ${(props) => props.theme.base[100]};
      stroke: none;
    }

    .ql-toolbar .ql-stroke {
      fill: none;
      stroke: ${(props) => props.theme.base[100]};
    }

    .ql-toolbar .ql-picker {
      color: ${(props) => props.theme.base[100]};
    }

    .ql-container.ql-snow {
      font-size: 16px;
      z-index: 10;
      padding-right: 48px;
      padding-left: 48px;
      border: none !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }

    .ql-container.ql-snow .ql-editor {
      padding: 0px;
    }

    .ql-editor.ql-blank::before {
      color: ${(props) => props.theme.formPlaceholderColor};
      left: 48px;
      font-style: normal;
      font-size: 18px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }

    .ql-editor.ql-blank {
      padding: 0px;
    }
  }
`;
