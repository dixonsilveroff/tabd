'use client';

import { useState } from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';
import type { TeamMember } from '@/data/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="p-8 hover:brightness-[0.98] md:hover:scale-[1.01] transition-all duration-200 flex flex-col h-full"
      style={{
        backgroundColor: member.isLead ? 'var(--border-main)' : member.isDeputy ? 'var(--blue)' : 'var(--bg-card)',
        color: member.isLead ? 'var(--bg-main)' : member.isDeputy ? '#FFFFFF' : 'var(--text-main)',
      }}
    >
      {/* Photo area */}
      <div 
        className="relative w-full aspect-square border border-[var(--border-main)] mb-6 overflow-hidden bg-[var(--bg-subtle)] flex items-center justify-center"
      >
        {member.imageUrl && !imgError ? (
          <Image
            src={member.imageUrl}
            alt={member.name}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-center p-4">
            <User size={48} className={member.isLead ? 'text-black/40 dark:text-white/40' : member.isDeputy ? 'text-white/40' : 'text-black/30 dark:text-white/30'} />
            <span className="text-[10px] uppercase tracking-widest font-mono opacity-40">Photo Placeholder</span>
          </div>
        )}
      </div>

      {/* Info details */}
      <div className="flex flex-col flex-1">
        {(member.isLead || member.isDeputy) && (
          <span
            className="label inline-block mb-3 px-2 py-1 self-start"
            style={{
              fontSize: 10,
              backgroundColor: 'var(--yellow)',
              color: 'var(--black)',
            }}
          >
            {member.isLead ? 'Team Lead' : 'Team Deputy'}
          </span>
        )}
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 22,
            textTransform: 'uppercase',
            color: member.isLead ? 'var(--bg-main)' : member.isDeputy ? '#FFFFFF' : 'var(--text-main)',
            marginBottom: 6,
          }}
        >
          {member.name}
        </h3>
        <p
          className="label mb-4"
          style={{
            fontSize: 11,
            color: member.isLead ? 'var(--yellow)' : member.isDeputy ? 'rgba(255,255,255,0.8)' : 'var(--yellow)',
          }}
        >
          {member.role}
        </p>
        <div className="flex-1" />
        <p
          className="font-inter mt-4"
          style={{
            fontSize: 13,
            color: member.isLead ? 'var(--text-muted)' : member.isDeputy ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)',
          }}
        >
          {member.phone}
        </p>
      </div>
    </div>
  );
}
