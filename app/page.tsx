import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            SaaS IA Boilerplate
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un boilerplate Next.js minimal et bien organisé pour créer votre SaaS IA de A à Z
          </p>
        </div>

        {/* Main Card */}
        <Card className="max-w-4xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">🚀 Bienvenue sur ce boilerplate</CardTitle>
            <CardDescription className="text-base">
              Ce projet sert de support pédagogique pour le module Skool : "Construire un SaaS IA de A à Z"
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">📦 Ce que vous trouverez ici :</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li>Une structure de fichiers propre et scalable</li>
                <li>Configuration Next.js 14 avec App Router et TypeScript</li>
                <li>TailwindCSS et shadcn/ui déjà configurés</li>
                <li>Placeholders pour Supabase, Stripe et OpenAI</li>
                <li>Des exemples de code commentés pour vous guider</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">⚠️ Important :</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ce boilerplate ne contient <strong>aucun code métier fonctionnel</strong>. 
                Il est conçu pour être complété étape par étape lors du cours.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold text-lg mb-2">📚 Documentation :</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Consultez le <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">README.md</code> pour 
                comprendre la structure du projet et apprendre comment intégrer les différents services.
              </p>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="w-full sm:w-auto">
                  📖 Lire la documentation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">⚡ Stack Moderne</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Next.js 14, React, TypeScript, TailwindCSS et shadcn/ui
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🔌 Services Prêts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Configuration pour Supabase, Stripe et OpenAI
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📚 Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Guide complet étape par étape pour démarrer
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500 dark:text-gray-400">
          <p>Démarrez votre SaaS IA dès aujourd'hui ! 🚀</p>
        </div>
      </div>
    </main>
  )
}

