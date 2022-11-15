import * as Types from "../types"

const reducerMoviesInitialState = {
    NetflixOriginals: null,
    TrendingMovies: null,
    TopRatedMovies: null,
    ActionMovies: null,
    ComedyMovies: null,
    HorrorMovies: null,
    RomanceMovies: null,
    DocumentariesMovies: null,
    MovieDetail: null,
    SearchMovies: null,
}

const reducerMovies = (state = reducerMoviesInitialState, action) => {
    switch (action.type) {
        case Types.GET_NETFLIX_ORIGINALS: {
            return {...state, NetflixOriginals: action.payload}
        }
        case Types.GET_TRENDING_MOVIES: {
            return {...state, TrendingMovies: action.payload}
        }
        case Types.GET_TOP_RATED_MOVIES: {
            return {...state, TopRatedMovies: action.payload}
        }
        case Types.GET_ACTION_MOVIES: {
            return {...state, ActionMovies: action.payload}
        }
        case Types.GET_COMEDY_MOVIES: {
            return {...state, ComedyMovies: action.payload}
        }
        case Types.GET_HORROR_MOVIES: {
            return {...state, HorrorMovies: action.payload}
        }
        case Types.GET_ROMANCE_MOVIES: {
            return {...state, RomanceMovies: action.payload}
        }
        case Types.GET_DOCUMENTARIES_MOVIES: {
            return {...state, DocumentariesMovies: action.payload}
        }
        case Types.SET_MOVIE_DETAIL: {
            return {...state, MovieDetail: action.payload}
        }
        case Types.GET_SEARCH_MOVIES: {
            return {...state, SearchMovies: action.payload}
        }
        default:
            return state
    }
}

export default reducerMovies