
export default (state,action)=>{

    switch(action.type)
    {
        case "addMember":{ return addMember(state,action.payload);break;};
        case "setLogin": return setLogin(state,action.payload);
        default :return state;
    }

}


function addMember(state,member){    

    state.members.push(member);

    console.log(state);

    return state;
}

function setLogin(state,status){
    state.isLogin=status;

    return state;
}

