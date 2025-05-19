import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col mt-12 md:mt-24 border border-black rounded-xl'>
      <div className='p-3 md:px-[15%] flex flex-row items-center gap-2 md:gap-45'>
        <Image className='rounded-full md:w-1/5' src="/assets/img/logo-ok.jpg" width={120} height={120} alt='logo'/>
        <h2 className='text-xl text-center md:text-4xl font-cormorant'>Florence Demolder</h2>
      </div>
      <div className='p-3 md:px-[15%] text-center gap-5 flex flex-col font-cormorant text-xl'>
<p>Je m&apos;appelle Florence Demolder, je suis ergothérapeute de formation. J&apos;ai exercé ce métier durant 9 ans. </p>
<hr className='mx-24 my-1 md:mx-80 md:my-3' />
<p>En 2022, en quête de sens, j&apos;ai entamé une formation en décoration d&apos;intérieur. Prise de passion, j&apos;y ai vu une manière différente de prendre soin de la personne : en prenant soin de son intérieur. Je pense qu&apos;il est aux fondations de la vie quotidienne, il constitue l&apos;endroit où nous nous régénérons, où nous prenons racine pour s&apos;épanouir. Il est d&apos;autant plus important qu&apos;il soit organisé et fonctionnel, que sa circulation et son énergie y soit optimales tout en respectant la personnalité de ses habitants. </p>
<hr className='mx-24 my-1 md:mx-80 md:my-3' />
<p>Prendre soin des patients durant ces 9 ans, les écouter, les comprendre, percevoir leurs besoins et leurs habitudes de vie pour recouvrer l&apos;autonomie et l&apos;indépendance souhaitées est un bagage précieux. Un bagage utile aujourd&apos;hui pour comprendre les demandes de mes clients et créer ensemble un projet à leur effigie, au plus près de leurs besoins. </p>

<p className='mt-3'>&quot;<span className='italic'>Une maison rangée égale à un esprit tranquillisé et beaucoup de liberté pour avancer</span>&quot;. Benjamin Franklin</p>
<hr className='mx-24 my-1 md:mx-80 md:my-3' />
<p>Je vous laisse découvrir mon univers, mes réalisations et inspirations. </p>
<p className='text-right mt-12 pe-12'>Florence D.</p>
      </div>

    </div>
  )
}

export default page