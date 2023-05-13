import Image from 'next/image'
import Example from '../components/nav'
import Roadmap from '../components/roadmap'

export default function Home() {
  return (
    <div className=''>
      <Example />
    <main className="">
      <Roadmap />
    </main>
    </div>
  )
}
