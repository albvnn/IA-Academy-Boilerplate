/**
 * Fichier de types globaux pour l'application
 * 
 * Définissez ici les types TypeScript partagés dans toute votre application.
 */

// Exemple de types pour les utilisateurs
export interface User {
  id: string
  email: string
  created_at: string
  updated_at?: string
}

// Exemple de types pour les abonnements
export interface Subscription {
  id: string
  user_id: string
  stripe_subscription_id: string
  status: 'active' | 'canceled' | 'past_due'
  current_period_end: string
}

// Exemple de types pour les réponses API
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

// Ajoutez vos propres types ici au fur et à mesure du développement

