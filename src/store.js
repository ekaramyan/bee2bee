import { configureStore } from '@reduxjs/toolkit'

const initialState = {
	loggedIn: false,
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOG_IN':
			return { ...state, loggedIn: true }
		case 'LOG_OUT':
			return { ...state, loggedIn: false }
		default:
			return state
	}
}

const store = configureStore({
	reducer: {
		user: userReducer,
	},
})

export default store
