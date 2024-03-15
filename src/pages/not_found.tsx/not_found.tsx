import Stars from "../../components/starts/stars";
import NotFoundImage from "../../assets/images/404.png";
import './not_found.css'

const NotFound = () => {
  return (
    <Stars>
      <section className="notfound-container">
        <h2>La página que buscas está perdida en el espacio</h2>
        <figure>
          <img src={NotFoundImage} alt="Not Found" />
        </figure>
      </section>
    </Stars>
  );
};

export default NotFound;
