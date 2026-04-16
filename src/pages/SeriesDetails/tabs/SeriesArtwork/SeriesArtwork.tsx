import { useParams } from 'react-router-dom';
import { useState } from 'react';
import type { TImage } from '../../../../types/entities/TMovie';
import { X } from 'lucide-react';
import { useSeriesImages } from '../../../../hooks/series/useSeriesImages';

export const SeriesArtwork = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<TImage | null>(null);
  const { data: images, isLoading, isError } = useSeriesImages(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {images.backdrops.slice(0, 10).map((image) => (
          <img
            className="object-cover rounded-md cursor-pointer hover:scale-102 transition duration-250"
            key={image.file_path}
            src={`${import.meta.env.VITE_API_IMAGE}/original${image.file_path}`}
            alt={image.file_path}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 z-1000"
          onClick={() => setSelectedImage(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-lg max-w-[90vw] max-h-[90vh] overflow-hidden"
          >
            <img
              className="w-full h-full object-contain"
              src={`${import.meta.env.VITE_API_IMAGE}/original${selectedImage.file_path}`}
              alt={selectedImage.file_path}
            />
            <button
              className="absolute top-3 right-3 flex items-center bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors duration-250"
              onClick={() => setSelectedImage(null)}
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
