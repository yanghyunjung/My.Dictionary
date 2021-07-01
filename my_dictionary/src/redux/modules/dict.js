import {firestore} from "../../firebase";

const dict_db = firestore.collection("dict");

//Actions
const LOAD = 'dict/LOAD';
const CREATE = 'dict/CREATE';

const initialState = {
	list: [{ id: 1, text: 'ㅎ1ㅎ1', explain: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.", example: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1.'}],
	is_loaded: false,
};

// Action Creators
export const loadDict = (dict) => {
	return { type: LOAD, dict };
};

export const createDict = (dict) => {
	return { type: CREATE, dict };
};

export const loadDictFB = () => {
	return function (dispatch){
		dict_db.get().then((docs) => {
			let dict_data = [];
			
			docs.forEach((doc) => {
				if(doc.exists){
				dict_data = [...dict_data, {id: doc.id, ...doc.data()}];
				}
			});
			dispatch(loadDict(dict_data));
		});
	};
};

export const addDictFB = (dict) => {
	return function (dispatch){
		let dict_item = {text: dict.text, example: dict.example, explain: dict.explain };

		dict_db.add(dict_item).then(docRef => {
			dict_item = {...dict_item, id: docRef.id};
			dispatch(createDict(dict_item));
		})
	}
}

// export const updateDictFB = (dict) => {
// 	return function(dispatch, getState){
// 		const _dict_data = getState().dict.list[dict];
		
// 		let dict_data = {..._dict_data};

// 		dict_db.doc(dict_data.id).update(dict_data).then(docRef => {
// 			dispatch(updateDictFB(dict));
// 		});
// 	}
// }

//Reducer
export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case 'dict/LOAD': {
			if(action.dict.length > 0){
				// [{ id: 1, text: 'ㅎ1ㅎ1', explain: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.", example: '저 친구가 초콜릿을 줬어. ㅎ1ㅎ1.'}]
				// {id: '1232', text: {text: 123, example:123, explain: 123}}
				return {...state, list: action.dict};
			}

				return state;
		}

		case 'dict/CREATE': {
			const new_dict_list = [...state.list, action.dict,];
			console.log(new_dict_list);
			return {
				...state,
				list: new_dict_list,
			};
		}
		default:
			return state;
	}
}