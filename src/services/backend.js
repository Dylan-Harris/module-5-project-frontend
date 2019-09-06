const API = "http://localhost:3000/api/v1/games"
const forum_api = "http://localhost:3000/api/v1/forums"

export function getGames() {
    return fetch(API).then(res => res.json())
};

export function getForums() {
    return fetch(forum_api).then(res => res.json())
}