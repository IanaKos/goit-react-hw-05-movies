import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: blue;
  text-decoration: none;
  &:hover {
    color: lightblue;
  }
`;

export const ListMovies = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
  font-size: 20px;
  margin-left: 100px;
`;

export const MovieItem = styled.li`
  position: relative;
  display: flex;
  padding: 5px 10px;
`;
