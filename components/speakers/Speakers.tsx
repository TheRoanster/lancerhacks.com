import styles from './Speakers.module.css'

export function Speakers() {
    let speakers = [ //****currently added speaker images in the team folder, I'd suggest making a new speaker folder in the future!!!, but for now just add the image there
        ["Sujata", "Sujata Kosalge", "Sujata Kosalge is Vice President of Engineering for the Core Data organization at Google. Core Data is responsible for data at Google, working closely with teams across the company to serve their data needs.  Joining Google as an engineer in 2007, she was an integral part of the growth of Google’s Adwords API before leaving Ads. Sujata is passionate about Diversity and Inclusion, and is proud to have held the DEI chair for Ads, and a committee member for Core. Sujata is also one of the global co-chairs for Women@ ERG group, and is excited about the responsibility of making Google a more inclusive and equitable workplace for Women. Prior to joining Google, Sujata was an engineer at eBay and worked in their infrastructure group. In her free time, she loves to travel with her husband and two boys.\n", "https://www.linkedin.com/in/sujata/"],
        ["weiwei", "Weiwei Yan", "Weiwei is a product manager at Google, working on user insights platforms for data-driven decision making. Before being a product manager, she was a software engineer for five years. Her interest is utilizing new technologies to encourage innovation and augment human capabilities. She is excited to share her knowledge and experience with high school students, inspiring them to explore the limitless potential of their own paths in technology.", "https://www.linkedin.com/in/weiwei-yan-2114b055" ],
        ["Rosemary", "Rosemary Emery-Montemerlo", "Rosemary Emery-Montemerlo is an Engineering Director at Google. She leads efforts to improve the developer experience for the information retrieval infrastructure that underpins many Google products, including Search.  Prior to joining Google in 2006, Rosemary received a B.A.Sc. in Systems Design Engineering from the University of Waterloo and a PhD in Robotics from Carnegie Mellon University.  As an undergraduate, her internship experiences were varied, from getting to use the same gym as astronauts at the Canadian Space Agency to testing control boards in a faraday cage next to a top-secret animatronic dinosaur. In graduate school, Rosemary spent several years teaching robots how to play soccer.\n", "https://www.cs.cmu.edu/~remery/"],
        ["Neha", "Neha Chourasia","Neha Chourasia is an engineering leader on the Science-Technology team at Chan-Zuckerberg Initiative, where she spearheads the development of innovative tools and technologies to help accelerate the pace of biomedical research. With a background at Oracle, Neha brings extensive experience in building core software components and frameworks, which have been instrumental in optimizing business processes for numerous customers. Beyond her professional endeavours, Neha is deeply committed to volunteering and practising yoga. She shares her practice with a small group as part of her holistic lifestyle.", "https://www.linkedin.com/in/neha-chourasia-87170612?challengeId=AQGrkj_8f5396AAAAY33UjEbGsNG81Pm0dMXrIj8ptwPcclWXdGL0fjraXQ2A5KPo4KEUxkY4OLJuvCxO6kaXssaVZmvpiWDPA&submissionId=188cc9cb-117b-b817-e2c0-80c7e0d6284c&challengeSource=AgEEyCQNB-VAcQAAAY33Uju530ms2oWHLRh3lwOXDTX1FtVgbw-oK2NwNP67_rc&challegeType=AgG2M6_JMiU30gAAAY33Uju90O-AjCcfbaxjByVC-ZqCJo4QFmMVNss&memberId=AgHsRJpHeKNbjAAAAY33UjvAjXB4KRdGRyzgRuqQgRQi5tQ&recognizeDevice=AgEH7IO9ESOnnQAAAY33UjvDzsIwL06PqE5LfMIs-uyKLIAr0krx"],
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
