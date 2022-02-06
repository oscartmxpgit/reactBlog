import styles from '#scss/modules/Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.info}>
        <h2 className={styles.say}>Hola! Soy</h2>
        <h1 className={styles.title}>Oscar Trujillo</h1>
        <p className={styles.text}>
          👋MSc. Ing. Oscar Trujillo Morales<br />

          👀 Estoy interesado en el Desarrollo Web. 🌱 Actualmente estoy cursando un Máster en la materia<br />
          💭 Me gustaría a colaborar en nuevos proyectos<br />
          📫 Puedes contactarme  <a href="mailto:oscar.trujillo1985@gmail.com">oscar.trujillo1985@gmail.com</a><br /><br />
        </p>
      </div>
    </div>
  );
};

export default Hero;
