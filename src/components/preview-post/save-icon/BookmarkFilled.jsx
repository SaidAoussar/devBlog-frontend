import styled from "styled-components";
const BookmarkFilled = (props) => {
  return (
    <IconWrapper {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1z"></path>
      </svg>
    </IconWrapper>
  );
};

const IconWrapper = styled.span`
  padding: 8px;
  border-radius: 50%;
  color: rgb(79, 70, 229);
  background-color: rgb(79, 70, 229, 0.1);
  cursor: pointer;
  box-shadow: inset 0 0 0 2px rgb(79, 70, 229);

  svg {
    vertical-align: bottom;
  }
`;

export default BookmarkFilled;
