import Image from "next/image";

const page = () => {
  return (
    <div className="font-cormorant">
      <div className="flex flex-row items-center mx-[2%] md:mx-[20%]">
        <Image
          src="/assets/img/mouton/1.jpeg"
          className="md:w-1/6 w-1/5 mt-6 md:my-0 rounded-xl border border-black mx-auto"
          width={1000}
          height={1000}
          alt="logo woolconcept"
        />
        <h1 className="font-semibold text-center my-12 md:mt-24 text-2xl md:text-3xl ">
          Woolconcept® <br /> De laine de mouton comme isolant phonique et
          thermique
        </h1>
      </div>
      <div className="flex flex-col text-center gap-5 mx-[2%] md:mx-[20%] my-8 md:my-24 border border-black rounded-xl p-5">
        <p>
          Nous avons rencontré le concepteur d’isolant à base delaine de mouton
          Woolconcept® lors du salon Bois & Habitat qui se déroulait le dernier
          week-end de mars à Namur expo.
        </p>
        <p>
          Woolconcept® est une entreprise belge fabriquant des matériaux de
          construction écologiques et recyclables fondée en 2012 par la société
          de toiture Zanzen & Fils. Elle a été crée dans le but de proposer une
          alternative écologique et naturelle aux isolants conventionnels. Un
          projet porté par deux jeunes liégeois et visant à développer une
          ressource innovante et durable dans l’industrie de la construction.
          Initialement, la matière première était importée d’Allemagne mais la
          production de laine belge étant suffisante pour alimenter le secteur,
          elle a rapidement été relocalisée en Belgique. Pour atteindre les 100%
          depuis 2016.
        </p>
        <p>
          La stabilité des fibres de laine et leur forte densité constituent des
          matériaux extrêmement stables et faciles à placer. Les fibres de laine
          de mouton ne se cassent qu’après avoir été pliées plus de 20 000 fois.
        </p>
      </div>

      <div className="mx-[2%] md:mx-[20%] flex flex-col justify-center items-center">
        <h3 className="font-semibold text-2xl">Sous différentes formes</h3>
        <p className="text-center">
          En construction, Woolconcept® utilise la laine sous différentes
          formes, à travers différents produits.
        </p>
      </div>
      <div className="mx-[2%] md:mx-[20%] gap-5 flex flex-col justify-center items-center my-3 md:my-24">
        <h4 className="font-semibold text-xl mb-2">
          Un panneau semi-rigide : Belgolan
        </h4>
        <p className="text-center">Elaboré à partir de 85% de laine de mouton et 15% d’un liant bicomposant, il constitue un matériau d'isolation thermique et acoustique d’une belle performance en termes de durabilité et de santé (aucune émanation de COV (composés organiques volatiles)). Il peut être utilisé pour isoler des murs extérieurs, des cloisons intérieurs, des planchers, des rampants de toitures ou des combles perdus. Les panneaux sont disponibles en plusieurs épaisseurs : 40, 60, 80, 100 ou 120 mm. Leur pose consiste à les fixer/coincer dans la structure métallique ou en bois sans nécessité de les agrafer. Ce qui permet un gain de temps de 17% par rapport à d’autres isolants du même type.</p>
        <p className="text-center">A noter que le Belgolan est labellisé produit biosourcé, label dédié aux matériaux de construction combinant des avantages écologiques et économiques, donnant accès à une surprime de 25% pour les travaux d'isolation.</p>
        <a
        href="/pdf/belgolan.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-800 underline mb-5"
      >Caractéristiques techniques</a>
        <div className="flex flex-row gap-2">
        <Image
          src="/assets/img/mouton/2.png"
          className="md:w-2/6 w-2/5 h-auto mt-6 md:my-0 rounded-xl border border-black mx-auto"
          width={1000}
          height={1000}
          alt="logo woolconcept"
        />
        <Image
          src="/assets/img/mouton/3.png"
          className="md:w-3/6 w-3/5 mt-6 md:my-0 rounded-xl border border-black mx-auto"
          width={1000}
          height={1000}
          alt="logo woolconcept"
        />

        </div>
      </div>

<hr className="md:hidden mx-12 mt-8" />


     
      <div className="mx-[2%] md:mx-[20%] gap-5 flex flex-col justify-center items-center my-3 md:my-24">
        <h4 className="font-semibold text-xl mb-2">
        De la laine en vrac : Softlan
        </h4>
        <p className="text-center">Constitué de 100% de laine de mouton sous forme de ballot. La pose est très simple, le matériau  est à aérer et disposer à la main dans la surface à isoler. Optimal pour l’isolation de planchers, le comblement de lézardes et de cavités, le bordage de fenêtres et de portes. </p>
        <a
        href="/pdf/softlan.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-800 underline mb-5"
      >Caractéristiques techniques</a>
        <div className="flex flex-row ">
     
        <Image
          src="/assets/img/mouton/4.png"
          className="md:w-3/6 w-3/5 mt-6 md:my-0 rounded-xl border border-black mx-auto"
          width={1000}
          height={1000}
          alt="logo woolconcept"
        />

        </div>
      </div>

      <hr className="md:hidden mx-12 mt-8" />


      <div className="mx-[2%] md:mx-[20%] gap-5 flex flex-col justify-center items-center my-3 md:my-24">
        <h4 className="font-semibold text-xl mb-2">
        Des bandes de feutre acoustique : Sonolan
        </h4>
        <p className="text-center">Constitué de 100% de laine de mouton consolidée mécaniquement, il est prévu pour l’isolation acoustique des planchers. Il promet une haute résistance au feu et une pose facile. La laine de mouton est utilisée ici sous forme de feutre en sous-couche de parquets flottants ou massifs, pour isoler des lambourdes, des planchers de véhicules ou pour tous types de chantiers en complément d’isolation phonique.</p>
        <a
        href="/pdf/sanolan.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-800 underline mb-5"
      >Caractéristiques techniques</a>
        <div className="flex flex-row gap-2">
        <Image
          src="/assets/img/mouton/5.png"
          className="md:w-2/6 w-2/5 h-auto mt-6 md:my-0 rounded-xl border border-black mx-auto"
          width={1000}
          height={1000}
          alt="logo woolconcept"
        />
        <Image
          src="/assets/img/mouton/6.png"
          className="md:w-3/6 w-3/5 mt-6 md:my-0 rounded-xl border border-black mx-auto"
          width={1000}
          height={1000}
          alt="logo woolconcept"
        />

        </div>
      </div>

      <hr className="md:hidden mx-12 my-8" />

<div className="mx-[2%] md:mx-[20%] text-center">
<h3 className="font-semibold text-2xl">Caractéristiques techniques 
</h3>
<h5 className="text-xl font-semibold text-start mt-6">Les principales caractéristiques de la laine comme isolant :
</h5>
<ul className="mt-4 text-start">
  <li className="font-semibold italic">Naturel et local
  </li>
  <li className="font-semibold italic mt-3">Filtre naturel <br />
  </li>
    <span>La kératine présente dans la laine en est le secret. Elle est capable d’assimiler et de neutraliser des substances nocives telles que le formaldéhyde via une réaction chimique lors de laquelle les polluants sont liés à ces molécules ou transformés. La laine permet en plus de n’avoir aucune émanation de COV. </span>
  <li className="font-semibold italic mt-3">Régulation de l’humidité 
  </li>
  <span>La laine de mouton peut absorber jusqu‘à 33% de son poids en humidité sans perdre ses propriétés isolantes. Elle conserve également son épaisseur, sans exercer d’influence néfaste sur la structure du bâtiment. De plus, la structure de la fibre protéique est résistante à l’eau ce qui constitue un terrain hostile pour les moisissures. </span>
  <li className="font-semibold italic mt-3">Absorption du bruit
  </li>
  <li className="font-semibold italic mt-3">Résistance au feu
  </li>
  <span>La laine a une température d’auto-inflammation comprise entre 560 et 600 °C (contre 270° pour le bois). Elle se consume lentement et s’éteint facilement. Elle ne fond pas lorsqu’elle brule, ne colle pas à la peau comme certaines fibres synthétiques, émet peu de fumée et aucun gaz toxique.</span>
  <li className="font-semibold italic mt-3">Faible émission
  </li>
  <span>Son impact sur l'environnement est faible de part sa production locale. L’énergie grise consommée par son extraction, son recyclage et sa transformation est de 55 kWh/m³*.</span>
  <li className="font-semibold italic mt-3">Répulsif contre les rongeurs
  </li>
  <span>La laine possède des capacités de rétractation empêchant les rongeurs de s’y installer. De plus, ils ne la digèrent pas.</span>
  <li className="font-semibold italic mt-3">Economique</li>
  <span>La laine en tant qu’isolant se veut économique de par ses caractéristiques techniques qui en font un matériau durable et résistant dans le temps. Une solution innovante et respectueuse de l’environnement justifiant un prix d’achat plus onéreux qu’un autre matériau du même type, moins tolérant aux problématiques d’humidité, moisissures, rongeurs, etc. et donc plus susceptible d’être remplacé dans un laps de temps plus court. </span>
</ul>
<div className=" border border-black rounded-xl p-5 my-8">

<p>En conclusion, la laine de mouton comme isolant en construction peut s’avérer onéreuse mais séduisante de par ses caractéristiques techniques. Ses performances énergétiques n’ont pas à rougir en regard de ses caractéristiques écologiques. Une matière si ancienne peut-elle constituer le matériau idéal de demain ? Comment le démocratiser ? Nous avons hâte de réévaluer la question d’ici quelques années. </p>
</div>
<div className="text-start">
  <h5>*A titre comparatif : </h5>
  <ul className="italic">
    <li>fibres de lin 30 kWh/m³</li>
    <li>fibres de chanvre 40 kWh/m³</li>
    <li>cellulose de bois 50 kWh/m³</li>
    <li className="font-bold">laine de mouton 55 kWh/m³</li>
    <li>laine de roche 150 kWh/m³</li>
    <li>perlite 230 kWh/m³</li>
    <li>laine de verre 250 kWh/m³</li>
    <li>argile expansé 300 kWh/m³</li>
    <li>panneau de liège 450 kWh/m³</li>
    <li>polystyrène expansé 450 kWh/m³
    </li>
    <li>polyesters : 600 kWh/m³</li>
    <li>polystyrène extrudé 850 kWh/m³ ;</li>
    <li>mousse de polyuréthane 1 000 à 1 200 kWh/m³
    </li>
    <li>panneau fibre de bois (tendre) 1 400 kWh/m³
    </li>
    <li>verre cellulaire : 700 à 1 300 kWh/m³
    </li>
  </ul>
  <a href="https://www.ecoconso.be/fr/content/lenergie-grise-des-materiaux-de-construction#:~:text=%C3%89nergie%20grise%20de%20l'isolation%20thermique%20%3A&text=laine%20de%20mouton%2055%20kWh,de%20verre%20250%20kWh%2Fm%C2%B3" target="blank" className=" text-blue-800 underline">Source : https://www.ecoconso.be/fr 
  </a>
</div>
<a href="https://woolconcept.be/" target="blank" className="my-3 text-blue-800 underline">Source : https://woolconcept.be/
</a>
</div>







    </div>
  );
};

export default page;
