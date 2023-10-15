import { configureStore } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
	loggedIn: false,
	userId: null,
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOG_IN':
			return { ...state, loggedIn: true }
		case 'LOG_OUT':
			localStorage.removeItem('userId')
			Cookies.remove('access_token')
			return { ...state, loggedIn: false, userId: null }
		case 'SET_USER_ID':
			return { ...state, userId: action.payload }
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
