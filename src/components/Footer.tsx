import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-footer)', borderTop: '1px solid var(--border-footer)' }} className="transition-colors duration-200">
      {/* Main body */}
      <div className="px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 w-fit hover:opacity-85 hover:scale-[1.02] transition-all duration-200">
              <Image
                src="/logo.png"
                alt="TABD"
                width={48}
                height={48}
                style={{ borderRadius: 0 }}
              />
            </Link>
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: 24,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                lineHeight: 1.1,
              }}
              className="text-[var(--text-footer)] transition-colors duration-200"
            >
              Abilities Beyond<br />Disabilities
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                letterSpacing: '0.02em',
              }}
              className="text-[var(--text-muted)] transition-colors duration-200"
            >
              Inclusion · Empowerment · Opportunity
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 12,
                color: 'var(--yellow)',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
              }}
            >
              Quick Links
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Shop', href: '/shop' },
                { label: 'About', href: '/about' },
                { label: 'Checkout', href: '/checkout' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    textDecoration: 'none',
                  }}
                  className="text-[var(--text-muted)] hover:text-[var(--blue)] hover:translate-x-1.5 transition-all duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: 12,
                color: 'var(--yellow)',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
              }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:team.tabd@gmail.com"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  textDecoration: 'none',
                }}
                className="text-[var(--text-muted)] hover:text-[var(--blue)] hover:translate-x-1.5 transition-all duration-200 w-fit"
              >
                team.tabd@gmail.com
              </a>
              <a
                href="tel:08110445408"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  textDecoration: 'none',
                }}
                className="text-[var(--text-muted)] hover:text-[var(--blue)] hover:translate-x-1.5 transition-all duration-200 w-fit"
              >
                08110445408
              </a>
              <a
                href="tel:09047921865"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  textDecoration: 'none',
                }}
                className="text-[var(--text-muted)] hover:text-[var(--blue)] hover:translate-x-1.5 transition-all duration-200 w-fit"
              >
                09047921865
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: '1px solid var(--border-subtle)' }}
        className="py-6 px-8"
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            textAlign: 'center',
            lineHeight: 1.6,
          }}
          className="text-[var(--text-muted)] transition-colors duration-200"
        >
          © 2026 Team Abilities Beyond Disabilities. Alex Ekwueme Federal University,
          Ndufu-Alike, Ikwo LGA, Ebonyi State.
        </p>
      </div>
    </footer>
  );
}
