import { firebase, googleAuthProvider } from "../firebase/firabase-config";
import { types } from "../types/types";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        setTimeout(() => {

            dispatch(login(1234, 'Carlos'));

        }, 600);
    }
}


export const startGoogleLogin = () => {

    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }

}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})