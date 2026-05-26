export default {
  title: "Mémoire",
  subtitle:
    "Ce qu'Hermes retient de vous et de votre environnement entre les sessions.",
  sessions: "Sessions",
  messages: "Messages",
  memories: "Souvenirs",
  providersTitle: "Fournisseurs",
  agentMemory: "Mémoire de l'Agent",
  userProfile: "Profil Utilisateur",
  entries: "{{count}} entrées",
  addMemory: "Ajouter un souvenir",
  addFailed: "Échec de l'ajout de l'entrée",
  updateFailed: "Échec de la mise à jour de l'entrée",
  saveFailed: "Échec de la sauvegarde",
  entriesPlaceholder:
    "ex. L'utilisateur préfère TypeScript à JavaScript. Toujours utiliser le mode strict.",
  userProfilePlaceholder:
    "ex. Nom : Alex. Développeur senior. Préfère les réponses concises. Utilise macOS avec zsh. Fuseau horaire : PST.",
  noProvidersFound: "Aucun fournisseur de mémoire trouvé dans cette installation.",
  openProviderWebsite: "Ouvrir le site du fournisseur",
  noMemoriesYet:
    "Aucun souvenir pour le moment. Hermes enregistrera les faits importants au fil de vos discussions.",
  noMemoryEntries: "Aucune entrée mémoire pour le moment.",
  noToolsetsFound: "Aucun ensemble d'outils trouvé.",
  addManuallyHint: "Vous pouvez également ajouter des souvenirs manuellement avec le bouton ci-dessus.",
  userProfileHint:
    "Parlez de vous à Hermes — nom, rôle, préférences, style de communication.",
  providersHint:
    "Les fournisseurs de mémoire enfichables offrent à Hermes une mémoire à long terme avancée. La mémoire intégrée (ci-dessus) est toujours active en parallèle du fournisseur sélectionné.",
  providersHintActive: "Actif : <strong>{{provider}}</strong>",
  providersHintInactive: "Aucun fournisseur externe actif — utilisation de la mémoire intégrée uniquement.",
  enterEnvKey: "Saisir {{key}}",
  chars: "{{count}} car.",
  cancel: "Annuler",
  save: "Enregistrer",
  edit: "Modifier",
  deleteConfirm: "Supprimer ?",
  yes: "Oui",
  no: "Non",
  saveProfile: "Enregistrer le profil",
  active: "Actif",
  deactivate: "Désactiver",
  activating: "Activation...",
  activate: "Activer",
  providers: {
    honcho:
      "Modélisation utilisateur inter-sessions native IA avec Q&A dialectique et recherche sémantique",
    hindsight:
      "Mémoire à long terme avec graphe de connaissances et récupération multi-stratégies",
    mem0: "Extraction de faits LLM côté serveur avec recherche sémantique et déduplication automatique",
    retaindb: "API mémoire cloud avec recherche hybride et 7 types de mémoire",
    supermemory:
      "Mémoire sémantique à long terme avec rappel de profil et extraction d'entités",
    holographic:
      "Stockage local de faits SQLite avec recherche FTS5 et score de confiance (aucune clé API requise)",
    openviking:
      "Mémoire gérée par session avec récupération hiérarchisée et navigation des connaissances",
    byterover: "Arbre de connaissances persistant avec récupération hiérarchisée via l'interface brv",
  },
} as const;
