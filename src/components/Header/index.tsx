import format from 'date-fns/format';
import ja from 'date-fns/locale/ja';

import styles from './styles.module.scss';

export function Header() {
  const currentDate = format(new Date(), 'Pp', {
    locale: ja,
  });

  return (
    <header className={styles.headerContainer}>
      <img src="/32590.png" alt="ロゴ" />

      <p>おすすめ</p>

      <span>{currentDate}</span>
    </header>
  )
}