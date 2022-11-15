import moments from "moment";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";

import { setMovieDetail } from "../store/actions";

function MoviesDetail({movie, showModal}) {
    const dispatch = useDispatch()

    const handleshowModal = () => {
        dispatch(setMovieDetail(null))
    }
    return ( 
        <MoviesDetailModal>
            <div 
                onClick={() => handleshowModal()}
                className={`backdrop ${showModal ? 'showBackdrop' : 'hiddenBackdrop'}`}
            ></div>
            <div className={`modal ${showModal ? 'showModal' : 'hiddenModal'}`}  
                style={ 
                movie ? { 
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path})`,
                backgroundSize: 'cover',
            } : {}}>
                <div className="container">
                    <div className="moviesInfo">
                        <h1 className="moviesTitle">{movie && (movie.name || movie.title)}</h1>
                        <p className="statistical">
                            <span className="rating">Rating: {movie && movie.vote_average *10}%</span>
                            <span className="popularity">Popularity: {movie && movie.popularity}</span>
                        </p>
                        <p className="releaseDate">Release date: 
                        {movie && (moments(movie.release_date).format('DD/MM/YYYY') || moments(movie.first_air_date).format('DD/MM/YYYY'))}
                        </p>
                        <p className="runtime">Runtime: {movie && (movie.runtime || movie.episode_run_time)}</p>
                        <p className="overview">{movie && (movie.overview)}</p>
                    </div>
                </div>
            </div>
        </MoviesDetailModal>
    );
}

export default MoviesDetail;

const fadeIn = keyframes`
    0%: {
        background-color: rgba( 0, 0, 0, 0);
    }
    100%: {
        background-color: rgba( 0, 0, 0, 0.6);
    }
`

const MoviesDetailModal = styled.div`
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 200;
        background-color: rgba(0, 0, 0, 0.6);
        animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
    }

    .showBackdrop {
        display: block;
    }

    .hiddenBackdrop {
        display: none;
    }

    .showModal {
        top: 25%;
        opacity: 1;
        left: 0;
        visibility: visible;
    }
    
    .hiddenModal {
        top: 0;
        visibility: hidden;
        opacity: 0;
    }

    .modal {
        position: fixed;
        width: 100%;
        height: 60%;
        z-index: 300;
        box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
        transition: all 0.5s ease-in-out;

        @media screen and (max-width: 1184px) {
            height: 70%
        }
        @media screen and (max-width: 600px) {
            height: 80%
        } 

        .container {
            position: relative;
            width: 70%;
            height: 100%;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%, transparent);

            @media screen and (max-width: 1184px) {
                background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 40%, rgba(0, 0, 0, 0.773), transparent);
                width: 88%;
            }
            @media screen and (max-width: 980px) {
                background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 50%, transparent);
                width: 100%;
            }
            @media screen and (max-width: 600px) {
                background: linear-gradient(90deg, rgba(0, 0, 0, 0.88) 60%, transparent);
                width: 100%;
            }

            .moviesInfo {
                width: 65%;
                height: 100%;
                font-size: 20px;
                color: var(--color-white);
                padding-left: 24px;
                padding-top: 30px;

                @media screen and (max-width: 600px) {
                    font-size: 16px;
                    width: 80%;
                }

                .moviesTitle {
                    font-size: 30px;
                    margin-top: 30px;
                    color: #fff;
                }

                .statistical {
                    display: flex;
                    margin-top: 20px;

                    .rating {
                        color: var(--color-green);
                    }

                    .popularity {
                        color: yellow;
                        margin-left: 12px;
                    }
                }

                .releaseDate,
                .runtime {
                    margin-top: 12px;
                }

                .overview {
                    margin-top: 20px;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.4;
                    font-size: 18px; 

                    @media screen and (max-width: 600px) {
                        font-size: 14px;
                }
            }
        }
    }
    
    
`