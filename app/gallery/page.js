import { Suspense } from 'react'
import Gallery from '../gallery/Gallery' // move the current code to this file

export default function GalleryPage() {
  return (
    <Suspense fallback={<div>Loading gallery...</div>}>
      <Gallery />
    </Suspense>
  )
}
