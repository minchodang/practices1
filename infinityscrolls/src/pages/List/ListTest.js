// import React, { useEffect, useRef, useState, useCallback } from 'react';
// import styled from 'styled-components';
// import Card from '../../Components/Win/Win';

// function ListTest() {
//   const [winList, setWinList] = useState([]);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [target, setTarget] = useState('');

//   const option = {
//     root: null,
//     rootMargin: '200px',
//     threshold: 0.2,
//   };

//   useEffect(() => {
//     if (target.current) {
//       const observer = new IntersectionObserver(onIntersect, option);
//       observer.observe(target.current);
//       return () => observer && observer.disconnect();
//     }
//   }, [onIntersect, target]);

//   const onIntersect = useCallback(([entry]) => {
//     if (entry.isIntersecting) {
//       setPageNumber((pageNumber) => pageNumber + 1);
//     }
//   }, []);

//   const fetchWins = async (pageNumber) => {
//     const Access_Key = 'NLizfX3goQ_VAX91TXtu46BIm-m3nzAZS_CDQP9FjQk';
//     const res = await fetch(
//       `https://api.unsplash.com/photos/?client_id=${Access_Key}&page=${pageNumber}&per_page=20`
//     );
//     const data = await res.json();
//     setWinList(winList.concat(data));
//     // console.log(data);
//     // setWinList((win) => [...win, ...data]);
//     // setLoading(true);
//   };
//   useEffect(() => {
//     setWinList(pageNumber);
//   }, [pageNumber]);

//   const observer = new IntersectionObserver(fetchWins, option);
// }

// export default ListTest;
