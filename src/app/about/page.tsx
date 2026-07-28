import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Target, Clock, HandshakeIcon } from 'lucide-react';
import { TEAM_MEMBERS, PARTNERS, IMPACT_STATS } from '@/data/team';

export const metadata: Metadata = {
  title: 'About — TABD Market',
  description:
    'Learn about Team Abilities Beyond Disabilities — a YLDP 2026 community change project empowering persons with disabilities in Ikwo LGA, Ebonyi State through vocational training and digital commerce.',
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="w-full py-20 md:py-28" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="label mb-4" style={{ color: '#FFA300' }}>
            About the Project
          </p>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(48px, 8vw, 90px)',
              color: '#FFFFFF',
              lineHeight: 0.92,
              maxWidth: 900,
              marginBottom: 24,
            }}
          >
            INCLUSION.<br />
            EMPOWERMENT.<br />
            OPPORTUNITY.
          </h1>
          <p
            className="font-inter"
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 18, maxWidth: 640, lineHeight: 1.7 }}
          >
            Team Abilities Beyond Disabilities is a youth-led community change project
            based at Alex Ekwueme Federal University, Ndufu-Alike. We are part of
            the YLDP 2026 — the Youth Leadership Development Programme — working to
            bridge the gap between disability and economic opportunity in Ikwo LGA,
            Ebonyi State.
          </p>
        </div>
      </section>

      {/* ── Problem + Approach ────────────────────────── */}
      <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="label mb-4" style={{ color: '#0047FF' }}>The Problem</p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(32px, 4vw, 48px)',
                color: '#0A0A0A',
                lineHeight: 0.93,
                marginBottom: 20,
              }}
            >
              1 IN 10 PEOPLE IN EBONYI STATE LIVE WITH A DISABILITY.
            </h2>
            <p className="font-inter" style={{ color: 'rgba(10,10,10,0.75)', fontSize: 16, lineHeight: 1.7 }}>
              In the farming and trading communities of Ikwo LGA, this reality creates
              a severe trap of financial dependence, social shame, and exclusion. Most
              existing training centres do not accommodate adaptive needs, forcing families
              to carry disabled relatives as lifelong dependents. Despite widespread
              smartphone ownership, this population has been entirely left out of the
              digital commerce wave.
            </p>
          </div>

          <div>
            <p className="label mb-4" style={{ color: '#FFA300' }}>Our Approach</p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(32px, 4vw, 48px)',
                color: '#0A0A0A',
                lineHeight: 0.93,
                marginBottom: 20,
              }}
            >
              LAYER SOLUTIONS ONTO WHAT ALREADY WORKS.
            </h2>
            <p className="font-inter" style={{ color: 'rgba(10,10,10,0.75)', fontSize: 16, lineHeight: 1.7 }}>
              We partner with existing local vocational centres to retrofit them for
              accessibility rather than building from scratch. We teach digital
              entrepreneurship using tools people already own — WhatsApp Business,
              Instagram, and this ecommerce platform. We host community exhibitions
              that shift public perception through visible proof of talent.
            </p>
          </div>
        </div>
      </section>

      {/* ── Impact Stats ────────────────────────────── */}
      <section style={{ backgroundColor: '#0047FF' }} className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {IMPACT_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="py-10 px-6 flex flex-col gap-1"
                style={{ borderRight: i < IMPACT_STATS.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: 52,
                    color: '#FFFFFF',
                    lineHeight: 0.9,
                  }}
                >
                  {stat.value}
                </span>
                <span className="label mt-2" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project Goal ────────────────────────────── */}
      <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={24} color="#FFA300" />,
                heading: 'PROJECT GOAL',
                body: 'Within 4 weeks, equip 30 women, youth, and children with disabilities in Ikwo LGA with adaptive vocational skills and digital entrepreneurship capability — enabling at least 20 to begin generating income.',
              },
              {
                icon: <Users size={24} color="#0047FF" />,
                heading: 'TARGET BENEFICIARIES',
                body: 'Women, youth, and children with physical, sensory, and intellectual disabilities living in Ikwo LGA and resident at partner vocational training centres.',
              },
              {
                icon: <Clock size={24} color="#FFA300" />,
                heading: 'PROJECT TIMELINE',
                body: '4 weeks: Week 1 (stakeholder engagement + needs assessment), Week 2 (vocational training), Week 3 (digital onboarding), Week 4 (community exhibition + evaluation).',
              },
            ].map((item) => (
              <div
                key={item.heading}
                className="p-8"
                style={{ border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: '#FFFFFF',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}
                >
                  {item.heading}
                </h3>
                <p className="font-inter" style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.7 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────────────── */}
      <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="label mb-4" style={{ color: '#FFA300' }}>The Team</p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(36px, 5vw, 60px)',
              color: '#0A0A0A',
              lineHeight: 0.93,
              marginBottom: 40,
            }}
          >
            MEET THE PEOPLE<br />BEHIND TABD.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0" style={{ border: '1px solid #0A0A0A' }}>
            {TEAM_MEMBERS.map((member, i) => (
              <div
                key={member.email}
                className="p-8"
                style={{
                  borderRight: (i + 1) % 3 !== 0 ? '1px solid #0A0A0A' : 'none',
                  borderBottom: i < TEAM_MEMBERS.length - 3 ? '1px solid #0A0A0A' : 'none',
                  backgroundColor: member.isLead ? '#0A0A0A' : member.isDeputy ? '#0047FF' : '#FFFFFF',
                }}
              >
                {(member.isLead || member.isDeputy) && (
                  <span
                    className="label inline-block mb-3 px-2 py-1"
                    style={{
                      fontSize: 10,
                      backgroundColor: '#FFA300',
                      color: '#0A0A0A',
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
                    color: member.isLead || member.isDeputy ? '#FFFFFF' : '#0A0A0A',
                    marginBottom: 6,
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="label mb-4"
                  style={{
                    fontSize: 11,
                    color: member.isLead || member.isDeputy ? 'rgba(255,255,255,0.7)' : '#FFA300',
                  }}
                >
                  {member.role}
                </p>
                <p
                  className="font-inter"
                  style={{
                    fontSize: 13,
                    color: member.isLead || member.isDeputy ? 'rgba(255,255,255,0.6)' : 'rgba(10,10,10,0.55)',
                  }}
                >
                  {member.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ────────────────────────────────── */}
      <section
        className="w-full py-16 md:py-24"
        style={{ backgroundColor: '#f9f9f9', borderTop: '1px solid #e0e0e0' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="label mb-4" style={{ color: '#0047FF' }}>Partners & Collaborators</p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 4vw, 52px)',
              color: '#0A0A0A',
              lineHeight: 0.93,
              marginBottom: 40,
            }}
          >
            BUILT ON EXISTING<br />COMMUNITY INFRASTRUCTURE.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="p-6 flex gap-4 items-start"
                style={{ border: '1px solid #0A0A0A' }}
              >
                <div
                  style={{
                    width: 4,
                    height: '100%',
                    minHeight: 40,
                    backgroundColor: partner.type === 'partner' ? '#0047FF' : '#FFA300',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p
                    className="label mb-2"
                    style={{
                      fontSize: 10,
                      color: partner.type === 'partner' ? '#0047FF' : '#FFA300',
                    }}
                  >
                    {partner.type === 'partner' ? 'Partner' : 'Collaborator'}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: 20,
                      textTransform: 'uppercase',
                      color: '#0A0A0A',
                      marginBottom: 6,
                    }}
                  >
                    {partner.name}
                  </h3>
                  <p className="font-inter" style={{ color: 'rgba(10,10,10,0.65)', fontSize: 14 }}>
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="w-full py-16 md:py-20" style={{ backgroundColor: '#FFA300' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(36px, 5vw, 64px)',
              color: '#0A0A0A',
              lineHeight: 0.93,
            }}
          >
            SUPPORT OUR ARTISANS.<br />SHOP THEIR WORK.
          </h2>
          <Link
            href="/shop"
            className="inline-flex items-center gap-3 px-10 py-5 font-inter font-medium uppercase transition-colors"
            style={{
              backgroundColor: '#0A0A0A',
              color: '#FFFFFF',
              letterSpacing: '2px',
              fontSize: 13,
              flexShrink: 0,
            }}
          >
            Visit the Shop <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
