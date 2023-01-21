import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({ id, coverImage, title, summary, genres, year }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={coverImage} alt={title} />
      </div>
      <div className={styles.descriptionContainer}>
        <h2>
          <Link className={styles.a} to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <h3>
          <span>{year}</span>
        </h3>
        <div>
          {genres.map((g, index) => (
            <span className={styles.genre} key={index}>
              {g}
            </span>
          ))}
        </div>
        <p>
          {summary.split(" ").length > 35
            ? `${summary.split(" ").slice(0, 35).join(" ")}...`
            : summary === ""
            ? "There is no summary."
            : summary}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
};

export default Movie;
