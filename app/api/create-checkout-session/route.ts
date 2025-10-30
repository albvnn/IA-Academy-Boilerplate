/**
 * Route API pour créer une session de checkout Stripe
 * 
 * Cet endpoint crée une session Stripe Checkout pour gérer les paiements.
 * 
 * POST /api/create-checkout-session
 * Body: { priceId: string, successUrl?: string, cancelUrl?: string }
 */

import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { priceId, successUrl, cancelUrl } = body

    // Validation
    if (!priceId) {
      return NextResponse.json(
        { error: 'priceId est requis' },
        { status: 400 }
      )
    }

    // Vérification que la clé Stripe est configurée
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'STRIPE_SECRET_KEY n\'est pas configurée' },
        { status: 500 }
      )
    }

    // Création de la session Stripe (exemple)
    // Décommentez le code ci-dessous une fois que vous avez configuré votre clé Stripe
    /*
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription', // ou 'payment' pour un paiement unique
      success_url: successUrl || `${process.env.NEXT_PUBLIC_APP_URL}/success`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
    })

    return NextResponse.json({ 
      success: true,
      sessionId: session.id,
      url: session.url 
    })
    */

    // Placeholder pour le moment
    return NextResponse.json({
      success: true,
      message: 'Route API prête. Configurez STRIPE_SECRET_KEY pour activer.',
      note: 'Décommentez le code Stripe ci-dessus pour créer des sessions de checkout.',
    })
  } catch (error) {
    console.error('Erreur dans /api/create-checkout-session:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création de la session' },
      { status: 500 }
    )
  }
}

