/**
 * Route API pour générer du contenu avec OpenAI
 * 
 * Exemple d'endpoint pour utiliser l'IA dans votre application.
 * 
 * POST /api/generate
 * Body: { prompt: string, model?: string }
 */

import { NextRequest, NextResponse } from 'next/server'
import { openai } from '@/lib/openai'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { prompt, model = 'gpt-4' } = body

    // Validation
    if (!prompt) {
      return NextResponse.json(
        { error: 'Le prompt est requis' },
        { status: 400 }
      )
    }

    // Vérification que la clé API est configurée
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OPENAI_API_KEY n\'est pas configurée' },
        { status: 500 }
      )
    }

    // Appel à OpenAI (exemple)
    // Décommentez le code ci-dessous une fois que vous avez configuré votre clé API
    /*
    const completion = await openai.chat.completions.create({
      model: model,
      messages: [
        { role: 'system', content: 'Tu es un assistant utile.' },
        { role: 'user', content: prompt },
      ],
    })

    const generatedText = completion.choices[0].message.content

    return NextResponse.json({ 
      success: true,
      result: generatedText 
    })
    */

    // Placeholder pour le moment
    return NextResponse.json({
      success: true,
      message: 'Route API prête. Configurez OPENAI_API_KEY pour activer.',
      prompt: prompt,
      note: 'Décommentez le code OpenAI ci-dessus pour activer la génération.',
    })
  } catch (error) {
    console.error('Erreur dans /api/generate:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la génération' },
      { status: 500 }
    )
  }
}

