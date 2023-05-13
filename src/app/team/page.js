import Image from 'next/image'
import Example from '../components/nav'
import Roadmap from '../components/roadmap'
import Team from '../components/Team'

export default function Home() {
  return (
    <div className=''>
      <Example />
    <main className="">
      <Team />
    </main>
    </div>
  )
}
