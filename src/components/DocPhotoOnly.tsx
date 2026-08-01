'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';

interface DocPhotoOnlyProps {
  imageUrl: string;
  alt: string;
  aspectRatio?: 'square' | 'video';
}

export default function DocPhotoOnly({ imageUrl, alt, aspectRatio = 'square' }: DocPhotoOnlyProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden border border-white/20 bg-white/5 flex items-center justify-center ${
        aspectRatio === 'square' ? 'aspect-square' : 'aspect-video'
      }`}
    >
      {imageUrl && !imgError ? (
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-102"
          onError={() => setImgError(true)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="flex flex-col items-center gap-2 text-center p-6 text-white/60 select-none">
          <Camera size={36} className="opacity-60" />
          <span className="text-[10px] uppercase tracking-widest font-mono opacity-60">{alt}</span>
        </div>
      )}
    </div>
  );
}
