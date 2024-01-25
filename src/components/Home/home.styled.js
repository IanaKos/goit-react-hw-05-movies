import styled from 'styled-components';

export const ListMovies = styled.ul`
  list-style-type: none;
  margin-bottom: 10px;
  font-size: 18px;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

export const MovieItem = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
