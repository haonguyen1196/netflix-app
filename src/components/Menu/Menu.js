import styled from "styled-components";
import { FaHotjar, FaStar } from 'react-icons/fa';
import { GiNinjaHeroicStance, GiGhost, GiRomanToga, GiBandageRoll } from 'react-icons/gi';
import { MdOutlineTheaterComedy } from 'react-icons/md';
import { SiNetflix } from 'react-icons/si'

import MenuItem from "./MenuItem";


function Menu() {
    return ( 
        <MenuContainer>
            <MenuItem name='Netflix' Icon={SiNetflix} to = 'netflixMovies'/>
            <MenuItem name='Trending' Icon={FaHotjar} to = 'trendingMovies'/>
            <MenuItem name='Top rated' Icon={FaStar} to = 'topRatedMovies'/>
            <MenuItem name='Actions Movies' Icon={GiNinjaHeroicStance} to = 'actionMovies'/>
            <MenuItem name='Comedy Movies' Icon={MdOutlineTheaterComedy} to = 'comedyMovies'/>
            <MenuItem name='Horror Movies' Icon={GiGhost} to = 'horrorMovies'/>
            <MenuItem name='Romance Movies' Icon={GiRomanToga} to = 'romanceMovies'/>
            <MenuItem name='Documentaries' Icon={GiBandageRoll} to = 'documentariesMovies'/>
        </MenuContainer>
    );
}

export default Menu;

const MenuContainer = styled.div`
    position: fixed;
    top: 20%;
    left: 0;
    padding: 4px 0;
    width: 46px;
    border-radius: 4px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 100;
    display: flex;
    flex-direction: column;
    transition: all 0.3s linear;

    &:hover {
        width: 180px;
        background: rgba(0, 0, 0, 0.8);
    }

    .container { 
        display: flex;
        align-items: center;
        width: max-content;
        padding: 4px 6px;
        margin-left: 2px;
        cursor: pointer;

        .icon {
            font-size: 30px;
            margin-right: 8px;
        }

        span {
            font-size: 16px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.6);

            &:hover {
                color: rgb(255, 255, 255);
            }
        }
    }

`