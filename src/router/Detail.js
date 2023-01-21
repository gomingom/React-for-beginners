import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../component/Movie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Movie
            key={movie.id}
            id={movie.id}
            coverImage={movie.medium_cover_image}
            title={movie.title}
            summary={movie.description_intro}
            genres={movie.genres}
            year={movie.year}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
