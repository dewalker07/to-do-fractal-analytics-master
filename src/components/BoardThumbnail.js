import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 114px;
  width: 233px;
  background: #fffff1;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
`;

const Title = styled.h4`
  color: #101010;
  font-family: 'Roboto';
  font-weight: 500;
  text-decoration: none;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
    
  );
};

export default BoardThumbnail;
