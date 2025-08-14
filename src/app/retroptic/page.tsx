import Carousel from '../../../Components/Carousel/Carousel';
import { carouseConcept, carouseSituation, carouseSituationProjetee, carouseTechniqueSpeciale, carouseParachevement } from '../hook/retropticCarousel/retropticCarousel';

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 gap-12">
      <h1 className='text-4xl font-bold uppercase'>rétr'optic</h1>
      
      <div className='text-center'>
        <h2 className='text-xl md:text-3xl font-bold py-6'>Concept</h2>
        <Carousel items={carouseConcept} baseWidth={1600} />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-3xl font-bold py-6'>Situation existante</h2>
        <Carousel items={carouseSituation} baseWidth={1600} />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-3xl font-bold py-6'>Situation projetée</h2>
        <Carousel items={carouseSituationProjetee} baseWidth={1600} />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-3xl font-bold py-6'>Techniques spéciales</h2>
        <Carousel items={carouseTechniqueSpeciale} baseWidth={1600} />
      </div>
      <div className='text-center'>
        <h2 className='text-xl md:text-3xl font-bold py-6'>Parachèvements, plans de détails et perspective</h2>
        <Carousel items={carouseParachevement} baseWidth={1600} />
      </div>
    </div>
  )
}

export default page
