// app/gallery/layout.js
export const metadata = {
  title: 'Project Gallery - Siddharth Constructions',
  description: 'View our construction project gallery showcasing completed works, ongoing projects, and company milestones.',
}

export default function GalleryLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}