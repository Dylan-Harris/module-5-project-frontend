const API = "http://localhost:3000/api/v1/games"
const forum_api = "http://localhost:3000/api/v1/forums"
const USER = "http://localhost:3000/api/v1/profile"
const wishlist_api = "http://localhost:3000/api/v1/wishlists"
const user_array = "http://localhost:3000/api/v1/users"
const comments_array = "http://localhost:3000/api/v1/comments"


export function getGames() {
    return fetch(API).then(res => res.json())
};

export function getForums() {
    return fetch(forum_api).then(res => res.json())
};

// export function getUser() {
//     const token = localStorage.jwt
//     return fetch(USER, {
//         method: 'GET', 
//         headers: {
//             'Content-Type': 'application/json',
//             accept: 'application/json',
//             authorization: `bearer${token}`
//         }
//     })
//     .then(res => res.json())

// }

export function getWishlist() {
    return fetch(wishlist_api).then(res => res.json())
}

export function getUsers() {
    return fetch(user_array).then(res => res.json())
}

export function getComments() {
    return fetch(comments_array).then(res => res.json())
}

export function addComment() {
    return fetch(comments_array, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
        }, 
        body: JSON.stringify({
            comment: this.state
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
}

export function getProfile() {
   const token = localStorage.getItem('jwt')
    return fetch(USER, {
         method: "GET", 
         headers: {
             "Content-Type": "application/json",
             accept: "application/json",
             "Authorization": `Bearer ${token}`
         }
    })
    .then(res => res.json())
}

