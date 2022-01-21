import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Win from '../../Components/Win/Win';

function List() {
  const [winList, setWinList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchWins = async (pageNumber) => {
    const Access_Key = 'NLizfX3goQ_VAX91TXtu46BIm-m3nzAZS_CDQP9FjQk';
    const res = await fetch(
      `https://api.unsplash.com/photos/?client_id=${Access_Key}&page=${pageNumber}&per_page=10`
    );
    const data = await res.json();
    console.log(data);
    setLoading(true);
    setWinList(winList.concat(data));
    // console.log(data);
    // setWinList((win) => [...win, ...data]);
    // setLoading(true);
  };

  useEffect(() => {
    fetchWins(pageNumber);
  }, [pageNumber]);

  const loadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const pageEnd = useRef();
  let num = 1;
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            num++;
            loadMore();
            if (num >= 10) {
              observer.unobserve(pageEnd.current);
            }
          }
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading, num]);

  return (
    <>
      <Container>
        {winList.map((win, index) => {
          return (
            <Win
              src={win.urls.regular}
              key={index}
              content={win.user.username}
              like={win.user.total_likes}
            />
          );
        })}
      </Container>
      <Loading>
        <LoadingBar
          src="/img/Winter.gif"
          alt="load"
          ref={pageEnd}
          onMouseOver={loadMore}
        />
      </Loading>

      {/* <LoaderButton>
        <h3>{winList.length}</h3>
        <LoadMore onClick={loadMore}>더 가져와</LoadMore>
      </LoaderButton> */}
    </>
  );
}

const Container = styled.div`
  column-count: 5;
  margin: 50px 50px;
`;
const Loading = styled.div`
  display: flex;
  justify-content: center;
`;
const LoadingBar = styled.img``;

const LoaderButton = styled.div`
  display: flex;
  justify-content: center;
`;
const LoadMore = styled.button``;

export default List;
