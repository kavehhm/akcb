import Image from 'next/image'
import Example from '../components/nav'
import Lore from '../components/lore'

export default function Home() {
  return (
    <div className='xl:h-[100vh] xl:min-h-[58rem] xl:overflow-hidden'>
      <Example />
    <main className="">
      <Lore />
    </main>
    </div>
  )
}
