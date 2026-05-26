export default {
  title: "Outils",
  subtitle:
    "Activer ou désactiver les ensembles d'outils que votre agent peut utiliser pendant les conversations",
  web: {
    label: "Recherche Web",
    description: "Rechercher sur le web et extraire le contenu d'URL",
  },
  browser: {
    label: "Navigateur",
    description: "Naviguer, cliquer, saisir et interagir avec des pages web",
  },
  terminal: {
    label: "Terminal",
    description: "Exécuter des commandes shell et des scripts",
  },
  file: {
    label: "Opérations Fichiers",
    description: "Lire, écrire, rechercher et gérer des fichiers",
  },
  code_execution: {
    label: "Exécution de Code",
    description: "Exécuter directement du code Python et shell",
  },
  vision: { label: "Vision", description: "Analyser des images et du contenu visuel" },
  image_gen: {
    label: "Génération d'Images",
    description: "Générer des images avec DALL-E et autres modèles",
  },
  tts: { label: "Synthèse Vocale", description: "Convertir du texte en audio parlé" },
  skills: {
    label: "Compétences",
    description: "Créer, gérer et exécuter des compétences réutilisables",
  },
  memory: {
    label: "Mémoire",
    description: "Stocker et rappeler des connaissances persistantes",
  },
  session_search: {
    label: "Recherche de Sessions",
    description: "Rechercher dans les conversations passées",
  },
  clarify: {
    label: "Questions de Clarification",
    description: "Demander des clarifications à l'utilisateur si nécessaire",
  },
  delegation: {
    label: "Délégation",
    description: "Lancer des sous-agents pour des tâches parallèles",
  },
  cronjob: {
    label: "Tâches Planifiées",
    description: "Créer et gérer des tâches programmées",
  },
  moa: {
    label: "Mixture d'Agents",
    description: "Coordonner plusieurs modèles d'IA ensemble",
  },
  todo: {
    label: "Planification de Tâches",
    description: "Créer et gérer des listes de tâches pour des tâches complexes",
  },
  mcpServers: "Serveurs MCP",
  mcpDescription:
    "Serveurs Model Context Protocol configurés dans config.yaml. Gérez-les via <code>hermes mcp add/remove</code> dans le terminal.",
  http: "HTTP",
  stdio: "stdio",
  disabled: "désactivé",
} as const;
