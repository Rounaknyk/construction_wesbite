// app/projects/page.js
'use client'
import { useState } from 'react'
import ProjectCard from '.././components/ProjectCard'
import styles from './page.module.css'
import { allProjects } from '../constants/projects'

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState('all')

  const filteredProjects = activeTab === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.status === activeTab)

  return (
    <div className={styles.projectsPage}>
      <div className="container">
        <section className={styles.hero}>
          <h1>Our Projects</h1>
          <p>Explore our complete portfolio of construction projects</p>
        </section>

        <section className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Projects
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'ongoing' ? styles.active : ''}`}
            onClick={() => setActiveTab('ongoing')}
          >
            Ongoing
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'completed' ? styles.active : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed
          </button>
        </section>

        <section className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              showStatus 
              showCompletion 
            />
          ))}
        </section>
      </div>
    </div>
  )
}