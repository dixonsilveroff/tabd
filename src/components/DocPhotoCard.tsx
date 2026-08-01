'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera } from 'lucide-react';

interface DocPhotoCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function DocPhotoCard({ imageUrl, title, description }: DocPhotoCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="bg-[var(--bg-card)] border border-[var(--border-main)] hover:-translate-y-1 hover:shadow-md transition-all duration-250 flex flex-col"
    >
      <div className="relative w-full aspect-video overflow-hidden border-b border-[var(--border-main)] bg-[var(--bg-subtle)] flex items-center justify-center">
        {imageUrl && !imgError ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-center p-6 text-[var(--text-muted)] select-none">
            <Camera size={36} className="opacity-40" />
            <span className="text-[10px] uppercase tracking-widest font-mono opacity-50">Photo Documentation</span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1 gap-2">
        <h3
          className="uppercase"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: 'var(--text-main)',
          }}
        >
          {title}
        </h3>
        <p className="font-inter" style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );
}
