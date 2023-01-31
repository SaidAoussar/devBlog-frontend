import ReactQuill from "react-quill";
import styled from "styled-components";

export const NewComment = styled.div`
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr);
  gap: 10px;
  margin-bottom: 24px;
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.base[50]};
`;

export const Field = styled.div``;

export const TextEditor = styled(ReactQuill)`
  && {
    margin-bottom: 12px;

    .ql-toolbar.ql-snow {
      background-color: ${(props) => props.theme.base.inverted};
      border-color: ${(props) => props.theme.cardBorder};
      border-radius: 8px 8px 0px 0px;
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
      background-color: ${(props) => props.theme.base.inverted};
      border-color: ${(props) => props.theme.cardBorder};
      min-height: 100px;
      max-height: 250px;
      overflow: auto;
      border-radius: 0px 0px 8px 8px;
    }
  }
`;
