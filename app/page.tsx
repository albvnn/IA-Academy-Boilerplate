"use client"

import Image from 'next/image'
import Link from 'next/link'

const steps = [
  {
    img: '/images/1.jpeg',
    number: 1,
    desc: "Ouvrez votre terminal et installez le boilerplate sur votre machine.",
  },
  {
    img: '/images/2.jpeg',
    number: 2,
    desc: "Dupliquez le fichier d’exemple pour générer votre configuration locale.",
  },
  {
    img: '/images/3.jpeg',
    number: 3,
    desc: "Démarrez le serveur de développement et ouvrez le projet dans votre navigateur.",
  },
]

export default function Home() {
  return (
    <main
      className="h-screen bg-white flex flex-col items-center justify-between font-aeonikpro px-4 py-6 relative"
      style={{ fontFamily: "'Aeonik Pro TRIAL', sans-serif" }}
    >
      {/* Custom Font with next/font not supported for local non-Google; if needed add in _app */}
      <header className="w-full flex flex-col items-center mt-8">
        <Image
          src="/images/logo.jpg"
          alt="IA Academy Logo"
          width={100}
          height={50}
          priority
          className="mb-4 rounded-xl shadow-lg border border-gray-300"
          style={{ maxWidth: "100px", width: "auto", height: "auto" }}
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Votre base de lancement pour tout SaaS IA.</h1>
      </header>
      {/* Steps */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-32 w-full max-w-6xl flex-1 items-center">
        {steps.map(step => (
          <div key={step.number} className="flex flex-col items-center">
            <div className="w-full flex flex-col items-center mb-2">
              <div className="relative w-72 h-52 md:w-96 md:h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={step.img}
                  alt={`Étape ${step.number}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 350px"
                  style={{ objectFit: 'cover' }}
                  className="rounded"
                  priority={step.number === 1}
                />
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold mt-2 text-gray-800">{step.number}</div>
            <div className="text-sm text-gray-500 mt-1 text-center">{step.desc}</div>
          </div>
        ))}
      </section>
      {/* Footer doc/help */}
      <footer className="w-full flex flex-col items-center">
        <p className="text-gray-600 text-center text-xs md:text-sm">
          Besoin d&apos;aide ? Consulte la{' '}
          <Link href="/README.md#" className="underline text-black hover:text-black transition-colors" target="_blank">documentation</Link>{' '}ou la{' '}
          <Link href="https://skool.com/ia-academy" className="underline text-black hover:text-black transition-colors" target="_blank">vidéo du module Skool</Link>.
        </p>
      </footer>
      {/* Self-hosted font face */}
      <style jsx global>{`
        @font-face {
          font-family: 'Aeonik Pro TRIAL';
          src: url('/fonts/AeonikProTRIAL-Light.otf') format('opentype');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Aeonik Pro TRIAL';
          src: url('/fonts/AeonikProTRIAL-LightItalic.otf') format('opentype');
          font-weight: 300;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: 'Aeonik Pro TRIAL';
          src: url('/fonts/AeonikProTRIAL-Regular.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Aeonik Pro TRIAL';
          src: url('/fonts/AeonikProTRIAL-RegularItalic.otf') format('opentype');
          font-weight: 400;
          font-style: italic;
          font-display: swap;
        }
        @font-face {
          font-family: 'Aeonik Pro TRIAL';
          src: url('/fonts/AeonikProTRIAL-Bold.otf') format('opentype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: 'Aeonik Pro TRIAL';
          src: url('/fonts/AeonikProTRIAL-BoldItalic.otf') format('opentype');
          font-weight: 700;
          font-style: italic;
          font-display: swap;
        }
        html {
          font-family: 'Aeonik Pro TRIAL', sans-serif;
        }
      `}</style>
    </main>
  )
}

