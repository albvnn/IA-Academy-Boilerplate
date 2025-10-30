# 🚀 SaaS IA Boilerplate

> **Un boilerplate Next.js minimal et bien organisé pour créer votre SaaS IA de A à Z**

Ce projet sert de support pédagogique pour le module Skool : **"Construire un SaaS IA de A à Z"**. Il ne contient aucun code métier fonctionnel, mais offre une structure solide et des exemples pour vous guider dans le développement de votre propre SaaS.

---

## 📋 Table des matières

1. [Introduction](#-introduction)
2. [Stack utilisée](#️-stack-utilisée)
3. [Structure du projet](#-structure-du-projet)
4. [Installation](#-installation)
5. [Configuration des services](#-configuration-des-services)
6. [Comment ajouter ta logique IA](#-comment-ajouter-ta-logique-ia)
7. [Comment ajouter les paiements](#-comment-ajouter-les-paiements)
8. [Comment personnaliser le design](#-comment-personnaliser-le-design)
9. [Déploiement](#-déploiement)
10. [Bonnes pratiques](#-bonnes-pratiques)

---

## 🧭 Introduction

Ce boilerplate est conçu pour être votre point de départ dans la création d'un SaaS basé sur l'intelligence artificielle. Il inclut :

- ✅ Une structure de fichiers propre et scalable
- ✅ Configuration complète de Next.js 14 avec App Router
- ✅ TypeScript configuré et prêt à l'emploi
- ✅ TailwindCSS et shadcn/ui pré-configurés
- ✅ Placeholders pour Supabase, Stripe et OpenAI
- ✅ Exemples de code commentés pour chaque service
- ✅ Documentation complète pour guider vos premiers pas

**⚠️ Important** : Ce boilerplate ne contient **aucun code métier fonctionnel**. Il est conçu pour être complété étape par étape lors du cours. Tous les appels API sont commentés et doivent être activés après configuration.

---

## ⚙️ Stack utilisée

Ce projet utilise les technologies suivantes :

### Core
- **Next.js 14** - Framework React avec App Router
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique pour JavaScript

### Styling
- **TailwindCSS** - Framework CSS utility-first
- **shadcn/ui** - Composants UI réutilisables et accessibles

### Services externes
- **Supabase** - Base de données PostgreSQL et authentification
- **Stripe** - Paiements et abonnements
- **OpenAI** - Intelligence artificielle (GPT, DALL-E, etc.)

### Outils de développement
- **ESLint** - Linter pour le code JavaScript/TypeScript
- **PostCSS** - Traitement CSS
- **Autoprefixer** - Préfixes CSS automatiques

---

## 🧱 Structure du projet

Voici la structure complète du projet et le rôle de chaque dossier :

```
saas-ia-boilerplate/
│
├── app/                          # Dossier App Router de Next.js
│   ├── api/                      # Routes API (backend)
│   │   ├── generate/            # Endpoint pour générer du contenu avec OpenAI
│   │   ├── create-checkout-session/  # Créer une session Stripe Checkout
│   │   ├── webhooks/            # Webhooks (Stripe, etc.)
│   │   └── users/               # Endpoints pour gérer les utilisateurs
│   ├── globals.css              # Styles globaux et variables Tailwind
│   ├── layout.tsx               # Layout racine de l'application
│   └── page.tsx                 # Page d'accueil
│
├── components/                   # Composants React réutilisables
│   └── ui/                      # Composants shadcn/ui
│       ├── button.tsx           # Composant Button
│       └── card.tsx             # Composant Card
│
├── lib/                         # Bibliothèques et utilitaires
│   ├── supabase.ts             # Configuration client Supabase
│   ├── stripe.ts               # Configuration client Stripe
│   ├── openai.ts               # Configuration client OpenAI
│   └── utils.ts                # Fonctions utilitaires (cn, etc.)
│
├── types/                       # Types TypeScript globaux
│   └── index.ts                # Définitions de types partagés
│
├── .env.example                 # Exemple de fichier de variables d'environnement
├── .eslintrc.json              # Configuration ESLint
├── .gitignore                  # Fichiers ignorés par Git
├── next.config.js              # Configuration Next.js
├── package.json                # Dépendances et scripts npm
├── postcss.config.js           # Configuration PostCSS
├── tailwind.config.ts          # Configuration TailwindCSS
├── tsconfig.json               # Configuration TypeScript
└── README.md                   # Ce fichier
```

### Détails des dossiers

#### 📁 `app/`
Le dossier principal de Next.js 14 avec App Router. Chaque fichier dans ce dossier représente une route de votre application.

- **`app/page.tsx`** : Page d'accueil (`/`)
- **`app/layout.tsx`** : Layout racine qui enveloppe toutes les pages
- **`app/globals.css`** : Styles CSS globaux et variables Tailwind

#### 📁 `app/api/`
Contient toutes vos routes API (backend). Chaque sous-dossier représente un endpoint.

- **`app/api/generate/route.ts`** : Exemple d'endpoint pour utiliser OpenAI
- **`app/api/create-checkout-session/route.ts`** : Créer une session Stripe
- **`app/api/webhooks/stripe/route.ts`** : Recevoir les événements Stripe
- **`app/api/users/route.ts`** : CRUD pour les utilisateurs

#### 📁 `components/`
Composants React réutilisables dans toute l'application.

- **`components/ui/`** : Composants shadcn/ui (Button, Card, etc.)

#### 📁 `lib/`
Bibliothèques et configurations pour les services externes.

- **`lib/supabase.ts`** : Client Supabase initialisé
- **`lib/stripe.ts`** : Client Stripe initialisé
- **`lib/openai.ts`** : Client OpenAI initialisé
- **`lib/utils.ts`** : Fonctions utilitaires (ex: `cn()` pour Tailwind)

#### 📁 `types/`
Définitions de types TypeScript partagés dans l'application.

---

## 🧩 Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** 18+ ([télécharger](https://nodejs.org/))
- **npm** ou **yarn** ou **pnpm**
- **Git** ([télécharger](https://git-scm.com/))

### Étapes d'installation

1. **Cloner le projet** (ou télécharger les fichiers)

```bash
git clone <url-du-repo>
cd saas-ia-boilerplate
```

2. **Installer les dépendances**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Créer le fichier de variables d'environnement**

```bash
cp .env.example .env.local
```

4. **Configurer les variables d'environnement**

Ouvrez `.env.local` et ajoutez vos clés (voir section [Configuration des services](#-configuration-des-services)).

5. **Lancer le serveur de développement**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

6. **Ouvrir l'application**

Ouvrez votre navigateur à l'adresse : [http://localhost:3000](http://localhost:3000)

Vous devriez voir la page d'accueil du boilerplate ! 🎉

---

## 🔐 Configuration des services

Cette section vous guide pour configurer chaque service externe nécessaire à votre SaaS.

### 1. Configuration Supabase

Supabase est une alternative open-source à Firebase qui fournit une base de données PostgreSQL, l'authentification, et bien plus.

#### Étape 1 : Créer un projet Supabase

1. Allez sur [https://app.supabase.com](https://app.supabase.com)
2. Créez un compte (gratuit) ou connectez-vous
3. Cliquez sur "New Project"
4. Remplissez les informations :
   - **Name** : Nom de votre projet
   - **Database Password** : Choisissez un mot de passe fort
   - **Region** : Sélectionnez la région la plus proche
5. Cliquez sur "Create new project"

#### Étape 2 : Récupérer les clés API

1. Une fois le projet créé, allez dans **Settings** → **API**
2. Vous trouverez :
   - **Project URL** : C'est votre `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** : C'est votre `NEXT_PUBLIC_SUPABASE_ANON_KEY`

#### Étape 3 : Ajouter les clés dans `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre_anon_key_ici
```

#### Étape 4 : Créer votre première table (exemple)

1. Allez dans **Table Editor** dans le dashboard Supabase
2. Cliquez sur "New Table"
3. Créez une table `users` avec les colonnes :
   - `id` (uuid, primary key)
   - `email` (text)
   - `created_at` (timestamp)

#### Étape 5 : Activer le code dans `lib/supabase.ts`

Le fichier est déjà configuré ! Il suffit d'utiliser `supabase` depuis `@/lib/supabase`.

**Exemple d'utilisation :**

```typescript
import { supabase } from '@/lib/supabase'

// Récupérer des données
const { data, error } = await supabase
  .from('users')
  .select('*')

// Insérer des données
const { data, error } = await supabase
  .from('users')
  .insert([{ email: 'user@example.com' }])
```

---

### 2. Configuration Stripe

Stripe gère les paiements et abonnements pour votre SaaS.

#### Étape 1 : Créer un compte Stripe

1. Allez sur [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register)
2. Créez un compte (mode test disponible)
3. Complétez les informations de votre entreprise

#### Étape 2 : Récupérer les clés API

1. Allez dans **Developers** → **API keys**
2. Vous trouverez :
   - **Publishable key** : C'est votre `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (commence par `pk_test_`)
   - **Secret key** : C'est votre `STRIPE_SECRET_KEY` (commence par `sk_test_`)

⚠️ **Important** : En mode test, utilisez les clés qui commencent par `test_`. En production, utilisez les clés `live_`.

#### Étape 3 : Ajouter les clés dans `.env.local`

```env
STRIPE_SECRET_KEY=sk_test_votre_clé_secrète
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_votre_clé_publique
```

#### Étape 4 : Configurer les webhooks (optionnel)

Pour recevoir les événements Stripe (paiements réussis, abonnements annulés, etc.) :

1. Allez dans **Developers** → **Webhooks**
2. Cliquez sur "Add endpoint"
3. URL : `https://votre-domaine.com/api/webhooks/stripe`
4. Sélectionnez les événements à écouter :
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Copiez la **Signing secret** (commence par `whsec_`) dans `.env.local` :

```env
STRIPE_WEBHOOK_SECRET=whsec_votre_webhook_secret
```

#### Étape 5 : Créer un produit et un prix (exemple)

1. Allez dans **Products** → **Add product**
2. Créez un produit "Abonnement Premium"
3. Ajoutez un prix (ex: 20€/mois)
4. Notez le **Price ID** (commence par `price_`)

#### Étape 6 : Activer le code dans `app/api/create-checkout-session/route.ts`

Décommentez le code dans le fichier et utilisez-le depuis votre frontend.

**Exemple d'utilisation côté frontend :**

```typescript
const response = await fetch('/api/create-checkout-session', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    priceId: 'price_1234567890',
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  }),
})

const { url } = await response.json()
window.location.href = url // Redirige vers Stripe Checkout
```

---

### 3. Configuration OpenAI

OpenAI fournit les modèles d'IA (GPT-4, DALL-E, etc.) pour votre SaaS.

#### Étape 1 : Créer un compte OpenAI

1. Allez sur [https://platform.openai.com](https://platform.openai.com)
2. Créez un compte ou connectez-vous
3. Complétez les informations de paiement (requis pour utiliser l'API)

#### Étape 2 : Générer une clé API

1. Allez dans **API keys** → **Create new secret key**
2. Donnez un nom à votre clé (ex: "SaaS Boilerplate")
3. Copiez la clé (elle commence par `sk-`)

⚠️ **Important** : Cette clé ne sera affichée qu'une seule fois ! Sauvegardez-la.

#### Étape 3 : Ajouter la clé dans `.env.local`

```env
OPENAI_API_KEY=sk-votre_clé_api_ici
```

#### Étape 4 : Activer le code dans `app/api/generate/route.ts`

Décommentez le code dans le fichier pour activer la génération de contenu.

**Exemple d'utilisation côté frontend :**

```typescript
const response = await fetch('/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    prompt: 'Génère un texte sur les bienfaits du SaaS',
    model: 'gpt-4',
  }),
})

const { result } = await response.json()
console.log(result) // Texte généré par l'IA
```

---

### 4. Configuration shadcn/ui

shadcn/ui est une collection de composants UI réutilisables basés sur Radix UI et TailwindCSS.

#### Étape 1 : Installer shadcn/ui (déjà fait !)

Les composants de base sont déjà installés. Pour ajouter d'autres composants :

```bash
npx shadcn-ui@latest add [nom-du-composant]
```

**Exemples :**

```bash
npx shadcn-ui@latest add input
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
```

#### Étape 2 : Utiliser les composants

Les composants sont dans `components/ui/`. Importez-les simplement :

```typescript
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function MyComponent() {
  return (
    <Card>
      <Button>Cliquez-moi</Button>
    </Card>
  )
}
```

#### Documentation complète

Consultez [https://ui.shadcn.com](https://ui.shadcn.com) pour voir tous les composants disponibles.

---

## 🧠 Comment ajouter ta logique IA

Cette section vous montre comment intégrer l'intelligence artificielle dans votre application.

### Exemple 1 : Générer du texte avec GPT

1. **Créez ou modifiez** `app/api/generate/route.ts`

Le fichier existe déjà avec du code commenté. Décommentez-le :

```typescript
import { openai } from '@/lib/openai'

export async function POST(request: NextRequest) {
  const { prompt } = await request.json()

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'Tu es un assistant utile.' },
      { role: 'user', content: prompt },
    ],
  })

  return NextResponse.json({
    result: completion.choices[0].message.content,
  })
}
```

2. **Appelez l'API depuis le frontend**

```typescript
'use client'

import { useState } from 'react'

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })

      const data = await response.json()
      setResult(data.result)
    } catch (error) {
      console.error('Erreur:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Entrez votre prompt..."
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Génération...' : 'Générer'}
      </button>
      {result && <div>{result}</div>}
    </div>
  )
}
```

### Exemple 2 : Générer des images avec DALL-E

Créez `app/api/generate-image/route.ts` :

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { openai } from '@/lib/openai'

export async function POST(request: NextRequest) {
  const { prompt } = await request.json()

  const image = await openai.images.generate({
    model: 'dall-e-3',
    prompt: prompt,
    size: '1024x1024',
    quality: 'standard',
    n: 1,
  })

  return NextResponse.json({
    url: image.data[0].url,
  })
}
```

### Exemple 3 : Créer un assistant conversationnel

Créez `app/api/chat/route.ts` :

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { openai } from '@/lib/openai'

export async function POST(request: NextRequest) {
  const { messages } = await request.json()

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages, // Array de messages avec role et content
    stream: true, // Pour le streaming
  })

  // Retourner un stream pour une meilleure UX
  return new Response(completion.body, {
    headers: {
      'Content-Type': 'text/event-stream',
    },
  })
}
```

---

## 💳 Comment ajouter les paiements

Cette section vous guide pour intégrer Stripe dans votre application.

### Étape 1 : Créer une session de checkout

Le fichier `app/api/create-checkout-session/route.ts` contient déjà le code. Décommentez-le.

### Étape 2 : Créer un bouton de paiement dans le frontend

Créez `app/pricing/page.tsx` :

```typescript
'use client'

export default function PricingPage() {
  const handleSubscribe = async (priceId: string) => {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        priceId: priceId,
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/pricing`,
      }),
    })

    const { url } = await response.json()
    window.location.href = url
  }

  return (
    <div>
      <h1>Choisissez votre plan</h1>
      <button onClick={() => handleSubscribe('price_1234567890')}>
        S'abonner - 20€/mois
      </button>
    </div>
  )
}
```

### Étape 3 : Gérer les webhooks Stripe

1. Décommentez le code dans `app/api/webhooks/stripe/route.ts`
2. Configurez votre endpoint dans le dashboard Stripe (voir section [Configuration Stripe](#2-configuration-stripe))
3. Le webhook recevra les événements Stripe et pourra mettre à jour votre base de données

**Exemple de gestion d'un événement :**

```typescript
case 'checkout.session.completed':
  const session = event.data.object as Stripe.Checkout.Session
  
  // Mettre à jour votre base de données Supabase
  await supabase
    .from('subscriptions')
    .insert({
      user_id: session.customer,
      stripe_subscription_id: session.subscription,
      status: 'active',
    })
  
  break
```

### Étape 4 : Créer une page de succès

Créez `app/success/page.tsx` :

```typescript
export default function SuccessPage() {
  return (
    <div>
      <h1>Paiement réussi ! 🎉</h1>
      <p>Votre abonnement est maintenant actif.</p>
    </div>
  )
}
```

---

## 🎨 Comment personnaliser le design

### Modifier les couleurs Tailwind

Editez `app/globals.css` pour changer les couleurs :

```css
:root {
  --primary: 222.2 47.4% 11.2%; /* Changez ces valeurs */
  --secondary: 210 40% 96.1%;
  /* etc. */
}
```

### Ajouter des composants shadcn/ui

```bash
npx shadcn-ui@latest add [composant]
```

**Composants populaires :**

- `input` - Champs de saisie
- `dialog` - Modales
- `dropdown-menu` - Menus déroulants
- `toast` - Notifications
- `form` - Formulaires
- `table` - Tableaux

### Personnaliser le thème

Modifiez `tailwind.config.ts` pour ajouter vos propres couleurs, polices, etc.

---

## 🚀 Déploiement

### Déployer sur Vercel (recommandé)

Vercel est la plateforme idéale pour déployer des applications Next.js.

#### Étape 1 : Préparer le projet

1. Assurez-vous que votre code est sur GitHub, GitLab ou Bitbucket
2. Vérifiez que `.env.local` est dans `.gitignore` (déjà fait)

#### Étape 2 : Créer un compte Vercel

1. Allez sur [https://vercel.com](https://vercel.com)
2. Créez un compte ou connectez-vous avec GitHub

#### Étape 3 : Déployer le projet

1. Cliquez sur "Add New Project"
2. Importez votre repository
3. Vercel détectera automatiquement Next.js
4. Cliquez sur "Deploy"

#### Étape 4 : Configurer les variables d'environnement

1. Allez dans **Settings** → **Environment Variables**
2. Ajoutez toutes vos variables d'environnement :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `OPENAI_API_KEY`
   - `NEXT_PUBLIC_APP_URL` (votre URL Vercel)

3. Redéployez le projet pour appliquer les changements

#### Étape 5 : Configurer les webhooks Stripe

1. Allez dans votre dashboard Stripe → **Webhooks**
2. Modifiez votre endpoint pour pointer vers votre URL Vercel :
   - `https://votre-projet.vercel.app/api/webhooks/stripe`
3. Mettez à jour `STRIPE_WEBHOOK_SECRET` dans Vercel

### Déployer sur d'autres plateformes

Vous pouvez également déployer sur :
- **Netlify** : [https://netlify.com](https://netlify.com)
- **Railway** : [https://railway.app](https://railway.app)
- **Render** : [https://render.com](https://render.com)

---

## 🧰 Bonnes pratiques

### 1. Séparation backend / frontend

- ✅ **Routes API** : Gardez toute la logique métier dans `app/api/`
- ✅ **Composants** : Gardez les composants UI dans `components/`
- ✅ **Services** : Centralisez les appels aux services externes dans `lib/`

### 2. Variables d'environnement

- ✅ **Jamais** commiter `.env.local` dans Git
- ✅ Utilisez `.env.example` pour documenter les variables nécessaires
- ✅ Préfixez les variables publiques avec `NEXT_PUBLIC_`
- ✅ Gardez les clés secrètes côté serveur uniquement

### 3. Gestion des erreurs

Toujours gérer les erreurs dans vos routes API :

```typescript
try {
  // Code
} catch (error) {
  console.error('Erreur:', error)
  return NextResponse.json(
    { error: 'Message d\'erreur utilisateur' },
    { status: 500 }
  )
}
```

### 4. Validation des données

Validez toujours les données reçues :

```typescript
const { prompt } = await request.json()

if (!prompt || typeof prompt !== 'string') {
  return NextResponse.json(
    { error: 'Prompt invalide' },
    { status: 400 }
  )
}
```

### 5. Sécurité

- ✅ Ne jamais exposer les clés API côté client
- ✅ Utilisez Supabase RLS (Row Level Security) pour protéger vos données
- ✅ Validez les webhooks Stripe avec la signature
- ✅ Utilisez HTTPS en production

### 6. Performance

- ✅ Utilisez `next/image` pour les images
- ✅ Utilisez le Server Components par défaut
- ✅ Utilisez `'use client'` uniquement quand nécessaire
- ✅ Mettez en cache les requêtes API quand possible

### 7. Versioning Git

- ✅ Commitez régulièrement avec des messages clairs
- ✅ Utilisez des branches pour les nouvelles fonctionnalités
- ✅ Créez des pull requests pour les révisions

**Exemple de workflow :**

```bash
git checkout -b feature/ajout-ia-generative
# ... faire des modifications ...
git add .
git commit -m "feat: ajout de la génération de texte avec GPT-4"
git push origin feature/ajout-ia-generative
```

### 8. Documentation

- ✅ Commentez votre code complexe
- ✅ Documentez les APIs avec des exemples
- ✅ Mettez à jour le README quand vous ajoutez des fonctionnalités

---

## 📚 Ressources supplémentaires

### Documentation officielle

- **Next.js** : [https://nextjs.org/docs](https://nextjs.org/docs)
- **React** : [https://react.dev](https://react.dev)
- **TypeScript** : [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)
- **TailwindCSS** : [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **shadcn/ui** : [https://ui.shadcn.com](https://ui.shadcn.com)
- **Supabase** : [https://supabase.com/docs](https://supabase.com/docs)
- **Stripe** : [https://stripe.com/docs](https://stripe.com/docs)
- **OpenAI** : [https://platform.openai.com/docs](https://platform.openai.com/docs)

### Outils utiles

- **Vercel** : [https://vercel.com](https://vercel.com) - Déploiement
- **GitHub** : [https://github.com](https://github.com) - Versioning
- **Postman** : [https://postman.com](https://postman.com) - Tester les APIs

---

## 🎓 Prochaines étapes

Maintenant que vous avez configuré le boilerplate, voici ce que vous pouvez faire :

1. ✅ **Créer votre première fonctionnalité IA** - Générer du contenu, analyser des données, etc.
2. ✅ **Ajouter l'authentification** - Utilisez Supabase Auth pour gérer les utilisateurs
3. ✅ **Mettre en place les paiements** - Créez des plans d'abonnement avec Stripe
4. ✅ **Créer un dashboard** - Interface pour vos utilisateurs
5. ✅ **Ajouter des analytics** - Suivez l'utilisation de votre SaaS

---

## 🤝 Support

Si vous rencontrez des problèmes :

1. Consultez la documentation officielle des services
2. Vérifiez que toutes vos variables d'environnement sont correctement configurées
3. Regardez les logs dans la console et dans Vercel (si déployé)

---

## 📝 Licence

Ce boilerplate est fourni à des fins éducatives dans le cadre du module Skool "Construire un SaaS IA de A à Z".

---

**Bon développement ! 🚀**

_Ps: N'oubliez pas de ⭐ ce projet si vous le trouvez utile !_

