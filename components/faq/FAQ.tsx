import styles from './FAQ.module.css'

export function FAQ() {
  
  return (
    <section className={styles.container} id="faq">
      <h1 className={styles.header}>FAQ</h1>
      <div className={styles.question_container}>
        <div className={styles.question}>
          <h3 className={styles.question_header}>What is a hackathon?</h3>
          <p className={styles.answer}>A hackathon is an event at which programmers of all skill levels can come together and create. They are perfect opportunities to experiment and learn.</p>
        </div>
        <div className={styles.question_right}>
          <h3 className={styles.question_header}>Do I need any prior experience in computer science?</h3>
          <p className={styles.answer}>No prior experience is needed!</p>
        </div>
        <div className={styles.question}>
          <h3 className={styles.question_header}>Who can attend? Is it free?</h3>
          <p className={styles.answer}>Anyone currently in high school or 8th grade. Yes! Admission, swag, workshops -- everything is free.</p>
        </div>
        <div className={styles.question_right}>
          <h3 className={styles.question_header}>Will there be prizes?</h3>
          <p className={styles.answer}>Yes, there will be prizes!</p>
        </div>
        <div className={styles.question_right}>
          <h3 className={styles.question_header}>Do I need a team?</h3>
          <p className={styles.answer}>No, but we strongly encourage collaboration, so if you don’t have a team, let us know on the RSVP form and we’ll help you find one.</p>
        </div>
        <div className={styles.question}>
          <h3 className={styles.question_header}>How big are the teams?</h3>
          <p className={styles.answer}>Up to four people.</p>
        </div>
        <div className={styles.question}>
          <h3 className={styles.question_header}>What should I bring?</h3>
          <p className={styles.answer}>A laptop, a charger, and yourself!</p>
        </div>
        <div className={styles.question_right}>
          <h3 className={styles.question_header}>Do I have to stay for the whole event?</h3>
          <p className={styles.answer}>No. We understand that everyone has busy schedules and may not be able to stay for the entire event. Contact us to make arrangements.</p>
        </div>
        <div className={styles.question_right}>
          <h3 className={styles.question_header}>More questions?</h3>
          <p className={styles.answer}>Email us at <a href="mailto:hello@lancerhacks.com">hello@lancerhacks.com</a> with any questions you have.</p>
        </div>
        <div className={styles.question_right}>
          <h3 className={styles.question_header}>What should I do if I have any dietary restrictions?</h3>
          <p className={styles.answer}>A form will be sent out to all registrants regarding information about food and catering, just make sure to list any dietary restrictions there! We will provide a vegan option for all meals. </p>
        </div>
      </div>
    </section>
  )
}