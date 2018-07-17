const INITIAL_STATE = {
    testData: []
}

export default function userReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
		case 'SET_TEST_DATA':
          return {
			...state,
			testData: action.payload
          }
        default: 
            return state;
    }
}