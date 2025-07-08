// app/projects/page.js
'use client'
import { useState } from 'react'
import ProjectCard from '.././components/ProjectCard'
import styles from './page.module.css'


const allProjects = [
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
  },
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
            className={`${styles.tab} ${activeTab === 'upcoming' ? styles.active : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
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