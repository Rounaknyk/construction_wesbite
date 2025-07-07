import ProjectCard from '../../components/ProjectCard'
import styles from './page.module.css'

export const metadata = {
  title: 'Upcoming Projects - Siddharth Construction',
  description: 'Explore our upcoming construction projects including residential complexes, commercial buildings, and infrastructure developments.',
}

const upcomingProjects = [
  {
    id: 1,
    title: 'Luxury Residential Complex',
    location: 'Downtown District',
    description: 'A modern 50-unit residential complex featuring premium amenities, underground parking, and rooftop gardens.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    status: 'upcoming',
    details: {
      duration: '18 months',
      type: 'Residential',
      startDate: 'Q3 2024',
      budget: '$25M'
    }
  },
  {
    id: 2,
    title: 'Green Office Tower',
    location: 'Business Park',
    description: 'State-of-the-art 25-story office building with LEED certification and sustainable energy systems.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    status: 'upcoming',
    details: {
      duration: '24 months',
      type: 'Commercial',
      startDate: 'Q4 2024',
      budget: '$45M'
    }
  },
  {
    id: 3,
    title: 'Urban Mixed-Use Development',
    location: 'City Center',
    description: 'Innovative mixed-use development combining retail, office, and residential spaces in a single complex.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop',
    status: 'upcoming',
    details: {
      duration: '30 months',
      type: 'Mixed-Use',
      startDate: 'Q1 2025',
      budget: '$60M'
    }
  },
  {
    id: 4,
    title: 'Waterfront Condominiums',
    location: 'Lakeside District',
    description: 'Luxury waterfront condominiums with panoramic lake views and premium recreational facilities.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop',
    status: 'upcoming',
    details: {
      duration: '20 months',
      type: 'Residential',
      startDate: 'Q2 2025',
      budget: '$35M'
    }
  },
  {
    id: 5,
    title: 'Medical Center Expansion',
    location: 'Healthcare District',
    description: 'Modern medical facility expansion including specialized treatment rooms and advanced diagnostic equipment.',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop',
    status: 'upcoming',
    details: {
      duration: '16 months',
      type: 'Healthcare',
      startDate: 'Q3 2025',
      budget: '$28M'
    }
  },
  {
    id: 6,
    title: 'Educational Campus',
    location: 'University Area',
    description: 'New educational campus featuring modern classrooms, laboratories, and student recreational facilities.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop',
    status: 'upcoming',
    details: {
      duration: '22 months',
      type: 'Educational',
      startDate: 'Q4 2025',
      budget: '$40M'
    }
  }
]

export default function UpcomingProjects() {
  return (
    <div className={styles.projectsPage}>
      <div className="container">
        <section className={styles.hero}>
          <h1>Upcoming Projects</h1>
          <p>Discover our pipeline of exciting construction projects set to transform communities and create lasting value.</p>
        </section>

        <section className={styles.stats}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <h3>6</h3>
              <p>Projects Planned</p>
            </div>
            <div className={styles.stat}>
              <h3>$233M</h3>
              <p>Total Investment</p>
            </div>
            <div className={styles.stat}>
              <h3>110</h3>
              <p>Months of Work</p>
            </div>
            <div className={styles.stat}>
              <h3>500+</h3>
              <p>Jobs Created</p>
            </div>
          </div>
        </section>

        <section className={styles.projects}>
          <div className={styles.projectsGrid}>
            {upcomingProjects.map((project) => (
              <div key={project.id} className={styles.projectWrapper}>
                <ProjectCard project={project} showStatus />
                <div className={styles.projectExtra}>
                  <div className={styles.projectDetail}>
                    <span className={styles.label}>Start Date:</span>
                    <span>{project.details.startDate}</span>
                  </div>
                  <div className={styles.projectDetail}>
                    <span className={styles.label}>Budget:</span>
                    <span>{project.details.budget}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Interested in Our Projects?</h2>
          <p>Get in touch to learn more about investment opportunities or partnership possibilities.</p>
          <a href="/contact" className="btn">Contact Us</a>
        </section>
      </div>
    </div>
  )
}
