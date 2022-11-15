import styled from "styled-components";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { SmoothHorizontalScrolling } from '../utils'
import { useViewport } from '../hooks'
import { setMovieDetail } from "../store/actions";

function MoviesRow({movies, title , isNetflix, idSection}) {
    const sliderRef = useRef()
    const movieItemRef = useRef()
    const [dragDown, setDragDown] = useState(0)
    const [dragMovie, setDragMovie] = useState(0)
    const [isDrag, setIsDrag] = useState(false)
    const windowWidth = useViewport()
    const dispatch = useDispatch()

    const handleSetMovie = (movie) => {
        dispatch(setMovieDetail(movie))
    }
    const handleScrollRight = () => {
        const remainingScrollWidth = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

        if(sliderRef.current.scrollLeft < remainingScrollWidth) {
            SmoothHorizontalScrolling(sliderRef.current, 250, movieItemRef.current.clientWidth * 2, sliderRef.current.scrollLeft)
        }
    }

    const handleScrollLeft = () => {
        if(sliderRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(sliderRef.current, 250, -movieItemRef.current.clientWidth * 2, sliderRef.current.scrollLeft)
        }
    }
    //handle scroll
    useEffect(() => {
        if(isDrag) {
            if(dragDown > dragMovie) { 
                handleScrollRight()
            } else { 
                handleScrollLeft()
            }
        }
    }, [dragDown, dragMovie, isDrag])    
    
    const handleOnDragStart = (e) => {
        setIsDrag(true)
        setDragDown(e.screenX)
    }
    const handleOnDragEnd = (e) => {
        setIsDrag(false)
        setDragMovie(e.screenX)
    } 
    const handleOnDragEnter = (e) => {
        setDragMovie(e.screenX)
    }   

    return ( 
        <MoviesRowContainer 
            draggable='false' id={idSection}>
            <h1 className="heading">{title}</h1>
            <MoviesSlider 
                style={movies && movies.length > 0 ? {
                    gridTemplateColumns: `repeat(${movies.length}, ${windowWidth > 1200 ? '360px' 
                    : windowWidth > 992 ? '300px' 
                    : windowWidth > 768 ? '250px' : '200px'})`
                } : {}}
                ref={sliderRef} 
                draggable='true'
                onDragStart={handleOnDragStart}    
                onDragEnd={handleOnDragEnd}    
                onDragEnter={handleOnDragEnter}    
            >
                {movies && movies.map((movie, index)=> {
                    let imgUrl = isNetflix ? `https://image.tmdb.org/t/p/original${movie.poster_path}` 
                    : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                return <div 
                    onClick={() => handleSetMovie(movie)}
                    key={index} 
                    className="movieItem" 
                    ref={movieItemRef} 
                    draggable='false'
                    >
                    <img src={imgUrl} alt="" draggable='false'></img>
                    <div className="movieName">{movie.name || movie.title}</div>
                </div>
                }
                )}
            </MoviesSlider>
            <div  className={`btnLeft ${isNetflix && 'isNetflix'}`} onClick={handleScrollLeft}>
                <FiChevronLeft/>
            </div>
            <div className={`btnRight ${isNetflix && 'isNetflix'}`} onClick={handleScrollRight}>
                <FiChevronRight />
            </div>
        </MoviesRowContainer>
    );
}

export default MoviesRow;

const MoviesRowContainer = styled.div`
    position: relative;
    background-color: var( --color-background);
    color: var(--color-white);
    padding: 20px 20px 0;

    .heading {
        font-size: 18px;
        user-select: none;
    }

    .btnLeft {
        position: absolute;
        top: 50%;
        left: 30px;
        transform: translateY(-30%);
        width: 40px;
        height: 50px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        z-index: 20;
        cursor: pointer;
        display: flex;
        align-items: center;

        &.isNetflix {
            width: 50px;
            height: 100px;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.8);  
        }

        &:hover svg {
            opacity: 1;
            transform: scale(1.2);
        }

        svg {
            transform: scale(1);
            font-size: 50px;
            opacity: 0.5;
            transition: all 0.3s ease;
        }

        
    }

    .btnRight {
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translateY(-30%);
        width: 40px;
        height: 50px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 4px;
        z-index: 20;
        cursor: pointer;
        display: flex;
        align-items: center;

        &.isNetflix {
            width: 50px;
            height: 100px;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.8);  
        }

        &:hover svg {
            opacity: 1;
            transform: scale(1.2);
        }

        svg {
            transform: scale(1);
            font-size: 50px;
            opacity: 0.5;
            transition: all 0.3s ease;
        }

        
    }
`;

const MoviesSlider = styled.div`
    display: grid;
    gap: 6px;
    padding: 28px 0;
    user-select: none;
    overflow-x: auto;
    overflow: hidden;
    scroll-behavior: smooth;
    transition: all 0.3s linear;

    &:hover .movieItem {
        opacity: 0.5;
    }

    .movieItem {
        position: relative;
        width: 100%;
        max-height: 500px;
        border-radius: 6px;
        overflow: hidden;
        user-select: none;
        transform: scale(1);
        transition: all 0.3s linear;

        &:hover {
            transform: scale(1.1);
            opacity: 1;
            z-index: 10;
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .movieName {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        padding: 4px;
        text-align: center;
    }
`;
