'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { projectsCompleted, yearsOfExperience, teamMembers } from '../constants/basic'
import {teamMembersDetails} from '../constants/basic';
import Counter from '../components/Counter'
import { useState, useEffect } from 'react'
import scene from '../assets/scene.jpeg'

// Updated valueBackgrounds array with more diverse construction/architecture images
const valueBackgrounds = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&auto=format&fit=crop&q=80'
];


export default function AboutCompany() {
const [currentBgIndex, setCurrentBgIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentBgIndex((prevIndex) => (prevIndex + 1) % valueBackgrounds.length);
  }, 4000); // Change image every 4 seconds

  return () => clearInterval(interval);
}, []);

  return (
    <div className={styles.aboutPage}>
      <div className="container">
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>About Siddharth Constructions</h1>
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
                At Siddharth Constructionss, our mission is to build more than just homes — we aim to create enduring spaces that foster community, comfort, and connection. Guided by the principles of quality, transparency, and sustainability, we are committed to delivering construction excellence while honoring Goa's cultural heritage.
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
                priority
              />
            </div>
          </div>
        </section>
<section className={styles.values}>
  <div className={styles.valuesBackground}>
    {valueBackgrounds.map((bg, index) => (
      <div 
        key={index}
        className={`${styles.valueBgImage} ${index === currentBgIndex ? styles.active : ''}`}
        style={{ backgroundImage: `url(${bg})` }}
      />
    ))}
    <div className={styles.valuesOverlay}></div>
  </div>
  <div className={styles.valuesContent}>
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
  </div>
</section>

       <section className={styles.achievements}>
  <h2>Our Achievements</h2>
  <div className={styles.achievementsGrid}>
    <div className={styles.achievementCard}>
      <h3><Counter value={projectsCompleted - 1} duration={600} /></h3>
      <p>Successful Projects</p>
    </div>
    <div className={styles.achievementCard}>
      <h3><Counter value={yearsOfExperience} duration={600} /></h3>
      <p>Years in Business</p>
    </div>
    <div className={styles.achievementCard}>
      <h3><Counter value={teamMembers - 1} duration={600} /></h3>
      <p>Professional Team</p>
    </div>
  </div>
  
</section>
        <section className={styles.team}>
          <h2>Our Team</h2>
          <p className={styles.teamSubtitle}>Meet the dedicated professionals behind our success</p>
          
          <div className={styles.teamGrid}>
            {teamMembersDetails.map((member) => (
              <div key={member.id} className={styles.teamCard}>
          
                <div className={styles.teamInfo}>
                  <h3>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

     <section className={styles.whyChooseUs}>
  <div className={styles.whyChooseBg} style={{ 
    backgroundImage: `url(${scene.src})`
    
  }}>
    <div className={styles.whyChooseOverlay}></div>
    <div className={styles.whyChooseContent}>
      <h2>Why Choose Siddharth Constructions?</h2>
      <div className={styles.reasonsContainer}>
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
    </div>
  </div>
</section>
        <br></br>
      </div>
    </div>
  )
}