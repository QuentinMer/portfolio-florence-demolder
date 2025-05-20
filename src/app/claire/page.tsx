/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";



const page = () => {
  return (
    <div className="font-cormorant">
      <h1 className="font-semibold text-center my-12 md:mt-24 text-2xl md:text-3xl ">
        C.L. Studio Architecture d'intérieur et décoration Design d'intérieur
      </h1>
      <h2 className="font-semibold text-center text-2xl md:mb-24 md:text-3xl ">
        Interview
      </h2>

      <div className="flex flex-col md:flex-row md:mx-[10%] items-center">
        <Image
          src="/assets/img/claire.avif"
          className="md:w-1/6 w-1/3 mx-auto my-6 md:my-0 md:mx-0 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="claire"
        />
        <p className="mx-[10%]">
          J'ai interviewé Claire Lebègue un début d'après-midi ensoleillé du
          mois de mai. Nous nous étions déjà rencontrée, en réalisant une
          première année commune de formation en décoration d'intérieur. La
          direction de Claire avait ensuite été autre : lancer avec passion et
          courage son entreprise. Depuis, je suis son parcours, admirative, sur
          Instagram. Son goût, sa délicatesse, son sens du partage et sa
          communication sont autant d'atouts pour nous partager son univers et
          ses réalisations. Ses followers s'élèvent d'ailleurs au nombre de
          17,9K. Je me réjouissais donc de la revoir.{" "}
        </p>
      </div>

      <hr className="mx-12 my-8 md:my-24 md:mx-[20%]" />

      <div className="flex flex-col md:flex-row md:mx-[10%] items-center md:mt-24">
        <span className="mx-[10%]">
          <h3 className="italic font-semibold">
            Peux-tu nous parler de ton parcours professionnel ?
          </h3>
          Ingénieure agronome de formation, spécialisée dans les eaux et forêts,
          Claire a toujours eu un attrait pour la nature et les animaux. Elle a
          rapidement su qu'elle n'évoluerait pas dans ce domaine et a suivi des
          cours en marketing management à l'ICHEC à Bruxelles. Elle a travaillé
          5 ans dans la recherche, sans s'y épanouir. Elle a ensuite créé un
          site internet de vente de décoration pour chambre d'enfants durant 5
          ans. Se rendant à l'évidence que, passer la phase de création, elle
          était vendeuse et cela ne la satisfaisait pas entièrement. Elle a
          alors passé une agrégation en chimie et a été professeur durant 9 ans.
          Elle y a adoré le contact avec ses élèves ainsi que la transmission.
          Ayant la sensation d'avoir fait le tour de la question, Claire a su à
          nouveau se réinventer professionnellement pour se sentir plus alignée.
          En effet, elle a toujours aimé l'art et a suivi, finalement, un
          parcours académique assez scolaire dans une voie scientifique. A 18
          ans, elle ne se serait pas permise de faire des études d'art et c'est
          sans regret. Car à travers chaque expérience professionnelle, elle
          s'est découverte et s'est comprise, elle a ciblé ses attentes pour
          comprendre enfin la voie qui lui correspond. En 2022, elle fait un
          premier pas vers un métier, plus proche de l'art, en s'inscrivant à
          l'IFAPME en décoration d'intérieur.
        </span>
        <Image
          src="/assets/img/claire/1.png"
          className="md:w-1/3 w-full mx-auto my-6 md:my-0 md:mx-2 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="claire"
        />
      </div>
      <div className="flex flex-col md:flex-row md:mx-[10%] items-center md:mt-24">
        <Image
          src="/assets/img/claire/2.png"
          className="md:w-1/3 w-full mx-auto my-6 md:my-0 md:mx-2 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="claire"
        />
        <span className="mx-[10%]">
          <h3 className="italic font-semibold mt-3">
          Quels éléments t'ont poussés vers l'architecture d'intérieur et la décoration ?  
          </h3>
          Ses projets immobiliers personnels : trois rénovations et trois déménagements, son dernier remontant à bientôt 5 ans, ainsi que son goût pour l'art. 
          <h3 className="italic font-semibold mt-3">
          Quelles sont tes activités aujourd'hui ? 
          </h3>
          50% est dédié aux réseaux sociaux et 50% à son activité d'architecture d'intérieur et décoration en tant que tel, en juste équilibre avec sa vie familiale. 
          <h3 className="italic font-semibold mt-3">
          Quel a été ton parcours pour y arriver ? 
          </h3>
          Suite à son année à l'IFAPME en 2022-2023,  Claire a fait venir une photographe à la maison dans le but de montrer ses réalisations. Elle crée, en novembre 2023, son site internet et sa page Instagram dans le but de communiquer et de se faire connaitre. Elle y prend du plaisir, plus le temps passe, plus elle ose montrer qui elle est et ce qui l'anime. Son conseil est d'être soi-même et montrer sa personnalité plus que d'appliquer des recettes qui marchent. 
          <h3 className="italic font-semibold mt-3">
          A quel moment as-tu créé ton entreprise ? 
          </h3>
          Après avoir lancé sa communication sur les réseaux en novembre 2023, elle crée son entreprise en février 2024 et obtient son premier client, dans la foulée, le mois suivant. 
          <h3 className="italic font-semibold mt-3">
          Quel est le projet dont tu es le plus fière ?
          </h3>
          De prime à bord tous, pour la satisfaction apportée aux clients et artisans. Et puis plus particulièrement, deux projets et suivis de chantier en cours qui l'ont amené à dépasser ses peurs et sortir de sa zone de confort pour l'agrandir. 
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:mx-[10%] items-center md:mt-24">
        <span className="mx-[10%]">
          <h3 className="italic font-semibold mt-3">
          Quelles sont tes prestations ? 
          </h3>
          <ul className="">
            <li>Le rendez-vous conseil, à domicile ou à distance ;</li>
            <li>Le carnet de conception, en présence ou à distance également, qui consiste en la créations de visuels 3D, d'agencement, d'aménagement, même potentiellement d'une shopping liste ; </li>
            <li>La création de plans afin de redistribution des espaces ;</li>
            <li>Le suivi de chantier : de la conception du projet à la réception du chantier ;</li>
            <li>La recherche d'oeuvre d'art pour des clients.</li>
          </ul>

          <h3 className="italic font-semibold mt-3">
          Quelles sont tes sources d'inspirations ? 
          </h3>
          La principale inspiration de Claire est l'art, plus précisément l'art classique et l'antiquité. Elle a un goût prononcé pour la préservation du patrimoine et les belles demeures. La mise en valeur d'oeuvres est également source d'inspiration : construire un projet à partir et autour d'une oeuvre pour la sublimer. 
          <h3 className="italic font-semibold mt-3">
          As-tu des projets en cours ?
          </h3>
          Nous l'avons compris, ce qui anime Claire est l'art. Une facette rêvée de son métier pourrait être la cherche d'oeuvres pour des clients. Ou également la mise en valeur de patrimoine pour un musée par exemple. Créer du contenu, pour elle ou pour d'autres, s'est également révélé porteur. Elle y a trouvé un moyen de faire passer des messages.  Et pourquoi pas développer des collaborations commerciales autour de son activité d'architecte d'intérieur et de décoratrice.  
          <h3 className="italic font-semibold mt-3">
          Quels sont tes objectifs professionnels ?  
          </h3>
          Pour son avenir professionnel, Claire vise à exploiter au maximum sa créativité, de quelque manière que ce soit. Au niveau décoration, elle aspire à avoir un maximum de confiance et de liberté dans la conception et réalisation de projets. Mais également des rénovations de belles demeures visant la préservation et l'embellissement du patrimoine.
Au niveau de ses réseaux sociaux, tout aussi important, Claire souhaite poursuivre la mise en avant d'artistes méconnus. Et profiter de cette visibilité pour promouvoir l'art, le patrimoine et faire passer un message de gentillesse et de bienveillance.
        </span>
        <Image
          src="/assets/img/claire/3.png"
          className="md:w-1/3 w-full mx-auto my-6 md:my-0 md:mx-2 rounded-xl border border-black"
          width={1000}
          height={1000}
          alt="claire"
        />
      </div>
      <div className="border border-black mx-[2%] md:mx-[40%] my-8 md:mt-24 p-5 rounded-xl ">
<h3 className="font-semibold text-xl">Si tu n'avais qu'un seul choix :</h3>
<p><span className="italic font-semibold">Une couleur ?</span> Le blanc pour un intérieur</p>
<p><span className="italic font-semibold">Un objet ?</span> Une sculpture du 19ème en marbre</p>
<p><span className="italic font-semibold">Une ville ?</span> Paris</p>
<p><span className="italic font-semibold">Un style ?</span> L'électisme</p>
<p><span className="italic font-semibold">Une matière ?</span> L'or, pour la couleur doré</p>
      </div>
<div className="flex flex-col">
  <div>

      <h4 className="text-center mx-[2%] md:mx-[30%] my-3">Merci beaucoup Claire. Félicitation, nous te souhaitons le meilleur . </h4>
  </div>
  <div className="flex flex-row justify-center gap-12 my-12">
    <div className="flex flex-col items-center justify-center">

    <Link href="https://www.instagram.com/clstudiohomedesign/" target="blank">
  <FaInstagram className="w-8 h-8" /> 
    </Link>
    <span>instagram</span>
    </div>
    <div className="flex flex-col items-center justify-center">

    <Link href="https://www.clstudiohomedesign.com/" target="blank">
  <CgWebsite className="w-8 h-8" /> 
    </Link>
    <span>site web</span>
    </div>


  </div>

</div>
     
    </div>
  );
};

export default page;
