'use strict';

goog.provide('Blockly.Msg.en');
goog.require('Blockly.Msg');

Blockly.Msg["ON_START_TITLE"] = "On start    ";
Blockly.Msg["ON_START_INPUT_DO"] = "";
Blockly.Msg["ON_START_TOOLTIP"] = "Add instructions in this block to execute them when the micro:bit card is powered up.";
Blockly.Msg["FOREVER_TITLE"] = "Forever    ";
Blockly.Msg["FOREVER_INPUT_DO"] = "";
Blockly.Msg["FOREVER_TOOLTIP"] = "Add instructions to this block to execute them in a loop.";

Blockly.Msg["TEXT_COMMENT"] = "Comment %1";
Blockly.Msg["TEXT_COMMENT_TOOLTIP"] = "Add comment in code.";

//categories
var MSG = {
    title: "Code",
    blocks: "Blocs",
    linkTooltip: "Sauvegarder et lier aux blocs.",
    runTooltip: "Lancer le programme défini par les blocs dans l’espace de travail.",
    badCode: "Erreur du programme :\n%1",
    timeout: "Nombre maximum d’itérations d’exécution dépassé.",
    trashTooltip: "Jeter tous les blocs.",
    catBasic: "Affichage",
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
    listVariable: "liste",
    textVariable: "texte",
    httpRequestError: "Il y a eu un problème avec la demande.",
    linkAlert: "Partagez vos blocs grâce à ce lien:\n\n%1",
    hashError: "Désolé, '%1' ne correspond à aucun programme sauvegardé.",
    xmlError: "Impossible de charger le fichier de sauvegarde.  Peut être a t-il été créé avec une autre version de Blockly?",
    badXml: "Erreur d’analyse du XML :\n%1\n\nSélectionner 'OK' pour abandonner vos modifications ou 'Annuler' pour continuer à modifier le XML."
};

Blockly.Msg["SUBCATEGORY_MICROBIT"] = "Micro:bit";
Blockly.Msg["SUBCATEGORY_DISPLAYS"] = "Ecrans";
Blockly.Msg["SUBCATEGORY_LED_MODULES"] = "Modules à LED";
Blockly.Msg["SUBCATEGORY_EXTERNAL_MODULES"] = "Modules externes";
Blockly.Msg["SUBCATEGORY_GAMES"] = "Jeux";
Blockly.Msg["SUBCATEGORY_PINS"] = "Broches";
Blockly.Msg["SUBCATEGORY_SERIAL_CONNECTION"] = "Connexion série";
Blockly.Msg["SUBCATEGORY_SENSORS_GAS"] = "Capteurs de gaz";
Blockly.Msg["SUBCATEGORY_SENSORS_CLIMATE"] = "Capteurs météorologiques";
Blockly.Msg["SUBCATEGORY_SENSORS_SOUNDLIGHT"] = "Capteurs de son et lumière";
Blockly.Msg["SUBCATEGORY_SENSORS_DISTANCEMOVEMENT"] = "Capteurs de distance et mouvement";
Blockly.Msg["SUBCATEGORY_MAQUEEN"] = "Maqueen";
Blockly.Msg["SUBCATEGORY_BITBOT"] = "Bit:Bot";
Blockly.Msg["SUBCATEGORY_GAMEPAD"] = "Gamepad";

// Display - Micro:bit 
Blockly.Msg["SHOW_LEDS_TITLE"] = "show leds";
Blockly.Msg["SHOW_STRING_TITLE"] = "show string";
Blockly.Msg["SHOW_NUMBER_TITLE"] = "show number";
Blockly.Msg["SHOW_ICON_TITLE"] = "show icon";
Blockly.Msg["SHOW_GAUGE_TITLE"] = "show gauge of %1 Maximum %2";
Blockly.Msg["SHOW_GAUGE_TOOLTIP"] = "Display the dipstick of a sensor (or number) on the micro-bit card screen by setting the maximum value corresponding to the filled dipstick.";
Blockly.Msg["SET_PIXEL_TITLE"] = "control led x %1 y %2 state %3";
Blockly.Msg["SET_PIXEL_TOOLTIP"] = "Enable to control the state (ON/OFF) of each micro:bit screen LED.";
Blockly.Msg["SET_LIGHT_PIXEL_TITLE"] = "control led x %1 y %2 light %3";
Blockly.Msg["SET_LIGHT_PIXEL_TOOLTIP"] = "Enable to control the light (from 0 to 9) of each micro:bit screen LED.";
Blockly.Msg["SHOW_CLOCK_TITLE"] = "show clock";
Blockly.Msg["SHOW_ARROW_TITLE"] = "show arrow";
Blockly.Msg["SHOW_ARROW_TOOLTIP"] = "Enable to display arrows of 8 directions (N,NE,E,SE,S...) on micro:bit screen.";
Blockly.Msg["CLEAR_TITLE"] = "clear screen";
// Display - External modules
Blockly.Msg["DISPLAY_LCD_SETTEXT_TITLE"] = "[LCD1602] show on the line %1 text %2";
Blockly.Msg["DISPLAY_LCD_SETTEXT_TOOLTIP"] = IMG_MODULE_LCD_3V3 + Blockly.Tooltip.SEP + "Show text on the grove lcd 1602 display. Connect lcd on I2C port.";
Blockly.Msg["DISPLAY_LCD_CLEAR_TITLE"] = "[LCD1602] clear display";
Blockly.Msg["DISPLAY_LCD_CLEAR_TOOLTIP"] = IMG_MODULE_LCD_3V3 + Blockly.Tooltip.SEP + "Enable to clear the entire lcd text. Connect lcd on I2C port.";
Blockly.Msg["DISPLAY_NEOPIXEL_LEDCONTROL_TITLE"] = "[Neopixel] set LED %1 to R %2 G %3 B %4 on pin %5";
Blockly.Msg["DISPLAY_NEOPIXEL_LEDCONTROL_TOOLTIP"] = IMG_MODULE_NEOPIXEL + Blockly.Tooltip.SEP + "Enable to control each LED color of neopixels as (R,G,B) from 0 to 255. Use P15 to set Maqueen neopixel.";
Blockly.Msg["DISPLAY_NEOPIXEL_COLORLEDCONTROL_TITLE"] = "[Neopixel] control LED %1 to %2 on pin %3";
Blockly.Msg["DISPLAY_NEOPIXEL_COLORLEDCONTROL_TOOLTIP"] = IMG_MODULE_NEOPIXEL + Blockly.Tooltip.SEP + "Enable to control each LED color of neopixel. Use P15 to set Maqueen neopixel.";
Blockly.Msg["DISPLAY_NEOPIXEL_RAINBOW_TITLE"] = "[Neopixel] set a rainbow with %1 LED on pin %2";
Blockly.Msg["DISPLAY_NEOPIXEL_RAINBOW_TOOLTIP"] = IMG_MODULE_NEOPIXEL + Blockly.Tooltip.SEP + "Enable to show a rainbow on neopixel module, set pin and the number of LED.";
Blockly.Msg["DISPLAY_OLED_ADDTEXT_TITLE"] = "[OLED display] set on position x %1 y %2 the text %3";
Blockly.Msg["DISPLAY_OLED_ADDTEXT_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Enable write text on OLED display. Connect the OLED display on I2C port.";
Blockly.Msg["DISPLAY_OLED_SETPIXEL_TITLE"] = "[OLED display] control pixel x %1 y %2 state %3";
Blockly.Msg["DISPLAY_OLED_SETPIXEL_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Enable to control each OLED display pixel. Connect the OLED display on I2C port.";
Blockly.Msg["DISPLAY_OLED_CLEARSCREEN_TITLE"] = "[OLED display] clear screen";
Blockly.Msg["DISPLAY_OLED_CLEARSCREEN_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Enable to clear the entire grove oled screen. Connect the OLED display on I2C port.";
Blockly.Msg["DISPLAY_OLED_SHOWICON_TITLE"] = "[OLED display] show icon %1 on x %2 y %3 at state %4";
Blockly.Msg["DISPLAY_OLED_SHOWICON_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Enable show micro:bit icon from Image library. Connect the OLED display on I2C port.";
Blockly.Msg["DISPLAY_4DIGIT_SETNUMBER_TITLE"] = "[4-Digit module] show %1 %2 on pins CLK %3 DIO %4";
Blockly.Msg["DISPLAY_4DIGIT_SETNUMBER_TOOLTIP"] = IMG_MODULE_4DIGITDISPLAY + Blockly.Tooltip.SEP + "Enable to show numbers or temperature on grove 4-digit display on digital pins from P0 up through P20.";
Blockly.Msg["DISPLAY_4DIGIT_SETCLOCK_TITLE"] = "[4-Digit module] show clock on pins CLK %1 DIO %2";
Blockly.Msg["DISPLAY_4DIGIT_SETCLOCK_TOOLTIP"] = IMG_MODULE_4DIGITDISPLAY + Blockly.Tooltip.SEP + "Enable to show clock on grove 4-digit display on digital pins from P0 up through P20. Warning, getting real clock is possible only if microbit stay in power on mode.";
Blockly.Msg["DISPLAY_4DIGIT_NUMBER"] = "number";
Blockly.Msg["DISPLAY_4DIGIT_TEMPERATURE"] = "temperature";
Blockly.Msg["DISPLAY_LEDBARSETLEVEL_TITLE"] = "[LED Bar module] set level of %1 on pins DI %2 DCKI %3";
Blockly.Msg["DISPLAY_LEDBARSETLEVEL_TOOLTIP"] = IMG_MODULE_LED_BAR + Blockly.Tooltip.SEP + "Enable to show level of input value on grove LED bar display on digital pins from P0 up through P20.";
Blockly.Msg["DISPLAY_SETGROVELED_TITLE"] = "[LED module] control LED %1 on pin  %2";
Blockly.Msg["DISPLAY_SETGROVELED_TOOLTIP"] = IMG_MODULE_LED + Blockly.Tooltip.SEP + "Enable to switch on or switch off the LED socket kit Grove (0 or 1) on digitals pins P0 up through P20.";
Blockly.Msg["DISPLAY_TRAFFICLIGHT_SETLED_TITLE"] = "[Traffic Light] set %1 LED to state %2";
Blockly.Msg["DISPLAY_TRAFFICLIGHT_SETLED_TOOLTIP"] = IMG_MODULE_TRAFFIC_LIGHT + Blockly.Tooltip.SEP + "Allows you to control Kitronik Traffic Light.";
Blockly.Msg["DISPLAY_TRAFFICLIGHT_RED"] = "red";
Blockly.Msg["DISPLAY_TRAFFICLIGHT_ORANGE"] = "orange";
Blockly.Msg["DISPLAY_TRAFFICLIGHT_GREEN"] = "green";
// Display - Games
Blockly.Msg["DISPLAY_MORPION_NEWGAME_TITLE"] = "[OLED display] Tic Tac Toe - new game";
Blockly.Msg["DISPLAY_MORPION_NEWGAME_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Enable to start new game of Tic Tac Toe on OLED display. Connect the OLED display on I2C port. Warning, the game uses all micro:bit memory, you cannot connect any other device during playing Tic Tac Toe.";
Blockly.Msg["DISPLAY_MORPION_MOVECURSOR_TITLE"] = "[OLED display] Tic Tac Toe - move cursor";
Blockly.Msg["DISPLAY_MORPION_MOVECURSOR_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Enable to move cursor of Tic Tac Toe grid on OLED display. The cursor goes through the grid box by box. Connect the OLED display on I2C port. Warning, the game uses all micro:bit memory, you cannot connect any other device during playing Tic Tac Toe.";
Blockly.Msg["DISPLAY_MORPION_SETPLAYERFIGURE_TITLE"] = "[OLED display] Tic Tac Toe - add %1";
Blockly.Msg["DISPLAY_MORPION_SETPLAYERFIGURE_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Enable to add figure player (Cross or Circle) in Tic Tac Toe grid on OLED display. Connect the OLED display on I2C port. Warning, the game uses all micro:bit memory, you cannot connect any other device during playing Tic Tac Toe.";
Blockly.Msg["DISPLAY_MORPION_CROSS"] = "cross";
Blockly.Msg["DISPLAY_MORPION_CIRCLE"] = "circle";
Blockly.Msg["DISPLAY_MORPION_ISENDGAME_TITLE"] = "[OLED display] Tic Tac Toe - is end game ?";
Blockly.Msg["DISPLAY_MORPION_ISENDGAME_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Enable to return Tic Tac Toe game curent state. Connect the OLED display on I2C port. Warning, the game uses all micro:bit memory, you cannot connect any other device during playing Tic Tac Toe.";

// Input/Output - Micro:bit
Blockly.Msg["IO_PAUSE_TITLE"] = "pause";
Blockly.Msg["IO_PAUSE_TOOLTIP"] = "Stop the code execution (duration in seconds or milliseconds).";
Blockly.Msg["IO_PAUSE_SECOND"] = "second(s)";
Blockly.Msg["IO_PAUSE_MILLISECOND"] = "millisecond(s)";
Blockly.Msg["IO_INITCHRONOMETER_TITLE"] = "Initialize the chronometer";
Blockly.Msg["IO_INITCHRONOMETER_TOOLTIP"] = "Allows you to initialize the chronometer (in seconds).";
Blockly.Msg["IO_GETCHRONOMETER_TITLE"] = "get chronometer in %1";
Blockly.Msg["IO_GETCHRONOMETER_TOOLTIP"] = "Return the chronometer value from the initialization in seconds or milliseconds.";
Blockly.Msg["IO_ONBUTTONPRESSED_TITLE"] = "on button %1 %2 pressed";
Blockly.Msg["IO_ISPRESSED"] = "is";
Blockly.Msg["IO_WASPRESSED"] = "was";
Blockly.Msg["IO_ONBUTTONPRESSED_INPUT_DO"] = "do";
Blockly.Msg["IO_ONBUTTONPRESSED_TOOLTIP"] = "Execute instructions if the choosen button (A or B) is pressed.";
Blockly.Msg["IO_ONMOVEMENT_TITLE"] = "on %1";
Blockly.Msg["IO_ONMOVEMENT_SHAKE"] = "shake";
Blockly.Msg["IO_ONMOVEMENT_UP"] = "logo up";
Blockly.Msg["IO_ONMOVEMENT_DOWN"] = "logo down";
Blockly.Msg["IO_ONMOVEMENT_FACE_UP"] = "screen up";
Blockly.Msg["IO_ONMOVEMENT_FACE_DOWN"] = "screen down";
Blockly.Msg["IO_ONMOVEMENT_LEFT"] = "tilt left";
Blockly.Msg["IO_ONMOVEMENT_RIGHT"] = "tilt right";
Blockly.Msg["IO_ONMOVEMENT_FREEFALL"] = "free fall";
Blockly.Msg["IO_ONMOVEMENT_INPUT_DO"] = "do";
Blockly.Msg["IO_ONMOVEMENT_TOOLTIP"] = "Execute instructions if the micro:bit card is shaken.";
Blockly.Msg["IO_ONPINPRESSED_TITLE"] = "on pin %1 touched";
Blockly.Msg["IO_ONPINPRESSED_INPUT_DO"] = "do";
Blockly.Msg["IO_ONPINPRESSED_TOOLTIP"] = "Execute instructions if the pin P0, P1 or P2 is touched (or pressed).";
Blockly.Msg["IO_ISBUTTONPRESSED_TITLE"] = "button %1 is pressed";
Blockly.Msg["IO_ISBUTTONPRESSED_TOOLTIP"] = "Return 'True' if button A or B is pressed, else return 'False'.";
Blockly.Msg["IO_ISPINPRESSED_TITLE"] = "pin %1 is touched";
Blockly.Msg["IO_ISPINPRESSED_TOOLTIP"] = "Return 'True' if pin P0, P1 or P2 is touched (or pressed), else return 'False'.";
// Input/Output - External modules
Blockly.Msg["IO_GROVEKEYPAD_GETNUMBER_TITLE"] = "[Numeric Touch Keypad] get number on pins RX %1 TX %2";
Blockly.Msg["IO_GROVEKEYPAD_GETNUMBER_TOOLTIP"] = IMG_MODULE_KEYPAD + Blockly.Tooltip.SEP + "Enable to get touched number from keypad grove module on pins RX & TX. When you connect device, make sure you “cross” the wires. microbit TX pin needs to be connected with device's RX pin, and the RX pin with the device's TX pin.";
Blockly.Msg["IO_GROVEJOYSTICK_GETAXIS_TITLE"] = "[Joystick Module] joystick axis %1 value on pins A0 %2 A1 %3";
Blockly.Msg["IO_GROVEJOYSTICK_GETAXIS_TOOLTIP"] = IMG_MODULE_JOYSTICK + Blockly.Tooltip.SEP + "Return grove joystick axis value (from 0 to 1023) on analog pins P0 through P4, or P10.";
Blockly.Msg["IO_GROVECOLOREDBUTTON_GET_TITLE"] = "[Colored Button Module] state on pin %1";
Blockly.Msg["IO_GROVECOLOREDBUTTON_GET_TOOLTIP"] = IMG_MODULE_LED_BUTTON + Blockly.Tooltip.SEP + "Return grove colored button state (0 or 1) on digital pins PO up through P20.";
Blockly.Msg["IO_GROVECOLOREDBUTTON_SETLED_TITLE"] = "[Colored Button Module] control LED %1 on pin %2";
Blockly.Msg["IO_GROVECOLOREDBUTTON_SETLED_TOOLTIP"] = IMG_MODULE_LED_BUTTON + Blockly.Tooltip.SEP + "Enable to switch on or switch off the LED Button Grove (0 or 1) on digitals pins P0 up through P20.";
Blockly.Msg["IO_GETGROVEROTARYANGLE_TITLE"] = "[Rotary Angle Module] angle on pin %1";
Blockly.Msg["IO_GETGROVEROTARYANGLE_TOOLTIP"] = IMG_MODULE_ROTARY_ANGLE + Blockly.Tooltip.SEP + "Return grove rotary angle position (from 0 to 1023) on analog pins P0 through P4, or P10.";
Blockly.Msg["IO_GETGROVESLIDEPOTENTIOMETER_TITLE"] = "[Slide Potentiometer] position value on pin %1";
Blockly.Msg["IO_GETGROVESLIDEPOTENTIOMETER_TOOLTIP"] = IMG_MODULE_SLIDE_POT + Blockly.Tooltip.SEP + "Return grove slide potentiometer position value (from 0 to 1023) on analog pins P0 through P4, or P10.";
Blockly.Msg["IO_GETGROVETACTILE_TITLE"] = "[Touch Sensor] touch state on pin %1 ";
Blockly.Msg["IO_GETGROVETACTILE_TOOLTIP"] = IMG_MODULE_TOUCH + Blockly.Tooltip.SEP + "Return grove touch sensor state (0 or 1) on digital pins PO up through P20.";
Blockly.Msg["IO_GETGROVEBUTTON_TITLE"] = "[Button Module] button state on pin %1 ";
Blockly.Msg["IO_GETGROVEBUTTON_TOOLTIP"] = IMG_MODULE_BUTTON + Blockly.Tooltip.SEP + "Return grove button state (0 or 1) on digital pins PO up through P20.";
Blockly.Msg["IO_GETGROVESWITCH_TITLE"] = "[Switch Module] switch state on pin %1 ";
Blockly.Msg["IO_GETGROVESWITCH_TOOLTIP"] = IMG_MODULE_SWITCH + Blockly.Tooltip.SEP + "Return grove switch state (0 or 1) on digital pins PO up through P20.";
// Input/Output - Pins
Blockly.Msg["IO_READDIGITALPIN_TITLE"] = "read digital pin %1";
Blockly.Msg["IO_READDIGITALPIN_TOOLTIP"] = "Enable to read the digital value of pins (0 or 1).";
Blockly.Msg["IO_WRITEDIGITALPIN_TITLE"] = "write on digital pin %1 value %2";
Blockly.Msg["IO_WRITEDIGITALPIN_TOOLTIP"] = "Enable to write the value (0 or 1) on digital pin.";
Blockly.Msg["IO_READANALOGPIN_TITLE"] = "read analog pin %1";
Blockly.Msg["IO_READANALOGPIN_TOOLTIP"] = "Enable to read the analog value of pins (0-1023).";
Blockly.Msg["IO_WRITEANALOGPIN_TITLE"] = "write on analog pin %1 value %2";
Blockly.Msg["IO_WRITEANALOGPIN_TOOLTIP"] = "Enable to write on analog pin the value (0-1023).";
Blockly.Msg["IO_SETPWM_TITLE"] = "apply to pin %1 a signal period (µs) %2";
Blockly.Msg["IO_SETPWM_TOOLTIP"] = "Enable to apply a PWM signal on a pin";
Blockly.Msg["IO_READPULSEIN_TITLE"] = "read pulse in (μs) of state %2 on pin %1";
Blockly.Msg["IO_READPULSEIN_TOOLTIP"] = "Return the duration of pulse in. Choice state (HIGH or LOW)";
Blockly.Msg["IO_DIGITALSIGNAL_TOOLTIP"] = "Returns boolean value (1 if ON and 0 if OFF).";

// Communication - Micro:bit
Blockly.Msg["COMMUNICATION_RADIO_SENDDATA_TITLE"] = "send by radio %1";
Blockly.Msg["COMMUNICATION_RADIO_SENDDATA_TOOLTIP"] = "Enable to send data by radio module.";
Blockly.Msg["COMMUNICATION_RADIO_ONDATARECEIVED_TITLE"] = "on radio data received in %1 ";
Blockly.Msg["COMMUNICATION_RADIO_ONDATARECEIVED_INPUT_DO"] = "do";
Blockly.Msg["COMMUNICATION_RADIO_ONDATARECEIVED_TOOLTIP"] = "Allows you to execute instructions on data received by radio in the 'radioData' variable.";
Blockly.Msg["COMMUNICATION_RADIO_CONFIG_TITLE"] = "configure radio Channel %1 Power %2 Data size %3";
Blockly.Msg["COMMUNICATION_RADIO_CONFIG_TOOLTIP"] = "Allows you to configure the radio group (from 0 to 83), data size (bytes) and transmission power (from 0 to 7).";
// Communication - External modules
Blockly.Msg["COMMUNICATION_OPENLOG_WRITE_TITLE"] = "[Openlog] write in the SD card %1 on pins RX %2 TX %3 Datas %4";
Blockly.Msg["COMMUNICATION_OPENLOG_WRITE_TOOLTIP"] = IMG_MODULE_OPENLOG + Blockly.Tooltip.SEP + "Block enables writing data in the SD card of Openlog module.";
Blockly.Msg["COMMUNICATION_BLUETOOTH_SENDDATA_TITLE"] = "[Bluetooth] send on pins RX %2 TX %3 message %1";
Blockly.Msg["COMMUNICATION_BLUETOOTH_SENDDATA_TOOLTIP"] = IMG_MODULE_HC05 + Blockly.Tooltip.SEP + "Enable to send any data by bluetooth HC05 module on pins RX/TX.";
Blockly.Msg["COMMUNICATION_BLUETOOTH_ONDATARECEIVED_TITLE"] = "[Bluetooth] on message received RX %1 TX %2 put it in %3";
Blockly.Msg["COMMUNICATION_BLUETOOTH_ONDATARECEIVED_INPUT_DO"] = "do";
Blockly.Msg["COMMUNICATION_BLUETOOTH_ONDATARECEIVED_TOOLTIP"] = IMG_MODULE_HC05 + Blockly.Tooltip.SEP + "Allows you to execute instructions on data received by Bluetooth HC05 module in the 'bluetoothData' variable on pins TX/RX.";
Blockly.Msg["COMMUNICATION_GPS_ONDATARECEIVED_TITLE"] = "[GPS module] on data received on pins RX %1 TX %2 put it in %3";
Blockly.Msg["COMMUNICATION_GPS_ONDATARECEIVED_INPUT_DO"] = "do";
Blockly.Msg["COMMUNICATION_GPS_ONDATARECEIVED_TOOLTIP"] = IMG_MODULE_GPS + Blockly.Tooltip.SEP + "Allows you to execute instructions on data received by GPS grove module in the 'gpsData' variable on pin TX/RX.";
Blockly.Msg["COMMUNICATION_GPS_GETINFORMATIONS_TITLE"] = "[GPS module] get %1 with datas %2";
Blockly.Msg["COMMUNICATION_GPS_GETINFORMATIONS_TOOLTIP"] = IMG_MODULE_GPS + Blockly.Tooltip.SEP + "Return analyzed datas from gps grove module choosen in ('clock','latitude,'longitude')";
Blockly.Msg["COMMUNICATION_GPS_INFO_CLOCK"] = "clock";
Blockly.Msg["COMMUNICATION_GPS_INFO_LATITUDE"] = "latitude °North";
Blockly.Msg["COMMUNICATION_GPS_INFO_LONGITUDE"] = "longitude °East";
Blockly.Msg["COMMUNICATION_GPS_INFO_SATELLITE"] = "number of satellites used";
Blockly.Msg["COMMUNICATION_GPS_INFO_ALTITUDE"] = "altitude (m)";
Blockly.Msg["COMMUNICATION_GPS_INFO_ALL_FRAME"] = "all frame";
// Communication - Serial connection
Blockly.Msg["COMMUNICATION_SERIAL_WRITE_TITLE"] = "write on serial port %1";
Blockly.Msg["COMMUNICATION_SERIAL_WRITE_TOOLTIP"] = "Write a string on serial port.";
Blockly.Msg["COMMUNICATION_SERIAL_INIT_TITLE"] = "redirect serial to RX %2 TX %3 Baudrate %1";
Blockly.Msg["COMMUNICATION_SERIAL_INIT_TOOLTIP"] = "Enable to redirect serial connection with RX & TX. When you connect device, make sure you “cross” the wires. microbit TX pin needs to be connected with device's RX pin, and the RX pin with the device's TX pin.";
Blockly.Msg["COMMUNICATION_SERIAL_REDIRECTTOUSB_TITLE"] = "redirect serial to USB port";
Blockly.Msg["COMMUNICATION_SERIAL_REDIRECTTOUSB_TOOLTIP"] = "Enable to redirect serial connection to USB. It is used if you connect some UART devices in same time.";
Blockly.Msg["COMMUNICATION_SERIAL_ONDATARECEIVED_TITLE"] = "on serial data received in %1";
Blockly.Msg["COMMUNICATION_SERIAL_ONDATARECEIVED_INPUT_DO"] = "do %1";
Blockly.Msg["COMMUNICATION_SERIAL_ONDATARECEIVED_TOOLTIP"] = "Allows you to execute instructions if data is received by serial port in the 'serialData' variable.";
Blockly.Msg["COMMUNICATION_PLAY_COMPUTER_MUSIC_TITLE"] = "Play music %1 in the serial port";
Blockly.Msg["COMMUNICATION_PLAY_COMPUTER_MUSIC_TOOLTIP"] = "Play selected note until execution of \"Stop music\" block.";
Blockly.Msg["NOTE_C"] = "C";
Blockly.Msg["NOTE_C_SHARP"] = "C#";
Blockly.Msg["NOTE_D"] = "D";
Blockly.Msg["NOTE_D_SHARP"] = "D#";
Blockly.Msg["NOTE_E"] = "E";
Blockly.Msg["NOTE_F"] = "F";
Blockly.Msg["NOTE_F_SHARP"] = "F#";
Blockly.Msg["NOTE_G"] = "G";
Blockly.Msg["NOTE_G_SHARP"] = "G#";
Blockly.Msg["NOTE_A"] = "A";
Blockly.Msg["NOTE_A_SHARP"] = "A#";
Blockly.Msg["NOTE_B"] = "B";
Blockly.Msg["COMMUNICATION_SETCOMPUTERFREQUENCY_TITLE"] = "Play frequency %1 (Hz) on the computer";
Blockly.Msg["COMMUNICATION_SETCOMPUTERFREQUENCY_TOOLTIP"] = "This block allows to play a given frequency on the computer";
Blockly.Msg["COMMUNICATION_STOPCOMPUTERFREQUENCY_TITLE"] = "Stop music of serial port";
Blockly.Msg["COMMUNICATION_STOPCOMPUTERFREQUENCY_TOOLTIP"] = "Stop the current note of serial port.";
Blockly.Msg["COMMUNICATION_WRITEGRAPH_TITLE"] = "Write graph";
Blockly.Msg["COMMUNICATION_WRITEGRAPH_TITLE_ADD"] = "Add";
Blockly.Msg["COMMUNICATION_WRITEGRAPH_TITLE_ENTRY"] = "Entry";
Blockly.Msg["COMMUNICATION_PRINT_DATAS_TITLE"] = "Name %1 Data %2";
Blockly.Msg["COMMUNICATION_PRINT_DATAS_TOOLTIP"] = "This block is to be used in the \"Write in graphic\" block. It must contain the name of the (text) value to display and the value in question.";

// Sensors - Micro:bit
Blockly.Msg["SENSORS_GETACCELERATION_TITLE"] = "acceleration (mg) %1";
Blockly.Msg["SENSORS_GETACCELERATION_TOOLTIP"] = "Return the acceleration (in mg) with internal micro:bit accelerometer.";
Blockly.Msg["SENSORS_GETLIGHT_TITLE"] = "light level";
Blockly.Msg["SENSORS_GETLIGHT_TOOLTIP"] = "Return light level (from 0 to 255) with some of micro:bit screen LED. ";
Blockly.Msg["SENSORS_CALIBRATECOMPASS_TITLE"] = "calibrate compass";
Blockly.Msg["SENSORS_CALIBRATECOMPASS_TOOLTIP"] = "Enable to calibrate the internal micro:bit compass. Just shake the card to calibrate it. A 'happy' smiley appears when the calibration is completed.";
Blockly.Msg["SENSORS_GETCOMPASS_TITLE"] = "compass heading (°)";
Blockly.Msg["SENSORS_GETCOMPASS_TOOLTIP"] = "Return the compass heading (from 0° to 360°) with the internal micro:bit compass.";
Blockly.Msg["SENSORS_ISCOMPASSCALIBRATED_TITLE"] = "compass is calibrated";
Blockly.Msg["SENSORS_ISCOMPASSCALIBRATED_TOOLTIP"] = "Return 'True' if the compass is calibrated, else return 'False'.";
Blockly.Msg["SENSORS_GETTEMPERATURE_TITLE"] = "temperature (°C)";
Blockly.Msg["SENSORS_GETTEMPERATURE_TOOLTIP"] = "Return the temperature (in °C) of micro:bit processor.";
Blockly.Msg["SENSORS_GETROTATION_TITLE"] = "rotation (°) %1";
Blockly.Msg["SENSORS_GETROTATION_PITCH"] = "pitch";
Blockly.Msg["SENSORS_GETROTATION_ROLL"] = "roll";
Blockly.Msg["SENSORS_GETROTATION_TOOLTIP"] = "Return the rotation (from -180° to 180°) with the internal micro:bit accelerometer.";
Blockly.Msg["SENSORS_GETMAGNETICFORCE_TITLE"] = "magnetic field strength (µT) %1";
Blockly.Msg["SENSORS_GETMAGNETICFORCE_TOOLTIP"] = "Return the magnetic field strength (in µTesla) in the choosen direction from internal micro:bit compass.";
// Sensors - Gas
Blockly.Msg["SENSORS_SGP30_GETGAS_TITLE"] = "[SGP30 Sensor] gas %1";
Blockly.Msg["SENSORS_SGP30_GETGAS_TOOLTIP"] = IMG_MODULE_SGP30 + Blockly.Tooltip.SEP + "Return the amount of CO2 (in ppm) or TVOC (in ppb) in the air from sgp30 sensor. Connect sensor on I2C port.";
Blockly.Msg["SENSORS_MULTICHANNEL_GETGAS_TITLE"] = "[Multichannel Gas Sensor] gas %1 (ppm)";
Blockly.Msg["SENSORS_MULTICHANNEL_GETGAS_TOOLTIP"] = IMG_MODULE_MULTICHANNEL + Blockly.Tooltip.SEP + "Return the amount of choosen gas in the air (in ppm) from grove multichannel gas sensor. Connect sensor on I2C port.";
Blockly.Msg["GAS_CO"] = "carbon monoxide (CO)";
Blockly.Msg["GAS_NO2"] = "nitrogen dioxide (NO2)";
Blockly.Msg["GAS_C2H6OH"] = "ethanol (C2H6OH)";
Blockly.Msg["GAS_H2"] = "dihydrogen (H2)";
Blockly.Msg["GAS_NH3"] = "ammonia (NH3)";
Blockly.Msg["GAS_CH4"] = "methane (CH4)";
Blockly.Msg["GAS_C3H8"] = "propane (C3H8)";
Blockly.Msg["GAS_C4H10"] = "iso-propane (C4H10)";
Blockly.Msg["SENSORS_GETO2_TITLE"] = "[Oxygen Gas Sensor] O2 (%) on pin %1";
Blockly.Msg["SENSORS_GETO2_TOOLTIP"] = IMG_MODULE_O2 + Blockly.Tooltip.SEP + "Return O2 concentration (in %) from the grove O2 sensor on pins P0 through P4, or P10.";
// Sensors - Climate
Blockly.Msg["SENSORS_BMP280_GETDATA_TITLE"] = "[BMP280 Sensor %1] %2";
Blockly.Msg["SENSORS_BMP280_GETDATA_TOOLTIP"] = IMG_MODULE_BMP280 + Blockly.Tooltip.SEP + "Return the ambient temperature (in °C), pressure (in Pa). The altitude is initialized at 0 when program is flashed. It use Grove Barometer Sensor (address: 0x77, color: blue) or HW-611 280 sensor (address: 0x76, color: purple). Connect sensor on I2C port.";
Blockly.Msg["SENSORS_BMP280_TEMPERATURE"] = "temperature (°C)";
Blockly.Msg["SENSORS_BMP280_PRESSURE"] = "pressure (Pa)";
Blockly.Msg["SENSORS_BMP280_ALTITUDE"] = "altitude (m)";
Blockly.Msg["SENSORS_GETGROVEHIGHTEMP_TITLE"] = "[H.T° sensor] temperature (°C) on pins A1 %1 A0 %2";
Blockly.Msg["SENSORS_GETGROVEHIGHTEMP_TOOLTIP"] = IMG_MODULE_HIGH_TEMPERATURE + Blockly.Tooltip.SEP + "Return thermocouple temperature dorm 50 to 600 °C with grove high temperature sensor. Connect sensor on analog pins.";
Blockly.Msg["SENSORS_GETGROVEMOISTURE_TITLE"] = "[Moisture Sensor] moisture on pin %1";
Blockly.Msg["SENSORS_GETGROVEMOISTURE_TOOLTIP"] = IMG_MODULE_MOISTURE + Blockly.Tooltip.SEP + "Return moisture measurement (from 0 to 1023) from the grove moisture sensor on pins P0 through P4, or P10.";
Blockly.Msg["SENSORS_GETGROVETEMPERATURE_TITLE"] = "[Temperature Sensor] temperature (°C) on pin %1 ";
Blockly.Msg["SENSORS_GETGROVETEMPERATURE_TOOLTIP"] = IMG_MODULE_TEMPERATURE + Blockly.Tooltip.SEP + "Return grove temperature sensor value (from 0 to 1023 converted in °C ) on analog pins P0 through P4, or P10.";
Blockly.Msg["SENSORS_DHT11_GETDATA_TITLE"] = "[DHT11 Sensor] %1 on pin %2";
Blockly.Msg["SENSORS_DHT11_GETDATA_TOOLTIP"] = IMG_MODULE_DHT11 + Blockly.Tooltip.SEP + "Return temperature (in °C) or air humidity (in %) from dht11 sensor on digital pins PO up through P20.";
Blockly.Msg["SENSORS_DHT11_TEMPERATURE"] = "temperature (°C)";
Blockly.Msg["SENSORS_DHT11_HUMIDITY"] = "humidity (%)";
Blockly.Msg["SENSORS_GETGROVEWATER_TITLE"] = "[Water Sensor] water amount on pin %1";
Blockly.Msg["SENSORS_GETGROVEWATER_TOOLTIP"] = IMG_MODULE_WATER + Blockly.Tooltip.SEP + "Return water amount (from 0 to 255) from the grove water sensor on pins P0 through P4, or P10.";
Blockly.Msg["SENSORS_GETRAINGAUGE_TITLE"] = "[Rain Gauge sensor] state value on pin %1 ";
Blockly.Msg["SENSORS_GETRAINGAUGE_TOOLTIP"] = IMG_MODULE_RAIN_GAUGE + Blockly.Tooltip.SEP + "Return rain gauge grove state (1 if it's raining or 0 else) on digital pins PO up through P20.";
Blockly.Msg["SENSORS_GETANEMOMETER_TITLE"] = "[Anemometer] state value on pin %1 ";
Blockly.Msg["SENSORS_GETANEMOMETER_TOOLTIP"] = IMG_MODULE_ANEMOMETER + Blockly.Tooltip.SEP + "Return grove anemometer state (twice state HIGH on each rotation) on digital pins PO up through P20.";
// Sensors - Sound & Light
Blockly.Msg["SENSORS_GETGROVELIGHT_TITLE"] = "[Light Sensor] light level on pin %1 ";
Blockly.Msg["SENSORS_GETGROVELIGHT_TOOLTIP"] = IMG_MODULE_LIGHT + Blockly.Tooltip.SEP + "Return grove light sensor value (from 0 to 1023) on analog pins P0 through P4, or P10.";
Blockly.Msg["SENSORS_SI1145_GETLIGHT_TITLE"] = "[SI1145 Sensor] get light %1";
Blockly.Msg["SENSORS_SI1145_GETLIGHT_TOOLTIP"] = IMG_MODULE_SI1145 + Blockly.Tooltip.SEP + "Return Ultraviolet light index, IR light (in lumen) or Visible light (in lumen) from si1145 sensor. It works with Grove Sunlight Sensor or GY1145 sensor. Connect sensor on I2C port.";
Blockly.Msg["SENSORS_SI1145_UV"] = "UV index";
Blockly.Msg["SENSORS_SI1145_VISIBLE"] = "visible (lumen)";
Blockly.Msg["SENSORS_SI1145_IR"] = "infrared (lumen)";
Blockly.Msg["SENSORS_GETUVINDEX_TITLE"] = "[Ultraviolet Sensor] UV index on pin %1";
Blockly.Msg["SENSORS_GETUVINDEX_TOOLTIP"] = IMG_MODULE_UV + Blockly.Tooltip.SEP + "Return UV index, for waves between 240 nm and 380 nm, with UV grove sensor on analog pins A0 to A5.";
Blockly.Msg["SENSORS_GETGROVESOUND_TITLE"] = "[Sound Sensor] sound level (dB) on pin %1 ";
Blockly.Msg["SENSORS_GETGROVESOUND_TOOLTIP"] = IMG_MODULE_SOUND_LOUDNESS + Blockly.Tooltip.SEP + "Return grove sound sensor value (from 0 to 1023 converted in dB) on analog pins P0 through P4, or P10.";
// Sensors - Distance & Motion
Blockly.Msg["SENSORS_GETGROVEULTRASONIC_TITLE"] = "[Ultrasonic Sensor] get %1 on pin %2";
Blockly.Msg["SENSORS_GETGROVEULTRASONIC_TOOLTIP"] = IMG_MODULE_ULTRASONIC + Blockly.Tooltip.SEP + "Return distance measurement (in centimeters) from the grove ultrasonic ranger sensor on pins P0 through P4, or P10.";
Blockly.Msg["SENSORS_ULTRASONIC_DISTANCE"] = "distance (cm)";
Blockly.Msg["SENSORS_ULTRASONIC_DURATION"] = "round-trip duration (µs)";
Blockly.Msg["SENSORS_GETGESTURE_TITLE"] = "[Gesture Sensor] gesture type";
Blockly.Msg["SENSORS_GETGESTURE_TOOLTIP"] = IMG_MODULE_GESTURE + Blockly.Tooltip.SEP + "Return the gesture type ('right', 'left', 'up', 'down', 'forward', 'backward', 'clockwise', 'anticlockwise') from grove gesture sensor. Connect sensor on I2C port.";
Blockly.Msg["SENSORS_GETGROVELINEFINDER_TITLE"] = "[Line Finder Sensor] line finder state on pin %1 ";
Blockly.Msg["SENSORS_GETGROVELINEFINDER_TOOLTIP"] = IMG_MODULE_LINE_FINDER + Blockly.Tooltip.SEP + "Return grove touch sensor state (0 or 1) on digital pins PO up through P20.";
Blockly.Msg["SENSORS_GETGROVEMOTION_TITLE"] = "[PIR Motion Sensor] movement state value on pin %1 ";
Blockly.Msg["SENSORS_GETGROVEMOTION_TOOLTIP"] = IMG_MODULE_MOTION + Blockly.Tooltip.SEP + "Return grove PIR Motion state (0 if there is movement or 1 else) on digital pins PO up through P20.";
Blockly.Msg["SENSORS_GETPIEZOVIBRATION_TITLE"] = "[Piezo Vibration Sensor] state value on pin %1 ";
Blockly.Msg["SENSORS_GETPIEZOVIBRATION_TOOLTIP"] = IMG_MODULE_VIBRATIONS + Blockly.Tooltip.SEP + "Return vibration state (0 or 1) from piezo vibration grove sensor on digital pins PO up through P20.";
Blockly.Msg["SENSORS_GETGROVETILT_TITLE"] = "[Tilt Module] tilt state on pin %1 ";
Blockly.Msg["SENSORS_GETGROVETILT_TOOLTIP"] = IMG_MODULE_TILT + Blockly.Tooltip.SEP + "Return grove tilt state (0 or 1) on digital pins PO up through P20.";

// Actuators
Blockly.Msg["ACTUATORS_SERVO_SETANGLE_TITLE"] = "[Servomotor] set angle %1 on pin %2";
Blockly.Msg["ACTUATORS_SERVO_SETANGLE_TOOLTIP"] = IMG_MODULE_SERVO + Blockly.Tooltip.SEP + "Enable to control servo angle (from 0 to 180) on PWM pins from P0 up through P2. Warning, microbit has to be powered by external batterie in order to provide enough energy to servomotor.";
Blockly.Msg["ACTUATORS_GROVEBUZZER_SETFREQ_TITLE"] = "[Buzzer/Speaker module] set the frequency %1 during %2 (ms) on pin %3";
Blockly.Msg["ACTUATORS_GROVEBUZZER_SETFREQ_TOOLTIP"] = IMG_MODULE_BUZZER_SPEAKER + Blockly.Tooltip.SEP + "Enable to set a frequency to grove buzzer module on digital pins P0 up through P20.";
Blockly.Msg["ACTUATORS_GROVEBUZZER_PLAYMUSIC_TITLE"] = "[Buzzer/Speaker module] play music %1 on pin %2";
Blockly.Msg["ACTUATORS_GROVEBUZZER_PLAYMUSIC_TOOLTIP"] = IMG_MODULE_BUZZER_SPEAKER + Blockly.Tooltip.SEP + "Enable to play the choosen music on grove buzzer module on digital pins P0 up through P20.";
Blockly.Msg["ACTUATORS_GROVERELAY_CONTROL_TITLE"] = "[Relay module] control relay %1 on pin %2";
Blockly.Msg["ACTUATORS_GROVERELAY_CONTROL_TOOLTIP"] = IMG_MODULE_RELAY + Blockly.Tooltip.SEP + "Enable to control state grove relay module (0 or 1) on digitals pins P0 up through P20.";
Blockly.Msg["ACTUATORS_GROVEVIBRATIONMOTOR_CONTROL_TITLE"] = "[Vibration motor] control motor %1 on pin %2";
Blockly.Msg["ACTUATORS_GROVEVIBRATIONMOTOR_CONTROL_TOOLTIP"] = IMG_MODULE_VIBRATION_MOTOR + Blockly.Tooltip.SEP + "Enable to control state of grove vibration motor (0 or 1) on digitals pins P0 up through P20.";

// Robots - Maqueen
Blockly.Msg["ROBOTS_MAQUEEN_RIGHT"] = "Right";
Blockly.Msg["ROBOTS_MAQUEEN_LEFT"] = "Left";
Blockly.Msg["ROBOTS_MAQUEEN_RIGHT&LEFT"] = "Right & Left";
Blockly.Msg["ROBOTS_MAQUEENULTRASONICRANGER_TITLE"] = "[Maqueen] ultrasonic range in %1";
Blockly.Msg["ROBOTS_MAQUEENULTRASONICRANGER_TOOLTIP"] = IMG_ROBOT_MAQUEEN + Blockly.Tooltip.SEP + "Return distance value in (cm or inches) from any object to maqueen robot with ultrasonic ranger sensor.";
Blockly.Msg["ROBOTS_MAQUEENCONTROLLED_TITLE"] = "[Maqueen] control LED %1 state %2";
Blockly.Msg["ROBOTS_MAQUEENCONTROLLED_TOOLTIP"] = IMG_ROBOT_MAQUEEN + Blockly.Tooltip.SEP + "Enable to control LED Right or Left state value of maqueen robot.";
Blockly.Msg["ROBOTS_MAQUEENGO_TITLE"] = "[Maqueen] control robot %1 speed %2";
Blockly.Msg["ROBOTS_MAQUEENGO_FORWARD"] = "Forward";
Blockly.Msg["ROBOTS_MAQUEENGO_REVERSE"] = "Reverse";
Blockly.Msg["ROBOTS_MAQUEENGO_TOOLTIP"] = IMG_ROBOT_MAQUEEN + Blockly.Tooltip.SEP + "Enable to control car running (FORWARD/REVERSE) or speed (from 0 to 255) of maqueen robot.";
Blockly.Msg["ROBOTS_MAQUEENCONTROLMOTOR_TITLE"] = "[Maqueen] control motor %1 direction %2 speed %3";
Blockly.Msg["ROBOTS_MAQUEENCONTROLMOTOR_TOOLTIP"] = IMG_ROBOT_MAQUEEN + Blockly.Tooltip.SEP + "Enable to control right motor (I2C address : 0x02) and left motor (I2C address : 0x00) changing direction (↻ : FOWARD, ↺ : REVERSE) or speed (from 0 to 255) of maqueen robot.";
Blockly.Msg["ROBOTS_MAQUEENSTOPMOTORS_TITLE"] = "[Maqueen] stop motor %1";
Blockly.Msg["ROBOTS_MAQUEENSTOPMOTORS_TOOLTIP"] = IMG_ROBOT_MAQUEEN + Blockly.Tooltip.SEP + "Enable to stop right, left or both motors of maqueen robot.";
Blockly.Msg["ROBOTS_MAQUEENREADPATROL_TITLE"] = "[Maqueen] read line patrol %1";
Blockly.Msg["ROBOTS_MAQUEENREADPATROL_TOOLTIP"] = IMG_ROBOT_MAQUEEN + Blockly.Tooltip.SEP + "Enable to read state of line patrol sensor of maqueen robot. The block returns 1 if the sensor is above the line.";
Blockly.Msg["ROBOTS_MAQUEENSETNEOPIXEL_TITLE"] = "[Maqueen] set color R %1 G %2 B %3 on LED %4";
Blockly.Msg["ROBOTS_MAQUEENSETNEOPIXEL_TOOLTIP"] = IMG_ROBOT_MAQUEEN + Blockly.Tooltip.SEP + "Enable to control each LED color of Maqueen neopixel as (R,G,B) from 0 to 255. Neopixel is connected on pin15 on Maqueen.";
Blockly.Msg["ROBOTS_MAQUEENSETRAINBOW_TITLE"] = "[Maqueen] Rainbow";
Blockly.Msg["ROBOTS_MAQUEENSETRAINBOW_TOOLTIP"] = IMG_ROBOT_MAQUEEN + Blockly.Tooltip.SEP + "Enable to show a rainbow on Maqueen RGB LED. Neopixel is connected to pin15 on Maqueen.";
Blockly.Msg["ROBOTS_MAQUEENSETBUZZER_TITLE"] = "[Maqueen] set buzzer at frequency %1 during %2 (ms)";
Blockly.Msg["ROBOTS_MAQUEENSETBUZZER_TOOLTIP"] = IMG_ROBOT_MAQUEEN + Blockly.Tooltip.SEP + "Enable to control Maqueen buzzer at any frequency. Buzzer is connected to pin0 on Maqueen.";
Blockly.Msg["ROBOTS_MAQUEENPLAYMUSIC_TITLE"] = "[Maqueen] play music %1";
Blockly.Msg["ROBOTS_MAQUEENPLAYMUSIC_TOOLTIP"] = IMG_ROBOT_MAQUEEN + Blockly.Tooltip.SEP + "Enable to play music on Maqueen buzzer. Buzzer is connected to pin0 on Maqueen.";
// Robots - Bit:Bot
Blockly.Msg["ROBOTS_BITBOT_READLIGHTSENSOR_TITLE"] = "[Bit:Bot] read light level on %1 sensor";
Blockly.Msg["ROBOTS_BITBOT_READLIGHTSENSOR_TOOLTIP"] = IMG_ROBOT_BITBOT + Blockly.Tooltip.SEP + "Return light level (from 0 to 255) with internal bit:bot light sensor";
Blockly.Msg["ROBOTS_BITBOT_READPATROL_TITLE"] = "[Bit:Bot] read line patrol %1";
Blockly.Msg["ROBOTS_BITBOT_READPATROL_TOOLTIP"] = IMG_ROBOT_BITBOT + Blockly.Tooltip.SEP + "Enable to read state of line patrol sensor of bit:bot robot. The block returns 1 if the sensor is above the line.";
Blockly.Msg["ROBOTS_BITBOT_RIGHT"] = "Right";
Blockly.Msg["ROBOTS_BITBOT_LEFT"] = "Left";
Blockly.Msg["ROBOTS_BITBOT_RIGHT&LEFT"] = "Right & Left";
Blockly.Msg["ROBOTS_BITBOT_GO_TITLE"] = "[Bit:Bot] control robot %1 speed %2";
Blockly.Msg["ROBOTS_BITBOT_GO_FORWARD"] = "Forward";
Blockly.Msg["ROBOTS_BITBOT_GO_REVERSE"] = "Reverse";
Blockly.Msg["ROBOTS_BITBOT_GO_TOOLTIP"] = IMG_ROBOT_BITBOT + Blockly.Tooltip.SEP + "Enable to control car running (FORWARD/REVERSE) or speed (from 0 to 1023) of bit:bot robot.";
Blockly.Msg["ROBOTS_BITBOT_CONTROLMOTOR_TITLE"] = "[Bit:Bot] control motor %1 direction %2 speed %3";
Blockly.Msg["ROBOTS_BITBOT_CONTROLMOTOR_TOOLTIP"] = IMG_ROBOT_BITBOT + Blockly.Tooltip.SEP + "Enable to control right motor (pin0,pin8) and left motor (pin1,pin12) changing direction (↻ : FOWARD, ↺ : REVERSE) or speed (from 0 to 1023) of bit:bot robot.";
Blockly.Msg["ROBOTS_BITBOT_STOPMOTORS_TITLE"] = "[Bit:Bot] stop motor %1";
Blockly.Msg["ROBOTS_BITBOT_STOPMOTORS_TOOLTIP"] = IMG_ROBOT_BITBOT + Blockly.Tooltip.SEP + "Enable to stop right, left or both motors of bit:bot robot.";
Blockly.Msg["ROBOTS_BITBOT_SETNEOPIXEL_TITLE"] = "[Bit:Bot] set color R %1 G %2 B %3 on LED %4";
Blockly.Msg["ROBOTS_BITBOT_SETNEOPIXEL_TOOLTIP"] = IMG_ROBOT_BITBOT + Blockly.Tooltip.SEP + "Enable to control each LED color of Maqueen neopixel as (R,G,B) from 0 to 255. Neopixel is connected on pin P13 on bit:bot.";
Blockly.Msg["ROBOTS_BITBOT_SETRAINBOW_TITLE"] = "[Bit:Bot] Rainbow";
Blockly.Msg["ROBOTS_BITBOT_SETRAINBOW_TOOLTIP"] = IMG_ROBOT_BITBOT + Blockly.Tooltip.SEP + "Enable to show a rainbow on bit:bot RGB LED.";
// Robots - Gamepad
Blockly.Msg["ROBOTS_GAMEPAD_CONTROLLED_TITLE"] = "[Gamepad] set LED to state %1";
Blockly.Msg["ROBOTS_GAMEPAD_CONTROLLED_TOOLTIP"] = IMG_ROBOT_GAMEPAD + Blockly.Tooltip.SEP + "Enable to control LED state of Gamepad Expansion DFR035. LED is connected to pin16";
Blockly.Msg["ROBOTS_GAMEPAD_SETMOTORVIBRATION_TITLE"] = "[Gamepad] set motor vibration to state %1";
Blockly.Msg["ROBOTS_GAMEPAD_SETMOTORVIBRATION_TOOLTIP"] = IMG_ROBOT_GAMEPAD + Blockly.Tooltip.SEP + "Enable to control motorvibration state of Gamepad Expansion DFR035. Vibration motor is connected to pin12";
Blockly.Msg["ROBOTS_GAMEPAD_SETBUZZERFREQ_TITLE"] = "[Gamepad] set buzzer at frequency %1 during %2 (ms)";
Blockly.Msg["ROBOTS_GAMEPAD_SETBUZZERFREQ_TOOLTIP"] = IMG_ROBOT_GAMEPAD + Blockly.Tooltip.SEP + "Enable to control Gamepad buzzer at any frequency. Buzzer is connected to pin0 on Gamepad.";
Blockly.Msg["ROBOTS_GAMEPAD_PLAYMUSIC_TITLE"] = "[Gamepad] play music %1";
Blockly.Msg["ROBOTS_GAMEPAD_PLAYMUSIC_TOOLTIP"] = IMG_ROBOT_GAMEPAD + Blockly.Tooltip.SEP + "Enable to play music on Gamepad buzzer. Buzzer is connected to pin0 on Gamepad.";
Blockly.Msg["ROBOTS_GAMEPAD_ONBUTTONEVENT_TITLE"] = "[Gamepad] on button %1 %2";
Blockly.Msg["ROBOTS_GAMEPAD_PRESSED"] = "pressed";
Blockly.Msg["ROBOTS_GAMEPAD_RELEASED"] = "released";
Blockly.Msg["ROBOTS_GAMEPAD_ONBUTTONEVENT_INPUT_DO"] = "do";
Blockly.Msg["ROBOTS_GAMEPAD_ONBUTTONEVENT_TOOLTIP"] = IMG_ROBOT_GAMEPAD + Blockly.Tooltip.SEP + "Execute instructions if any gamepad button is used. The button have two states : 'pressed' or 'released'. Table of pins : ([X,P1],[Y,P2],[UP,P8],[DOWN,P13],[LEFT,P14],[RIGHT,P15])";