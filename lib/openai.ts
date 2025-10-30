/**
 * Configuration OpenAI
 * 
 * Ce fichier contient la configuration du client OpenAI pour l'intelligence artificielle.
 * 
 * IMPORTANT: Gardez votre clé API secrète et ne l'exposez jamais côté client.
 */

import OpenAI from 'openai'

const openaiApiKey = process.env.OPENAI_API_KEY || ''

if (!openaiApiKey) {
  console.warn('⚠️ OPENAI_API_KEY manquante. Vérifiez votre fichier .env.local')
}

// Initialisation du client OpenAI (serveur uniquement)
export const openai = new OpenAI({
  apiKey: openaiApiKey,
})

/**
 * Exemple d'utilisation pour générer du texte :
 * 
 * import { openai } from '@/lib/openai'
 * 
 * const completion = await openai.chat.completions.create({
 *   model: 'gpt-4',
 *   messages: [
 *     { role: 'system', content: 'Tu es un assistant utile.' },
 *     { role: 'user', content: 'Bonjour, comment ça va ?' },
 *   ],
 * })
 * 
 * console.log(completion.choices[0].message.content)
 */

/**
 * Exemple pour générer des images :
 * 
 * const image = await openai.images.generate({
 *   model: 'dall-e-3',
 *   prompt: 'Un chat dans l\'espace',
 *   size: '1024x1024',
 * })
 */

