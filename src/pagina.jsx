
import "./App.css";

function Pagina() {
  return (
    <div className="pagina">

      <div className="imagen-ternero-con-pola">

        <img
          src="/imagenes/ternero.jpeg"
          alt=""
          className="imagen-ternero"
        />

        <img
          src="/imagenes/miguel.jpeg"
          alt=""
          className="imagen-principal"
        />

      </div>

      <header className="hero">

        <br />

        <h1>
          TEMPLO ESPIRITUAL <br /> NUMEROLOGICO
        </h1>

        <br /><br /><br /><br /><br />

        <h2 className="subtituloo">
          CONOCE NUESTRO TRABAJO
        </h2>

        <br />
        <br />

        <p className="subtitulocentrado">
          Mis números son energía ganadora, escribe ya mismo y obtenga su número de ganancias, sea chance lotería, juegos de azar lo que necesites tengo el Don de la suerte heredado de mis ancestros, llevo años dando ganadores, escriba ya mismo, también trabajo la suerte el amor despojo lo malo y traigo lo bueno abro los caminos de la abundancia y la prosperidad
        </p>

      </header>

      <section className="servicios">

        <br />

        <div className="servicios-container">

          <div className="servicio">
            <h3>
              NUMEROLOGIA ESPIRITUAL
            </h3>

            <p>
              Templo numerológico espiritual, numerólogo número uno en el campo astral dando resultados millonarios mi trabajo es totalmente seguro y garantizado al 100% tumbando cualquier clase de Barrera obstáculo que no te deje progresar y abriendo los buenos caminos para que se dé una vida nueva llena de abundancia y prosperidad y así obtengas todo lo que necesitas.
            </p>
          </div>

          <div className="servicio">
            <h3>
              GUIA ESPIRITUAL
            </h3>

            <p>
              Como tu maestro y tu guía espiritual te puedo decir que mi trabajo cumple con todos los requisitos que necesita un número es un trabajo que va en tu ser para que todo lo que toques florezca en un trabajo de florecimiento todo lo que toques de ahora en adelante florecerá y tu suerte se arreglará no solamente numerología sino también en el amor en la salud y en todos los ámbitos espirituales
            </p>
          </div>

          <div className="servicio">
            <h3>
              NUMEROLOGIA PREDICITIVA
            </h3>

            <p>
              deposita tu fe y tu espiritualidad en nuestro templo numerológico astral has cumplido con los requisitos de tener la fe al 100% y recibir de parte nuestra un trabajo seguro que te dará a conocer el número que te cambiará tu vida y te sacará de apuros es una limpieza de cuerpo alma mente y espíritu no habrá nada que pueda interponerse en tu suerte
            </p>
          </div>

        </div>

      </section>

      <footer>
        <p>
          © 2026 Templo Espiritual Numerológico
        </p>
      </footer>

      <div className="botones-flotantes">

        <p className="texto-asesor">
          COMUNICATE CON <br />NUESTROS GUIAS <br /> ESPIRITUALES
        </p>

        <a
          href="https://wa.me/573054269075?text=Buenos%20d%C3%ADas%2C%20bienvenido%20al%20Templo%20Espiritual%20Numerol%C3%B3gico.%20%C2%BFEn%20qu%C3%A9%20podemos%20ayudarte%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-flotante"
        >
        </a>

        <a
          href="https://wa.me/573104016087?text=Buenos%20d%C3%ADas%2C%20bienvenido%20al%20Templo%20Espiritual%20Numerol%C3%B3gico.%20%C2%BFEn%20qu%C3%A9%20podemos%20ayudarte%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-flotante maestro1"
        >
        </a>

      </div>

    </div>
  );
}

export default Pagina;

