"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { CinematicHero } from "@/components/shared/CinematicHero";

const galleryImages = [
  { file: "Anaesthesia-580x360.webp", category: "Clinical Care" },
  { file: "Cardiology-580x360.webp", category: "Clinical Care" },
  { file: "Clinical-Psychology-580x360.webp", category: "Clinical Care" },
  { file: "Dermatology-580x360.webp", category: "Clinical Care" },
  { file: "General-Medicine-580x360.webp", category: "Clinical Care" },
  { file: "General-Surgery-580x360.webp", category: "Clinical Care" },
  { file: "Gynaecology-580x360.webp", category: "Clinical Care" },
  { file: "Ophthalmology-580x360.webp", category: "Clinical Care" },
  { file: "Orthopaedics-580x360.webp", category: "Clinical Care" },
  { file: "Paediatrics-580x360.webp", category: "Clinical Care" },
  { file: "Psychiatry-580x360.webp", category: "Clinical Care" },

  { file: "CCU-580x360.webp", category: "Critical Care" },
  { file: "Emergency-Medicine-580x360.webp", category: "Critical Care" },
  { file: "Intensive-Care-Units-580x360.webp", category: "Critical Care" },
  { file: "MICU-580x360.webp", category: "Critical Care" },
  { file: "NICU-580x360.webp", category: "Critical Care" },
  { file: "PICU-580x360.webp", category: "Critical Care" },

  { file: "Hematology-Lab-580x360.webp", category: "Diagnostics" },
  { file: "Radiology-580x360.webp", category: "Diagnostics" },

  { file: "Blood-Bank-580x360.webp", category: "Support Services" },
  { file: "Dental-580x360.webp", category: "Support Services" },
  { file: "Dialysis-580x360.webp", category: "Support Services" },
  { file: "ENT-580x360.webp", category: "Support Services" },
  { file: "Laparoscopic-Surgery-580x360.webp", category: "Support Services" },
  { file: "Nursing-Department-580x360.webp", category: "Support Services" },
  { file: "Pharmacy-580x360.webp", category: "Support Services" },
  { file: "Physiotherapy-580x360.webp", category: "Support Services" },
  { file: "Finance-1-580x360.webp", category: "Support Services" },
  { file: "Managing-Board-580x360.webp", category: "Support Services" }
].map(({ file, category }) => ({
  src: `/carmel_dept/${file}`,
  title: file.replace('-580x360.webp', '').replace(/-/g, ' '),
  category
}));

export function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Clinical Care", "Critical Care", "Diagnostics", "Support Services"];

  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <main className="min-h-screen pb-16">
      <CinematicHero
        title="Our Gallery"
        subtitle="Explore our state-of-the-art facilities, departments, and hospital environment."
        image="/hero_slideshow/pexels-cedric-fauntleroy-4270086.webp"
        breadcrumbs={[
          { label: "Gallery" }
        ]}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                filter === category
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-primary border-primary/15 hover:border-primary/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                key={`${image.src}-${index}`}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <ZoomIn className="text-white w-8 h-8 mb-2" />
                  <p className="text-white font-medium text-center px-4">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-[95vw] h-[80vh] md:h-[90vh] rounded-xl overflow-hidden bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Gallery Preview"
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
