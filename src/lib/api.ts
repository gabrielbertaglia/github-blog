import axios from 'axios'
// users/gabrielbertaglia/repos
export const api = axios.create({
  baseURL: 'https://api.github.com',
})
