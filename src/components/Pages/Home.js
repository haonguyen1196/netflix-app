import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Content from "../Content/Content";
import Intro from "../Intro/Intro";
import Menu from "../Menu/Menu";
import MoviesDetail from "../MoviesDetail/MoviesDetail";

function Home() {
    const { MovieDetail } = useSelector(state => state.infoMovies)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setShowModal(MovieDetail ? true : false)
    },[MovieDetail])

    return ( 
        <div>
            <Intro />
            <Content />
            <Menu />
            <MoviesDetail movie={MovieDetail} showModal={showModal}/>
        </div>
    );
}

export default Home;