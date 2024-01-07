import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface NameState {
    name: string
}

const initialState: NameState = {
	name: ''
};

export const nameSlice = createSlice({
	name: 'name',
	initialState: initialState,
	reducers: {
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		}
	}
});

export default nameSlice.reducer;
export const nameActions = nameSlice.actions;