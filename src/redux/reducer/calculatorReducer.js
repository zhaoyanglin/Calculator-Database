const calculatorReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_LIST':
            return state = action.payload;
        default:
            return state;
    }
};

export default calculatorReducer;