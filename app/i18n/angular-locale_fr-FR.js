'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
    var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
    $provide.value("$locale", {
        "DATETIME_FORMATS": {
            "AMPMS": [
                "AM",
                "PM"
            ],
            "DAY": [
                "dimanche",
                "lundi",
                "mardi",
                "mercredi",
                "jeudi",
                "vendredi",
                "samedi"
            ],
            "ERANAMES": [
                "avant J\u00e9sus-Christ",
                "apr\u00e8s J\u00e9sus-Christ"
            ],
            "ERAS": [
                "av. J.-C.",
                "ap. J.-C."
            ],
            "FIRSTDAYOFWEEK": 0,
            "MONTH": [
                "janvier",
                "f\u00e9vrier",
                "mars",
                "avril",
                "mai",
                "juin",
                "juillet",
                "ao\u00fbt",
                "septembre",
                "octobre",
                "novembre",
                "d\u00e9cembre"
            ],
            "SHORTDAY": [
                "dim.",
                "lun.",
                "mar.",
                "mer.",
                "jeu.",
                "ven.",
                "sam."
            ],
            "SHORTMONTH": [
                "janv.",
                "f\u00e9vr.",
                "mars",
                "avr.",
                "mai",
                "juin",
                "juil.",
                "ao\u00fbt",
                "sept.",
                "oct.",
                "nov.",
                "d\u00e9c."
            ],
            "STANDALONEMONTH": [
                "Janvier",
                "F\u00e9vrier",
                "Mars",
                "Avril",
                "Mai",
                "Juin",
                "Juillet",
                "Ao\u00fbt",
                "Septembre",
                "Octobre",
                "Novembre",
                "D\u00e9cembre"
            ],
            "WEEKENDRANGE": [
                5,
                6
            ],
            "fullDate": "EEEE d MMMM y",
            "longDate": "d MMMM y",
            "medium": "d MMM y HH:mm:ss",
            "mediumDate": "d MMM y",
            "mediumTime": "HH:mm:ss",
            "short": "dd/MM/y HH:mm",
            "shortDate": "dd/MM/y",
            "shortTime": "HH:mm"
        },
        "NUMBER_FORMATS": {
            "CURRENCY_SYM": "\u20ac",
            "DECIMAL_SEP": ",",
            "GROUP_SEP": "\u00a0",
            "PATTERNS": [
                {
                    "gSize": 3,
                    "lgSize": 3,
                    "maxFrac": 3,
                    "minFrac": 0,
                    "minInt": 1,
                    "negPre": "-",
                    "negSuf": "",
                    "posPre": "",
                    "posSuf": ""
                },
                {
                    "gSize": 3,
                    "lgSize": 3,
                    "maxFrac": 2,
                    "minFrac": 2,
                    "minInt": 1,
                    "negPre": "-",
                    "negSuf": "\u00a0\u00a4",
                    "posPre": "",
                    "posSuf": "\u00a0\u00a4"
                }
            ]
        },
        "id": "fr-fr",
        "localeID": "fr_FR",
        "pluralCat": function(n, opt_precision) {  var i = n | 0;  if (i == 0 || i == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
    });
}]);

var translations_fr = {
    ERROR: 'Une erreur est survenue. Code d\'erreur : ',
    MENU: {
        HOME: 'Accueil',
        FEATURES: 'Fonctionnalités',
        USER: {
            SIGNIN: 'Se connecter',
            SIGNUP: 'S\'inscrire',
            SIGNOUT: 'Se déconnecter'
        }
    },
    QUESTION: {
        HOME: {
            TITLE: 'Questions posées',
            NEW: 'Nouvelle question',
            ASKQUESTION: 'Poser une question'
        },
        CREATE: {
            TITLE: 'Nouvelle question',
            FIELDS: {
                TITLE: 'Titre de la question',
                TEXT: 'Décrivez votre question ici...'
            },
            NEW: 'Ajouter une question'
        },
        EDIT: 'Éditer la question',
        SHOW: {
            RESOLVED: 'Résolue',
            SETASRESOLVED: 'Définir la question comme résolue'
        },
        ANSWERS:'Réponses',
        COMMENTS:'Commentaires',
        CREATED: 'Question créée',
        EDITED: 'Question édtiée',
        DELETED: 'Question supprimée'
    },
    LOGIN: {
        TITLE: 'Connexion à un compte',
        FIELD: {
            USERNAME: 'Entrez votre nom d\'utilisateur',
            EMAIL: 'Entrez votre email',
            PASSWORD: 'Entrez votre mot de passe',
            SUBMIT: 'Connexion'
        },
        ERROR: 'Identifiants incorrects',
        SIGNUP: 'Créer un nouveau compte'
    },
    REGISTER: {
        TITLE: 'Créer un nouveau compte',
        SUBMIT: 'Créer le compte'
    },
    USER: {
        TITLE: '\'s profile',
        EDIT: {
            ADMIN: 'Interface administrateur',
            TITLE: 'Mise à jour des informations de l\'utilisateur',
            USERNAME: 'Entrez un nouveau pseudonyme :',
            EMAIL: 'Entrez un nouvel e-mail :',
            PASSWORD: 'Entrez un nouveau mot de passe :',
            BUTTON: {
                EDIT: 'Mettre à jour l\'utilisateur',
                DELETE: 'Supprimer l\'utilisateur'
            },
            ROLE: {
                TITLE: 'Choisir un rôle',
                USER: 'Utilisateur',
                ADMIN: 'Administrateur'
            },
            QUESTION: 'Questions posées',
            ANSWERS: 'Réponses',
            BADGES: 'Badges obtenus'
        },
        UPDATED: 'Utiliseur mis à jour',
        DELETE: {
            CONFIRM: 'Voulez-vous vraiment supprimer cet utilisateur ?',
            CANCELLED: 'Suppression annulée'
        }
    },
    CREATED: 'Créée :',
    EDITED: 'Editée :',
    FEATURE:{
        ENABLED:'Activé',
        DISABLED:'Désactivé'
    },
    ANSWER:{
        EDITANSWER:'Editer la réponse',
        DELETED: 'Réponse supprimée'
    },
    COMMENT:{
        DELETED: 'Commentaire supprimé'
    }
};