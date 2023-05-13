import Image from 'next/image'
import Example from '../components/nav'
import Lore from '../components/lore'
import QuizSection from '../components/quiz'

export default function Home() {
  return (
    <div className=''>
      <Example />
    <main className="">
      <QuizSection />
    </main>
    </div>
  )
}
