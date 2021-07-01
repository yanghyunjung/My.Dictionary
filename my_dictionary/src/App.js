import React, { useState } from 'react';

import styled from 'styled-components';
import DictPage from './DictPage';
import DictList from './DictList';
import { loadDictFB, addBucketFB } from './redux/modules/dict';
import { useDispatch } from 'react-redux';

import { firestore } from './firebase';

// 함수형 리덕스는 =
// useSelect(리덕스에 있는 상태값 가져오기), useDispatch(리덕스 스토어에 상태 넣기)

const App = () => { 
	const [list, setList] = useState(true);
	const dispatch = useDispatch();

  React.useEffect(()=> { //useEffect는 componentDidMount랑 update 두 기능을 같이 한다!!
    dispatch(loadDictFB());
  },[])

	const addBtn = () => {
		setList(!list);
	};
	return (
		<Container>
			{list ? <DictList setList={setList} /> : <DictPage />}
			<Plusbtn onClick={addBtn}>+</Plusbtn>
			<UpBtn onClick={()=>{
				window.scrollTo({top:0, left:0, behavior:"smooth"});
			}}>▲</UpBtn>
		</Container>
	);
};

const UpBtn = styled.button`
	color: white;
	background-color: #4b3d37;
	border-radius: 100px;
	margin-left: none;
	font-size: 25px;
	font-weight: 700;
	border: none;
	width: 40px;
	height: 40px;
`;

const Plusbtn = styled.button`
	color: white;
	background-color: #4b3d37;
	border-radius: 100px;
	margin-left: 215px;
	font-size: 50px;
	font-weight: 650;
	border: none;
	width: 60px;
	height: 60px;
`;
const Container = styled.div`
	max-width: 280px;
	min-height: 80vh;
	background-color: #967a6e;
	padding: 16px;
	margin: 20px auto;
	border-radius: 5px;
	border: 1px solid #ddd;
`;

export default App;