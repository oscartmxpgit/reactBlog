import { Close, Menu } from '#constants/icons';
import styles from '#scss/modules/Navbar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { pathname: path } = useRouter();
  const is = (pathname: string) => {
    const isThisPath = pathname === path;
    return isThisPath ? styles.on : '';
  };
  const paths = [
    {
      name: 'Inicio',
      href: '/',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Proyectos',
      href: '/works',
    },
  ];
  return (
    <header className={styles.header}>
      {/* <picture className={styles.logo}>
        <Image className={styles.img} src="/logo.svg" alt="logo" width={55} height={55}/>
      </picture> */}
      <nav className={styles.nav + ` ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          {paths.map(({ name, href }) => (
            <li key={name} className={styles.navItem + ` ${is(href)}`}>
              <Link href={href}>
                <a className={styles.navLink}>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.menu} onClick={toggle}>
        {isOpen ? <Close /> : <Menu />}
      </div>
    </header>
  );
};

export default Navbar;
