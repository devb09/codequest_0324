import { AuthContext } from "../../auth/context/auth_context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Stars from "../../components/starts/stars";
import loginImage from "../../assets/images/fly.png";
import discordIcon from "../../assets/icon/discord.png";
import "./login.css";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login("Brayan");
    navigate("/", {
      replace: true,
    });
  };
  return (
    <main className="login-container">
      <div className="text-login">
        <h2>¡Únete y Gana en Nuestra Comunidad!</h2>
        <p>
          ¡Participa en nuestros sorteos exclusivos en Discord y gana premios
          emocionantes! Regístrate y comienza a ganar hoy mismo.
        </p>
        <button onClick={onLogin}>
          <img src={discordIcon} />
          Contectate con Discord
        </button>
      </div>
      <div className="image-login">
        <img src={loginImage} />
      </div>
    </main>
  );
};

export default Login;
