import ReactPlayer from 'react-player'
import  { VscMute, VscUnmute  } from 'react-icons/vsc'
import styled from 'styled-components';
import { useState } from 'react';

function Intro() {
    const [isMute, setIsMute] = useState(true)

    return ( 
        <IntroContainer>
            <ReactPlayer 
                playing={true}
                loop={true}
                width='100%'
                height='100%'
                volume={1}
                muted={isMute}
                url='https://vimeo.com/389619782'
                className='videoIntro'
            />
            <div className='infoIntro'> 
                <h1 className='headingIntro'>Netflix - 6 Underground</h1>
                <p className='overviewIntro'>After faking his death, the tech billionaire recruits a team of agents from many countries for a bold and bloody mission: to take down an evil dictator.</p>
            </div>
            { isMute ? (
                <VscMute onClick={() => setIsMute(prev => !prev)} className='btnVolume'/>
            ) : (
                <VscUnmute onClick={() => setIsMute(prev => !prev)} className='btnVolume'/>
            ) }
            <div className='fadeBottom'></div>
        </IntroContainer>
    );
}

const IntroContainer = styled.div`
    background-color: var(--color-background);
    color: var(--color-white);
    position: relative;
    padding-top: 56%;
    

    .videoIntro {
        position: absolute;
        top: 0;
        left: 0;
    }

    .infoIntro {
        position: absolute;
        top: 140px;
        left: 30px;

        @media screen and (max-width: 800px) {
            top: 120px;
            left: 25px;
        }

        @media screen and (max-width: 600px) {
            top: 100px;
            left: 15px;
        }

        .headingIntro {
            font-size: 60px;
            transition: all 0.5s ease 0s;
            
            @media screen and (max-width: 800px) {
                font-size: 40px;
            }
    
            @media screen and (max-width: 600px) {
                font-size: 24px;
            }
        }
    
        .overviewIntro {
            max-width: 550px;
            width: 100%;
            line-height: 1.3;
            padding-top: 25px;
            font-size: 18px;
    
            @media screen and (max-width: 800px) {
                font-size: 16px;
            }
    
            @media screen and (max-width: 600px) {
                font-size: 14px;
            }
        }
    }

    .btnVolume {
        position: absolute;
        top: 50%;
        right: 10%;
        width: 40px;
        height: 40px;
        color: #bbb;
        padding: 6px;
        border-radius: 50%;
        border: 1px solid #fff;
        transform: scale(1);
        transition: all 0.3s ease;


        &:hover {
            color: #fff;
            cursor: pointer;
            transform: scale(1.2);
            background-color: rgba(211, 211, 211, 0.176);
        }

        @media screen and (max-width:800px) {
            width: 30px;
            height: 30px;
            padding: 4px;
        }

        @media screen and (max-width:600px) {
            width: 20px;
            height: 20px;
            padding: 1px;
        }
    }
    
    .fadeBottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        background-image: linear-gradient(180deg, transparent, rgba(15, 15, 15, 0.6) 40%, rgb(17, 17, 17), rgb(17, 17, 17));
    }
`;

export default Intro;