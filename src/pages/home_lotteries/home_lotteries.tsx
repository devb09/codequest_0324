import Stars from "../../components/starts/stars";
import Gato from "../../assets/images/gato.png";
import "./home_lotteries.css";
import { useNavigate } from "react-router-dom";

const HomeLottery = () => {
  const lotteries = [
    {
      imgSrc: Gato,
      title: "GALAGA 3000",
      description: `¡Participa en nuestro emocionante sorteo y sé el afortunado
      ganador de un juego espectacular! ¿Estás listo para sumergirte en
      horas de diversión y aventura? ¡No te pierdas esta oportunidad
      única de agregar un nuevo nivel de emoción a tu colección de
      juegos! ¡Únete ahora y podrías ser el próximo en disfrutar de la
      emoción de este increíble premio!`,
    },
    {
      imgSrc: Gato,
      title: "GALAGA 3000",
      description: `¡Participa en nuestro emocionante sorteo y sé el afortunado
      ganador de un juego espectacular! ¿Estás listo para sumergirte en
      horas de diversión y aventura? ¡No te pierdas esta oportunidad
      única de agregar un nuevo nivel de emoción a tu colección de
      juegos! ¡Únete ahora y podrías ser el próximo en disfrutar de la
      emoción de este increíble premio!`,
    },
    {
      imgSrc: Gato,
      title: "GALAGA 3000",
      description: `¡Participa en nuestro emocionante sorteo y sé el afortunado
      ganador de un juego espectacular! ¿Estás listo para sumergirte en
      horas de diversión y aventura? ¡No te pierdas esta oportunidad
      única de agregar un nuevo nivel de emoción a tu colección de
      juegos! ¡Únete ahora y podrías ser el próximo en disfrutar de la
      emoción de este increíble premio!`,
    },
  ];

  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/detail/15", {
      state: {
        id: 10,
      },
    });
  };

  return (
    <>
      <main className="main-container">
        {lotteries.map(({ imgSrc, title, description }, idx) => (
          <div
            className="container"
            key={`${idx}-${title.toLocaleLowerCase()}`}
          >
            <img src={imgSrc} alt="" />
            <div className="text">
              <h2>{title}</h2>
              <p>{`"${description}"`}</p>
              <button onClick={onNavigate}>
                Más información
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </button>
              {/* <Outlet /> */}
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default HomeLottery;
