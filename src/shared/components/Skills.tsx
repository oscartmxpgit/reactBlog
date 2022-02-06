import styles from '#scss/modules/Skills.module.scss';
import { skills } from '#constants/data';

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className="title">Conocimientos de...</h2>
      <div className={styles.skillsContent}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skill}>
            <div className={styles.icon}>
              <skill.icon />
            </div>
            <span className={styles.name}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
