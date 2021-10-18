import Link from 'next/link';
import useTranslation from '@/lib/useTranslation';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MobileMenu = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  function scrollTo(event: { preventDefault: () => void }, anchor: string) {
    event && event.preventDefault();

    if (router.pathname !== '/') {
      router.push('/#' + anchor);
    }

    const elementToView = document.getElementById(anchor);
    elementToView?.scrollIntoView();

    history.replaceState(
      '',
      document.title,
      window.location.origin + window.location.pathname + window.location.search
    );

    setIsMenuOpen(false);
  }

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  }

  return (
    <>
      <button
        className="burger visible md:hidden"
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>

      <ul
        className={`menu flex flex-col absolute bg-white dark:bg-black mt-4 md:hidden ${
          isMenuOpen ? 'menuRendered' : 'hidden'
        }`}
      >
        <Link href="/">
          <a
            onClick={(event) => scrollTo(event, 'top')}
            className="ml-4 p-1 text-lg text-gray-900 sm:p-4 dark:text-gray-100"
          >
            {t('home')}
          </a>
        </Link>
        <Link href="/">
          <a
            onClick={(event) => scrollTo(event, 'about')}
            className="ml-4 p-1 text-lg text-gray-900 sm:p-4 dark:text-gray-100"
          >
            {t('about')}
          </a>
        </Link>
        <Link href="/">
          <a
            onClick={(event) => scrollTo(event, 'projects')}
            className="ml-4 p-1 text-lg text-gray-900 sm:p-4 dark:text-gray-100"
          >
            {t('projects')}
          </a>
        </Link>
      </ul>
    </>
  );
};

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export default MobileMenu;