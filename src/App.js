import { useEffect, useState } from "react";
import styled from "styled-components";


const MovieCase = styled.ul`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 10px;
margin: 0 100px;
list-style: none;
`
const MovieItm = styled.li`

`
const Img = styled.img`
max-width: 100%;
`
const App = () => {
    const [movie, setMovie] = useState([]);
    const [num, setNum] = useState(1);
    const getMovie = async () => {
        const r = await fetch(`https://yts.mx/api/v2/list_movies.json?limit=50&page=${num}`).then(d => d.json());
        // console.log(r);
        setMovie(r.data.movies);
    }
    useEffect(() => {
        getMovie();
    }, [num])
    // console.log(movie)
    return (
        <>
            <button onClick={() => setNum(1)}>1</button>
            <button onClick={() => setNum(2)}>2</button>
            <button onClick={() => setNum(3)}>3</button>
            <MovieCase>{
                movie.map((it, idx) => {
                    return (
                        <MovieItm key={idx}>
                            <strong>{it.id}</strong>
                            <figure>
                                <Img src={it.large_cover_image} alt="" />
                            </figure>
                        </MovieItm>
                    )
                })
            }
            </MovieCase>
        </>
    )
}

export default App;