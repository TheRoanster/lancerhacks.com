import { useEffect, useState } from 'react'
import styles from './About.module.css'

interface IDate {
  days: string;
  hours: string;
  minutes: string;
  seconds: string
}

export const lancerhacksDate = new Date(2024, 2, 9) //zero index month watch out

export function About() {
  const [time, setTime] = useState<IDate>({days: "100", hours: "10", minutes: "05", seconds: "03"})

  useEffect(() => {
    const interval = setInterval(() => {
      let t: any = {}

      let difference = Math.round((lancerhacksDate.getTime() - new Date().getTime())/1000)

      t.days = Math.floor(difference / 86400);
      difference -= t.days * 86400;

      t.hours = Math.floor(difference / 3600) % 24;
      difference -= t.hours * 3600;

      t.minutes = Math.floor(difference / 60) % 60;
      difference -= t.minutes * 60;

      t.seconds = difference % 60

      for(let [key, value] of Object.entries(t)) {
        let val = value as number
        t[key] = (val < 10 ? "0" : "") + val.toString()
      }

      setTime(t)
    }, 500)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section className={styles.container} id="about">
      <div className={styles.information}>
        <div>
          <h1 className={styles.header}>What is LancerHacks?</h1>
          <p className={styles.about}>
          <b>LancerHacks</b> VII is the seventh annual twelve-hour hackathon organized by the students at Saint Francis High School. This year, LancerHacks will take place in person from 8 AM to 10 PM on Saturday March 9, 2024, hosting approximately 150 students.
<br /><br />

By implementing a variety of engaging challenges and activities to supplement the project-developing component of hackathons, LancerHacks emphasizes collaboration among attendees, mentorship through peers and industry experts, and attendance of speaker events—all while expanding on the traditional understanding and various everyday applications of computer science, providing a unique learning experience for all participants.<br /><br />

We encourage students of all experience levels to attend the event to perceive the impact and potential of computer science when applied with a creative and personal touch. LancerHacks believes that computer science is for everyone, as it requires a variety of perspectives, the ability to think outside of the box, and social awareness to identify opportunities for improving communities through the assistance of computer science. 
          </p>
        </div>
        <div>
          <div>
            <div className={styles.timer}>
              <p className={styles.timer_time}>{time.days}</p>
              <p className={styles.timer_time}>:</p>
              <p className={styles.timer_time}>{time.hours}</p>
              <p className={styles.timer_time}>:</p>
              <p className={styles.timer_time}>{time.minutes}</p>
              <p className={styles.timer_time}>:</p>
              <p className={styles.timer_time}>{time.seconds}</p>
              <p className={styles.timer_label}>Days</p>
              <p className={styles.timer_label}></p>
              <p className={styles.timer_label}>Hours</p>
              <p className={styles.timer_label}></p>
              <p className={styles.timer_label}>Mins</p>
              <p className={styles.timer_label}></p>
              <p className={styles.timer_label}>Secs</p>
            </div>
            <h1 className={styles.before}>
              Before LancerHacks
            </h1>
          </div>
          <div className={styles.map_container}>
            <iframe title="Map to Saint Francis" className={styles.map} width="100%" height="100%" frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.855732314151!2d-122.08853048421886!3d37.36959037983529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb12c54f0dc7d%3A0x1f75f9c2ea008396!2sSt.+Francis+High+School!5e0!3m2!1sen!2sus!4v1502246381985" allow="fullscreen"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}