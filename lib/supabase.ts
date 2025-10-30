/**
 * Configuration Supabase
 * 
 * Ce fichier contient la configuration du client Supabase.
 * Utilisez-le pour initialiser Supabase dans votre application.
 * 
 * IMPORTANT: N'oubliez pas d'ajouter vos clés dans le fichier .env.local
 */

import { createClient } from '@supabase/supabase-js'

// Types pour vos tables (à adapter selon vos besoins)
export type Database = {
  public: {
    Tables: {
      // Exemple de structure - à compléter selon vos besoins
      // users: {
      //   Row: {
      //     id: string
      //     email: string
      //     created_at: string
      //   }
      // }
    }
  }
}

// Initialisation du client Supabase
// Remplacer par vos vraies variables d'environnement
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase URL ou Anon Key manquants. Vérifiez votre fichier .env.local')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

/**
 * Exemple d'utilisation :
 * 
 * import { supabase } from '@/lib/supabase'
 * 
 * const { data, error } = await supabase
 *   .from('users')
 *   .select('*')
 */

