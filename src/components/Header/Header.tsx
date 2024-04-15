'use client'

import Link from 'next/link';
import './Header.scss';
import { usePathname } from 'next/navigation'

const Header = () => {
  const dayId = usePathname().split('/')[2];
  
  return (
    <header className={dayId ? 'header' : 'header1'}>
      {dayId && (
        <Link
          href={`/days/${+dayId - 1}`}
          className={+dayId !== 0 ? 'header__link' : 'header__hidden'}
        >
          Попередній день
        </Link>
      )}

      <Link
        href='/'
        className='header__link'
      >
        Головна
      </Link>

      {dayId && (
        <Link
          href={`/days/${+dayId + 1}`}
          className={+dayId !== 28 ? 'header__link' : 'header__hidden'}
        >
          Наступний день
        </Link>
      )}
    </header>
  );
};

export default Header;
