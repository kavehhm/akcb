import Image from 'next/image'
import Example from './components/nav'
import Hero from './components/hero'

export default function Home() {
  return (
    <div className='xl:h-[100vh] xl:min-h-[58rem] xl:overflow-hidden'>
      <Example />
    <main className="">
      <Hero />
    </main>
    </div>
  )
}
