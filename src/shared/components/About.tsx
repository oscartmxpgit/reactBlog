import { contact } from '#constants/data';
import styles from '#scss/modules/About.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section className="about">

      <div className={styles.sectionContent}>
        {/* <div className="image">
          <Image src="/images/user.webp" layout="responsive" width={90} height={90} />
        </div> */}
        <div className="info">
          <h2 className={styles.stat}>En prácticas...</h2>
          <div className={styles.contact}>
            {contact.map((item) => (
              <Link key={item.name} href={item.url} passHref>
                <a className={styles.link}>
                  <item.icon />
                </a>
              </Link>
            ))}
          </div>
          <p className={styles.text}>
           Busco un trabajo de prácticas con horario flexible y compatible con otro trabajo/estudios de media jornada.

          </p>
          <button onClick={() => openUrl()} className={styles.button}>Ver Curriculum Vitae (PDF)</button>

        </div>
      </div>
    </section>
  );
};

export default About;
function openUrl() {
  window.open('/static/CV Oscar Trujillo Morales.pdf', '_blank');
  return [true, () => {}];
}

