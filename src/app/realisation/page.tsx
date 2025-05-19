import Image from "next/image"
const page = () => {
  return (
    <div className="border rounded-xl flex flex-col mt-24 w-2/3 justify-center items-center mx-auto p-12">
      <Image className="rounded-full" src="/assets/img/logo-ok.jpg" width={220} height={220} alt="logo"/>
      <h1 className="mt-12 text-center font-cormorant text-xl">Page en cours de réalisation</h1>

    </div>
  )
}

export default page