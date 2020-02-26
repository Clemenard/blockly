// This file was automatically generated.  Do not modify.

'use strict';

goog.provide('Blockly.Msg.fr');
goog.require('Blockly.Msg');

Blockly.Msg["ON_START_TITLE"] = "Au démarrage";
Blockly.Msg["ON_START_INPUT_DO"] = "";
Blockly.Msg["ON_START_TOOLTIP"] = "Ajouter des instructions dans ce bloc pour les exécuter au démarrage de la carte Arduino.";
Blockly.Msg["FOREVER_TITLE"] = "Répéter indéfiniment";
Blockly.Msg["FOREVER_INPUT_DO"] = "";
Blockly.Msg["FOREVER_TOOLTIP"] = "Ajouter des instructions dans ce bloc pour les exécuter en boucle.";

Blockly.Msg["REMOVE_COMMENT"] = "Supprimer un commentaire";
Blockly.Msg["TODAY"] = "Aujourd'hui";
Blockly.Msg["UNDO"] = "Annuler";
Blockly.Msg["REDO"] = "Refaire";
Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "Dire quelque chose…";
Blockly.Msg.ARD_VAR_AS = "";
Blockly.Msg.ARD_VAR_AS_TIP = "";

//categories
var MSG = {
    title: "Code",
    blocks: "Blocs",
    linkTooltip: "Sauvegarder et lier aux blocs.",
    runTooltip: "Lancer le programme défini par les blocs dans l’espace de travail.",
    badCode: "Erreur du programme :\n%1",
    timeout: "Nombre maximum d’itérations d’exécution dépassé.",
    trashTooltip: "Jeter tous les blocs.",
    catDisplay: "Affichage",
    catInput: "Entrées/Sorties",
    catSensors: "Capteurs",
    catCommunication: "Communication",
    catActuators: "Actionneurs",
    catRobots: "Robots",
    catLogic: "Logique",
    catLoops: "Boucles",
    catMath: "Math",
    catText: "Texte",
    catLists: "Listes",
    catColour: "Couleur",
    catVariables: "Variables",
    catFunctions: "Fonctions",
    catAddblock: "Ajouter un bloc",
    listVariable: "liste",
    textVariable: "texte",
    httpRequestError: "Il y a eu un problème avec la demande.",
    linkAlert: "Partagez vos blocs grâce à ce lien:\n\n%1",
    hashError: "Désolé, '%1' ne correspond à aucun programme sauvegardé.",
    xmlError: "Impossible de charger le fichier de sauvegarde.  Peut être a t-il été créé avec une autre version de Blockly?",
    badXml: "Erreur d’analyse du XML :\n%1\n\nSélectionner 'OK' pour abandonner vos modifications ou 'Annuler' pour continuer à modifier le XML."
};

Blockly.Msg["SUBCATEGORY_DISPLAYS"] = "Ecrans";
Blockly.Msg["SUBCATEGORY_LED_MODULES"] = "Modules à LED";
Blockly.Msg["SUBCATEGORY_ARDUINO"] = "Arduino";
Blockly.Msg["SUBCATEGORY_EXTERNAL_MODULES"] = "Modules externes";
Blockly.Msg["SUBCATEGORY_PINS"] = "Broches";
Blockly.Msg["SUBCATEGORY_SERIAL_CONNECTION"] = "Connexion série";
Blockly.Msg["SUBCATEGORY_DATA_LOGGING"] = "Enregistrement de données";
Blockly.Msg["SUBCATEGORY_WIRELESS_COMMUNICATION"] = "Communication sans-fil";
Blockly.Msg["SUBCATEGORY_SENSORS_GAS"] = "Capteurs de gaz";
Blockly.Msg["SUBCATEGORY_SENSORS_CLIMATE"] = "Capteurs météorologiques";
Blockly.Msg["SUBCATEGORY_SENSORS_SOUNDLIGHT"] = "Capteurs de son et lumière";
Blockly.Msg["SUBCATEGORY_SENSORS_DISTANCEMOVEMENT"] = "Capteurs de distance et mouvement";
Blockly.Msg["SUBCATEGORY_SENSORS_OTHER"] = "Autres capteurs";
Blockly.Msg["SUBCATEGORY_ROBOTS_MBOT"] = "mBot - Modules de base";
Blockly.Msg["SUBCATEGORY_ROBOTS_MAKEBLOCK_SENSORS"] = "Makeblock - Capteurs";

// Text
Blockly.Msg["TEXT_COMMENT"] = "Commentaire %1";
Blockly.Msg["TEXT_COMMENT_TOOLTIP"] = "Ajouter un commentaire dans le code.";

// Variables
Blockly.Msg.VARIABLE_INCREMENT_ITEM = Blockly.Msg["VARIABLES_DEFAULT_NAME"];
Blockly.Msg.VARIABLE_INCREMENT = "incrémenter %1 de %2";
Blockly.Msg.VARIABLE_INCREMENT_TOOLTIP = "Ajouter un nombre à la variable '%1'.";

// Display - Ecrans
Blockly.Msg["DISPLAY_LCD_SETTEXT_TITLE"] = "[LCD1602] afficher le texte %1 sur la ligne %2";
Blockly.Msg["DISPLAY_LCD_SETTEXT_TOOLTIP"] = IMG_MODULE_LCD_RGB + Blockly.Tooltip.SEP + "Affiche du texte d'un maximum de 16 caractères sur l'une des deux lignes de l'écran LCD1602 grove. Brancher le module sur un port I2C.";
Blockly.Msg["DISPLAY_LCD_SETRGBCOLOR_TITLE"] = "[LCD1602] éclairer l’écran LCD de couleur R %1 G %2 B %3";
Blockly.Msg["DISPLAY_LCD_SETRGBCOLOR_TOOLTIP"] = IMG_MODULE_LCD_RGB + Blockly.Tooltip.SEP + "Bloc contrôlant le rétroéclairage du module Grove LCD 16x2. Donner une valeur entre 0 et 255 pour rouge, vert et bleu. Brancher le module sur un port I2C.";
Blockly.Msg["DISPLAY_LCD_SETPALETTERGBCOLOR_TITLE"] = "[LCD1602] éclairer l’écran LCD de couleur %1";
Blockly.Msg["DISPLAY_LCD_SETPALETTERGBCOLOR_TOOLTIP"] = IMG_MODULE_LCD_RGB + Blockly.Tooltip.SEP + "Bloc contrôlant le rétroéclairage du module Grove LCD 16x2. Choisir la couleur désirée dans la palette. Brancher le module sur un port I2C.";
Blockly.Msg["DISPLAY_LCD_CLEAR_TITLE"] = "[LCD1602] nettoyer l'écran";
Blockly.Msg["DISPLAY_LCD_CLEAR_TOOLTIP"] = IMG_MODULE_LCD_RGB + Blockly.Tooltip.SEP + "Permet d'effacer tous les caractères de l'écran LCD. Brancher le module sur un port I2C.";
Blockly.Msg["DISPLAY_OLED_ADDTEXT_TITLE"] = "[Ecran OLED] afficher le texte %1 à la position x %2 y %3";
Blockly.Msg["DISPLAY_OLED_ADDTEXT_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Permet d'écrire du texte sur un écran OLED grove 128x64 px. Brancher l'afficheur sur un port I2C.";
//Blockly.Msg["DISPLAY_OLED_SETPIXEL_TITLE"] = "[Ecran OLED] controler le pixel x %1 y %2 état %3";
//Blockly.Msg["DISPLAY_OLED_SETPIXEL_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Permet de contrôler chaque pixel de l'écran OLED 16x32 pixels. Brancher l'afficheur sur un port I2C.";
Blockly.Msg["DISPLAY_OLED_DRAWBITMAPLOGO_TITLE"] = "[Ecran OLED] afficher le logo %1";
Blockly.Msg["DISPLAY_OLED_DRAWBITMAPLOGO_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Permet d'afficher un logo, à la position (0,0) sur l'écran grove OLED 128x64 px. Brancher l'afficheur sur un port I2C.";
Blockly.Msg["LOGO_VITTASCIENCE"] = "Vittascience";
Blockly.Msg["LOGO_ARDUINO"] = "Arduino";
Blockly.Msg["LOGO_SEEED"] = "Seeed";
Blockly.Msg["LOGO_MICROBIT"] = "Micro:bit";
Blockly.Msg["DISPLAY_OLED_CLEARSCREEN_TITLE"] = "[Ecran OLED] effacer l'écran";
Blockly.Msg["DISPLAY_OLED_CLEARSCREEN_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Permet de nettoyer l'écran OLED. Brancher le module sur un port I2C.";
// Display - LED Modules
Blockly.Msg["DISPLAY_SETGROVELED_TITLE"] = "[Module LED] contrôler la LED à l'état %1 sur la broche %2";
Blockly.Msg["DISPLAY_SETGROVELED_TOOLTIP"] = IMG_MODULE_LED + Blockly.Tooltip.SEP + "Permet d'activer ou désactiver la LED Grove (0 ou 1) sur les broches digitales D0 à D13.";
Blockly.Msg["DISPLAY_SETLEDINTENSITY_TITLE"] = "[LED] régler la luminosité à %1 sur la broche %2";
Blockly.Msg["DISPLAY_SETLEDINTENSITY_TOOLTIP"] = IMG_MODULE_LED_PWM + Blockly.Tooltip.SEP + "Permet de régler la luminosité d'une LED de 0 à 255 sur les broches PWM.";
Blockly.Msg["DISPLAY_CHAINABLERGBLED_DEFINE_TITLE"] = "[Chainable LED RGB] definir %1 LED sur les broches DIN %2 CIN %3";
Blockly.Msg["DISPLAY_CHAINABLERGBLED_DEFINE_TOOLTIP"] = IMG_MODULE_LED_RGB + Blockly.Tooltip.SEP + "Permet de paramétrer la chaîne de LED RGB en définissant le nombre de modules en série sur les broches digitales D0 à D13.";
Blockly.Msg["DISPLAY_CHAINABLE_RGBLED_TITLE"] = "[Chainable LED RGB] contrôler la LED %1 à R %2 G %3 B %4";
Blockly.Msg["DISPLAY_CHAINABLE_RGBLED_TOOLTIP"] = IMG_MODULE_LED_RGB + Blockly.Tooltip.SEP + "Bloc contrôlant la couleur de la DEL RGB, donner une valeur entre 0 et 255 pour Rouge, Vert et Bleu.";
Blockly.Msg["DISPLAY_CHAINABLE_PALETTERGBLED_TITLE"] = "[Chainable LED RGB] contrôler la LED %1 à %2";
Blockly.Msg["DISPLAY_CHAINABLE_PALETTERGBLED_TOOLTIP"] = IMG_MODULE_LED_RGB + Blockly.Tooltip.SEP + "Bloc contrôlant la couleur de la DEL RGB, choisir une couleur dans la palette.";
Blockly.Msg["DISPLAY_NEOPIXEL_LEDCONTROL_TITLE"] = "[Neopixel] contrôler la LED %1 à  R %2 G %3 B %4 sur la broche %5";
Blockly.Msg["DISPLAY_NEOPIXEL_LEDCONTROL_TOOLTIP"] = IMG_MODULE_NEOPIXEL + Blockly.Tooltip.SEP + "Permet de contrôler la couleur de chaque LED tel que (R,G,B) de 0 à 255 du module neopixel.";
Blockly.Msg["DISPLAY_NEOPIXEL_COLORLEDCONTROL_TITLE"] = "[Neopixel] contrôler la LED %1 à %2 sur la broche %3";
Blockly.Msg["DISPLAY_NEOPIXEL_COLORLEDCONTROL_TOOLTIP"] = IMG_MODULE_NEOPIXEL + Blockly.Tooltip.SEP + "Permet de contrôler la couleur de chaque LED du module neopixel. Utiliser la palette pour changer la couleur.";
Blockly.Msg["DISPLAY_NEOPIXEL_RAINBOW_TITLE"] = "[Neopixel] Arc-en-ciel avec %1 LED sur la broche %2";
Blockly.Msg["DISPLAY_NEOPIXEL_RAINBOW_TOOLTIP"] = IMG_MODULE_NEOPIXEL + Blockly.Tooltip.SEP + "Afficher le spectre des couleurs sur les LED RGB. Il est possible de modifier la broche et le nombre de LED utilisés du module neopixel.";
Blockly.Msg["DISPLAY_4DIGIT_SETNUMBER_TITLE"] = "[Afficheur 4-digit] afficher le nombre %1 sur les broches CLK %2 DIO %3";
Blockly.Msg["DISPLAY_4DIGIT_SETNUMBER_TOOLTIP"] = IMG_MODULE_4DIGITDISPLAY + Blockly.Tooltip.SEP + "Permet d'afficher un nombre, une température ou l'horloge sur l'afficheur 4-digit grove avec les broches digitales D0 à D13.";
Blockly.Msg["DISPLAY_4DIGIT_SETCLOCK_TITLE"] = "[Afficheur 4-digit] l'horloge sur les broches CLK %1 DIO %2";
Blockly.Msg["DISPLAY_4DIGIT_SETCLOCK_TOOLTIP"] = IMG_MODULE_4DIGITDISPLAY + Blockly.Tooltip.SEP + "Permet d'afficher l'horloge sur l'afficheur 4-digit grove avec les broches digitales D0 à D13. Attention, l'heure est récupérée lorsque le bloc est ajouté. De plus, elle continue de s'afficher correctement seulement si la carte arduino reste allumée.";
//Blockly.Msg["DISPLAY_4DIGIT_NUMBER"] = "le nombre entier";
//Blockly.Msg["DISPLAY_4DIGIT_TEMPERATURE"] = "la température";
Blockly.Msg["DISPLAY_LEDBARSETLEVEL_TITLE"] = "[Module LED Bar] afficher le niveau de %1 sur les broches DI %2 DCKI %3";
Blockly.Msg["DISPLAY_LEDBARSETLEVEL_TOOLTIP"] = IMG_MODULE_LED_BAR + Blockly.Tooltip.SEP + "Enable to show level of input value on grove LED bar display on digital pins from D0 up through D13.";

// Input/Output - Arduino
Blockly.Msg["IO_PAUSE_TITLE"] = "pause";
Blockly.Msg["IO_PAUSE_TOOLTIP"] = "Effectue une pause dans l'exécution du code.";
Blockly.Msg["IO_PAUSE_SECOND"] = "seconde(s)";
Blockly.Msg["IO_PAUSE_MILLISECOND"] = "milliseconde(s)";
Blockly.Msg["IO_INITCHRONOMETER_TITLE"] = "initialise le chronomètre";
Blockly.Msg["IO_INITCHRONOMETER_TOOLTIP"] = "Initialise un chronomètre à 0 (en secondes).";
Blockly.Msg["IO_GETCHRONOMETER_TITLE"] = "valeur du chronomètre en %1";
Blockly.Msg["IO_GETCHRONOMETER_TOOLTIP"] = "Retourne la valeur du chronomètre à partir de l'initialisation (en secondes ou millisecondes).";
Blockly.Msg["IO_ARDUINOLED_TITLE"] = "allumer la led intégrée à Arduino (Pin 13) %1";
Blockly.Msg["IO_ARDUINOLED_TOOLTIP"] = "Permet d'allumer la led (Pin 13) sur la carte";
// Input/Output - Modules externes
Blockly.Msg["IO_GROVEKEYPAD_GETNUMBER_TITLE"] = "[Clavier numérique] chiffre sur les broches RX %1 TX %2";
Blockly.Msg["IO_GROVEKEYPAD_GETNUMBER_TOOLTIP"] = IMG_MODULE_KEYPAD + Blockly.Tooltip.SEP + "Permet d'obtenir la touche appuyée du clavier numérique grove sur les broches RX et TX. Quand vous connecter le module, être assuré que les broches sont 'croisées' : RX de la carte avec TX du module et inversement.";
Blockly.Msg["IO_GROVEJOYSTICK_GETAXIS_TITLE"] = "[Module joytsick] valeur de l'axe %1 sur la broche %2";
Blockly.Msg["IO_GROVEJOYSTICK_GETAXIS_TOOLTIP"] = IMG_MODULE_JOYSTICK + Blockly.Tooltip.SEP + "Retourne la valeur de l'axe X ou Y (de 0 à 1023) du joystick Grove sur les broches analogiques A0 à A5.";
//Blockly.Msg["IO_GROVECOLOREDBUTTON_GET_TITLE"] = "[Module bouton coloré] état sur la broche %1 ";
//Blockly.Msg["IO_GROVECOLOREDBUTTON_GET_TOOLTIP"] = IMG_MODULE_LED_BUTTON + Blockly.Tooltip.SEP + "Rtourne l'état du bouton coloré grove (0 or 1) sur les broches digitales P0 à P20.";
//Blockly.Msg["IO_GROVECOLOREDBUTTON_SETLED_TITLE"] = "[Module bouton coloré] controler la LED %1 sur la broche %2";
//Blockly.Msg["IO_GROVECOLOREDBUTTON_SETLED_TOOLTIP"] = IMG_MODULE_LED_BUTTON + Blockly.Tooltip.SEP + "Permet d'allumer ou éteindre la LED (0 or 1) sur les broches digitales P0 à P20.";
Blockly.Msg["IO_GETGROVESLIDEPOTENTIOMETER_TITLE"] = "[Potentiomètre linéaire] valeur sur la broche %1";
Blockly.Msg["IO_GETGROVESLIDEPOTENTIOMETER_TOOLTIP"] = IMG_MODULE_SLIDE_POT + Blockly.Tooltip.SEP + "Retourne la position (de 0 à 1023) du potentiomètre linéaire Grove sur les broches analogiques A0 à A5.";
Blockly.Msg["IO_GETGROVEROTARYANGLE_TITLE"] = "[Potentiomètre rotatif] valeur sur la broche %1";
Blockly.Msg["IO_GETGROVEROTARYANGLE_TOOLTIP"] = IMG_MODULE_ROTARY_ANGLE + Blockly.Tooltip.SEP + "Retourne l'angle (de 0 à 1023) du potentiomètre rotatif Grove sur les broches A0 à A5.";
Blockly.Msg["IO_GETGROVETACTILE_TITLE"] = "[Capteur tactile] état sur la broche %1 ";
Blockly.Msg["IO_GETGROVETACTILE_TOOLTIP"] = IMG_MODULE_TOUCH + Blockly.Tooltip.SEP + "Retourne la valeur du capteur tactile Grove (0 ou 1) sur les broches digitales D0 à D13.";
Blockly.Msg["IO_GETGROVEBUTTON_TITLE"] = "[Module bouton] état sur la broche %1 ";
Blockly.Msg["IO_GETGROVEBUTTON_TOOLTIP"] = IMG_MODULE_BUTTON + Blockly.Tooltip.SEP + "Retourne la valeur du bouton Grove (0 ou 1) sur les broches digitales D0 à D13.";
Blockly.Msg["IO_GETGROVESWITCH_TITLE"] = "[Module interrupteur] état sur la broche %1 ";
Blockly.Msg["IO_GETGROVESWITCH_TOOLTIP"] = IMG_MODULE_SWITCH + Blockly.Tooltip.SEP + "Retourne la valeur de l'interrupteur Grove (0 ou 1) sur les broches digitales D0 à D13.";
// Input/Output - Pins
Blockly.Msg["IO_READDIGITALPIN_TITLE"] = "lire la broche numérique %1";
Blockly.Msg["IO_READDIGITALPIN_TOOLTIP"] = "Permet de lire la valeur d'une entrée digitale (0 ou 1).";
Blockly.Msg["IO_WRITEDIGITALPIN_TITLE"] = "écrire sur la broche numérique %1 la valeur %2";
Blockly.Msg["IO_WRITEDIGITALPIN_TOOLTIP"] = "Permet d'écrire une valeur sur une entrée digitale (0 ou 1).";
Blockly.Msg["IO_WRITEANALOGPIN_TITLE"] = "écrire sur la broche analogique %1 la valeur %2";
Blockly.Msg["IO_WRITEANALOGPIN_TOOLTIP"] = "Permet d'écrire une valeur sur une entrée analogique (0-255).";
Blockly.Msg["IO_READANALOGPIN_TITLE"] = "lire la broche analogique %1";
Blockly.Msg["IO_READANALOGPIN_TOOLTIP"] = "Permet de lire la valeur d'une entrée analogique (0-1023).";
Blockly.Msg["IO_SETPWM_TITLE"] = "appliquer un signal PWM de rapport cyclique %1 (%) sur la broche %2 ";
Blockly.Msg["IO_SETPWM_TOOLTIP"] = "Permet d'appliquer un signal PWM sur une broche pwm (~) en paramétrant le rapport cyclique (en %). Pour les broches D3, D9, D10 et D11, la fréquence du signal est de 490 Hz (soit 2.04 ms). Pour les broches D5 et D6, elle est de 980 Hz (soit 1.02 ms).";
Blockly.Msg["IO_READPULSEIN_TITLE"] = "lire l'impulsion (μs) de l'état %1 sur la broche %2";
Blockly.Msg["IO_READPULSEIN_TOOLTIP"] = "Retourne la durée de l'impulsion entrante à l'état HAUT ou à l'état BAS (en μs). Fonctionne pour des impulsions de 10 μs à 3 min.";
Blockly.Msg["IO_DIGITALSIGNAL_TITLE"] = "%1";
Blockly.Msg["IO_DIGITALSIGNAL_HIGH"] = "HAUT";
Blockly.Msg["IO_DIGITALSIGNAL_LOW"] = "BAS";
Blockly.Msg["IO_DIGITALSIGNAL_TOOLTIP"] = "Retourne une valeur booléene (HAUT ou BAS).";

// Communication - Connexion série
Blockly.Msg["COMMUNICATION_SERIAL_WRITE_TITLE"] = "écrire dans le port série %1";
Blockly.Msg["COMMUNICATION_SERIAL_WRITE_TOOLTIP"] = "Ce bloc sert à écrire n'importe quel type de données sur le port série. Elles s'afficheront alors dans la console lors de l'exécution du programme.";
Blockly.Msg["COMMUNICATION_SERIAL_ONDATARECEIVED_TITLE"] = "si une donnée est reçue du port série, mettre dans %1";
Blockly.Msg["COMMUNICATION_SERIAL_ONDATARECEIVED_INPUT_DO"] = "faire %1";
Blockly.Msg["COMMUNICATION_SERIAL_ONDATARECEIVED_TOOLTIP"] = "Permet d'exécuter des instructions si une donnée est reçue par le port série dans la variable 'serialData'.";
Blockly.Msg["COMMUNICATION_WRITEGRAPH_TITLE"] = "tracer le graphe";
Blockly.Msg["COMMUNICATION_WRITEGRAPH_TOOLTIP"] = "Ce bloc permet d'écrire des données (numériques) qui seront visibles dans le traceur. Il peut être utilisé avec un ou plusieurs blocs au format \"Nom\" et \"Données\".";
Blockly.Msg["COMMUNICATION_WRITEGRAPH_TITLE_ADD"] = "Ajouter";
Blockly.Msg["COMMUNICATION_WRITEGRAPH_TITLE_ENTRY"] = "Entrée";
Blockly.Msg["COMMUNICATION_PRINT_DATAS_TITLE"] = "Nom %1 Données %2";
Blockly.Msg["COMMUNICATION_PRINT_DATAS_TOOLTIP"] = "Ce bloc est à utiliser avec le bloc \"Tracer le graphique\". Il doit lui-même contenir le nom de la valeur à afficher (texte), et la valeur en question (nombre).";
Blockly.Msg["COMMUNICATION_PLAYCOMPUTERNOTE_TITLE"] = "jouer la note %1 sur l'ordinateur";
Blockly.Msg["COMMUNICATION_PLAYCOMPUTERNOTE_TOOLTIP"] = "Joue la note selectionnée jusqu'à l'exécution du bloc \"Fin de la note\".";
Blockly.Msg["NOTE_C"] = "Do";
Blockly.Msg["NOTE_C_SHARP"] = "Do#";
Blockly.Msg["NOTE_D"] = "Ré";
Blockly.Msg["NOTE_D_SHARP"] = "Ré#";
Blockly.Msg["NOTE_E"] = "Mi";
Blockly.Msg["NOTE_F"] = "Fa";
Blockly.Msg["NOTE_F_SHARP"] = "Fa#";
Blockly.Msg["NOTE_G"] = "Sol";
Blockly.Msg["NOTE_G_SHARP"] = "Sol#";
Blockly.Msg["NOTE_A"] = "La";
Blockly.Msg["NOTE_A_SHARP"] = "La#";
Blockly.Msg["NOTE_B"] = "Si";
Blockly.Msg["COMMUNICATION_SETCOMPUTERFREQUENCY_TITLE"] = "Jouer la fréquence %1 (Hz) sur l'ordinateur";
Blockly.Msg["COMMUNICATION_SETCOMPUTERFREQUENCY_TOOLTIP"] = "Ce bloc permet de jouer une fréquence donnée sur l'ordinateur";
Blockly.Msg["COMMUNICATION_STOPCOMPUTERFREQUENCY_TITLE"] = "terminer la note sur l'ordinateur";
Blockly.Msg["COMMUNICATION_STOPCOMPUTERFREQUENCY_TOOLTIP"] = "Arrête la note en cours.";
// Communication - Enregistrements de données
Blockly.Msg["COMMUNICATION_OPENLOG_WRITE_TITLE"] = "[Openlog] écrire dans la carte SD %1 sur les broches RX %2 TX %3 %4 Données %5";
Blockly.Msg["COMMUNICATION_OPENLOG_WRITE_TOOLTIP"] = IMG_MODULE_OPENLOG + Blockly.Tooltip.SEP + "Permet d'écrire des données dans la carte micro SD avec le module Openlog. Fonctionnement en transmission UART.";
Blockly.Msg["COMMUNICATION_SDSPI_WRITE_TITLE"] = "[Module SD SPI] écrire dans la carte SD %1 sur la broche CS %2 %3 Données %4";
Blockly.Msg["COMMUNICATION_SDSPI_WRITE_TOOLTIP"] = IMG_MODULE_SD_SPIMODULE + Blockly.Tooltip.SEP + "Ce bloc permet d'écrire des données dans la carte SD avec un module SPI. Avec une carte Arduino UNO, la transmission SPI utilise les broches SPI (ICSP), il faut spécifier la broche CS (par exemple D4).";
// Communication - Sans-fil
Blockly.Msg["COMMUNICATION_BLUETOOTH_SENDDATA_TITLE"] = "[Bluetooth] envoyer sur les broches RX %1 TX %2 message %3";
Blockly.Msg["COMMUNICATION_BLUETOOTH_SENDDATA_TOOLTIP"] = IMG_MODULE_SERIAL_BT + Blockly.Tooltip.SEP + "Permet d'envoyer des données via le module série BLuetooth sur les broches digitales D0 à D13.";
Blockly.Msg["COMMUNICATION_BLUETOOTH_ONDATARECEIVED_TITLE"] = "[Bluetooth] si message reçu sur les broches RX %1 TX %2 mettre dans %3";
Blockly.Msg["COMMUNICATION_BLUETOOTH_ONDATARECEIVED_INPUT_DO"] = "faire";
Blockly.Msg["COMMUNICATION_BLUETOOTH_ONDATARECEIVED_TOOLTIP"] = IMG_MODULE_SERIAL_BT + Blockly.Tooltip.SEP + "Permet d'exécuter des instructions si une donnée est reçue par un module série Bluetooth dans la variable 'bluetoothData' sur les broches digitales D0 à D13.";
Blockly.Msg["COMMUNICATION_RADIONRF24_SENDDATA_TITLE"] = "[Radio nRF24L01] envoyer à Adresse %1 Canal %2 sur les broches CE %3 CSN %4 le message %5";
Blockly.Msg["COMMUNICATION_RADIONRF24_SENDDATA_TOOLTIP"] = IMG_MODULE_NRF24L01 + Blockly.Tooltip.SEP + "Permet d'envoyer des données sans-fil par le module nRF24L01 à un autre module similaire. Le module fonctionne sur la bande de fréquences 2,4GHz. Avec une carte Arduino UNO, la transmission SPI utilise les broches 11 (MOSI), 12 (MISO) et 13 (SCK). ";
Blockly.Msg["COMMUNICATION_RADIONRF24_DATARECEIVER_TITLE"] = "[Radio nRF24L01] si donnée disponible Adresse %1 Canal %2 sur les broches CE %3 CSN %4 mettre dans %5";
Blockly.Msg["COMMUNICATION_RADIONRF24_DATARECEIVER_INPUT_DO"] = "faire";
Blockly.Msg["COMMUNICATION_RADIONRF24_DATARECEIVER_TOOLTIP"] = IMG_MODULE_NRF24L01 + Blockly.Tooltip.SEP + "Permet de lire les données reçues par le module nRF24L01. Voir le tutoriel (clic droit sur le bloc puis Aide).";
Blockly.Msg["COM_GROVE_433MHZ_TRANSMITTER"] = "[Radio 315/433MHz] envoyer sur la broche %1 Message %2";
Blockly.Msg["COM_GROVE_433MHZ_TRANSMITTER_TOOLTIP"] = "Permet d'envoyer un message radio grâce au module Grove Radio 433MHz ou 315MHz connecté sur une broche digitale.";
Blockly.Msg["COM_GROVE_433MHZ_RECEIVER"] = "[Radio 315/433MHz] si message reçu sur la broche %1 mettre dans %2";
Blockly.Msg["COM_GROVE_433MHZ_RECEIVER_INPUT_DO"] = "faire %1";
Blockly.Msg["COM_GROVE_433MHZ_RECEIVER_TOOLTIP"] = "Permet de lire les données reçues par le module Grove Radio 433MHz ou 315MHz. Le bloc renvoie le message texte reçu, ou bien 'No message'.";
// Communication - Modules externes
Blockly.Msg["COMMUNICATION_GPS_ONDATARECEIVED_TITLE"] = "[GPS] si une donnée est reçue sur les broches RX %1 TX %2 mettre dans %3";
Blockly.Msg["COMMUNICATION_GPS_ONDATARECEIVED_INPUT_DO"] = "faire";
Blockly.Msg["COMMUNICATION_GPS_ONDATARECEIVED_TOOLTIP"] = IMG_MODULE_GPS + Blockly.Tooltip.SEP + "Permet d'exécuter des instructions si une donnée est reçue par GPS dans la variable 'gpsData' sur les broches RX/TX.";
//Blockly.Msg["COMMUNICATION_GPS_GETINFORMATIONS_TITLE"] = "[GPS] obtenir %1 avec les données %2";
//Blockly.Msg["COMMUNICATION_GPS_GETINFORMATIONS_TOOLTIP"] = IMG_MODULE_GPS + Blockly.Tooltip.SEP + "Retourne les données analysées du GPS parmi ('horloge', 'latitude, 'longitude', 'altitude', 'toute la trame')";
//Blockly.Msg["COMMUNICATION_GPS_INFO_CLOCK"] = "l'heure";
//Blockly.Msg["COMMUNICATION_GPS_INFO_LATITUDE"] = "la latitude °Nord";
//Blockly.Msg["COMMUNICATION_GPS_INFO_LONGITUDE"] = "la longitude °Est";
//Blockly.Msg["COMMUNICATION_GPS_INFO_SATELLITE"] = "le nombre de satellites utilisés";
//Blockly.Msg["COMMUNICATION_GPS_INFO_ALTITUDE"] = "l'altitude (m)";
//Blockly.Msg["COMMUNICATION_GPS_INFO_ALL_FRAME"] = "toute la trame";
Blockly.Msg["COMMUNICATION_GROVERTC_SETDAY_TITLE"] = "[Module horloge RTC] initialiser à %1 jour %2 mois %3 année %4";
Blockly.Msg["COMMUNICATION_GROVERTC_SETDAY_TOOLTIP"] = IMG_MODULE_RTC + Blockly.Tooltip.SEP + "Permet d'initialiser le module horloge Grove RTC, pour pouvoir lire la date et l'heure précise avec le bloc 'Lire le module horloge'. Placer dans le bloc 'Au démarrage'. Brancher le module RTC sur un port I2C.";
Blockly.Msg["DAY_MONDAY"] = "lundi";
Blockly.Msg["DAY_TUESDAY"] = "mardi";
Blockly.Msg["DAY_WEDNESDAY"] = "mercredi";
Blockly.Msg["DAY_THURSDAY"] = "jeudi";
Blockly.Msg["DAY_FRIDAY"] = "vendredi";
Blockly.Msg["DAY_SATURDAY"] = "samedi";
Blockly.Msg["DAY_SUNDAY"] = "dimanche";
Blockly.Msg["COMMUNICATION_GROVERTC_SETHOUR_TITLE"] = "[Module horloge RTC] initialiser à heure %1 minute %2 seconde %3";
Blockly.Msg["COMMUNICATION_GROVERTC_SETHOUR_TOOLTIP"] = IMG_MODULE_RTC + Blockly.Tooltip.SEP + "Permet d'initialiser le module horloge Grove RTC, pour pouvoir lire la date et l'heure précise avec le bloc 'Lire le module horloge'. Placer dans le bloc 'Au démarrage'. Brancher le module sur un port I2C.";
Blockly.Msg["COMMUNICATION_GROVERTC_READCLOCK_TITLE"] = "[Module horloge RTC] lire %1";
Blockly.Msg["COMMUNICATION_GROVERTC_READCLOCK_TOOLTIP"] = IMG_MODULE_RTC + Blockly.Tooltip.SEP + "Permet de lire la date et l'heure (choisir dans le menu déroulant). Pour avoir un résultat correct, utiliser au préalable les deux blocs 'Initialiser le module horloge'. Brancher le module sur un port I2C.";
Blockly.Msg["CLOCK_MONTH_DAY"] = "jour du mois";
Blockly.Msg["CLOCK_MONTH"] = "mois";
Blockly.Msg["CLOCK_YEAR"] = "année";
Blockly.Msg["CLOCK_HOUR"] = "heure";
Blockly.Msg["CLOCK_MINUTE"] = "minute";
Blockly.Msg["CLOCK_SECOND"] = "seconde";
Blockly.Msg["CLOCK_WEEK_DAY"] = "jour de la semaine";
Blockly.Msg["COMMUNICATION_RFID_GETSTRINGCARDID_TITLE"] = "[Lecteur RFID] ID du badge sur les broches RX %1 TX %2";
Blockly.Msg["COMMUNICATION_RFID_GETSTRINGCARDID_TOOLTIP"] = IMG_MODULE_RFID + Blockly.Tooltip.SEP + "Permet de récupérer l'identifiant UID sous forme de chaîne de caractères du module Grove RFID 125 kHz si celui si est disponible sur les broches digitales D0 à D13. Afin de vérifier l'identifiant d'une carte et le valider ou non, il suffit simplement de le comparer avec la trame de type 'String' désirée.";

// Sensors - Gas
Blockly.Msg["SENSORS_SGP30_READDATA_TITLE"] = "[Capteur SGP30] gaz %1";
Blockly.Msg["SENSORS_SGP30_READDATA_TOOLTIP"] = IMG_MODULE_SGP30 + Blockly.Tooltip.SEP + "Renvoie la quantité de CO2 (en ppm) ou de TVOC (en ppb) contenu dans l'air grâce au capteur SGP30. Brancher le capteur sur un port I2C.";
Blockly.Msg["SENSORS_SGP30_CO2"] = "Dioxyde de carbone (CO2) (ppm)";
Blockly.Msg["SENSORS_SGP30_TVOC"] = "Composés organiques volatiles (TVOC) (ppb)";
Blockly.Msg["SENSORS_MULTICHANNEL_GETGAS_TITLE"] = "[Capteur de gaz multicanal] gaz %1 (ppm)";
Blockly.Msg["SENSORS_MULTICHANNEL_GETGAS_TOOLTIP"] = IMG_MODULE_MULTICHANNEL + Blockly.Tooltip.SEP + "Renvoie la quantité du gaz mesuré dans l'air (en ppm) grâce au capteur de gaz multicanal. Brancher le capteur sur un port I2C.";
Blockly.Msg["GAS_CO"] = "Monoxyde de carbone (CO)";
Blockly.Msg["GAS_NO2"] = "Dioxyde d'azote (NO2)";
Blockly.Msg["GAS_C2H6OH"] = "Ethanol (C2H6OH)";
Blockly.Msg["GAS_H2"] = "Dihydrogène (H2)";
Blockly.Msg["GAS_NH3"] = "Ammoniac (NH3)";
Blockly.Msg["GAS_CH4"] = "Méthane (CH4)";
Blockly.Msg["GAS_C3H8"] = "Propane (C3H8)";
Blockly.Msg["GAS_C4H10"] = "Iso-propane (C4H10)";
Blockly.Msg["SENSORS_O2_GAS_READDATA_TITLE"] = "[Capteur de dioxygène] O2 %1 sur la broche %2";
Blockly.Msg["SENSORS_O2_GAS_READDATA_TOOLTIP"] = IMG_MODULE_O2 + Blockly.Tooltip.SEP + "Retourne la concentration de dioxygène (O2) dans l'air (en %) ou la tension de sortie correspondante grâce au capteur de gas O2 grove sur les broches analogiques A0 à A5.";
Blockly.Msg["SENSORS_O2_GAS_CONCENTRATION"] = "concentration (%)";
Blockly.Msg["SENSORS_O2_GAS_VOUT"] = "tension de sortie (V)";
Blockly.Msg["SENSORS_MQ135_GETGAS_TITLE"] = "[Capteur MQ135] CO2 (ppm) sur la broche %1";
Blockly.Msg["SENSORS_MQ135_GETGAS_TOOLTIP"] = IMG_MODULE_MQ135 + Blockly.Tooltip.SEP + "Ce bloc utilise le capteur MQ135 pour renvoyer le CO2 dans l'air. Le capteur est également sensible à d'autres gas comme le Butane et le Benzène, mais donne une bonne approximation du niveau de CO2. Connecter sur les broches analogiques A0 à A5.";
Blockly.Msg["SENSORS_DUST_READDATA_TITLE"] = "[Dust Sensor] %1 sur la broche %2";
Blockly.Msg["SENSORS_DUST_READDATA_TOOLTIP"] = IMG_MODULE_DUST + Blockly.Tooltip.SEP + "Retourne la concentration de particules (diamètre > 1 μm) avec le capteur de particule grove (PPD42NS) sur les broches digitales D0 à D13.";
Blockly.Msg["SENSORS_DUST_CONCENTRATION"] = "concentration (ppm)";
Blockly.Msg["SENSORS_DUST_RATIO"] = "ratio (%)";
Blockly.Msg["SENSORS_HM330X_GETPARTICULE_TITLE"] = "[Capteur HM330X] concentration de particules fines %1 (µg/m3)";
Blockly.Msg["SENSORS_HM330X_GETPARTICULE_TOOLTIP"] = IMG_MODULE_HM330X + Blockly.Tooltip.SEP + "Détecte la densité de particules dans l'air avec le capteur HM330X. Bancher le capteur sur un port I2C.";
Blockly.Msg["SENSORS_HM330X_ATM_PM1"] = "PM1.0";
Blockly.Msg["SENSORS_HM330X_ATM_PM2_5"] = "PM2.5";
Blockly.Msg["SENSORS_HM330X_ATM_PM10"] = "PM10";
Blockly.Msg["SENSORS_MHZ19_GETDATA_TITLE"] = "[Capteur MH-Z19] %1 sur les broches TX %2 RX %3";
Blockly.Msg["SENSORS_MHZ19_GETDATA_TOOLTIP"] = IMG_MODULE_MHZ19 + Blockly.Tooltip.SEP + "Ce bloc utilise le capteur MH-Z19 pour renvoyer la quantité de CO2 (en ppm) dans l'air ou la température (en °C). Ce capteur fonctionne en UART et peut donc être connecté aux broches digitales de D0 à D13.";
Blockly.Msg["SENSORS_MHZ19_CO2"] = "CO2 (ppm)";
Blockly.Msg["SENSORS_MHZ19_TEMPERATURE"] = "température (°C)";
// Sensors - Climate
Blockly.Msg["SENSORS_BMP280_READDATA_TITLE"] = "[Capteur BMP280 %1] %2";
Blockly.Msg["SENSORS_BMP280_READDATA_TOOLTIP"] = IMG_MODULE_BMP280 + Blockly.Tooltip.SEP + "Renvoie la température ambiante (en °C), la pression (en Pa). L'altitude (en m) est calculée avec la pression et est initialisée à 0 au début du programme. Le bloc a besoin du capteur Grove BMP280 (addresse: 0x77, couleur: bleu) ou le capteur HW-611 280 (addresse: 0x76, couleur: violet). Brancher le capteur sur un port I2C.";
Blockly.Msg["SENSORS_BMP280_TEMPERATURE"] = "température (°C)";
Blockly.Msg["SENSORS_BMP280_PRESSURE"] = "pression (Pa)";
Blockly.Msg["SENSORS_BMP280_ALTITUDE"] = "altitude (m)";
Blockly.Msg["SENSORS_GETGROVEMOISTURE_TITLE"] = "[Capteur d'humidité] humidité du sol sur la broche %1";
Blockly.Msg["SENSORS_GETGROVEMOISTURE_TOOLTIP"] = IMG_MODULE_MOISTURE + Blockly.Tooltip.SEP + "Retourne l'humidité (de 0 à 1023) mesurée grâce au capteur d'humidité grove sur les broches analogiques A0 à A5.";
Blockly.Msg["SENSORS_GETGROVETEMPERATURE_TITLE"] = "[Capteur de T°] température (°C) sur la broche %1 ";
Blockly.Msg["SENSORS_GETGROVETEMPERATURE_TOOLTIP"] = IMG_MODULE_TEMPERATURE + Blockly.Tooltip.SEP + "Retourne la température (de 0 à 1023 convertie en °C) du capteur de température Grove sur les broches analogiques A0 à A5.";
Blockly.Msg["SENSORS_GETGROVEHIGHTEMP_TITLE"] = "[Capteur H.T°] température (°C) sur les broches A1 %1 A0 %2";
Blockly.Msg["SENSORS_GETGROVEHIGHTEMP_TOOLTIP"] = IMG_MODULE_HIGH_TEMPERATURE + Blockly.Tooltip.SEP + "Renvoie la température du thermocouple de 50 à 600 °C grâce au capteur grove de haute température sur les broches analogiques A0 à A5.";
Blockly.Msg["SENSORS_MAX6675_READTEMP_TITLE"] = "[Capteur MAX6675 & Thermocouple] température %1 %2 sur les broches SO %3 CS %4 CLK %5";
Blockly.Msg["SENSORS_MAX6675_READTEMP_TOOLTIP"] = IMG_MODULE_MAX6675 + Blockly.Tooltip.SEP + "Ce bloc utilise le capteur MAX6675 pour renvoyer la température, mettre un délai d'acquisition supérieur à 0,5 seconde. Les branchements sont spécifiés dans le tutoriel.";
Blockly.Msg["SENSORS_DHT_READDATA_TITLE"] = "[Capteur %1] %2 sur la broche %3";
Blockly.Msg["SENSORS_DHT_READDATA_TOOLTIP"] = IMG_MODULE_DHT11 + Blockly.Tooltip.SEP + "Retourne la température (en °C) ou l'humidité (en %) grâce au capteur dht11 ou dht22 grove sur les broches digitales de D0 à D13.";
Blockly.Msg["SENSORS_DHT_TEMPERATURE"] = "température (°C)";
Blockly.Msg["SENSORS_DHT_HUMIDITY"] = "humidité (%)";
Blockly.Msg["SENSORS_MPX5700AP_GETPRESSURE_TITLE"] = "[Capteur MPX5700AP] pression (kPa) sur la broche %1";
Blockly.Msg["SENSORS_MPX5700AP_GETPRESSURE_TOOLTIP"] = IMG_MODULE_MPX5700AP + Blockly.Tooltip.SEP + "Retourne la pression (en kPa) mesurée grâce au capteur grove MPX5700AP sur les broches analogiques A0 à A5.";
Blockly.Msg["SENSORS_BME680_READDATA_TITLE"] = "[Capteur BME680] %1";
Blockly.Msg["SENSORS_BME680_READDATA_TOOLTIP"] = IMG_MODULE_BME680 + Blockly.Tooltip.SEP + "Renvoie la température ambiante (en °C), la pression (en Pa), l'humidité (en %) ou la quantité de gas (en ‎Ω). Brancher le capteur sur un port I2C.";
Blockly.Msg["SENSORS_BME680_TEMPERATURE"] = "température (°C)";
Blockly.Msg["SENSORS_BME680_PRESSURE"] = "pression (Pa)";
Blockly.Msg["SENSORS_BME680_HUMIDITY"] = "humidity (%)";
Blockly.Msg["SENSORS_BME680_GAS"] = "gas (‎Ω)";
Blockly.Msg["SENSORS_DS18B20_GETTEMPERATURE_TITLE"] = "[Capteur DS18B20] température sur la broche %1";
Blockly.Msg["SENSORS_DS18B20_GETTEMPERATURE_TOOLTIP"] = IMG_MODULE_DS18B20 + Blockly.Tooltip.SEP + "Retourne la température avec le capteur grove DS18B20 sur les broches digitales D0 à D13. Ce capteur est utilisé pour mesurer la température de l'eau. Plonger l'extrémité de la sonde afin de mesurer la température de l'eau. Attention, pour des températures supérieures à 70°C, la sonde ne peut pas mesurer pendant une longue durée.";
Blockly.Msg["SENSORS_GETGROVEWATER_TITLE"] = "[Capteur d'eau] quantité d'eau sur la broche %1";
Blockly.Msg["SENSORS_GETGROVEWATER_TOOLTIP"] = IMG_MODULE_WATER + Blockly.Tooltip.SEP + "Retourne la quantité d'eau (de 0 à 1023) mesurée grâce au capteur d'eau grove sur les broches analogiques A0 à A5.";
Blockly.Msg["SENSORS_GETRAINGAUGE_TITLE"] = "[Pluviomètre] état sur la broche %1";
Blockly.Msg["SENSORS_GETRAINGAUGE_TOOLTIP"] = IMG_MODULE_RAIN_GAUGE + Blockly.Tooltip.SEP + "Retourne l'état du capteur de pluie sur les broches digitales D0 à D13.";
Blockly.Msg["SENSORS_GETANEMOMETER_TITLE"] = "[Anémomètre] état sur la broche %1";
Blockly.Msg["SENSORS_GETANEMOMETER_TOOLTIP"] = IMG_MODULE_ANEMOMETER + Blockly.Tooltip.SEP + "Retourne l'état de l'anémomètre (deux fois état HAUT à chaque rotation) sur les broches digitales D0 à D13.";
// Sensors - Sound & Light
Blockly.Msg["SENSORS_GETGROVELIGHT_TITLE"] = "[Capteur de lumière] luminosité sur la broche %1 ";
Blockly.Msg["SENSORS_GETGROVELIGHT_TOOLTIP"] = IMG_MODULE_LIGHT + Blockly.Tooltip.SEP + "Retourne la luminosité (de 0 à 1023) du capteur de lumière Grove sur les broches analogiques A0 à A5.";
Blockly.Msg["SENSORS_SI1145_GETLIGHT_TITLE"] = "[Capteur SI1145] luminosité %1";
Blockly.Msg["SENSORS_SI1145_GETLIGHT_TOOLTIP"] = IMG_MODULE_SI1145 + Blockly.Tooltip.SEP + "Renvoie l'indice de lumière ultraviolette, la luminosité visible (en lumen) ou infrarouge (en lumen) grâce au capteur Grove Sunlight ou le capteur GY1145. Brancher le capteur sur un port I2C.";
Blockly.Msg["SENSORS_SI1145_UV"] = "indice UV";
Blockly.Msg["SENSORS_SI1145_VISIBLE"] = "visible (lumen)";
Blockly.Msg["SENSORS_SI1145_IR"] = "infrarouge (lumen)";
Blockly.Msg["SENSORS_GETUVINDEX_TITLE"] = "[Capteur ultraviolet] indice UV sur la broche %1 ";
Blockly.Msg["SENSORS_GETUVINDEX_TOOLTIP"] = IMG_MODULE_UV + Blockly.Tooltip.SEP + "Retourne l'indice de la lumière ultraviolette pour des ondes entre 240 et 380 nm du capteur Grove sur les broches analogiques A0 à A5.";
Blockly.Msg["SENSORS_GETGROVESOUND_TITLE"] = "[Capteur de son] niveau sonore sur la broche %1 ";
Blockly.Msg["SENSORS_GETGROVESOUND_TOOLTIP"] = IMG_MODULE_SOUND_LOUDNESS + Blockly.Tooltip.SEP + "Retourne le niveau sonore (0 à 1023) avec le capteur de son Grove sur les broches analogiques de A0 à A5.";
Blockly.Msg["SENSORS_GROVECOLOR_GETDATA_TITLE"] = "[Capteur de couleurs] %1";
Blockly.Msg["SENSORS_GROVECOLOR_GETDATA_TOOLTIP"] = IMG_MODULE_I2C_COLOR + Blockly.Tooltip.SEP + "Permet de lire le niveau d'une des trois couleurs primaires avec le capteur de couleur grove, le niveau est compris entre 0 et 10240. Brancher le capteur sur un port I2C.";
Blockly.Msg["COLOR_RED"] = "niveau de rouge";
Blockly.Msg["COLOR_GREEN"] = "niveau de vert";
Blockly.Msg["COLOR_BLUE"] = "niveau de bleu";
Blockly.Msg["SENSORS_GROVECOLOR_TEMP"] = "température de la couleur (K)";
Blockly.Msg["SENSORS_GROVECOLOR_LUX"] = "luminosité (lux)";
Blockly.Msg["SENSORS_CAMERA_SNAPSHOT_TITLE"] = "[Module camera] prendre une photo %1 [Shield SD] enregistrer la photo sur la broche %2";
Blockly.Msg["SENSORS_CAMERA_SNAPSHOT_TOOLTIP"] = IMG_MODULE_CAMERA + Blockly.Tooltip.SEP + "Prendre une photo et l'enregistrer sur une carte microSD branchée sur un lecteur connecté à l'Arduino. Voir le tutoriel (clic droit sur le bloc puis Aide)";
// Sensors - Distance & Motion
Blockly.Msg["SENSORS_GETGROVEULTRASONIC_TITLE"] = "[Capteur à ultrasons] %1 sur la broche %2";
Blockly.Msg["SENSORS_GETGROVEULTRASONIC_TOOLTIP"] = IMG_MODULE_ULTRASONIC + Blockly.Tooltip.SEP + "Retourne la distance (en cm) ou la durée de l'aller-retour (en s) mesurée grâce au capteur grove à ultrasons sur les broches digitales de D0 à D13.";
Blockly.Msg["SENSORS_GETGESTURE_TITLE"] = "[Capteur de gestes] type de geste";
Blockly.Msg["SENSORS_GETGESTURE_TOOLTIP"] = IMG_MODULE_GESTURE + Blockly.Tooltip.SEP + "Retourne le type de geste analysé ('right', 'left', 'up', 'down', 'forward', 'backward', 'clockwise', 'wave') grâce au capteur de gestes grove. Brancher le capteur sur un port I2C.";
Blockly.Msg["SENSORS_GETGROVELINEFINDER_TITLE"] = "[Capteur de ligne noire] état sur la broche %1 ";
Blockly.Msg["SENSORS_GETGROVELINEFINDER_TOOLTIP"] = IMG_MODULE_LINE_FINDER + Blockly.Tooltip.SEP + "Retourne la valeur du capteur de ligne noire grove (0 ou 1) sur les broches digitales D0 à D13.";
Blockly.Msg["SENSORS_GETGROVETILT_TITLE"] = "[Module inclinaison] état sur la broche %1 ";
Blockly.Msg["SENSORS_GETGROVETILT_TOOLTIP"] = IMG_MODULE_TILT + Blockly.Tooltip.SEP + "Retourne la valeur de l'inclinaison du module Grove (0 ou 1) sur les broches digitales D0 à D13.";
Blockly.Msg["SENSORS_GETGROVEMOTION_TITLE"] = "[Capteur de mouvement] état sur la broche %1 ";
Blockly.Msg["SENSORS_GETGROVEMOTION_TOOLTIP"] = IMG_MODULE_MOTION + Blockly.Tooltip.SEP + "Retourne la valeur du capteur de mouvement Grove PIR Motion (0 ou 1) sur les broches digitales D0 à D13.";
Blockly.Msg["SENSORS_GETPIEZOVIBRATION_TITLE"] = "[Capteur de vibrations] état sur la broche %1";
Blockly.Msg["SENSORS_GETPIEZOVIBRATION_TOOLTIP"] = IMG_MODULE_VIBRATIONS + Blockly.Tooltip.SEP + "Retourne l'état de la vibration (0 ou 1) grâce au capteur de vibration piezoélectrique sur les broches digitales D0 à D13.";
// Sensors - Others
Blockly.Msg["SENSORS_INA219_GETDATA_TITLE"] = "[Capteur INA219] %1";
Blockly.Msg["SENSORS_INA219_GETDATA_TOOLTIP"] = IMG_MODULE_INA219 + Blockly.Tooltip.SEP + "Retourne différents paramètres choisis par l'utilisateur dont le courant (en mA), la tension (en V) ou la puissance (en mW) grâce au capteur Adafruit INA219. Brancher le capteur sur un port I2C.";
Blockly.Msg["SENSORS_INA219_BUS_VOLTAGE"] = "bus voltage (V)";
Blockly.Msg["SENSORS_INA219_SHUNT_VOLTAGE"] = "shunt voltage (mV)";
Blockly.Msg["SENSORS_INA219_LOAD_VOLTAGE"] = "load voltage (V)";
Blockly.Msg["SENSORS_INA219_CURRENT"] = "courant (mA)";
Blockly.Msg["SENSORS_INA219_POWER"] = "puissance (mW)";
Blockly.Msg["SENSORS_FSR402_GETFORCE_TITLE"] = "[Détecteur de force] valeur sur la broche %1";
Blockly.Msg["SENSORS_FSR402_GETFORCE_TOOLTIP"] = IMG_MODULE_FORCE + Blockly.Tooltip.SEP + "Retourne la force exercée sur le détecteur rond grâce au capteur FSR402 sur les broches analogiques A0 à A5.";
Blockly.Msg["SENSORS_GETPULSE_TITLE"] = "[Détecteur de pouls] valeur sur la broche %1";
Blockly.Msg["SENSORS_GETPULSE_TOOLTIP"] = IMG_MODULE_PULSE + Blockly.Tooltip.SEP + "Retourne le pouls détecté sur les broches analogiques A0 à A5.";

// Actuators
Blockly.Msg["ACTUATORS_SERVO_SETANGLE_TITLE"] = "[Servomoteur] contrôler l'angle %1 sur la broche %2";
Blockly.Msg["ACTUATORS_SERVO_SETANGLE_TOOLTIP"] = IMG_MODULE_SERVO + Blockly.Tooltip.SEP + "Permet de contrôler l'angle (de 0 à 180) d'un servomoteur sur les broches digitales de D0 à D13.";
Blockly.Msg["ACTUATORS_GROVEVIBRATIONMOTOR_CONTROL_TITLE"] = "[Moteur à vibration] contrôler le moteur %1 sur la broche %2";
Blockly.Msg["ACTUATORS_GROVEVIBRATIONMOTOR_CONTROL_TOOLTIP"] = IMG_MODULE_VIBRATION_MOTOR + Blockly.Tooltip.SEP + "Permet d'activer ou de désactiver le moteur à vibration grove (HAUT ou BAS) sur les broches digitales D0 à D13.";
Blockly.Msg["ACTUATORS_GROVERELAY_CONTROL_TITLE"] = "[Module relais] contrôler à l'état %1 sur la broche %2";
Blockly.Msg["ACTUATORS_GROVERELAY_CONTROL_TOOLTIP"] = IMG_MODULE_RELAY + Blockly.Tooltip.SEP + "Permet de contrôler la valeur du relais (HAUT ou BAS) sur les broches digitales D0 à D13.";
Blockly.Msg["ACTUATORS_GROVEBUZZER_CONTROLSTATE_TITLE"] = "[Buzzer/Speaker] contrôler à l'état %1 sur la broche %2";
Blockly.Msg["ACTUATORS_GROVEBUZZER_CONTROLSTATE_TOOLTIP"] = IMG_MODULE_RELAY + Blockly.Tooltip.SEP + "Le module Buzzer Grove peut être connecté à une sortie numérique et émettra une tonalité lorsque la sortie est ON. Il peut aussi être connecté à une sortie PWM (notée ~ sur Arduino) pour générer diverses fréquences (voir autre bloc).";
Blockly.Msg["ACTUATORS_GROVEBUZZER_PLAYNOTE_TITLE"] = "[Buzzer/Speaker] jouer la note %1 sur la broche %2";
Blockly.Msg["ACTUATORS_GROVEBUZZER_PLAYNOTE_TOOLTIP"] = IMG_MODULE_BUZZER_SPEAKER + Blockly.Tooltip.SEP + "Permet de jouer une note avec le module buzzer ou speaker grove sur les broches digitales D0 à D13.";
Blockly.Msg["ACTUATORS_GROVEBUZZER_PLAYMUSIC_TITLE"] = "[Buzzer/Speaker] jouer la musique %1 sur la broche %2";
Blockly.Msg["ACTUATORS_GROVEBUZZER_PLAYMUSIC_TOOLTIP"] = IMG_MODULE_BUZZER_SPEAKER + Blockly.Tooltip.SEP + "Permet de jouer une musique avec le module buzzer ou speaker grove sur les broches digitales D0 à D13.";
Blockly.Msg["ACTUATORS_TONE_TITLE"] = "[Buzzer/Speaker] jouer la fréquence %1 (Hz) sur la broche %2";
Blockly.Msg["ACTUATORS_TONE_TOOLTIP"] = IMG_MODULE_BUZZER_SPEAKER + Blockly.Tooltip.SEP + "Ce bloc permet de jouer une fréquence donnée avec un module haut-parleur ou un buzzer.";
Blockly.Msg["ACTUATORS_NOTONE_TITLE"] = "[Buzzer/Speaker] couper le son sur la broche %1";
Blockly.Msg["ACTUATORS_NOTONE_TOOLTIP"] = IMG_MODULE_BUZZER_SPEAKER + Blockly.Tooltip.SEP + "Permet de couper le son joué sur le module grove Buzzer.";
Blockly.Msg["ACTUATORS_GROVEWATERATOMIZATION_CONTROL_TITLE"] = "[Atomiseur d'eau] contrôler à l'état %1 sur la broche %2";
Blockly.Msg["ACTUATORS_GROVEWATERATOMIZATION_CONTROL_TOOLTIP"] = IMG_MODULE_WATER_ATOMIZER + Blockly.Tooltip.SEP + "Permet d'activer ou de désactiver l'atomiseur d'eau (HAUT ou BAS) sur les broches digitales D0 à D13.";
Blockly.Msg["ACTUATORS_GROVEELECTROMAGNET_CONTROL_TITLE"] = "[Electroaimant] contrôler à l'état %1 sur la broche %2";
Blockly.Msg["ACTUATORS_GROVEELECTROMAGNET_CONTROL_TOOLTIP"] = IMG_MODULE_ELECTROMAGNET + Blockly.Tooltip.SEP + "Permet d'activer ou de désactiver l'électroaimant (HAUT ou BAS) sur les broches digitales D0 à D13.";

// Robots - basic modules
Blockly.Msg["ROBOTS_MBOT_GO_TITLE"] = "[Moteurs] contrôler le robot %1 vitesse %2";
Blockly.Msg["ROBOTS_MBOT_GO_FORWARD"] = "Avancer";
Blockly.Msg["ROBOTS_MBOT_GO_REVERSE"] = "Reculer";
Blockly.Msg["ROBOTS_MBOT_GO_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Permet de contrôler la marche (AVANT/ARRIERE) ainsi que sa vitesse (de 0 à 255) du robot mBot";
Blockly.Msg["ROBOTS_MBOT_CONTROLMOTOR_TITLE"] = "[Moteurs] contrôler le moteur %1 direction %2 vitesse %3";
Blockly.Msg["ROBOTS_MBOT_RIGHT"] = "Droit";
Blockly.Msg["ROBOTS_MBOT_LEFT"] = "Gauche";
Blockly.Msg["ROBOTS_MBOT_RIGHT&LEFT"] = "Droit & Gauche";
Blockly.Msg["ROBOTS_MBOT_RIGHT_F"] = "Droite";
Blockly.Msg["ROBOTS_MBOT_LEFT_F"] = "Gauche";
Blockly.Msg["ROBOTS_MBOT_RIGHT&LEFT_F"] = "Droite & Gauche";
Blockly.Msg["ROBOTS_MBOT_CONTROLMOTOR_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Permet de contrôler les moteurs droit (9) et gauche (10) en changeant la direction (↻ : AVANT, ↺ : ARRIERE) et la vitesse (de 0 à 255) du robot mBot.";
Blockly.Msg["ROBOTS_MBOT_STOPMOTORS_TITLE"] = "[Moteurs] arrêter le moteur %1";
Blockly.Msg["ROBOTS_MBOT_STOPMOTORS_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Permet d'arrêter le moteur droit ou gauche du robot mBot.";
Blockly.Msg["ROBOTS_MBOT_SETRGBLED_TITLE"] = "[Carte] définir la couleur R %1 G %2 B %3 de la LED %4";
Blockly.Msg["ROBOTS_MBOT_SETRGBLED_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Permet de contrôler la couleur de la LED doite ou gauche sur la carte du robot mBot tel que les valeurs R,G,B soient comprises entre 0 et 255.";
Blockly.Msg["ROBOTS_MBOT_SETBUZZER_TITLE"] = "[Carte] contrôler le buzzer à la fréquence %1 pendant %2 (ms)";
Blockly.Msg["ROBOTS_MBOT_SETBUZZER_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Permet de définir une fréquence pendant un temps en millisecondes sur le buzzer du robot mBot.";
Blockly.Msg["ROBOTS_MBOT_PLAYMUSIC_TITLE"] = "[Carte] jouer la musique %1";
Blockly.Msg["ROBOTS_MBOT_PLAYMUSIC_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Permet de jouer une musique avec le buzzer du robot mBot.";
Blockly.Msg["ROBOTS_MBOT_GETLIGHT_TITLE"] = "[Carte] luminosité";
Blockly.Msg["ROBOTS_MBOT_GETLIGHT_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Retourne la valeur du capteur de luminosité présent sur la carte du robot mBot.";
Blockly.Msg["ROBOTS_MBOT_GETBUTTONSTATE_TITLE"] = "[Carte] bouton est %1";
Blockly.Msg["ROBOTS_MBOT_PRESSED"] = "pressé";
Blockly.Msg["ROBOTS_MBOT_RELEASED"] = "relaché";
Blockly.Msg["ROBOTS_MBOT_GETBUTTONSTATE_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Retourne l'état du bouton (HAUT) ou (BAS) de la carte du robot mBot.";
Blockly.Msg["ROBOTS_MBOT_GETREMOTECONTROLBUTTON_TITLE"] = "[Télécommande] bouton %1 est appuyé";
Blockly.Msg["ROBOTS_MBOT_GETREMOTECONTROLBUTTON_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_REMOTE_CONTROL + Blockly.Tooltip.SEP + "Return vrai ou faux si l'un des boutons de la télécommande du robot mBot est appuyé.";
// Robots - external modules
Blockly.Msg["ROBOTS_MAKEBLOCK_ULTRASONICRANGER_TITLE"] = "[Capteur à ultrasons] distance en %1 sur le port %2";
Blockly.Msg["ROBOTS_MAKEBLOCK_ULTRASONICRANGER_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_ULTRASONIC + Blockly.Tooltip.SEP + "Retourne la distance en (cm) ou (inchs) mesurée grâce au capteur à ultrasons. Brancher le capteur sur un port RJ45 de 1 à 4 du robot mBot.";
Blockly.Msg["ROBOTS_MAKEBLOCK_READLINEFINDER_TITLE"] = "[Suiveur de ligne] capteur %1 au-dessus d'une ligne noire sur le port %2";
Blockly.Msg["ROBOTS_MAKEBLOCK_READLINEFINDER_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_LINEFINDER + Blockly.Tooltip.SEP + "Retourne la valeur des capteurs de ligne noire (0 ou 1) avec sensor1 (gauhe) et sensor2 (droite). Brancher le capteur sur un port RJ45 de 1 à 4 du robot mBot.";
Blockly.Msg["ROBOTS_MAKEBLOCK_LEFT_1"] = "gauche";
Blockly.Msg["ROBOTS_MAKEBLOCK_RIGHT_2"] = "droit";
Blockly.Msg["ROBOTS_MAKEBLOCK_GETCOLOR_TITLE"] = "[Capteur de couleur] %1 sur le port %2";
Blockly.Msg["ROBOTS_MAKEBLOCK_GETCOLOR_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_COLOR + Blockly.Tooltip.SEP + "Permet de lire le niveau d'une des trois couleurs primaires avec le capteur de couleur Makeblock. Il est possible d'obtenir la couleur mesurée, la correspondance est la suivante : 0 (Blanc), 1 (Rosé), 2 (Rouge), 3 (Orange), 4 (Jaune), 5 (Vert), 5 (Cyan), 6 (Bleu), 7 (Violet), 8 (Noir), 9 (Or). Brancher le capteur sur un port RJ45 de 1 à 4 du robot mBot.";
Blockly.Msg["ROBOTS_MAKEBLOCK_COLOR"] = "couleur";
Blockly.Msg["ROBOTS_MAKEBLOCK_RED"] = "niveau de rouge";
Blockly.Msg["ROBOTS_MAKEBLOCK_GREEN"] = "niveau de vert";
Blockly.Msg["ROBOTS_MAKEBLOCK_BLUE"] = "niveau de bleu";
Blockly.Msg["ROBOTS_MAKEBLOCK_GETGAS_TITLE"] = "[Capteur de gas MQ2] %1 sur le port %2";
Blockly.Msg["ROBOTS_MAKEBLOCK_GETGAS_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_GAS + Blockly.Tooltip.SEP + "Permet de lire la quantité de gas avec le capteur de gas MQ2 de Makeblock. Il est possible d'obtenir l'état du capteur si la valeur mesurée est au dessus (ou en dessous) d'un certain seuil. Utiliser le potentiomètre sur le module afin de modifier la concentration seuil. Brancher le capteur sur un port RJ45 de 1 ou 2 du robot mBot.";
Blockly.Msg["ROBOTS_MAKEBLOCK_GAS_DIGITAL"] = "état";
Blockly.Msg["ROBOTS_MAKEBLOCK_GAS_ANALOG"] = "valeur";
Blockly.Msg["ROBOTS_MAKEBLOCK_GETFLAME_TITLE"] = "[Capteur de flamme] %1 sur le port %2";
Blockly.Msg["ROBOTS_MAKEBLOCK_GETFLAME_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_FLAME + Blockly.Tooltip.SEP + "Permet de détecter une flamme avec le capteur de flamme de Makeblock. Il est possible d'obtenir l'état du capteur si la valeur mesurée est au dessus (ou en dessous) d'un certain seuil. Utiliser le potentiomètre sur le module afin de modifier le seuil de détection d'une flamme. Ce capteur détecte dans l'IR avec des longueurs d'onde comprises entre 700nm et 1200nm. Brancher le capteur sur un port RJ45 de 1 ou 2 du robot mBot.";
Blockly.Msg["ROBOTS_MAKEBLOCK_FLAME_DIGITAL"] = "état";
Blockly.Msg["ROBOTS_MAKEBLOCK_FLAME_ANALOG"] = "valeur";
Blockly.Msg["ROBOTS_MAKEBLOCK_WATERPROOFTEMPERATURE_TITLE"] = "[Capteur étanche DS18B20] température sur le port %1";
Blockly.Msg["ROBOTS_MAKEBLOCK_WATERPROOFTEMPERATURE_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_WATERPROOF_TEMPERATURE + Blockly.Tooltip.SEP + "Permet de mesurer la température avec le capteur étanche ds18b20 de Makeblock. Brancher le capteur sur un port RJ45 de 1 à 4 du robot mBot.";

// Colour
Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://fr.wikipedia.org/wiki/Couleur";
Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "Choisir une couleur dans la palette.";
//Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "couleur 1";
//Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "couleur 2";
//Blockly.Msg["COLOUR_BLEND_HELPURL"] = "http://meyerweb.com/eric/tools/color-blend/";
//Blockly.Msg["COLOUR_BLEND_RATIO"] = "taux";
//Blockly.Msg["COLOUR_BLEND_TITLE"] = "mélanger";
//Blockly.Msg["COLOUR_BLEND_TOOLTIP"] = "Mélange deux couleurs dans une proportion donnée (de 0.0 à 1.0).";
//Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com";  // untranslated
//Blockly.Msg["COLOUR_RANDOM_TITLE"] = "couleur aléatoire";
//Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Choisir une couleur au hasard.";
//Blockly.Msg["COLOUR_RGB_BLUE"] = "bleu";
//Blockly.Msg["COLOUR_RGB_GREEN"] = "vert";
//Blockly.Msg["COLOUR_RGB_HELPURL"] = "http://www.december.com/html/spec/colorper.html";
//Blockly.Msg["COLOUR_RGB_RED"] = "rouge";
//Blockly.Msg["COLOUR_RGB_TITLE"] = "colorier en";
//Blockly.Msg["COLOUR_RGB_TOOLTIP"] = "Créer une couleur avec la quantité spécifiée de rouge, vert et bleu. Les valeurs doivent être comprises entre 0 et 100.";


/* Blocs créés sur la plateforme micro:bit avec l'écran OLED
// Display - Jeux
Blockly.Msg["DISPLAY_MORPION_NEWGAME_TITLE"] = "[Ecran OLED] Morpion - nouvelle partie";
Blockly.Msg["DISPLAY_MORPION_NEWGAME_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Permet de lancer une nouvelle partie de morpion sur un afficheur OLED. Brancher l'afficheur sur un port I2C. Attention, le jeu du Morpion utilise toute la mémoire de la micro:bit, vous ne pouvez pas utiliser d'autres modules pendant le jeu.";
Blockly.Msg["DISPLAY_MORPION_MOVECURSOR_TITLE"] = "[Ecran OLED] Morpion - déplacer le curseur";
Blockly.Msg["DISPLAY_MORPION_MOVECURSOR_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Permet de déplacer le curseur dans la grille du morpion sur un afficheur OLED. Le curseur parcourt toute la grille case par case. Brancher l'afficheur sur un port I2C. Attention, le jeu du Morpion utilise toute la mémoire de la micro:bit, vous ne pouvez pas utiliser d'autres modules pendant le jeu.";
Blockly.Msg["DISPLAY_MORPION_SETPLAYERFIGURE_TITLE"] = "[Ecran OLED] Morpion - ajouter %1";
Blockly.Msg["DISPLAY_MORPION_SETPLAYERFIGURE_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Permet d'ajouter une figure (croix ou cercle) dans la grille du morpion sur un afficheur OLED. Brancher l'afficheur sur un port I2C. Attention, le jeu du Morpion utilise toute la mémoire de la micro:bit, vous ne pouvez pas utiliser d'autres modules pendant le jeu.";
Blockly.Msg["DISPLAY_MORPION_CROSS"] = "une croix";
Blockly.Msg["DISPLAY_MORPION_CIRCLE"] = "un cercle";
Blockly.Msg["DISPLAY_MORPION_ISENDGAME_TITLE"] = "[Ecran OLED] Morpion - partie terminée ?";
Blockly.Msg["DISPLAY_MORPION_ISENDGAME_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Permet de retourner l'état de la partie en cours du morpion. Brancher l'afficheur sur un port I2C. Attention, le jeu du Morpion utilise toute la mémoire de la micro:bit, vous ne pouvez pas utiliser d'autres modules pendant le jeu.";
*/