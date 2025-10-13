"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface WorkshopGalleryClientProps {
  images: Array<{
    url: string;
    alt: string;
    caption: string;
  }>;
  workshopTitle: string;
  workshopDate: string;
}

export default function WorkshopGalleryClient({ images, workshopTitle, workshopDate }: WorkshopGalleryClientProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image: any, index: number) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-100"
            onClick={() => openModal(index)}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-sm font-medium">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <Image
              src={images[selectedImageIndex].url}
              alt={images[selectedImageIndex].alt}
              width={800}
              height={600}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {workshopTitle}
                </h3>
                <span className="text-sm text-gray-500">
                  {selectedImageIndex + 1} / {images.length}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                {new Date(workshopDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-base text-gray-700">
                {images[selectedImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}