import Image from 'next/image'
import Hero from './components/views/home/Hero'
import HomeAbout from './components/views/home/HomeAbout'
import HomeWorking from './components/views/home/HomeWorking'
import HomeInnovation from './components/views/home/HomeInnovation'
import HomeVision from './components/views/home/HomeVision'
import HomeFeatures from './components/views/home/HomeFeatures'

export default function Home() {
  return (
    <div className='container sb'>
      <Hero />
      <HomeInnovation />
      <HomeAbout />
      <HomeWorking />
      <HomeVision />
      <HomeFeatures />
    </div>
  )
}
