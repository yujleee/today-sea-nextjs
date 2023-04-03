import Link from 'next/link';
import styles from 'styles/components/Gnb.module.scss';
import { FiChevronLeft } from 'react-icons/fi';
import { BsQuestionLg } from 'react-icons/bs';

interface HeaderProps {
  onOpen: () => void;
}

const Header = ({ onOpen }: HeaderProps) => {
  return (
    <header className={styles.gnb}>
      <button className={styles.btnMenu} type="button">
        <Link href="/">
          <FiChevronLeft
            className={`${styles.faSolid} ${styles.faChevronLeft} ${styles.icChevron}`}
            aria-label="뒤로가기"
          />
        </Link>
      </button>
      <button className={styles.btnGuide} type="button" onClick={onOpen}>
        <BsQuestionLg
          className={`${styles.faSolid} ${styles.faQuestion} ${styles.icGuide}`}
          aria-label="안내사항"
        />
      </button>
    </header>
  );
};

export default Header;
