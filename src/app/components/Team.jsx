import pickford from '../../../public/images/team/pickford.jpg'
import peter from '../../../public/images/team/peter.jpg'
import kingvon from '../../../public/images/team/kingvon.jpg'
import kaveh from '../../../public/images/team/kaveh.jpg'
import Image from 'next/image'


const people = [
    {
      name: 'Pickford',
      role: 'Founder',
      imageUrl:
        pickford,
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Peter',
      role: 'Co-founder',
      imageUrl:
       peter,
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'King Von',
      role: 'Community Manager',
      imageUrl:
        kingvon,
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Kaveh',
      role: 'Developer',
      imageUrl:
        kaveh,
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className=" py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
          <div className="text-4xl gap-y-3 flex flex-col xl:text-5xl font-bold mb-12">
          MEET <p className="text-purp"> THE TEAM</p>
        </div>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            {people.map((person) => (
              <li key={person.name}>
                <Image className="mx-auto h-56 w-56 rounded-full" src={person.imageUrl} alt={person.name} />
                <h3 className="mt-6 text-base font-bold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm font-semibold leading-6 text-purp">{person.role}</p>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  