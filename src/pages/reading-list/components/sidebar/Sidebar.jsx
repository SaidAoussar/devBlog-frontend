import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { getAllTagsOfSaves } from "../../../../api/save";
import { filterAtom } from "../../atom/filter";
import * as S from "./styles";
const Sidebar = ({ userId }) => {
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [filter, setFilter] = useAtom(filterAtom);
  useEffect(() => {
    getAllTagsOfSaves()
      .then((res) => {
        if (res.status === 200) {
          setTags(res.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [userId]);

  const handleClickTag = (tagId) => {
    setFilter((prevFilter) => ({ ...prevFilter, tagId: tagId }));
  };
  return (
    <S.Sidebar>
      <nav>
        <ul>
          <li>
            <S.Link
              className={`${filter.tagId === 0 ? "active" : ""}`}
              onClick={() => handleClickTag(0)}
            >
              All tags
            </S.Link>
          </li>
          {tags.map((tag) => {
            return (
              <li key={tag.id}>
                <S.Link
                  className={`${filter.tagId === tag.id ? "active" : ""}`}
                  onClick={() => handleClickTag(tag.id)}
                >
                  {tag.name}
                </S.Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </S.Sidebar>
  );
};

export default Sidebar;
