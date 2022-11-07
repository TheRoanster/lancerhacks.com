import styles from './Team.module.css'

export function Team() {

  let team_members = [
    ["ruhi", "Ruhi Yusuf", "Ruhi is a sophmore at Saint Francis. She's interested in computer science, robotics, and music.", "https://github.com/ruhiyusuf"],
    ["lino", "Lino Le Van", "Lino is a senior at Saint Francis. He loves programming and wants to share his passion with the world through hackathons like these.", "https://linolevan.com"],
    ["nitish", "Nitish Gourishetty", "Nitish Gourishetty is a junior at Saint Francis High School. Currently he loves immersing himself into the world of technology. In his free time he loves doing things like robotics and building cool machines, as well as other things things like reading, playing the guitar. Nitish hopes to spread his passion of technology.", "https://github.com/NitishGourishetty"],
    ["medha", "Medha Mahanta", "Medha is a sophmore at Saint Francis. She participates in programming club, math team, table tennis.", "https://github.com/MedhaMahanta"],
    ["nina", "Nina Le Van", "Nina is a freshman at Saint Francis. She partipates in 3D Printing club, 1001 stories, and color guard."],
    ["pranav", "Pranav Amarnath", "Pranav is a junior at Saint Francis. He likes programming, CADing, and robotics.", "https://github.com/PranavAmarnath"],
    ["swastik", "Swastik Purathepparambil", "Swastik is a sophmore at Saint Francis. He is very passionate about marketing and plays basketball.", "https://github.com/SwastikPurathepparambil"],
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