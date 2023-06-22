{
    // function: login -> success, fail
    type SuccessState = {
        result: 'succeess';
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'fail';
        reason: string;
    };
    type LoginState = SuccessState | FailState;
    function login(): LoginState{
        return {
            result: 'succeess',
            response: {
                body: 'logged in!',
            },
        };
    };

    // printLoginState(state)
    // success -> 🎉 body
    // fail -> 😭 reason
    function printLoginState(state: LoginState){
        if(state.result === 'succeess') {
            console.log(`🎉 ${state.response.body}`)
        } else {
            console.log(`😭 ${state.reason}`)
        }
    }
}