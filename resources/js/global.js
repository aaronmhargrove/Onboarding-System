export let currentUser = null;

export function setCurrentUser(user) {
    currentUser = user;
}

export function getCurrentUser() {
    return axios.get('/users/current').then(response => {
        return response
    }).catch(response => {
        return null
    });
}
