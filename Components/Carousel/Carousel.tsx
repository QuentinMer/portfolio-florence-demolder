"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, PanInfo, useMotionValue } from "motion/react";
import Image from "next/image";

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  image: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;       // largeur MAX du carrousel (ex: 1080)
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  { title: "Text Animations", description: "Cool text animations.", id: 1, image: "/assets/img/claire/2.png" },
  { title: "Animations", description: "Smooth animations.", id: 2, image: "/assets/img/claire/2.png" },
  { title: "Components", description: "Reusable components.", id: 3, image: "/assets/img/claire/2.png" },
  { title: "Backgrounds", description: "Beautiful backgrounds.", id: 4, image: "/assets/img/claire/2.png" },
  { title: "Common UI", description: "UI coming soon!", id: 5, image: "/assets/img/claire/2.png" },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 38;
const SPRING_OPTIONS = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 1080,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // largeur responsive réelle du conteneur
  const [containerW, setContainerW] = useState<number>(baseWidth);
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const obs = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      setContainerW(Math.min(w, baseWidth));
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [baseWidth]);

  const containerPadding = 16;
  const effectiveBaseWidth = containerW || baseWidth;
  const itemWidth = effectiveBaseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;

  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // === ÉTAT MODALE ===
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalItem, setModalItem] = useState<CarouselItem | null>(null);
  const openModal = (item: CarouselItem) => {
    setModalItem(item);
    setIsModalOpen(true);
    // éviter le scroll derrière la modale
    document.documentElement.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setModalItem(null);
    document.documentElement.style.overflow = "";
  };

  // fermer avec Échap
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isModalOpen) {
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [isModalOpen]);

  // pause au survol
  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;
    const c = containerRef.current;
    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);
    c.addEventListener("mouseenter", enter);
    c.addEventListener("mouseleave", leave);
    return () => {
      c.removeEventListener("mouseenter", enter);
      c.removeEventListener("mouseleave", leave);
    };
  }, [pauseOnHover]);

  // autoplay
  useEffect(() => {
    if (!autoplay || (pauseOnHover && isHovered)) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === items.length - 1 && loop) return prev + 1;
        if (prev === carouselItems.length - 1) return loop ? 0 : prev;
        return prev + 1;
      });
    }, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, loop, items.length, carouselItems.length]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((p) => Math.min(p + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((p) => Math.max(p - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0,
        },
      };

  return (
    <>
             <div className="w-screen -mx-4 md:mx-0 flex justify-center items-center">
         <div
           ref={containerRef}
           className={`relative overflow-hidden p-2 md:p-4 ${
             round ? "rounded-full border border-white" : "rounded-[24px] border border-gray-200"
           }`}
           style={{
             width: "100%",
             maxWidth: `${baseWidth}px`,
             ...(round && { height: `${effectiveBaseWidth}px` }),
           }}
         >
          <motion.div
            className="flex"
            drag="x"
            {...dragProps}
            style={{
              gap: `${GAP}px`,
              perspective: 1000,
              perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
              x,
            }}
            onDragEnd={handleDragEnd}
            animate={{ x: -(currentIndex * trackItemOffset) }}
            transition={effectiveTransition}
            onAnimationComplete={handleAnimationComplete}
          >
            {carouselItems.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                className={`relative shrink-0 flex flex-col ${
                  round ? "items-center justify-center" : "items-center justify-between"
                } overflow-hidden cursor-grab active:cursor-grabbing`}
                style={{
                  width: itemWidth,
                  height: round ? itemWidth : "auto",
                  ...(round && { borderRadius: "50%" }),
                }}
                transition={effectiveTransition}
              >
                                 <div className={`${round ? "p-0 m-0" : "mb-2 md:mb-4 p-1 md:p-5"}`}>
                   <div className="mx-auto w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1080}
                      height={608}
                                             sizes="(max-width: 768px) 100vw, (max-width: 1080px) 90vw, 1080px"
                      className="w-full h-auto object-contain select-none border border-black rounded-lg "
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      style={{ WebkitUserDrag: "none" } as React.CSSProperties}
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* BOUTON "Plein écran" */}
                {!round && (
                  <button
                    type="button"
                    onClick={() => openModal(item)}
                    className="mb-2 inline-flex items-center gap-2 rounded-xl text-xl cursor-pointer border border-gray-300 px-4 py-2 font-medium shadow-sm hover:bg-gray-50 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-black/20"
                    aria-label={`Afficher ${item.title} en plein écran`}
                  >
                    Voir en plein écran
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Bullets */}
          <div
            className={`flex w-full justify-center ${
              round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
            }`}
          >
            <div className="mt-4 flex w-[150px] justify-between px-8">
              {items.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                    currentIndex % items.length === index
                      ? round
                        ? "bg-white"
                        : "bg-[#333333]"
                      : round
                        ? "bg-[#555]"
                        : "bg-[rgba(51,51,51,0.4)]"
                  }`}
                  animate={{ scale: currentIndex % items.length === index ? 1.2 : 1 }}
                  onClick={() => setCurrentIndex(index)}
                  transition={{ duration: 0.15 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    {/* MODALE plein écran */}
{isModalOpen && modalItem && (
  <motion.div
    className="fixed inset-0 z-[100]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    role="dialog"
    aria-modal="true"
    aria-label={modalItem.title}
    onClick={closeModal} // clic sur le fond = fermer
  >
    {/* Backdrop */}
    <div className="absolute inset-0 bg-black" />

    {/* BOUTON FERMER (fixe en haut à droite) */}
    <button
      onClick={closeModal}
      className="fixed top-4 right-4 z-[110] inline-flex items-center justify-center cursor-pointer rounded-lg bg-white/95 px-3 py-2 text-xl font-semibold shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
      aria-label="Fermer la modale"
    >
      ✕
    </button>

    {/* IMAGE plein écran */}
    <div
      className="absolute inset-0 z-[105]"
      onClick={(e) => e.stopPropagation()} // éviter de fermer si on clique sur l’image
    >
      <Image
        src={modalItem.image}
        alt={modalItem.title}
        fill
        // object-contain = toute l'image visible, sans découpe ; change en object-cover si tu préfères recadrer pour remplir
        className="object-contain"
        sizes="100vw"
        priority
      />
    </div>
  </motion.div>
)}
    </>
  );
}