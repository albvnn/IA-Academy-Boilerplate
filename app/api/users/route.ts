/**
 * Route API pour récupérer des données depuis Supabase
 * 
 * Exemple d'endpoint pour interagir avec votre base de données Supabase.
 * 
 * GET /api/users
 * POST /api/users
 */

import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET - Récupérer des utilisateurs (exemple)
export async function GET(request: NextRequest) {
  try {
    // Vérification que Supabase est configuré
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json(
        { error: 'Supabase n\'est pas configuré' },
        { status: 500 }
      )
    }

    // Exemple de requête Supabase
    // Décommentez le code ci-dessous une fois que vous avez configuré Supabase
    /*
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .limit(10)

    if (error) {
      throw error
    }

    return NextResponse.json({ 
      success: true,
      users: data 
    })
    */

    // Placeholder pour le moment
    return NextResponse.json({
      success: true,
      message: 'Route API prête. Configurez Supabase pour activer.',
      note: 'Décommentez le code ci-dessus pour récupérer des données.',
    })
  } catch (error) {
    console.error('Erreur dans /api/users:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des données' },
      { status: 500 }
    )
  }
}

// POST - Créer un utilisateur (exemple)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Vérification que Supabase est configuré
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_ANON_KEY) {
      return NextResponse.json(
        { error: 'Supabase n\'est pas configuré' },
        { status: 500 }
      )
    }

    // Exemple de création dans Supabase
    // Décommentez le code ci-dessous une fois que vous avez configuré Supabase
    /*
    const { data, error } = await supabase
      .from('users')
      .insert([body])
      .select()

    if (error) {
      throw error
    }

    return NextResponse.json({ 
      success: true,
      user: data[0] 
    })
    */

    // Placeholder pour le moment
    return NextResponse.json({
      success: true,
      message: 'Route API prête. Configurez Supabase pour activer.',
      note: 'Décommentez le code ci-dessus pour créer des enregistrements.',
    })
  } catch (error) {
    console.error('Erreur dans /api/users:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création' },
      { status: 500 }
    )
  }
}

