/**
 * Configuration Stripe
 * 
 * Ce fichier contient la configuration du client Stripe pour les paiements.
 * 
 * IMPORTANT: 
 * - Utilisez la clé secrète (STRIPE_SECRET_KEY) côté serveur uniquement
 * - Utilisez la clé publique (NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) côté client
 */

import Stripe from 'stripe'

// Clé secrète Stripe (à utiliser uniquement côté serveur)
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || ''

if (!stripeSecretKey) {
  console.warn('⚠️ STRIPE_SECRET_KEY manquante. Vérifiez votre fichier .env.local')
}

// Initialisation du client Stripe (serveur uniquement)
export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-06-20',
})

/**
 * Exemple de création d'une session de checkout :
 * 
 * import { stripe } from '@/lib/stripe'
 * 
 * const session = await stripe.checkout.sessions.create({
 *   payment_method_types: ['card'],
 *   line_items: [
 *     {
 *       price_data: {
 *         currency: 'eur',
 *         product_data: {
 *           name: 'Abonnement Premium',
 *         },
 *         unit_amount: 2000, // 20.00 EUR
 *       },
 *       quantity: 1,
 *     },
 *   ],
 *   mode: 'subscription',
 *   success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
 *   cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
 * })
 */

