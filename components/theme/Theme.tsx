import styles from './Theme.module.css'

export function Theme() {
  
  let themes = [
    ['logo'],
]

  return (
    <section className={styles.container} id="theme">
      <h1 className={styles.header}>Theme</h1>
      {
        themes.map((themes)=> <a key={themes[0]} href={themes[1]}><img className={styles.sponsor} alt={themes[0]} src={`/sponsors/${themes[0]}.png`}/></a>)
      }
        {/*<h2 >To sponsor our event, email us at hello@lancerhacks.com. Feel free to read our sponsorship prospectus below.</h2>*/}
        {/*<a className={styles.sponsor_prospectus} href="https://docs.google.com/document/d/1WjlYQLC2-Ryv-3X7zEn0kZ4c-ZbXSRQcxSvl-Ap9RZM/edit?usp=sharing">Sponsorship Prospectus</a>*/}

    </section>
  )
}