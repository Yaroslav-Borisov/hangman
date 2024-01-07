import { configureStore } from '@reduxjs/toolkit';
import nameSlice from './name.slice';

export const store = configureStore({
	reducer: {
		name: nameSlice
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch