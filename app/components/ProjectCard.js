import Image from 'next/image'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, showStatus = false }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          className={styles.image}
        />
        {showStatus && (
          <span className={`${styles.status} ${styles[project.status]}`}>
            {project.status === 'upcoming' ? 'Upcoming' : 'In Progress'}
          </span>
        )}
      </div>
      
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p className={styles.location}>{project.location}</p>
        <p className={styles.description}>{project.description}</p>
        
        {project.details && (
          <div className={styles.details}>
            <span>📅 {project.details.duration}</span>
            <span>🏗️ {project.details.type}</span>
          </div>
        )}
      </div>
    </div>
  )
}