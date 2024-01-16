import styles from './Sponsors.module.css'

export function Sponsors() {
  
  let sponsors = [
    ['wolfram', 'https://www.wolfram.com'],
]

  return (
    <section className={styles.container} id="sponsors">
      <h1 className={styles.header}>Sponsors</h1>
      {
        sponsors.map((sponsor)=> <a key={sponsor[0]} href={sponsor[1]}><img className={styles.sponsor} alt={sponsor[0]} src={`/sponsors/${sponsor[0]}.png`}/></a>)
      }
        {/*<h2 >To sponsor our event, email us at hello@lancerhacks.com. Feel free to read our sponsorship prospectus below.</h2>*/}
        {/*<a className={styles.sponsor_prospectus} href="https://docs.google.com/document/d/1WjlYQLC2-Ryv-3X7zEn0kZ4c-ZbXSRQcxSvl-Ap9RZM/edit?usp=sharing">Sponsorship Prospectus</a>*/}

    </section>
  )
}