import * as ApiUser from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user,
})

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users,
})

export const receiveUserErrors = (errors) => ({
    type: RECEIVE_USER_ERRORS,
    errors,
})

export const fetchUser = (userId) => dispatch => (
    ApiUser.fetchUser(userId).then(user => dispatch(receiveUser(user)))
        .fail(err => dispatch(receiveUserErrors(err.responseJSON)))
);

export const fetchUsers = () => dispatch => (
    ApiUser.fetchUsers().then(users => dispatch(receiveUsers(users)))
        .fail(err => dispatch(receiveUserErrors(err.responseJSON)))
);