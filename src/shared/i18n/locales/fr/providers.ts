export default {
  title: "Fournisseurs",
  subtitle: "Configurez les fournisseurs LLM, les clés API et les pools d'authentification",
  oauth: {
    sectionTitle: "Abonnements / Plans OAuth",
    sectionHint:
      "Connectez-vous avec un abonnement fournisseur plutôt qu'avec une clé API. L'autorisation s'effectue dans votre navigateur.",
    signIn: "Se connecter",
    runningHint: "Suivez les étapes ci-dessous pour finaliser la connexion.",
    successHint: "Connecté avec succès. Vous pouvez maintenant sélectionner ce fournisseur.",
    failed: "Échec de la connexion.",
    codexDesc: "Utilisez votre plan ChatGPT Codex",
    xaiDesc: "Utilisez votre abonnement xAI Grok",
    qwenDesc: "Utilisez votre abonnement Qwen",
    geminiDesc: "Utilisez votre forfait Google AI Pro / Gemini",
    minimaxDesc: "Utilisez votre abonnement MiniMax",
    nousDesc: "Connectez-vous avec votre abonnement Nous Portal",
  },
} as const;
