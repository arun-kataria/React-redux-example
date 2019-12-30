let crudReducer = (state = { records: [] }, action) => {
    switch (action.type) {
        case 'add':
            state = {
                ...state,
                records: [...state.records, action.payload]
            }
            break;
        case 'remove':
            console.log("action payload -- ", action.payload);
            let state_record = state.records.filter(i=>i.id!=action.payload);
            console.log("state_record---- ",state_record);
            state = {
                ...state,
                records: state_record
            }
            break;

        default:
            break;
    }
    return state;
}
export default crudReducer;