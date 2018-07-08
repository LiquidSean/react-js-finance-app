import {auth} from '../firebase';

export const setUser = (user) => ({
    type: 'SET_USER',
    user
});

export const setUserAvatar = (avatar) => ({
    type: 'SET_USER_AVATAR',
    avatar: avatar && avatar.length > 0 ? avatar : 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png'
});

export const startAuthorizing = () => ({
    type: 'USER_START_AUTHORIZING'
});

export const userAuthorized = () => ({
    type: 'USER_AUTHORIZED'
});

export const userNoExist = () => ({
    type: 'USER_NO_EXIST'
});

export const login = (payload) => {
    return dispatch => {
        dispatch(startAuthorizing());
        return auth.signInWithEmailAndPassword(payload.email, payload.password)
            .then((user) => {
                dispatch(setUser(user));
                dispatch(userAuthorized());
            });
    } 
}

export const logout = () => {
    return dispatch => {
        dispatch(startAuthorizing());
        return auth.signOut()
            .then((user) => {
                dispatch(setUser(null));
                dispatch(userNoExist());
            });
        }
}

export const signUp = (dispatch, payload) => {
    dispatch(startAuthorizing());
    auth
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
            dispatch(setUser(user));
            dispatch(userAuthorized());
        });
}