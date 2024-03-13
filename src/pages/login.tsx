import Stars from "../components/starts/stars";
import "./login.css";
import loginImage from '../assets/images/login.png'

const Login = () => {
  return (
    <Stars>
      <main className="login-container">
        <section className="login">
          <h1>Holi</h1>
        </section>
        <figure>
          <img src={loginImage} alt="" srcSet={loginImage} />
        </figure>
      </main>
    </Stars>
  );
};

export default Login;
