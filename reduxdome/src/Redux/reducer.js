var State = {
    todos:[]
}

function reduce(state=State,action){
    console.log(state=State)
    switch (action.type) {
        case "add":
            return {
                todos:[...action.text]
            };
        default:
            return state;
    }       

}

export default reduce