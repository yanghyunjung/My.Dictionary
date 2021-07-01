import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addDictFB, createDict } from './redux/modules/dict';

//connect.. mapTo... (클래스형에서만 씀.)

const DictPage = () => {
	const [word, setWord] = useState({});
	const dispatch = useDispatch();

	const onChangeHandler = (event) => {
		// 객체 비구조화 문법 👇
		const {
			target: { name, value },
		} = event;
		setWord({ ...word, [name]: value });
	};

// 1. input value 3가지를 ref 로 가져와서 각각 변수에 저장하기
// 2. 위에서 정의한 변수를 딕셔너리 형태로 애드딕트에프비 안에 넣기
	// 디스패치 하는 함수 👇
	const onDispatchWord = () => {
		dispatch(addDictFB(word));
	};

	return (
		<div className='DictPage'>
			<Title>단어 추가하기</Title>
			<Container>
				<Input>
					단어
					<input
						name='text'
						type='text'
						style={{ marginTop: '5px' }}
						onChange={onChangeHandler}
					/>
				</Input>
				<Input>
					설명
					<input
						name='explain'
						type='text'
						style={{ marginTop: '5px' }}
						onChange={onChangeHandler}
					/>
				</Input>
				<Input>
					예시
					<input
						name='example'
						type='text'
						style={{ marginTop: '5px' }}
						onChange={onChangeHandler}
					/>
				</Input>

				<button style={btnStyle} onClick={onDispatchWord}>
					누르고 + 버튼 클릭!
				</button> 
			</Container>
		</div>
	);
};


export default DictPage;

//추가하기 버튼을 꾸며봅시당
const btnStyle = {
	color: 'white',
	background: '#4b3d37',
	fontSize: '1.0rem',
	fontWeight: 'bold',
	borderRadius: '.35rem',
	width: '250px',
	height: '35px',
	border: 'none',
};

const Input = styled.div`
	max-width: 350px;
	min-height: 5vh;
	background-color: #f4f1f0;
	padding: 16px;
	margin: 20px auto;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	text-decoration: underline;
	font-size: 12px;
`;

const Container = styled.div`
	max-width: 350px;
	min-height: 60vh;
	background-color: #fff;
	padding: 16px;
	margin: 20px auto;
	border-radius: 5px;
	border: 1px solid #ddd;
`;

const Title = styled.h1`
	color: black;
	text-align: center;
	font-size: 20px;
`;

//export default withRouter(DictPage);