import styled from "styled-components";
const BookmarkOutlined = (props) => {
  return (
    <IconWrapper {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        fontSize="24px"
        fill="currentColor"
      >
        <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
      </svg>
    </IconWrapper>
  );
};

const IconWrapper = styled.span`
  padding: 8px;
  border-radius: 50%;
  color: ${(props) => props.theme.btnGhostColor};
  background-color: none;
  cursor: pointer;
  box-shadow: none;

  svg {
    vertical-align: bottom;
  }

  &:hover {
    color: rgb(79, 70, 229);
    background-color: rgba(79, 70, 229, 0.1);
  }
`;
export default BookmarkOutlined;
