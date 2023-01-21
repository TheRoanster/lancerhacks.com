import styles from './Speakers.module.css'

export function Speakers() {
    let speakers = [ //****currently added speaker images in the team folder, I'd suggest making a new speaker folder in the future!!!, but for now just add the image there
        ["Muffi", "Muffi Ghadiali", "Muffi Ghadiali is General Manager of Ford Pro Charging and CEO of Electriphi, a technology start-up acquired by Ford Motor Company in 2021. He leads Commercial EV charging strategy and execution within Ford Pro, a global vehicle series and distribution business delivering seamless integration of commercial vehicles, services and charging solutions. Mr. Ghadiali has over 25 years of technology leadership with domain expertise in EVs, charging infrastructure and energy solutions. \n", ""],
        ["Sophia", "Sophia Sun", "Sophia Sun is a senior product manager at Microsoft working on AR, VR, short-form video, and education products. Sophia is also co-host of bamboo & glass podcast, where she highlights stories about learning, unlearning, and discovering the abundant possibilities of who you choose to be.\n", "https://www.linkedin.com/in/sophiasysun"],
        ["Roshni", "Roshni Venkatesan Suresh", "Roshni Venkatesan Suresh is a current Hardware Rotation Program Engineer at Intel Corporation. She was also a Physical Design Engineer intern with the same team. Ms. Suresh completed her master’s in Computer Engineering at ASU and was a Graduate Researcher for one of the projects funded by NASA and ISRO. Her main interest lies in designing chips and looking out for timing violations. In the future, she would like to lead a team in one of the business units at Intel, and potentially dream to start her executive MBA at Stanford/MIT/Harvard!\n"],
        //["Lonna Edwards", "Lonna Edwards"],
        //["Arelys", "Arelys Navarro"]
        ["placeholder", "Lonna Edwards", "Intel Panelist"],
        ["placeholder", "Arelys Navarro", "Intel Panelist"]

    ]

    return (
        <section className={styles.container}>
            <h1 className={styles.header}>Speakers and Panelists</h1>
            <div className={styles.speaker_container}>
                {
                    speakers.map((member)=>(
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
                <b>LancerHacks</b> is honored to have such amazing, dedicated and experienced speakers.
            </p>
        </section>
    )
}