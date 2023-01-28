import styled from "styled-components";
import { Search as SearchNavbar } from "../../layouts/navbar/styles";
import { Typography } from "antd";

export const Tags = styled.section`
  padding: 16px 0px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled(Typography.Text)`
  color: ${(props) => props.theme.bodyColor};
  font-size: 30px;
  line-height: 45px;
  font-weight: 700;
  margin: 0;
`;

export const Search = styled(SearchNavbar)`
  && {
    width: 300px;
    .ant-input-group-addon {
      background-color: ${(props) => props.theme.base.inverted};
    }
  }
`;
