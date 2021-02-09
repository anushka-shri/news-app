import React, { useContext, useEffect, useReducer } from 'react';

import {
	SET_LOADING,
	SET_STORIES,
	REMOVE_STORY,
	HANDLE_PAGE,
	HANDLE_SEARCH,
} from './Actions';
import reducer from './Reducer';

const API = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
	isLoading: false,
	hits: [],
	query: 'react',
	page: 0,
	nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const fetchStories = async (url) => {
		dispatch({ type: SET_LOADING });

		try {
			const response = await fetch(url);
			const data = await response.json();
			dispatch({
				type: SET_STORIES,
				payload:
				{
					hits: data.hits,
					nbPages: data.nbPages
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchStories(`${API}query=${state.query}&page=${state.page}`);
	}, []);

	return (
		<AppContext.Provider value={{ ...state }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
