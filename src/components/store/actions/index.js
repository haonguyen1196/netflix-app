import axios from "axios";

import * as Types from '../types'

const API_KEY = '6ec6a31b2c2ba866db7eb2f561307570';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getNetflixOriginals = () => async dispatch => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
        dispatch({type: Types.GET_NETFLIX_ORIGINALS, payload: result.data.results})
    } catch (error) {
        console.log('Get netflix api error: ', error)
    }
}

export const getTrendingMovies = () => async dispatch => {
    try {
        const result = await axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}&with_genres=11`)
        dispatch({type: Types.GET_TRENDING_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get trending api error: ', error)
    }
}

export const getTopRatedMovies = () => async dispatch => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US`)
        dispatch({type: Types.GET_TOP_RATED_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get top rated api error: ', error)
    }
}

export const getActionMovies = () => async dispatch => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=12`)
        dispatch({type: Types.GET_ACTION_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get action api error: ', error)
    }
}

export const getComedyMovies = () => async dispatch => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`)
        dispatch({type: Types.GET_COMEDY_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get comedy api error: ', error)
    }
}

export const getHorrorMovies = () => async dispatch => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`)
        dispatch({type: Types.GET_HORROR_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get horror api error: ', error)
    }
}

export const getRomanceMovies = () => async dispatch => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10749`)
        dispatch({type: Types.GET_ROMANCE_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get romance api error: ', error)
    }
}

export const getDocumentariesMovies = () => async dispatch => {
    try {
        const result = await axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=18`)
        dispatch({type: Types.GET_DOCUMENTARIES_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get document api error: ', error)
    }
}

export const setMovieDetail = (movie) => dispatch => {
    dispatch({type: Types.SET_MOVIE_DETAIL, payload: movie})
}

export const getSearchMovies = (keywords) => async dispatch => {
    try {
        const result = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keywords}`)
        dispatch({type: Types.GET_SEARCH_MOVIES, payload: result.data.results})
    } catch (error) {
        console.log('Get search movies api error: ', error)
    }
}