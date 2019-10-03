export let currentUser = {  };

export function setCurrentUser(user) {
    currentUser = user;
}

export function getCurrentUser() {
    return axios.get('/users/current').then(response => {
        setCurrentUser(response.data.currentUser);
        return response.data;
    }).catch(response => {
        return null;
    });
}
