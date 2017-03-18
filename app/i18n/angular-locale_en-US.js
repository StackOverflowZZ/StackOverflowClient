'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
    var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
    function getDecimals(n) {
        n = n + '';
        var i = n.indexOf('.');
        return (i == -1) ? 0 : n.length - i - 1;
    }

    function getVF(n, opt_precision) {
        var v = opt_precision;

        if (undefined === v) {
            v = Math.min(getDecimals(n), 3);
        }

        var base = Math.pow(10, v);
        var f = ((n * base) | 0) % base;
        return {v: v, f: f};
    }

    $provide.value("$locale", {
        "DATETIME_FORMATS": {
            "AMPMS": [
                "AM",
                "PM"
            ],
            "DAY": [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "ERANAMES": [
                "Before Christ",
                "Anno Domini"
            ],
            "ERAS": [
                "BC",
                "AD"
            ],
            "FIRSTDAYOFWEEK": 6,
            "MONTH": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            "SHORTDAY": [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ],
            "SHORTMONTH": [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
            "STANDALONEMONTH": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            "WEEKENDRANGE": [
                5,
                6
            ],
            "fullDate": "EEEE, MMMM d, y",
            "longDate": "MMMM d, y",
            "medium": "MMM d, y h:mm:ss a",
            "mediumDate": "MMM d, y",
            "mediumTime": "h:mm:ss a",
            "short": "M/d/yy h:mm a",
            "shortDate": "M/d/yy",
            "shortTime": "h:mm a"
        },
        "NUMBER_FORMATS": {
            "CURRENCY_SYM": "$",
            "DECIMAL_SEP": ".",
            "GROUP_SEP": ",",
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
                    "negPre": "-\u00a4",
                    "negSuf": "",
                    "posPre": "\u00a4",
                    "posSuf": ""
                }
            ]
        },
        "id": "en-us",
        "localeID": "en_US",
        "pluralCat": function(n, opt_precision) {  var i = n | 0;  var vf = getVF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
    });
}]);

var translations_en = {
    MENU: {
        HOME: 'Home',
        FEATURES: 'Features',
        USER: {
            SIGNIN: 'Sign in',
            SIGNUP: 'Sign up',
            SIGNOUT: 'Sign out'
        }
    },
    QUESTION: {
        HOME: {
            TITLE: 'Questions asked',
            NEW: 'New question',
            ASKQUESTION: 'Ask a question'
        },
        CREATE: {
            TITLE: 'Question title',
            FIELDS: {
                TITLE: 'Question title',
                TEXT: 'Describe your question here...'
            },
            NEW: 'Add a new question'
        },
        SHOW: {
            RESOLVED: 'Resolved',
            SETASRESOLVED: 'Set question as solved'
        },
        ANSWERS:'Answers',
        COMMENTS:'Comments',
        CREATED: 'Question created',
        DELETED: 'Question deleted'
    },
    LOGIN: {
        TITLE: 'Account login',
        FIELD: {
            USERNAME: 'Enter your username',
            EMAIL: 'Enter your email',
            PASSWORD: 'Enter your password',
            SUBMIT: 'Sign in'
        },
        ERROR: 'Incorrect credentials',
        SIGNUP: 'Register a new account'
    },
    REGISTER: {
        TITLE: 'Create a new account',
        SUBMIT: 'Register a new account'
    },
    USER: {
        TITLE: '\'s profile',
        EDIT: {
            ADMIN: 'Administrator interface',
            TITLE: 'Update user information',
            USERNAME: 'Enter a new username: ',
            EMAIL: 'Enter a new email: ',
            PASSWORD: 'Enter a new password: ',
            BUTTON: {
                EDIT: 'Update the user',
                DELETE: 'Delete the user'
            },
            ROLE: {
                TITLE: 'Choose a role',
                USER: 'User',
                ADMIN: 'Administrator'
            },
            QUESTION: 'Questions asked',
            ANSWERS: 'Answers',
            BADGES: 'Badges obtained'
        }
    },
    CREATED: 'Created :',
    EDITED: 'Edited',
    FEATURE:{
        ENABLED:'Enabled',
        DISABLED:'Disabled'
    },
    ANSWER:{
        EDITANSWER:'Edit answer'
    }
};