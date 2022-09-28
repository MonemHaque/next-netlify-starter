import styles from './Header.module.css'

export default function Header({ title }) {
  return (
    <div className={styles.topnav}>
      <h1>{title}</h1>
      <a className={styles.active} href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  )
}
