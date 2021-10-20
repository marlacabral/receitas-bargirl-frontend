const Api = {
    apiUrl: 'https://backend-bargirl.herokuapp.com/drink',
    fetchGetAll: () => fetch(Api.apiUrl),
    fetchGetById: id => fetch(`${Api.apiUrl}/${id}`),
    fetchPost:(drink) => {
        return fetch(Api.apiUrl + '/add', {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(drink)
        })},
    fetchPut:(drink, id) => {
        return fetch(`${Api.apiUrl}/update/${id}`, {
            method: 'PUT',
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(drink)
        })
    },
    fetchDelete: (id) => {
        return fetch(`${Api.apiUrl}/delete/${id}`, {
            method: 'DELETE'
        })    
    }
}

export default Api