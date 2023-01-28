import { useAtom } from "jotai";
import { pageNumberAtom } from "../../store/page-number";

import * as S from "./styles";

function LeftSidebar({ q, filters }) {
  const [_, setPageNumber] = useAtom(pageNumberAtom);
  const clearNumberPage = () => {
    setPageNumber(1);
  };
  return (
    <nav className="left-sidebar">
      <S.NavLinkWrapper
        to={`?q=${q}&filters=posts`}
        className={`${filters === "posts" ? "active" : ""}`}
        onClick={clearNumberPage}
      >
        <S.Text>Post</S.Text>
      </S.NavLinkWrapper>
      <S.NavLinkWrapper
        to={`?q=${q}&filters=people`}
        className={`link ${filters === "people" ? "active" : ""}`}
        onClick={clearNumberPage}
      >
        <S.Text>People</S.Text>
      </S.NavLinkWrapper>
      <S.NavLinkWrapper
        to={`?q=${q}&filters=tags`}
        className={`${filters === "tags" ? "active" : ""}`}
        onClick={clearNumberPage}
      >
        <S.Text>Tags</S.Text>
      </S.NavLinkWrapper>
    </nav>
  );
}

export default LeftSidebar;
