// app/components/ProjectCard.js
import Image from 'next/image'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, showStatus = false, showCompletion = false }) {
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
            {project.status === 'upcoming' ? 'Upcoming' : 
             project.status === 'ongoing' ? 'In Progress' : 'Completed'}
          </span>
        )}
      </div>
      
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p className={styles.location}>{project.location}</p>
        <p className={styles.description}>{project.description}</p>
        
        {showCompletion && project.completion && (
          <div className={styles.completion}>
            <div className={styles.completionBar}>
              <div 
                className={styles.completionFill}
                style={{ width: project.completion }}
              ></div>
            </div>
            <span>{project.completion} complete</span>
          </div>
        )}
      </div>
    </div>
  )
}