/**
 * Route API pour gérer les webhooks Stripe
 * 
 * Cet endpoint reçoit les événements Stripe (paiements réussis, abonnements, etc.)
 * 
 * POST /api/webhooks/stripe
 * 
 * IMPORTANT: Configurez votre endpoint Stripe dans le dashboard Stripe :
 * https://dashboard.stripe.com/webhooks
 * 
 * La clé secrète du webhook doit être dans STRIPE_WEBHOOK_SECRET
 */

import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Signature manquante' },
        { status: 400 }
      )
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

    if (!webhookSecret) {
      return NextResponse.json(
        { error: 'STRIPE_WEBHOOK_SECRET n\'est pas configurée' },
        { status: 500 }
      )
    }

    // Vérification de la signature et parsing de l'événement
    // Décommentez le code ci-dessous une fois que vous avez configuré votre webhook secret
    /*
    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error('Erreur de signature webhook:', err)
      return NextResponse.json(
        { error: 'Signature invalide' },
        { status: 400 }
      )
    }

    // Gestion des différents types d'événements
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session
        console.log('Checkout complété:', session.id)
        // Ici, vous pouvez mettre à jour votre base de données
        // par exemple, activer l'abonnement de l'utilisateur
        break

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        const subscription = event.data.object as Stripe.Subscription
        console.log('Abonnement créé/modifié:', subscription.id)
        // Gérez l'abonnement ici
        break

      case 'customer.subscription.deleted':
        const deletedSubscription = event.data.object as Stripe.Subscription
        console.log('Abonnement annulé:', deletedSubscription.id)
        // Désactivez l'abonnement dans votre base de données
        break

      default:
        console.log(`Événement non géré: ${event.type}`)
    }

    return NextResponse.json({ received: true })
    */

    // Placeholder pour le moment
    return NextResponse.json({
      success: true,
      message: 'Route webhook prête. Configurez STRIPE_WEBHOOK_SECRET pour activer.',
      note: 'Décommentez le code ci-dessus pour gérer les événements Stripe.',
    })
  } catch (error) {
    console.error('Erreur dans /api/webhooks/stripe:', error)
    return NextResponse.json(
      { error: 'Erreur lors du traitement du webhook' },
      { status: 500 }
    )
  }
}

