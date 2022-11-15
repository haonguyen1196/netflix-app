import { useState } from 'react';
import { MdSearch } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import NetflixLogo from '../../assets/images/Netflix_Logo.png'
import { useScrollY } from '../hooks'

function Navbar() {
    const scrollY = useScrollY()
    const [keywords, setKeywords] = useState('')
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        let keywords = e.target.value
        setKeywords(keywords)
        if(keywords.length > 0 ) {
            navigate(`/search?keywords=${keywords.trim()}`)
        } else{
            navigate('/')
        }
    }

    const handleGoPageHome = () => {
        navigate('/')
        setKeywords('')
    }

    return ( 
        <Navigation style={ scrollY > 50 ?  {backgroundColor: 'var(--color-background)'} : {backgroundColor: 'transparent'} }>
            <div className='navContainer'>
                <div className='logo' onClick={handleGoPageHome}>
                    <img src={NetflixLogo} alt =""></img>
                </div>
                <div className='navSearch'>
                    <MdSearch className='iconSearch'/>
                    <input onChange={(e) => handleInputChange(e)}
                        value={keywords}
                        type="text" 
                        placeholder="Input title, genres, peole"
                    >
                    </input>
                </div>
            </div>
        </Navigation>
    );
}

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 8px 20px;
    transition: background-color 1s ease;

    @media screen (max-width: 600px) {
        height: 100px;
    }

    .navContainer {
        background-color: transparent;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        .logo {
            width: 120px;
            cursor: pointer;

            img {
                width: 100%;
            }
        }

        .navSearch {
            display: flex;

            &:hover .iconSearch {
                color: var(--color-white);
            }

            .iconSearch {
                width: 20px;
                height: 20px;
                cursor: pointer;
                transform: translateX(24px) translateY(10px);
                color: #bbb
            }

            input {
                width: 0;
                padding: 10px;
                border: 1px solid #fff;
                font-size: 14px;
                color: #fff;
                background-color: var(--color-background);
                outline: none;
                opacity: 0;
                cursor: pointer;
                transition: width .5s;

                &:focus {
                    width: 300px;
                    opacity: 1;
                    padding-left: 26px;
                    border-radius: 4px;
                    cursor: text;
                }
            }
        }
    }

    @media screen (max-width:600px) {
        flex-direction: column;
    }
`

export default Navbar;