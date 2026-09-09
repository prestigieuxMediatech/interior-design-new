"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import GetInTouchSection from "@/components/GetInTouchSection/GetInTouchSection";
import portfolioData from "@/data/portfolioData";
import "./CategoryPageClient.css";

// 1.5 seconds per slide transition — unchanged from your version
const AUTOPLAY_INTERVAL = 1500;

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scrollReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      className="arrowIcon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ transform: direction === "left" ? "rotate(180deg)" : "none" }}
    >
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="checkIcon"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 10.5L8 14.5L16 6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CategoryPageClient({ category }) {
  const {
    slug,
    title,
    subtitle,
    intro,
    heroImage,
    highlights = [],
    pullQuote,
    sliderImages = [],
    philosophy,
    specs = {},
  } = category;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef(null);

  const slideCount = sliderImages.length;

  const goTo = useCallback(
    (index, dir = 1) => {
      if (slideCount === 0) return;
      setDirection(dir);
      setActiveIndex(((index % slideCount) + slideCount) % slideCount);
    },
    [slideCount]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % slideCount);
  }, [slideCount]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + slideCount) % slideCount);
  }, [slideCount]);

  // Use a one-shot timer so every completed slide change gets a fresh interval.
  // This prevents an autoplay tick and a button/touch update from competing.
  useEffect(() => {
    if (slideCount <= 1) return undefined;
    const timer = window.setTimeout(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % slideCount);
    }, AUTOPLAY_INTERVAL);
    return () => window.clearTimeout(timer);
  }, [activeIndex, slideCount]);

  // Fetch the gallery assets ahead of their turn. This keeps autoplay smooth
  // on a cold/incognito cache instead of waiting for the next photo to load.
  useEffect(() => {
    sliderImages.forEach(({ src }) => {
      const image = new window.Image();
      image.src = src;
    });
  }, [sliderImages]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) goPrev();
    if (deltaX < -40) goNext();
    touchStartX.current = null;
  };

  const activeSlide = sliderImages[activeIndex];

  // Up to 3 other categories, for the cross-links strip near the bottom.
  const otherCategories = Object.values(portfolioData)
    .filter((entry) => entry.slug !== slug)
    .slice(0, 3);

  return (
    <main className="categoryMain">
      {/* ---------- Hero Section ---------- */}
      <section className="categoryHero">
        <div className="heroImgContainer">
          {heroImage?.src && (
            <Image
              src={heroImage.src}
              alt={heroImage.alt || title}
              fill
              priority
              sizes="100vw"
              className="heroImg"
            />
          )}
          <div className="heroFade" />
        </div>

        <div className="heroTextContent">
          <motion.span
            className="subtitleTag"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInUp}
          >
            {subtitle}
          </motion.span>

          <motion.h1
            className="categoryTitle"
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeInUp}
          >
            {title}
          </motion.h1>

          <motion.span
            className="titleRule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className="categoryIntro"
            initial="hidden"
            animate="visible"
            custom={0.24}
            variants={fadeInUp}
          >
            {intro}
          </motion.p>
        </div>
      </section>

      {/* ---------- Overlapping feature highlights ---------- */}
      {highlights.length > 0 && (
        <motion.div
          className="featureStrip"
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeInUp}
        >
          {highlights.map((item) => (
            <div className="featureCard" key={item.label}>
              <span className="featureIconWrap">
                <CheckIcon />
              </span>
              <span className="featureLabel">{item.label}</span>
            </div>
          ))}
        </motion.div>
      )}

      {/* ---------- Compact & Premium Gallery Section ---------- */}
      {slideCount > 0 && (
        <section className="gallerySection">
          <div className="galleryHeader">
            <h2 className="galleryHeading">Project Gallery</h2>
            <p className="gallerySubheading">Explore our recent completions</p>
          </div>

          {/* Slider dimensions/logic unchanged — only chrome around it is refined */}
          <div
            className="gallerySlider"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="imageDisplayWindow">
              <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="slideWrapper"
                >
                  {activeSlide?.src && (
                    <Image
                      src={activeSlide.src}
                      alt={activeSlide.alt || `${title} showcase`}
                      fill
                      sizes="(max-width: 1200px) 90vw, 1000px"
                      className="sliderImg"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {slideCount > 1 && (
              <>
                <button
                  type="button"
                  className="sliderNavBtn navBtnPrev"
                  onClick={goPrev}
                  aria-label="Previous image"
                >
                  <ArrowIcon direction="left" />
                </button>
                <button
                  type="button"
                  className="sliderNavBtn navBtnNext"
                  onClick={goNext}
                  aria-label="Next image"
                >
                  <ArrowIcon direction="right" />
                </button>
              </>
            )}
          </div>

          {/* ---------- Bottom Mini Thumbnail Strip ---------- */}
          {slideCount > 1 && (
            <div className="thumbnailContainer">
              {sliderImages.map((slide, index) => (
                <button
                  key={slide.src + index}
                  type="button"
                  className={`thumbItem ${index === activeIndex ? "activeThumb" : ""}`}
                  onClick={() => goTo(index, index > activeIndex ? 1 : -1)}
                  aria-label={`Show image ${index + 1}`}
                >
                  <Image
                    src={slide.src}
                    alt=""
                    fill
                    sizes="100px"
                    className="thumbImage"
                  />
                </button>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ---------- Pull-quote: the one bold, unhurried moment on the page ---------- */}
      {pullQuote && (
        <motion.section
          className="quoteSection"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={scrollReveal}
        >
          <span className="quoteRule" aria-hidden="true" />
          <p className="quoteText">{pullQuote}</p>
        </motion.section>
      )}

      {/* ---------- Details & Specs Section ---------- */}
      <motion.section
        className="detailsSection"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={scrollReveal}
      >
        <div className="detailsGrid">
          <div className="philosophyBox">
            {philosophy?.heading && (
              <h2 className="sectionSubTitle">{philosophy.heading}</h2>
            )}
            {philosophy?.paragraphs?.map((p, i) => (
              <p className="philosophyText" key={i}>
                {p}
              </p>
            ))}
          </div>

          <div className="specsCard">
            <h3 className="specsTitle">Specifications</h3>
            <div className="specsList">
              {Object.entries(specs).map(([key, value]) => (
                <div className="specsRow" key={key}>
                  <span className="specKey">{key}</span>
                  <span className="specValue">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ---------- Explore other spaces ---------- */}
      {otherCategories.length > 0 && (
        <motion.section
          className="relatedSection"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scrollReveal}
        >
          <h2 className="relatedHeading">Explore Other Spaces</h2>
          <div className="relatedStrip">
            {otherCategories.map((entry) => (
              <Link
                key={entry.slug}
                href={`/portfolio/${entry.slug}`}
                className="relatedCard"
              >
                <span className="relatedImageWrap">
                  <Image
                    src={entry.heroImage.src}
                    alt={entry.heroImage.alt || entry.title}
                    fill
                    sizes="320px"
                    className="relatedImage"
                  />
                </span>
                <span className="relatedCardText">
                  <span className="relatedCardTitle">{entry.title}</span>
                  <span className="relatedCardArrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </motion.section>
      )}

      {/* Contact Form Section */}
      <GetInTouchSection />
    </main>
  );
}
