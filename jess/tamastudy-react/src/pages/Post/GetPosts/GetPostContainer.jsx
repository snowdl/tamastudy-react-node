import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GetPostPresenter from './GetPostPresenter';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;
const ComponentTitle = styled.h1`
  text-align: center;
`;
const ComponentContents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 352px;
  grid-gap: 48px;
`;
const PostWrapper = styled.div`
  background-color: blue;
  box-sizing: border-box;
  padding: 32px 0;
  border-radius: 8px;
  box-shadow: 4px 7px 8px -1px #7f7f7f;
  position: relative;
  overflow: hidden;
  background-image: url(${props => props.imgUrl && props.imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  transition: transform 800ms ease-out;
  &:hover {
    transform: scale(1.04);
  }
`;
const PostContents = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  box-sizing: border-box;
  padding: 32px 24px 24px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.2) 16%,
    rgba(110, 110, 110, 0.9) 100%,
    rgba(0, 0, 0, 1) 100%
  );
  & > * {
    color: white;
  }
`;

const PostId = styled.div`
  font-weight: 600;
`;
const PostTitle = styled.div`
  font-weight: 900;
  font-size: 24px;
  width: calc(238px - 32px * 2);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const PostUserName = styled.div`
  text-align: right;
  margin-top: 8px;
  font-size: 14px;
`;
const PostCreatedAt = styled.div`
  text-align: right;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;
const WriteButton = styled.div`
  margin: 64px 32px;
  padding: 16px 24px;
  background-color: red;
`;
const GetPostsContainer = () => {
  const initialState = [];
  const [posts, setPosts] = useState(initialState);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:4000/posts');
    const result = response.data.result;
    setPosts(result);
  };
  if (posts === initialState) {
    return <div>Loading ...</div>;
  }
  return (
    <Container>
      <ComponentTitle>포스트 모음</ComponentTitle>
      <ComponentContents>
        {posts.map(post => {
          const { _id, title, username, createdAt, imgUrl } = post;
          return (
            <PostWrapper key={_id} imgUrl={imgUrl}>
              <PostContents>
                <PostId>{_id}</PostId>
                <PostTitle>{title}</PostTitle>
                <PostUserName>{username}</PostUserName>
                <PostCreatedAt>{createdAt}</PostCreatedAt>
              </PostContents>
            </PostWrapper>
          );
        })}
      </ComponentContents>
      <ButtonBox>
        <WriteButton>포스트 작성</WriteButton>
      </ButtonBox>
    </Container>
  );
};

export default GetPostsContainer;
