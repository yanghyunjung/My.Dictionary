import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

// props
const DictList = ({ setList }) => {
	const dict_list = useSelector((state) => state.dict.list);
	// console.log(dict_list);

	return (
		<ListStyle>
			<Title>MY DICTIONARY</Title>
			{dict_list.map((item) => (
				<ItemStyle key={item.id}>
					<p style={{ fontSize: '10px', textDecoration: 'underline' }}>단어</p>
					<div>{item.text}</div>
					<p style={{ fontSize: '10px', textDecoration: 'underline' }}>설명</p>
					<div>{item.explain}</div>
					<p style={{ fontSize: '10px', textDecoration: 'underline' }}>예시</p>
					<div style={{ color: '#2c7744', fontWeight: 'bold' }}>
						{item.example}
					</div>
				</ItemStyle>
			))}
		</ListStyle>
	);
};

const Title = styled.h1`
	color: black;
	text-align: center;
	font-size: 20px;
`;


const ListStyle = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
`;

const ItemStyle = styled.div`
	padding: 16px;
	margin: 8px;
	background-color: white;
	height: auto;
`;

export default DictList;