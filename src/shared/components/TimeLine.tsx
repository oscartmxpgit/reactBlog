import styles from '#scss/modules/TimeLine.module.scss';

const TimeLine = () => {
  return (
    <section className={styles.timeLine}>
      <div className={styles.timeLineBlocks}>

          <article className={styles.event}>
            <div className={styles.header}>
              <div className="image"></div>
              <div className="meta">
                <h2 className={styles.eventTitle}>Bachiller en Ciencias</h2>
                <div className={styles.eventDate}>2002</div>
              </div>

            </div>
            <p className={styles.eventContent}>
                Instituto Preuniversitario Vocacional de Ciencias Exactas (IPVCE) de La Habana «Vladimir Ilich Lenin». Grupo de alto rendimiento de Matemática.

            </p>
          </article>
          <article className={styles.event}>
            <div className={styles.header}>
              <div className="image"></div>
              <div className="meta">
                <h2 className={styles.eventTitle}>Ingeniero Informático</h2>
                <div className={styles.eventDate}>2010</div>
              </div>

            </div>
            <p className={styles.eventContent}>
              Universidad Tecnológica de La Habana (CUJAE)
            </p>
          </article>
          <article className={styles.event}>
            <div className={styles.header}>
              <div className="image"></div>
              <div className="meta">
                <h2 className={styles.eventTitle}>Máster en Ciencias Matemáticas</h2>
                <div className={styles.eventDate}>2019</div>
              </div>

            </div>
            <p className={styles.eventContent}>
             Universidad de La Habana. Publicación de artículos y participado en eventos científicos nacionales e internacionales, relacionados con la enseñanza de la Matemática, como el Congreso Internacional de Educación Superior Universidad
            </p>
          </article>
          <article className={styles.event}>
            <div className={styles.header}>
              <div className="image"></div>
              <div className="meta">
                <h2 className={styles.eventTitle}>Máster en Desarrollo Web</h2>
                <div className={styles.eventDate}>2022</div>
              </div>

            </div>
            <p className={styles.eventContent}>
            Máster Universitario Oficial de Desarrollo de Aplicaciones y Servicios Web (MasterWeb) 21/22
            </p>
          </article>

      </div>
    </section>
  );
};

export default TimeLine;
