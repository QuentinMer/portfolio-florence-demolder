import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="font-cormorant text-center">
      <h1 className="font-semibold text-center my-12 md:my-24 text-2xl md:text-3xl ">
        Brussels Design Market
      </h1>
      <div className="border border-black rounded-xl p-5 mx-[5%] md:mx-[20%] text-center flex flex-col gap-3">
        <p>
          Nous avons visité le Brussels Design Market qui se déroulait le 28 &
          29 mars 2025 sur le superbe site de Tour & Taxis.
        </p>
        <p>
          Celui-ci accueille à chaque édition plus de 100 exposants de Belgique
          et d&apos;ailleurs : Luxembourg, France, Allemagne, Danemark, Italie,
          Pays-Bas, Slovénie, et pour cette édition, même un anglais, un
          polonais et un suédois. Le BDM se déroule plusieurs fois par an à
          Bruxelles ou à Anvers.
        </p>
        <p>
          Il s&apos;agit d&apos;un évènement organisé par une sprl constituée de cinq
          collaborateurs : une gestionnaire d&apos;évènement, une assistante de
          communication, un manageur équitable, une responsable du personnel et
          un correspondant parisien.
        </p>
        <p>
          L&apos;évènement se déroule de 9h à 17h. Il propose des pass week-end qui
          donne un accès exclusif au samedi matin et au reste de week-end ou des
          pass matinée/après-midi à partir du samedi PM. Ceux-ci sont
          disponibles sur une billetterie en ligne ou réglables sur place. Nous
          nous y sommes rendus le dimanche vers 15h et le public a répondu
          présent jusqu&apos;à la fermeture.
        </p>
        <p>
          A noter, quelques stands de petites restaurations et de
          rafraichissements avec la possibilité de s&apos;installer à une table.{" "}
        </p>
      </div>
      <div className="flex flex-col mt-8 mx-[2%] gap-3 md:pt-12">
        <div className="mx-[20%] text-center">
          <h3 className="text-xl mb-2 font-semibold">
            Quels sont les exposants ?
          </h3>
          <p>
            Des galeries, boutiques, antiquaires, restaurateurs de mobilier
            anciens professionnels tels que les belges ACANTHE, BAR ANTIK, Belle
            la chaise, Fynd Vintage, Funky Interior, VintageVonk, Robin de Cock,
            LC Les Campanules et bien d&apos;autres. Egalement des boutiques
            spécialisées dans les bijoux et sacs à main de luxe/vintage telles
            que Katheley&apos;s ou Labellov.
          </p>
        </div>
        <hr className="mx-24 my-8 md:hidden" />
        <div className="md:block hidden my-5"></div>
        <div className="mx-[20%] text-center">
          <h3 className="text-xl mb-2 font-semibold">Qu&apos;y découvrir ?</h3>
          <p>
            Beaucoup de mobilier design et vintage, connu et populaire, mais
            aussi quelques objets plus rares, tels que des fauteuils, canapés,
            tables, chaises mais aussi des armoires, tables d&apos;appoint et de
            chevets, bureaux et luminaires. Plus ponctuels mais présents, des
            lithographies originales non signées/numérotées de la période
            Mid-century (Jacob&apos;s Mid-Century Modern), une échoppe spécialisée en
            luminaires (Midbottcentury), des vêtements et d&apos;accessoires.{" "}
          </p>
        </div>
        <hr className="mt-8 md:mx-[30%]" />
      </div>

      <div className="my-12">
        <h2 className="text-2xl mb-2 text-center font-semibold">
          Coups de coeur
        </h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex md:flex-row gap-5 justify-center items-center mx-[10%]">
          <Image
            src="/assets/img/bruxelles/1.jpeg"
            className="w-1/3 md:w-1/4 rounded-xl border border-black"
            width={1000}
            height={1000}
            alt="mobilier"
          />
          <Image
            src="/assets/img/bruxelles/2.jpeg"
            className="w-1/3 md:w-1/4 rounded-xl md:hidden border border-black"
            width={1000}
            height={1000}
            alt="mobilier"
          />
          <Image
            src="/assets/img/bruxelles/2.jpeg"
            className="w-1/3 md:w-1/4 rounded-xl hidden md:block border border-black"
            width={1000}
            height={1000}
            alt="mobilier"
          />
        </div>
      </div>
      <p className="text-center hidden md:block mt-3 md:mx-[30%] mb-24">
        Les chaises Bruno Rey déclinées en plusieurs couleurs. <br /> Proposées
        en version verte par le belge Studio Duin au prix de 1200€ pour 4.
      </p>
      <p className="text-center md:hidden mt-2 mx-3">
        Les chaises Bruno Rey déclinées en plusieurs couleurs. Proposées en
        version verte par le belge Studio Duin au prix de 1200€ pour 4.
      </p>
      <hr className="md:hidden mx-24 my-8" />

      <div className="flex md:flex-row gap-5 justify-center items-center mx-[10%]">
        <Image
          src="/assets/img/bruxelles/3.jpeg"
          className="w-1/3 md:w-1/4 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
        <Image
          src="/assets/img/bruxelles/2.jpeg"
          className="w-1/3 md:w-1/4 rounded-xl md:hidden border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
        <Image
          src="/assets/img/bruxelles/4.jpeg"
          className="w-1/3 md:w-1/4 rounded-xl hidden md:block border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
      </div>
      <p className="text-center hidden md:block mt-3  md:mx-[30%]">
        Un canapé tricolore danois de 1960 imaginé par Jørgen Høj pour Niels
        Vitsoe. Proposé par l&apos;antiquaire français Sullyvan (styledesign50 sur
        instagram) et doont le prix n&apos;est pas disponible.
      </p>
      <p className="text-center md:hidden mt-2 mx-3">
        Un canapé tricolore danois de 1960 imaginé par Jørgen Høj pour Niels
        Vitsoe. Proposé par l&apos;antiquaire français Sullyvan (styledesign50 sur
        instagram) et doont le prix n&apos;est pas disponible.
      </p>
      <hr className="md:hidden mx-24 my-8" />
      <div className="flex flex-row justify-center items-center gap-5 mx-6 md:mx-[30%] md:my-24">
        <Image
          src="/assets/img/bruxelles/5.jpeg"
          className="w-1/3 md:w-2/4 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
        <p>
          Un ensemble d&apos;entrée composé d&apos;un petit banc et d&apos;un miroir signé Kai
          Kristiansen et proposé par les néerlandais T&T Antiques au pris de
          1450€.
        </p>
      </div>
      <hr className="md:hidden mx-24 my-8" />

      <div className="flex flex-row justify-center items-center gap-5 mx-6 md:mx-[30%] md:my-24">
        <p>
          Beaucoup d&apos;ensemble de tables rondes et chaises au piètement
          triangulaire. J&apos;apprécie particulièrement le mélange froid de la
          pierre à la chaleur du bois foncé. Ce set est proposé par la galerie
          en ligne belge Modern Living.
        </p>
        <Image
          src="/assets/img/bruxelles/6.jpeg"
          className="w-1/3 md:w-2/4 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
      </div>
      <hr className="md:hidden mx-24 my-8" />

      <div className="flex flex-row justify-center items-center gap-5 mx-6 md:mx-[30%] md:my-24">
        <Image
          src="/assets/img/bruxelles/7.jpeg"
          className="w-1/3 md:w-2/4 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
        <p>
          Le superbe stand du fournisseur allemand de meubles vintage des années
          1950 à 1980 Stilelite. Nous n&apos;avons pas réussi à mieux le
          photographier tellement il était convoité.
        </p>
      </div>
      <hr className="md:hidden mx-24 my-8" />

      <div className="flex md:flex-row gap-5 justify-center items-center mx-[10%]">
        <Image
          src="/assets/img/bruxelles/8.jpeg"
          className="w-1/3 md:w-1/4 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
        <Image
          src="/assets/img/bruxelles/9.jpeg"
          className="w-1/3 md:w-1/4 rounded-xl md:hidden border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
        <Image
          src="/assets/img/bruxelles/9.jpeg"
          className="w-1/3 md:w-1/4 rounded-xl hidden md:block border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
      </div>
      <p className="text-center hidden md:block mt-3 md:mx-[30%]">
        Le célèbre Togo dans une teinte rouge orangée mis en scène avec un tapis
        duveteux, deux majestueuses bibliothèques traversantes décorées
        d&apos;éléments d&apos;astronomie et deux lampes sur pied aux notes exotiques
        m&apos;évoquent l&apos;ambiance du film Mort sur le Nil de Kenneth Branagh adapté
        du roman du même nom d&apos;Agatha Christie.
      </p>
      <p className="text-center md:hidden mt-2 mx-3">
        Le célèbre Togo dans une teinte rouge orangée mis en scène avec un tapis
        duveteux, deux majestueuses bibliothèques traversantes décorées
        d&apos;éléments d&apos;astronomie et deux lampes sur pied aux notes exotiques
        m&apos;évoquent l&apos;ambiance du film Mort sur le Nil de Kenneth Branagh adapté
        du roman du même nom d&apos;Agatha Christie.
      </p>
      <hr className="md:hidden mx-24 my-8" />

      <div className="hidden md:block my-24"></div>

      <div className="flex md:flex-row gap-5 justify-center items-center mx-[10%]">
        <Image
          src="/assets/img/bruxelles/10.jpeg"
          className="w-1/3 md:w-1/4 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
        <Image
          src="/assets/img/bruxelles/11.jpeg"
          className="w-1/3 md:w-1/4 rounded-xl md:hidden border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
        <Image
          src="/assets/img/bruxelles/11.jpeg"
          className="w-1/3 md:w-1/4 rounded-xl hidden md:block border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
      </div>
      <p className="text-center hidden md:block mt-3">
        Ce porte manteau pivotant aux formes arrondies signé Carlo De Carli pour
        Fiarm dans les années 60 au prix de 2850€.
      </p>
      <p className="text-center md:hidden mt-2 mx-3">
        Ce porte manteau pivotant aux formes arrondies signé Carlo De Carli pour
        Fiarm dans les années 60 au prix de 2850€.
      </p>
      <hr className="md:hidden mx-24 my-8" />

      <div className="flex flex-row justify-center items-center gap-5 mx-6 md:mx-[30%] md:mt-24">
        <Image
          src="/assets/img/bruxelles/12.jpeg"
          className="w-1/3 md:w-2/4 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
        <Image
          src="/assets/img/bruxelles/13.jpeg"
          className="w-1/3 md:w-2/4 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />

        <Image
          src="/assets/img/bruxelles/14.jpeg"
          className="w-1/3 md:w-2/4 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
      </div>
      <p className="text-center mx-3 mt-3">
        Ces armoires bicolores des années 1950 et 1960 par l&apos;architecte belge et
        designer de meuble Willy Van Der Meeren.
      </p>
      <hr className="md:hidden mx-24 my-8" />

      <div className="flex flex-row justify-center items-center gap-5 mx-6 md:mx-[30%] md:my-24">
        <p>
          Ce fauteuil mandarin par Ettore Sottsass pour Knoll datant de 1986.
        </p>
        <Image
          src="/assets/img/bruxelles/15.jpeg"
          className="w-1/3 md:w-2/4 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
      </div>
      <hr className="md:hidden mx-24 my-8" />

      <div className="flex flex-row justify-center items-center gap-5 mx-6 md:mx-[30%] md:my-24">
        <Image
          src="/assets/img/bruxelles/16.jpeg"
          className="w-1/3 md:w-2/4 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="mobilier"
        />
        <p>
          Pour conclure, énormément de belles choses à découvrir et redécouvrir
          lors de cette édition. En plus d&apos;avoir constitué une agréable sortie
          en famille et d&apos;affiner l&apos;oeil d&apos;un futur petit designer ?
        </p>
      </div>
    </div>
  );
};

export default page;
