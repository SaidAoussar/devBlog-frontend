import { useAtom } from "jotai";
import { FileTextOutlined, MessageOutlined } from "@ant-design/icons";
import { userAtom } from "../../atom/user";
import * as S from "./styles";

const SideBar = () => {
  const [user] = useAtom(userAtom);

  return (
    <S.Sidebar>
      <S.Card>
        <S.Item>
          <FileTextOutlined />
          <S.Text>{user._count?.posts} posts published</S.Text>
        </S.Item>
        <S.Item>
          <MessageOutlined />
          <S.Text>{user._count?.comments} comments written</S.Text>
        </S.Item>
      </S.Card>
    </S.Sidebar>
  );
};

export default SideBar;
