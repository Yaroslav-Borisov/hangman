import NameApi from '../api';
import { nameActions } from '../store/name.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { useEffect } from 'react';

export const useFetchName = () => {
	const dispatch = useDispatch<AppDispatch>();

	const getFetchName = async () => {
		const name = await NameApi.getName();
		dispatch(nameActions.setName(name));
	};

	useEffect(() => {
		getFetchName();
	}, []);
};