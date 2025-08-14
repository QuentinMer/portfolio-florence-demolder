import Image from "next/image"
import Link from "next/link"
const page = () => {
  return (
    <div className="mb-12">
      <div>
        <h1 className="text-center font-semibold mt-12 text-xl md:text-3xl">Projets réalisés dans le cadre de ma formation</h1>
      </div>
      <div>
        <div className="flex flex-col gap-6 mt-12 md:mt-16 items-center justify-center text-xl">
          <div>

            <Link href="/retroptic">

              <Image src="/assets/img/retroptic/1.jpg" alt="retroptic" width={500} height={500}
                className="hover:shadow-xl border border-black rounded-xl w-full mx-auto"/>

            </Link>
            <p className="text-center pt-6"><span className="font-semibold">Aménagement d’un magasin d’optique</span> <br />
              Premier projet dessiné à l’aide de l’ordinateur (VectroWorks)</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-12 md:mt-16 items-center text-xl">
          <div>

            <Link href="/terreHappy">

              <Image src="/assets/img/terreHappy/1.png" alt="retroptic" width={500} height={500}
                className="hover:shadow-xl border border-black rounded-xl w-full mx-auto" />

            </Link>
            <p className="text-center pt-6"><span className="font-semibold">Aménagement d’un cabinet de kinésithérapie</span> <br />
              Projet réalisé sur papier</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page