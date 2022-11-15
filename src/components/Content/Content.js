import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowAltCircleUp } from 'react-icons/fa'
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

import MoviesRow from "./MoviesRow";
import * as ACTIONS from "../store/actions";
import { useScrollY } from "../hooks";

const handleScrollToTop = () => {
    scroll.scrollToTop()
}

function Content() {
    const scrollY = useScrollY()
    const dispatch = useDispatch()
    const { 
        NetflixOriginals,
        TrendingMovies,
        TopRatedMovies,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        DocumentariesMovies,
    } = useSelector(state => state.infoMovies)

    useEffect(() => {
        dispatch(ACTIONS.getNetflixOriginals())
        dispatch(ACTIONS.getTrendingMovies())
        dispatch(ACTIONS.getTopRatedMovies())
        dispatch(ACTIONS.getActionMovies())
        dispatch(ACTIONS.getComedyMovies())
        dispatch(ACTIONS.getHorrorMovies())
        dispatch(ACTIONS.getRomanceMovies())
        dispatch(ACTIONS.getDocumentariesMovies())
    },[dispatch])
    
    return ( 
        <div>
            <MoviesRow idSection = 'netflixMovies' movies={NetflixOriginals} title='Netflix Originals' isNetflix/>
            <MoviesRow idSection = 'trendingMovies' movies={TrendingMovies} title='Trending Movies' />
            <MoviesRow idSection = 'topRatedMovies' movies={TopRatedMovies} title='Top Rated Movies' />
            <MoviesRow idSection = 'actionMovies' movies={ActionMovies} title='Action Movies' />
            <MoviesRow idSection = 'comedyMovies' movies={ComedyMovies} title='Comedy Movies' />
            <MoviesRow idSection = 'horrorMovies' movies={HorrorMovies} title='Horror Movies' />
            <MoviesRow idSection = 'romanceMovies' movies={RomanceMovies} title='Romance Movies' />
            <MoviesRow idSection = 'documentariesMovies' movies={DocumentariesMovies} title='Documentaries' />
            <GoToTop 
                style={{visibility: scrollY > 600 ? 'visible' : 'hidden'}}
                onClick={() => handleScrollToTop()}
            >
                <FaArrowAltCircleUp/>
            </GoToTop>
        </div>
    );
}

export default Content;

const GoToTop = styled.div`
    position: fixed;
    z-index: 10;
    right: 70px;
    bottom: 50px;
    font-size: 50px;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: all 0.3s linear;

    &:hover {
        color: rgba(255, 255, 255, 0.8)
    }

    @media screen and (max-with: 600px) {
        right: 40px;
    }
`