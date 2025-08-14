import Carousel from '../../../Components/Carousel/Carousel'
import { terreConcept, terreSituation, terreSituationProjetee, terreTechniqueSpeciale, terreEchantillons } from '../hook/terreHappyCarousel/terreHappyCarousel'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 gap-12">
      <h1 className='text-4xl font-bold uppercase'>Terre happy</h1>
      
      <div className='text-center'>
        <h2 className='text-xl md:text-3xl font-bold py-6'>Concept</h2>
        <Carousel items={terreConcept} baseWidth={1600} />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-3xl font-bold py-6'>Situation existante</h2>
        <Carousel items={terreSituation} baseWidth={1600} />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-3xl font-bold py-6'>Situation projetée</h2>
        <Carousel items={terreSituationProjetee} baseWidth={1600} />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-3xl font-bold py-6'>Techniques spéciales et parachèvements</h2>
        <Carousel items={terreTechniqueSpeciale} baseWidth={1600} />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-3xl font-bold py-6'>Echantillons</h2>
        <Carousel items={terreEchantillons} baseWidth={1600} />
      </div>
    </div>
  )
}

export default page
