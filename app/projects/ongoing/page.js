import ProjectCard from '../../components/ProjectCard'
import styles from './page.module.css'

export const metadata = {
  title: 'Ongoing Projects - Siddharth Constructions',
  description: 'View our current construction projects in progress including residential, commercial, and infrastructure developments.',
}

const ongoingProjects = [
  {
    id: 1,
    title: 'Downtown Shopping Mall',
    location: 'City Center',
    description: 'Modern shopping mall with 150 retail spaces, food court, and entertainment zone.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    status: 'ongoing',
    details: {
      duration: '18 months',
      type: 'Commercial',
      completion: '65%',
      completionDate: 'Q2 2025'
    }
  },
  {
    id: 2,
    title: 'Tech Park Phase II',
    location: 'Innovation District',
    description: 'Expansion of existing tech park with 5 new office buildings and shared facilities.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop',
    status: 'ongoing',
    details: {
      duration: '24 months',
      type: 'Commercial',
      completion: '45%',
      completionDate: 'Q3 2025'
    }
  },
  {
    id: 3,
    title: 'High-Rise Apartments',
    location: 'Riverside',
    description: 'Luxury 30-story apartment building with premium amenities and river views.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
    status: 'ongoing',
    details: {
      duration: '30 months',
      type: 'Residential',
      completion: '35%',
      completionDate: 'Q4 2025'
    }
  },
  {
    id: 4,
    title: 'Community Hospital',
    location: 'North District',
    description: 'New 150-bed community hospital with specialized treatment centers.',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop',
    status: 'ongoing',
    details: {
      duration: '28 months',
      type: 'Healthcare',
      completion: '55%',
      completionDate: 'Q1 2025'
    }
  }
]

export default function OngoingProjects() {
  return (
    <div className={styles.projectsPage}>
      <div className="container">
        <section className={styles.hero}>
          <h1>Ongoing Projects</h1>
          <p>Explore our current construction projects that are transforming landscapes and communities.</p>
        </section>

        <section className={styles.stats}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <h3>4</h3>
              <p>Active Projects</p>
            </div>
            <div className={styles.stat}>
              <h3>72%</h3>
              <p>Average Safety Rating</p>
            </div>
            <div className={styles.stat}>
              <h3>200+</h3>
              <p>Workers On Site</p>
            </div>
            <div className={styles.stat}>
              <h3>100+</h3>
              <p>Days Without Incident</p>
            </div>
          </div>
        </section>

        <section className={styles.projects}>
          <div className={styles.projectsGrid}>
            {ongoingProjects.map((project) => (
              <div key={project.id} className={styles.projectWrapper}>
                <ProjectCard project={project} showStatus />
                <div className={styles.projectExtra}>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${project.details.completion}` }}
                    ></div>
                  </div>
                  <div className={styles.projectDetails}>
                    <div className={styles.projectDetail}>
                      <span className={styles.label}>Completion:</span>
                      <span>{project.details.completion}</span>
                    </div>
                    <div className={styles.projectDetail}>
                      <span className={styles.label}>Target Date:</span>
                      <span>{project.details.completionDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Want Project Updates?</h2>
          <p>Subscribe to our newsletter for regular updates on these and other projects.</p>
          <a href="/contact" className="btn">Contact Us</a>
        </section>
      </div>
    </div>
  )
}
