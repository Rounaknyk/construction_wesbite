import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: 'About Our Founder - Michael Rodriguez | Siddharth Constructions',
  description: 'Meet Michael Rodriguez, founder and CEO of Siddharth Constructions, with over 20 years of experience in the construction industry.',
}

export default function AboutFounder() {
  return (
    <div className={styles.founderPage}>
      <div className="container">
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.founderImage}>
              <Image
                src="https://drive.google.com/uc?export=view&id=15ZZGbD4cJsyPQqzPHfTdboowZ45Mml60"
                alt="Mr. Milind Subhedar"
                width={400}
                height={500}
              />
            </div>
            <div className={styles.founderInfo}>
              <h1>Mr. Milind Subhedar</h1>
              <p className={styles.title}>Founder & CEO</p>
            </div>
          </div>
        </section>

        <section className={styles.biography}>
          <div className={styles.bioContent}>
            <div className={styles.story}>
              <h2>The Story Behind Siddharth Constructions</h2>
              <p>
                With a vision rooted in quality and a passion for purposeful development, Mr. Milind Subhedar has been an active force in Goa’s real estate industry since 2007. He began his journey as the founder of M2K Technologies, where he successfully led the development of Niel’s Residency, completed in 2012. This marked the beginning of a series of well-executed residential projects across the state.
              </p>
              <p>
                Under the M2K banner, Milind spearheaded several landmark developments including M2K Banyan (Phase 1, 2 & 3), Sharda Enclave, and M2K Classic — projects that have earned him a reputation for trust, timely delivery, and uncompromised quality.
                </p>
                <p>
                  In 2018, he expanded his vision by founding Siddharth Constructionss, a new chapter dedicated to innovation, sustainability, and creating modern living spaces that resonate with the evolving needs of Goan communities. With over a decade of experience and a clear focus on the future, Milind Subhedar is now committed to building forward — crafting spaces that not only stand tall, but stand for something.
                </p>
            </div>
            
            
            <div className={styles.experience}>
              <h2>Professional Experience</h2>
              <div className={styles.experienceTimeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.year}>2000-2020</div>
                  <div className={styles.position}>Founder of Prime Electricals</div>
                                    <div className={styles.position}>Electrical trader and contractor</div>
                  <div className={styles.position}>Handled projects accross Goa</div>

                </div>
                

                <div className={styles.timelineItem}>
                 <div className={styles.year}>2014-2020</div>
                  <div className={styles.position}>Co-founder of M2K technologies</div>

                </div>

                 <div className={styles.timelineItem}>
                 <div className={styles.year}>2018-Present</div>
                  <div className={styles.position}>Founder of Siddharth Constructions</div>

                </div>
              </div>
            </div>
          </div>
        </section>

<section className={styles.qualifications}>
  <h2>Education & Certifications</h2>
  <div className={styles.qualificationsGrid}>
    <div className={styles.qualification}>
      <h3>🎓 Education</h3>
      <ul>
        <li>Diploma in Electrical Engineering</li>
        <li>Govt Polytechnic Panaji</li>
      </ul>
    </div>
    
    <div className={styles.qualification}>
      <h3>📜 Professional Memberships</h3>
      <ul>
        <li>Member, Lions Club of Sancoale</li>
      </ul>
    </div>

  </div>
</section>

        {/* <section className={styles.philosophy}>
          <h2>Leadership Philosophy</h2>
          <div className={styles.philosophyContent}>
            <div className={styles.philosophyText}>
              <p>
                "My approach to leadership is built on three fundamental principles: integrity, 
                innovation, and excellence. I believe that great construction projects are not just 
                about building structures, but about creating lasting value for communities and 
                establishing relationships built on trust and mutual respect."
              </p>
              <p>
                "At Siddharth Constructions, we don't just construct buildings; we craft experiences. Every project 
                is an opportunity to exceed expectations, push boundaries, and set new standards in 
                the industry. My role is to ensure that our team has the resources, support, and 
                inspiration needed to deliver exceptional results."
              </p>
            </div>
            
            <div className={styles.values}>
              <h3>Core Values</h3>
              <ul>
                <li><strong>Quality First:</strong> Never compromise on quality, regardless of project constraints</li>
                <li><strong>Team Excellence:</strong> Invest in people and foster a culture of continuous learning</li>
                <li><strong>Innovation:</strong> Embrace new technologies and methodologies to stay ahead</li>
                <li><strong>Sustainability:</strong> Build with the future in mind, considering environmental impact</li>
                <li><strong>Client Focus:</strong> Every decision should benefit our clients and their long-term success</li>
              </ul>
            </div>
          </div>
        </section> */}

        <section className={styles.personal}>
          <h2>Beyond Construction</h2>
          <div className={styles.personalContent}>
            {/* <div className={styles.interests}>
              <h3>Personal Interests</h3>
              <p>
                When not overseeing construction projects, Michael enjoys spending time with his family, 
                including his wife Sarah and their two children. He's passionate about sustainable architecture 
                and often travels to study innovative building techniques from around the world.
              </p>
              <p>
                Michael is also an avid photographer, with a particular interest in architectural photography. 
                He believes that understanding buildings from an artistic perspective helps him appreciate 
                the aesthetic aspects of construction that go beyond mere functionality.
              </p>
            </div> */}
            
            <div className={styles.community}>
              <h3>Community Involvement</h3>
              <ul>
                <li>Board Member - Local Chamber of Commerce</li>
                <li>Volunteer - Habitat for Humanity</li>
                <li>Mentor - Young Professionals Construction Association</li>
                <li>Speaker - Construction Industry Conferences</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}