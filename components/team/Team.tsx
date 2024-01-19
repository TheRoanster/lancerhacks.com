import styles from './Team.module.css'

export function Team() {

    let team_members = [
        ["Ruhi", "Ruhi Yusuf", "Ruhi is a senior at Saint Francis. She enjoys working in robotics, playing music, and...", "https://github.com/ruhiyusuf"],
        ["Rohan", "Rohan Mittal", "Rohan is a junior at Saint Francis. He enjoys programming, working out, and robotics.", "https://github.com/TheRoanster"],
        ["Nina", "Nina Le Van", "Nina is a junior at Saint Francis. She enjoys art, 3D printing, and going to the gym. In her free time, she likes to read, paint, and go hiking with her friends.\n"],
        ["Tim", "Tim Le Van", "Tim is a freshman at Saint Francis. He is involved in 3D printing,  coding, and soccer. He likes to play video games, read, and go hiking/biking."],
        ["Katherine", "Katherine Winton", "Katherine is a junior at Saint Francis. Within school, she is involved in tech clubs, campus ministry, and newspaper. Outside of school, she likes to read, do art, play with her dog, and watch Marvel movies."],
        ["Lily", "Lily Ozaeta", "Lily is a junior at Saint Francis. She enjoys 3D printing, reading, and baking. In her free time, she loves to travel around the Bay Area and drink coffee at cafes."],
        ["Ashmit", "Ashmit Kachhawa", "Ashmit is a sophomore at Saint Francis. In his free time, he enjoys smelling lizards, eating shoes, and being Aarush's little brother. "],
        ["Yanik", "Yanik Dabke", "Yanik is a senior at Saint Francis. At Saint Francis, he is involved in debate, track & field, and programming. In his free time he enjoys developing games, dancing, and playing Minecraft.", "https://www.linkedin.com/in/yanikdabke"],
        ["Devansh", "Devansh Malik", "Devansh is a junior at Saint Francis. He enjoys drawing, spending time with family, and watching comedy movies. Additionally, Devansh likes to travel and explore new places!"],
        ["Smriti", "Smriti Vijay", "Smriti is a junior at Saint Francis. She participates in IFSA, debate, newspaper, and the tech clubs. She likes reading, writing, and listening to music."],
        ["Salma", "Salma Afifiy", "Salma is a junior at Saint Francis. She enjoys art, 3D printing, and puzzles. In her free time, she likes to hang out with her friends and naps. "],
        ["Caroline", "Caroline Luu", "Caroline is a sophomore at Saint Francis. She is involved in VSA, robotics, and crochet club. In her free time, she enjoys listening to music, journaling, and watching movies. "],
        ["Eshaan", "Eshaan Andotra", " Eshaan is a senior at Saint Francis. At Saint Francis, He is involved in motorsport engineering, gaming club, BRIC bros, and FASU. In his free time he enjoys going out with friends, crew (rowing), traveling, learning new languages, and playing video games."],
        ["Akshara", "Akshara Panchumarthi", "Akshara is a sophomore at Saint Francis. She is involved in robotics and newspaper. In her free time, she enjoys bullet journaling, trying new foods, and going on walks."],
        ["Reshaan", "Reshaan Tolani", "Reshaan Tolani is a high school senior with a keen interest in technology and entrepreneurship. Aspiring to make a mark in the digital landscape, Reshaan combines academic excellence with a passion for innovation, showcasing a promising future in the tech industry."],
        ["Philip", "Philip Wang", "Philip Wang is a computer science teacher and volleyball coach at Saint Francis. He has been teaching for 19+ years and enjoys riding motorcycles in his free time.", "https://www.linkedin.com/in/philip-w-9b658b60?trk=people-guest_people_search-card"]
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