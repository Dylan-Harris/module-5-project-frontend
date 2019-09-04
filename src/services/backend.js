const API = "http://localhost:3000/api/v1/games"

export function getGames() {
    return fetch(API).then(res => res.json())
};