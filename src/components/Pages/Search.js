import { useSelector } from "react-redux";
import SearchMovies from "../SearchMovies/SearchMovies";
import MoviesDetail from "../MoviesDetail/MoviesDetail";

function Search() {
    const { MovieDetail } = useSelector(state => state.infoMovies)
    
    return ( 
        <div>
            <SearchMovies />
            <MoviesDetail  movie={MovieDetail} showModal={MovieDetail ? true : false}/>
        </div>
    );
}

export default Search;