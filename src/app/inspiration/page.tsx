/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
    <div>
      <h1 className="text-center font-cormorant font-semibold mt-12 text-xl md:text-3xl">Pour mes articles, cliquez dessus pour en savoir plus...</h1>
    </div>
    <div className="flex flex-col gap-6 mt-12 md:mt-16">
      <Link href="/brussel">
        <div className="hover:shadow-xl border border-black rounded-xl p-2 font-cormorant md:py-8 items-center flex flex-row justify-center gap-[5%] md:gap-[20%]">
          <Image
            className="rounded-xl w-1/4 md:w-1/5 md:ms-[5%] border border-black"
            src="/assets/img/bxmarket.webp"
            width={1000}
            height={1000}
            alt="brussel design"
            />
          <p className="mx-[5%] md:hidden font-semibold">
          Brussels Design Market
          </p>
          <p className="mx-[5%] md:block hidden"><span className="font-semibold">Brussels Design Market</span> <br /> <br /> Nous avons visité le Brussels Design Market qui se déroulait le 28 & 29 mars 2025 sur le superbe site de Tour & Taxis. 

Celui-ci accueille à chaque édition plus de 100 exposants de Belgique et d'ailleurs : Luxembourg, France, Allemagne, Danemark, Italie, Pays-Bas, Slovénie, et pour cette édition, même un anglais, un polonais et un suédois. Le BDM se déroule plusieurs fois par an à Bruxelles ou à Anvers.

Il s'agit d'un évènement organisé par une sprl constituée de cinq collaborateurs : une gestionnaire d'évènement, une assistante de communication, un manageur équitable, une responsable du personnel et un correspondant parisien...</p>
        </div>
      </Link>
      <Link href="/claire">
      <div className="hover:shadow-xl border border-black rounded-xl p-2 font-cormorant md:py-8 items-center flex flex-row justify-center gap-[5%] md:gap-[20%]">
          <p className="mx-[5%] font-semibold md:hidden  text-center">C.L. Studio <br />
          Architecture d'intérieur et décoration</p>
         
          <p className="mx-[5%] md:block hidden"> <span className="font-semibold"> C.L. Studio 
          Architecture d'intérieur et décoration</span> <br /> <br /> J'ai interviewé Claire Lebègue un début d'après-midi ensoleillé du mois de mai. 
          Nous nous étions déjà rencontrée, en réalisant une première année commune de formation en décoration d'intérieur. La direction de Claire avait ensuite été autre : lancer avec passion et courage son entreprise. Depuis, je suis son parcours, admirative, sur Instagram. Son goût, sa délicatesse, son sens du partage et sa communication...</p>

          <Image
            className="rounded-xl w-1/5 md:w-1/6 border md:me-[5%] border-black"
            src="/assets/img/claire.avif"
            width={1000}
            height={1000}
            alt="claire"
            />
        </div>
      </Link>
      <Link href="/laine">
      <div className="hover:shadow-xl border border-black rounded-xl p-2 font-cormorant md:py-8 items-center flex flex-row justify-center gap-[5%] md:gap-[20%]">
          <Image
            className="rounded-xl w-1/4 md:w-1/5 border md:ms-[5%] border-black"
            src="/assets/img/moutonok.png"
            width={1000}
            height={1000}
            alt="brussel design"
            />
            <p className="mx-[5%] md:hidden font-semibold text-center">Woolconcept® <br /> De laine de mouton comme isolant phonique et thermique </p>
          <p className="mx-[5%] md:block hidden"><span className="font-semibold">Woolconcept®, de laine de mouton comme isolant phonique et thermique </span><br /> <br /> Nous avons rencontré le concepteur d'isolant à base delaine de mouton Woolconcept® lors du salon Bois & Habitat qui se déroulait le dernier week-end de mars à Namur expo. 

Woolconcept® est une entreprise belge fabriquant des matériaux de construction écologiques et recyclables fondée en 2012 par la société de toiture Zanzen & Fils. Elle a été crée dans le but de proposer une alternative écologique et naturelle aux isolants conventionnels. Un projet porté par deux jeunes liégeois et visant à développer une ressource innovante et durable dans l'industrie de la construction. Initialement, la matière première était importée d'Allemagne... </p>
        </div>
      </Link>
    </div>
            </>
  );
};

export default page;
