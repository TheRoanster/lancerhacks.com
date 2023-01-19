import styles from './Team.module.css'

export function Team() {

    let team_members = [
        ["ruhi", "Ruhi Yusuf", "Ruhi is a junior at Saint Francis. She's interested in computer science, robotics, and music.", "https://github.com/ruhiyusuf"],
        ["nitish2", "Nitish Gourishetty", "Nitish Gourishetty is a senior at Saint Francis High School. He loves immersing himself into the world of technology through clubs like Robotics and Arduino", "https://github.com/NitishGourishetty"],
        ["nina", "Nina Le Van", "Nina is a sophomore at Saint Francis. She partipates in 3D Printing club, 1001 stories, and color guard."],
        ["pranav", "Pranav Amarnath", "Pranav is a senior at Saint Francis. He likes programming, CADing, and robotics.", "https://github.com/PranavAmarnath"],
        ["katherine", "Katherine Winton", "Katherine is a sophomore at Saint Francis High School. She likes programming, reading, art, and music. She participates in the tech clubs, newspaper, and campus ministry."],
        ["raffaella", "Raffaella Laguteta", " Raffaella is a freshman at Saint Francis. She enjoys listening to music and reading good books in her free time"],
        ["aarush", "Aarush Kachhawa", "Aarush is a senior at Saint Francis. He enjoys robotics and new technology"],
        ["rohan", "Rohan Sinha", "Rohan is a senior at Saint Francis. He enjoys a mix of science and technology"],
        ["devansh", "Devansh Malik", "Devansh is a sophomore at Saint Francis. He loves programming"],
        ["smriti", "Smriti Vijay", "Smriti is a sophomore at Saint Francis. She enjoys coding and Speech and Debate"],
        ["lino", "Lino Le Van", "Lino is an alumni of Saint Francis. He loves programming and wants to share his passion with the world through hackathons like these.", "https://linolevan.com"],
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