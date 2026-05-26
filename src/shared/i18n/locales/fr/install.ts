export default {
  preparing: "Préparation…",
  startingInstall: "Démarrage de l'installation",
  installationComplete: "Installation terminée",
  installationFailed: "Échec de l'installation",
  installingHermes: "Installation de Hermes Agent",
  installationFailedHint:
    "L'installation a échoué. Veuillez réessayer ou installer via le terminal.",
  retryInstallation: "Réessayer l'installation",
  copied: "Copié !",
  copyLogs: "Copier les journaux",
  stepLabel: "Étape {{step}}/{{total}} : {{title}}",
  waitingToStart: "En attente de démarrage…",
  continueToSetup: "Continuer vers la configuration",
  confirmTitle: "Avant d'installer",
  confirmLocationLabel: "Hermes sera installé à l'emplacement suivant :",
  confirmFresh:
    "Aucune installation existante trouvée ici — une copie neuve sera mise en place.",
  confirmUpdate:
    "Une installation Hermes existe déjà ici — elle sera mise à jour vers la dernière version.",
  confirmReplace:
    "Un dossier existe ici mais n'est pas une installation Hermes valide — l'installation supprimera et remplacera son contenu.",
  confirmNotInherited:
    "Si vous avez installé Hermes ailleurs, ou via la ligne de commande, cela ne sera pas reporté.",
  confirmInstallBtn: "Installer Hermes",
  useExistingBtn: "Utiliser une installation existante",
  useExistingHint:
    "Sélectionnez le dossier contenant votre installation Hermes existante (celui qui contient le dossier hermes-agent).",
  useExistingInvalid: "Aucune installation Hermes utilisable trouvée dans ce dossier.",
  useExistingDone:
    "Installation existante définie — fermez et rouvrez Hermes pour l'appliquer.",
  useExistingQuitBtn: "Quitter Hermes",
} as const;
