export default {
  title: "Kanban",
  subtitle:
    "Tableau multi-agent durable pour les tâches que l'agent peut reprendre et terminer de lui-même.",

  // Header actions
  refresh: "Actualiser",
  refreshTooltip: "Recharger les tableaux et les tâches depuis l'agent",
  dispatch: "Répartir",
  dispatchTooltip:
    "Exécuter un passage de répartition — promouvoir les tâches prêtes et lancer des travailleurs",
  newTask: "Nouvelle tâche",
  newTaskTooltip: "Créer une nouvelle tâche sur le tableau actuel",
  newBoard: "Nouveau tableau",
  newBoardTooltip: "Créer un nouveau tableau kanban",

  // Remote-mode unsupported notice
  remoteUnsupportedTitle:
    "Kanban nécessite une installation Hermes locale ou un mode tunnel SSH.",
  remoteUnsupportedHint:
    "Le mode distant simple (HTTP + clé API) n'expose pas encore l'API kanban. Basculez en mode local ou tunnel SSH dans les Paramètres pour gérer le tableau.",

  // Column / task statuses
  status: {
    triage: "Tri",
    todo: "À faire",
    ready: "Prêt",
    running: "En cours",
    blocked: "Bloqué",
    done: "Terminé",
  },

  // Card action tooltips
  cardSpecify: "Spécifier (développer le cahier des charges → à faire)",
  cardMarkDone: "Marquer comme terminé",
  cardReclaim: "Reprendre le travailleur",
  cardUnblock: "Débloquer",
  cardBlock: "Bloquer",
  cardArchive: "Archiver",

  // Create-task modal
  createTitle: "Nouvelle tâche kanban",
  fieldTitle: "Titre",
  titlePlaceholder: "Que faut-il faire ?",
  fieldBody: "Corps (optionnel)",
  bodyPlaceholder: "Contexte, critères d'acceptation, liens…",
  fieldAssignee: "Profil assigné",
  assigneeNone: "— Tri (aucun assigné)",
  fieldPriority: "Priorité",
  priorityNormal: "Normale (0)",
  priorityLow: "Basse (P2)",
  priorityHigh: "Haute (P1)",
  priorityUrgent: "Urgente (P0)",
  fieldWorkspace: "Espace de travail",
  workspaceScratch: "Brouillon (dossier temp)",
  workspaceWorktree: "Arbre de travail (dépôt actuel)",
  workspaceChoose: "Choisir un dossier…",
  workspaceNoFolder: "Aucun dossier sélectionné",
  browse: "Parcourir…",
  triageCheckbox:
    "Placer dans le tri (un spécificateur développe le cahier des charges avant de passer à à faire)",
  create: "Créer la tâche",
  creating: "Création…",

  // New-board modal
  newBoardTitle: "Nouveau tableau",
  fieldSlug: "Identifiant",
  slugPlaceholder: "kebab-case, ex. atm10-server",
  fieldDisplayName: "Nom d'affichage (optionnel)",
  displayNamePlaceholder: "Serveur ATM10",
  createBoard: "Créer le tableau",

  // Task-detail modal
  detailFallbackTitle: "Tâche",
  detailBody: "Corps",
  detailSummary: "Résumé de la dernière exécution",
  detailResult: "Résultat",
  detailComments: "Commentaires ({{count}})",
  detailEvents: "Événements ({{count}})",
  commentAnon: "anon",

  // Prompts / confirmations
  blockReasonPrompt: "Raison du blocage ?",
  confirmMarkDone: 'Marquer "{{title}}" comme terminé ?',
  confirmArchive: 'Archiver "{{title}}" ?',

  // Errors
  moveNotAllowed:
    "Impossible de déplacer {{from}} → {{to}} depuis le bureau. Utilisez l'agent ou la CLI.",
  errLoadBoards: "Échec du chargement des tableaux",
  errLoadTasks: "Échec du chargement des tâches",
  errMoveTask: "Échec du déplacement de la tâche",
  errPickFolder: "Veuillez d'abord sélectionner un dossier de travail.",
  errCreateTask: "Échec de la création de la tâche",
  errSwitchBoard: "Échec du changement de tableau",
  errCreateBoard: "Échec de la création du tableau",
  errSpecify: "Échec de la spécification de la tâche",
  errArchive: "Échec de l'archivage de la tâche",
  errReclaim: "Échec de la reprise",
  errDispatch: "Échec de la répartition",
} as const;
