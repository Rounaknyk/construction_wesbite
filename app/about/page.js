import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: 'About Siddharth Construction - Our Company Story',
  description: 'Learn about Siddharth Construction\'s mission, values, and commitment to quality construction services.',
}

export default function AboutCompany() {
  return (
    <div className={styles.aboutPage}>
      <div className="container">
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>About Siddharth Construction</h1>
            <p className={styles.subtitle}>
              Building Excellence Since 2018
            </p>
          </div>
        </section>

        <section className={styles.mission}>
          <div className={styles.missionContent}>
            <div className={styles.textContent}>
              <h2>Our Mission</h2>
              <p>
                At Siddharth Constructions, our mission is to build more than just homes — we aim to create enduring spaces that foster community, comfort, and connection. Guided by the principles of quality, transparency, and sustainability, we are committed to delivering construction excellence while honoring Goa’s cultural heritage.
              </p>
              <p>
We strive to blend modern design with thoughtful functionality, ensuring that every project adds long-term value to our clients and the neighborhoods we serve. Through innovation, integrity, and a client-first approach, we continue to shape a built environment that stands the test of time — both structurally and emotionally.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=400&fit=crop"
                alt="Construction team at work"
                width={500}
                height={400}
              />
            </div>
          </div>
        </section>

        <section className={styles.values}>
          <h2>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🏆</div>
              <h3>Quality Excellence</h3>
              <p>We maintain the highest standards in every aspect of our work, from initial planning to final delivery.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Integrity & Trust</h3>
              <p>We build lasting relationships based on honesty, transparency, and reliable communication.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🔧</div>
              <h3>Innovation</h3>
              <p>We embrace new technologies and methods to deliver cutting-edge construction solutions.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌱</div>
              <h3>Sustainability</h3>
              <p>We are committed to environmentally responsible construction practices and green building solutions.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <h3>Efficiency</h3>
              <p>We optimize our processes to deliver projects on time and within budget without compromising quality.</p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>👥</div>
              <h3>Team Excellence</h3>
              <p>Our skilled professionals are our greatest asset, driving innovation and quality in every project.</p>
            </div>
          </div>
        </section>

        <section className={styles.services}>
          <h2>Our Services</h2>
          <div className={styles.servicesContent}>
            <div className={styles.servicesList}>
              <div className={styles.serviceCategory}>
                <h3>Residential Construction</h3>
                <ul>
                  <li>Custom Home Building</li>
                  <li>Multi-family Housing</li>
                  <li>Luxury Residences</li>
                  <li>Affordable Housing Projects</li>
                </ul>
              </div>
              
              <div className={styles.serviceCategory}>
                <h3>Commercial Construction</h3>
                <ul>
                  <li>Office Buildings</li>
                  <li>Retail Spaces</li>
                  <li>Industrial Facilities</li>
                  <li>Hospitality Projects</li>
                </ul>
              </div>
              
              <div className={styles.serviceCategory}>
                <h3>Specialized Services</h3>
                <ul>
                  <li>Renovation & Remodeling</li>
                  <li>Project Management</li>
                  <li>Design-Build Services</li>
                  <li>Consultation & Planning</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.servicesImage}>
              <Image
                src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=400&fit=crop"
                alt="Construction services"
                width={500}
                height={400}
              />
            </div>
          </div>
        </section>

        <section className={styles.achievements}>
          <h2>Our Achievements</h2>
          <div className={styles.achievementsGrid}>
            <div className={styles.achievementCard}>
              <h3>150+</h3>
              <p>Successful Projects</p>
            </div>
            <div className={styles.achievementCard}>
              <h3>15+</h3>
              <p>Years in Business</p>
            </div>
            <div className={styles.achievementCard}>
              <h3>50+</h3>
              <p>Professional Team</p>
            </div>
            <div className={styles.achievementCard}>
              <h3>25+</h3>
              <p>Industry Awards</p>
            </div>
          </div>
        </section>

        <section className={styles.whyChooseUs}>
          <h2>Why Choose Siddharth Construction?</h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reason}>
              <h3>Proven Track Record</h3>
              <p>Over 15 years of successful project delivery across residential and commercial sectors.</p>
            </div>
            <div className={styles.reason}>
              <h3>Expert Team</h3>
              <p>Our certified professionals bring decades of combined experience to every project.</p>
            </div>
            <div className={styles.reason}>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control processes ensure every project meets our high standards.</p>
            </div>
            <div className={styles.reason}>
              <h3>Timely Delivery</h3>
              <p>We pride ourselves on completing projects on schedule without compromising quality.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}