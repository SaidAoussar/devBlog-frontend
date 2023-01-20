import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTagsOfSaves } from "../../../../api/save";
import { filterAtom } from "../../atom/filter";
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
    <aside className="readinglist__sidebar">
      <nav>
        <ul>
          <li>
            <Link
              className={`link ${filter.tagId === 0 ? "link--current" : ""}`}
              onClick={() => handleClickTag(0)}
            >
              All tags
            </Link>
          </li>
          {tags.map((tag) => {
            return (
              <li key={tag.id}>
                <Link
                  className={`link ${
                    filter.tagId === tag.id ? "link--current" : ""
                  }`}
                  onClick={() => handleClickTag(tag.id)}
                >
                  {tag.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
