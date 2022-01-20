import styles from './Team.module.css'

export function Team() {

  let team_members = [
    ["avi", "Avi Rakholia", "Avi is a senior at Saint Francis."],
    ["ayush", "Ayush Raj", "Ayush is a junior at Saint Francis."],
    ["lino", "Lino Le Van", "Lino is a senior at Saint Francis. He has a friend named Matt Wong. Thank you.", "https://linolevan.com"],
    ["surya", "Surya Jasper", "Surya is a senior at Saint Francis."],
    ["medha", "Medha Mahanta", "Medha is a sophmore at Saint Francis. She loves math way too much and likes to hang out with Mrs. Vollucci."],
    ["molly", "Molly Sullivan", "Molly is a senior at Saint Francis."],
    ["nina", "Nina Le Van", "Nina is a freshman at Saint Francis."],
    ["nitish", "Nitish Gourishetty", "Nitish is a junior at Saint Francis."],
    ["pranav", "Pranav Amarnath", "Pranav is a junior at Saint Francis. He likes CADing, robotics, and spamming people's emails."],
    ["rithvik", "Rithvik Chavali ", "Rithvik is a sophmore at Saint Francis. He likes NextJS and is a huge nerd."],
    ["shlok", "Shlok Shah", "Shlok is a senior at Saint Francis. He never shows up to meetings really. He does band"],
    ["swastik", "Swastik Purathepparambil", "Swastik is a sophmore at Saint Francis. Something something basketball."],
    ["ruhi", "Ruhi Yusuf", "Ruhi is a sophmore at Saint Francis. She's interested in computer science and music."]
  ]
  
  return (
    <section className={styles.container}>
      <h1 className={styles.header}>The Team</h1>
      <div className={styles.team_container}>
        {
          team_members.map((member)=>(
            <div className={styles.member} key={member[0]}>
              <a href={member[3]} target="_blank" rel="noreferrer" className={styles.image} style={{backgroundImage: `url(/team/${member[0]}.jpg`}}/>
              <div>
                <h3>{member[1]}</h3>
                <p>{member[2]}</p>
              </div>
            </div>
          ))
        }
      </div>
      <p className={styles.description}>
      <b>LancerHacks</b> is organized by sfhacks, the <a href="https://sfhs.com">SFHS</a> Programming Club, run by a team of enthusiastic, motivated, and dedicated students.
      </p>
    </section>
  )
}