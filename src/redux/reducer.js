const defaultState = {
	category: [],
	// dailySalesPerHour:[],
	latestOrders: [],
	daysOrders: [],
	dailyData: [],
	cart: {products:[] },
	
}

const reducer = (state = defaultState, action ) => {

	switch (action.type) {

	    case "SAVE_DAILY_DATA":
	    return {...state, dailyData: action.payload}
		case "DAILY_SALES":
		return {...state, daysOrders: action.payload}
		case "ORDER_DATA":
		return {...state, latestOrders: action.payload }
		// case "BAR_DATA":
		// return {...state, dailySalesPerHour: action.payload }
		case "CLEAR_CART":
		return {...state, cart: {products:[] } }
		case "FIRST_FETCH":
		return {...state, category: action.payload}
		case "LOAD_CART":
		return {...state, cart: action.payload}
		case "ADD_TO_CART":
		
		return {...state, cart: {...state.cart, products: [...state.cart.products, action.payload]}}
		default:
		return state
	}

}

export default reducer; 