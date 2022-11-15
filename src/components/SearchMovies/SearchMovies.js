import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { useViewport } from "../hooks"
import { getSearchMovies, setMovieDetail } from "../store/actions";


const useQuery = () => new URLSearchParams(useLocation().search)

function SearchMovies() {
    const windowWidth = useViewport()
    const dispatch = useDispatch()
    const { SearchMovies } = useSelector(state => state.infoMovies)

    const keywords = useQuery().get('keywords')

    useEffect(() => {
        dispatch(getSearchMovies(keywords))
    }, [keywords, dispatch])

    return ( 
        <SearchPane>
            {SearchMovies && SearchMovies.length > 0 ? (
                <div 
                    style={{gridTemplateColumns: `repeat(${
                        windowWidth > 1200 ? 5 :
                        windowWidth > 992 ? 4 :
                        windowWidth > 768 ? 3 :
                        windowWidth > 600 ? 2 : 1  
                    }, auto)`}}
                    className="searchContent">
                    {SearchMovies && SearchMovies.map((movie, index) => {
                         if(movie.backdrop_path) {
                            const imageUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                            return (
                                <div 
                                    className="moviesItem" 
                                    key={index}
                                    onClick={() => dispatch(setMovieDetail(movie))}
                                >
                                    <img src={imageUrl} alt=""/>
                                    <span>{movie.title || movie.name}</span>
                                </div>
                            )}})}
                </div>
            ) : (
                <NotFound>
                    <h1>Your search for "asdfsadfsadád" did not have any matches.</h1>
                </NotFound>
            ) }
        </SearchPane>
    );
}
    
export default SearchMovies;

const SearchPane = styled.div`
    width: 100%;
    min-height: 92vh;
    padding-top: 80px;
    background-color: var(--color-background);
    transition: all 0.3s linear;

    .searchContent {
        padding: 40px 60px;
        display: grid;
        gap: 8px;

        &:hover .moviesItem {
            opacity: 0.7;
        }

        .moviesItem {
            position: relative;
            max-width: 400px;
            width: 100%;
            height: 200px;
            margin: 20px 0;
            border-radius: 12px;
            overflow: hidden;
            transform: scale(1);
            transition: all 0.3s linear;

            &:hover {
                transform: scale(1.2);
                opacity: 1;
                z-index: 10;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            span {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                padding: 4px;
                text-align: center;
                background: rgba( 0, 0, 0, 0.5);
                color: var(--color-white);
                font-weight: bold;
            }
        }
    }
`

const NotFound = styled.div`
    padding: 80px 100px;
    color: var(--color-white);
`