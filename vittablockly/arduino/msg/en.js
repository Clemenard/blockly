'use strict';

Blockly.Msg["ON_START_TITLE"] = "On start    ";
Blockly.Msg["ON_START_INPUT_DO"] = "";
Blockly.Msg["ON_START_TOOLTIP"] = "Add instructions in this block to execute them when the Arduino card is powered up.";
Blockly.Msg["FOREVER_TITLE"] = "Forever    ";
Blockly.Msg["FOREVER_INPUT_DO"] = "";
Blockly.Msg["FOREVER_TOOLTIP"] = "Add instructions to this block to execute them in a loop.";

Blockly.Msg["REMOVE_COMMENT"] = "Remove Comment";
Blockly.Msg["TODAY"] = "Today";
Blockly.Msg["UNDO"] = "Undo";
Blockly.Msg["REDO"] = "Redo";
Blockly.Msg["WORKSPACE_COMMENT_DEFAULT_TEXT"] = "Say something...";
Blockly.Msg.ARD_VAR_AS = "";
Blockly.Msg.ARD_VAR_AS_TIP = "";

//categories
var MSG = {
    title: "Code",
    blocks: "Blocks",
    linkTooltip: "Save and link to blocks.",
    runTooltip: "Run the program defined by the blocks in the workspace.",
    badCode: "Program error:\n%1",
    timeout: "Maximum execution iterations exceeded.",
    trashTooltip: "Discard all blocks.",
    catDisplay: "Display",
    catInput: "Input/Output",
    catSensors: "Sensors",
    catCommunication: "Communication",
    catActuators: "Actuators",
    catRobots: "Robots",
    catLogic: "Logic",
    catLoops: "Loops",
    catMath: "Math",
    catText: "Text",
    catLists: "Lists",
    catColour: "Colour",
    catVariables: "Variables",
    catFunctions: "Functions",
    catAddblock: "Add block",
    listVariable: "list",
    textVariable: "text",
    httpRequestError: "There was a problem with the request.",
    linkAlert: "Share your blocks with this link:\n\n%1",
    hashError: "Sorry, '%1' doesn't correspond with any saved program.",
    xmlError: "Could not load your saved file. Perhaps it was created with a different version of Blockly?",
    badXml: "Error parsing XML:\n%1\n\nSelect 'OK' to abandon your changes or 'Cancel' to further edit the XML."
};

Blockly.Msg["SUBCATEGORY_DISPLAYS"] = "Screens";
Blockly.Msg["SUBCATEGORY_LED_MODULES"] = "LED modules";
Blockly.Msg["SUBCATEGORY_ARDUINO"] = "Arduino";
Blockly.Msg["SUBCATEGORY_EXTERNAL_MODULES"] = "External modules";
Blockly.Msg["SUBCATEGORY_PINS"] = "Pins";
Blockly.Msg["SUBCATEGORY_SERIAL_CONNECTION"] = "Serial connection";
Blockly.Msg["SUBCATEGORY_DATA_LOGGING"] = "Data logging";
Blockly.Msg["SUBCATEGORY_WIRELESS_COMMUNICATION"] = "Wireless communication";
Blockly.Msg["SUBCATEGORY_SENSORS_GAS"] = "Gas sensors";
Blockly.Msg["SUBCATEGORY_SENSORS_CLIMATE"] = "Climate sensors";
Blockly.Msg["SUBCATEGORY_SENSORS_SOUNDLIGHT"] = "Sound & Light sensors";
Blockly.Msg["SUBCATEGORY_SENSORS_DISTANCEMOVEMENT"] = "Distance & Motion sensors";
Blockly.Msg["SUBCATEGORY_SENSORS_OTHER"] = "Other sensors";
Blockly.Msg["SUBCATEGORY_ROBOTS_MBOT"] = "mBot - Basic modules";
Blockly.Msg["SUBCATEGORY_ROBOTS_MAKEBLOCK_SENSORS"] = "Makeblock - Sensors";

//Text
Blockly.Msg["TEXT_COMMENT"] = "Comment %1";
Blockly.Msg["TEXT_COMMENT_TOOLTIP"] = "Add comment in code.";

// Variables
Blockly.Msg.VARIABLE_INCREMENT_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.VARIABLE_INCREMENT = "change %1 by %2";
Blockly.Msg.VARIABLE_INCREMENT_TOOLTIP = "Add a number to variable '%1'.";

// Display - Screens
Blockly.Msg["DISPLAY_LCD_SETTEXT_TITLE"] = "[LCD1602] show text %1 on line %2";
Blockly.Msg["DISPLAY_LCD_SETTEXT_TOOLTIP"] = IMG_MODULE_LCD_RGB + Blockly.Tooltip.SEP + "Show text on the grove lcd 1602 display. Connect lcd on I2C port.";
Blockly.Msg["DISPLAY_LCD_SETRGBCOLOR_TITLE"] = "[LCD1602] illuminate the LCD display in R %1 G %2 B %3";
Blockly.Msg["DISPLAY_LCD_SETRGBCOLOR_TOOLTIP"] = IMG_MODULE_LCD_RGB + Blockly.Tooltip.SEP + "Block controlling the backlight of the Grove LCD 16x2 characters module. Give a value between 0 and 255 for illuminate the display in red, green and blue. Connect LCD on an I2C port.";
Blockly.Msg["DISPLAY_LCD_SETPALETTERGBCOLOR_TITLE"] = "[LCD1602] illuminate the LCD display in %1";
Blockly.Msg["DISPLAY_LCD_SETPALETTERGBCOLOR_TOOLTIP"] = IMG_MODULE_LCD_RGB + Blockly.Tooltip.SEP + "Block controlling the backlight of the Grove LCD 16x2 characters module. Choice color in palette for illuminate the display. Connect LCD on an I2C port.";
Blockly.Msg["DISPLAY_LCD_CLEAR_TITLE"] = "[LCD1602] clear display";
Blockly.Msg["DISPLAY_LCD_CLEAR_TOOLTIP"] = IMG_MODULE_LCD_RGB + Blockly.Tooltip.SEP + "Enable to clear the entire lcd text. Connect lcd on I2C port.";
Blockly.Msg["DISPLAY_OLED_ADDTEXT_TITLE"] = "[OLED display] show the text %1 on position x %2 y %3";
Blockly.Msg["DISPLAY_OLED_ADDTEXT_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Enable write text on OLED display of size 128x64 px. Connect the OLED display on I2C port.";
//Blockly.Msg["DISPLAY_OLED_SETPIXEL_TITLE"] = "[OLED display] control pixel x %1 y %2 state %3";
//Blockly.Msg["DISPLAY_OLED_SETPIXEL_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Enable to control each OLED display pixel. Connect the OLED display on I2C port.";
Blockly.Msg["DISPLAY_OLED_DRAWBITMAPLOGO_TITLE"] = "[OLED display] draw logo %1";
Blockly.Msg["DISPLAY_OLED_DRAWBITMAPLOGO_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Enable to draw logo on grove OLED display with bitmap array of size 128x64 px. Connect the OLED display on I2C port.";
Blockly.Msg["LOGO_VITTASCIENCE"] = "Vittascience";
Blockly.Msg["LOGO_ARDUINO"] = "Arduino";
Blockly.Msg["LOGO_SEEED"] = "Seeed";
Blockly.Msg["LOGO_MICROBIT"] = "Micro:bit";
Blockly.Msg["DISPLAY_OLED_CLEARSCREEN_TITLE"] = "[OLED display] clear screen";
Blockly.Msg["DISPLAY_OLED_CLEARSCREEN_TOOLTIP"] = IMG_MODULE_OLED + Blockly.Tooltip.SEP + "Enable to clear the entire grove oled screen. Connect the OLED display on I2C port.";
// Display - LED modules
Blockly.Msg["DISPLAY_SETGROVELED_TITLE"] = "[LED module] control LED to state %1 on pin %2";
Blockly.Msg["DISPLAY_SETGROVELED_TOOLTIP"] = IMG_MODULE_LED + Blockly.Tooltip.SEP + "Enable to switch on or switch off the LED socket kit Grove (0 or 1) on digital pins D0 up through D13.";
Blockly.Msg["DISPLAY_SETLEDINTENSITY_TITLE"] = "[LED] set LED intensity to %1 on pin %2";
Blockly.Msg["DISPLAY_SETLEDINTENSITY_TOOLTIP"] = IMG_MODULE_LED_PWM + Blockly.Tooltip.SEP + "Enable to set the LED intensity from 0 to 255 on PWM pins.";
Blockly.Msg["DISPLAY_CHAINABLERGBLED_DEFINE_TITLE"] = "[Chainable LED RGB] define %1 LED on pins DIN %2 CIN %3";
Blockly.Msg["DISPLAY_CHAINABLERGBLED_DEFINE_TOOLTIP"] = IMG_MODULE_LED_RGB + Blockly.Tooltip.SEP + "Enable to define chainable RGB LED with number of LED on digital pins D0 up through D13.";
Blockly.Msg["DISPLAY_CHAINABLE_RGBLED_TITLE"] = "[Chainable LED RGB] set LED %1 at R %2 G %3 B %4";
Blockly.Msg["DISPLAY_CHAINABLE_RGBLED_TOOLTIP"] = IMG_MODULE_LED_RGB + Blockly.Tooltip.SEP + "Block controlling the color of the RGB LED, give a value between 0 and 255 for Red, Green and Blue.";
Blockly.Msg["DISPLAY_CHAINABLE_PALETTERGBLED_TITLE"] = "[Chainable LED RGB] set LED %1 at %2";
Blockly.Msg["DISPLAY_CHAINABLE_PALETTERGBLED_TOOLTIP"] = IMG_MODULE_LED_RGB + Blockly.Tooltip.SEP + "Block controlling the color of the RGB LED, choice colour in the given palette.";
Blockly.Msg["DISPLAY_NEOPIXEL_LEDCONTROL_TITLE"] = "[Neopixel] set LED %1 to R %2 G %3 B %4 on pin %5";
Blockly.Msg["DISPLAY_NEOPIXEL_LEDCONTROL_TOOLTIP"] = IMG_MODULE_NEOPIXEL + Blockly.Tooltip.SEP + "Enable to control each LED color of neopixels as (R,G,B) from 0 to 255. Use P15 to set Maqueen neopixel.";
Blockly.Msg["DISPLAY_NEOPIXEL_COLORLEDCONTROL_TITLE"] = "[Neopixel] control LED %1 to %2 on pin %3";
Blockly.Msg["DISPLAY_NEOPIXEL_COLORLEDCONTROL_TOOLTIP"] = IMG_MODULE_NEOPIXEL + Blockly.Tooltip.SEP + "Enable to control each LED color of neopixel. Use P15 to set Maqueen neopixel.";
Blockly.Msg["DISPLAY_NEOPIXEL_RAINBOW_TITLE"] = "[Neopixel] set a rainbow with %1 LED on pin %2";
Blockly.Msg["DISPLAY_NEOPIXEL_RAINBOW_TOOLTIP"] = IMG_MODULE_NEOPIXEL + Blockly.Tooltip.SEP + "Enable to show a rainbow on neopixel module, set pin and the number of LED.";
Blockly.Msg["DISPLAY_4DIGIT_SETNUMBER_TITLE"] = "[4-Digit module] show %1 on pins CLK %2 DIO %3";
Blockly.Msg["DISPLAY_4DIGIT_SETNUMBER_TOOLTIP"] = IMG_MODULE_4DIGITDISPLAY + Blockly.Tooltip.SEP + "Enable to show numbers or temperature on grove 4-digit display on digital pins from D0 up through D13.";
Blockly.Msg["DISPLAY_4DIGIT_SETCLOCK_TITLE"] = "[4-Digit module] show clock on pins CLK %1 DIO %2";
Blockly.Msg["DISPLAY_4DIGIT_SETCLOCK_TOOLTIP"] = IMG_MODULE_4DIGITDISPLAY + Blockly.Tooltip.SEP + "Enable to show clock on grove 4-digit display on digital pins from D0 up through D13. Warning, getting real clock is possible only if arduino stay in power on mode.";
//Blockly.Msg["DISPLAY_4DIGIT_NUMBER"] = "number";
//Blockly.Msg["DISPLAY_4DIGIT_TEMPERATURE"] = "temperature";
Blockly.Msg["DISPLAY_LEDBARSETLEVEL_TITLE"] = "[LED Bar module] set level of %1 on pins DI %2 DCKI %3";
Blockly.Msg["DISPLAY_LEDBARSETLEVEL_TOOLTIP"] = IMG_MODULE_LED_BAR + Blockly.Tooltip.SEP + "Enable to show level of input value on grove LED bar display on digital pins from D0 up through D13.";

// Input/Output - Arduino
Blockly.Msg["IO_PAUSE_TITLE"] = "pause";
Blockly.Msg["IO_PAUSE_TOOLTIP"] = "Stop the code execution (duration in seconds or milliseconds).";
Blockly.Msg["IO_PAUSE_SECOND"] = "second(s)";
Blockly.Msg["IO_PAUSE_MILLISECOND"] = "millisecond(s)";
Blockly.Msg["IO_INITCHRONOMETER_TITLE"] = "initialize the chronometer";
Blockly.Msg["IO_INITCHRONOMETER_TOOLTIP"] = "Allows you to initialize the chronometer (in seconds).";
Blockly.Msg["IO_GETCHRONOMETER_TITLE"] = "get chronometer in %1";
Blockly.Msg["IO_GETCHRONOMETER_TOOLTIP"] = "Return the chronometer value from the initialization in seconds or milliseconds.";
Blockly.Msg["IO_ARDUINOLED_TITLE"] = "turn on the Arduino LED (Pin 13) %1";
Blockly.Msg["IO_ARDUINOLED_TOOLTIP"] = "Turn on the led (Pin 13) on the Arduino board. This block does not need any sensor or external LED.";
// Input/Output - External modules
Blockly.Msg["IO_GROVEKEYPAD_GETNUMBER_TITLE"] = "[Numeric Touch Keypad] get number on pins RX %1 TX %2";
Blockly.Msg["IO_GROVEKEYPAD_GETNUMBER_TOOLTIP"] = IMG_MODULE_KEYPAD + Blockly.Tooltip.SEP + "Enable to get touched number from keypad grove module on pins RX & TX. When you connect device, make sure you “cross” the wires. microbit TX pin needs to be connected with device's RX pin, and the RX pin with the device's TX pin.";
Blockly.Msg["IO_GROVEJOYSTICK_GETAXIS_TITLE"] = "[Joystick Module] value of joystick axis %1 on pin %2";
Blockly.Msg["IO_GROVEJOYSTICK_GETAXIS_TOOLTIP"] = IMG_MODULE_JOYSTICK + Blockly.Tooltip.SEP + "Return grove joystick axis value (from 0 to 1023) on analog pins A0 up through A5.";
//Blockly.Msg["IO_GROVECOLOREDBUTTON_GET_TITLE"] = "[Colored Button Module] state on pin %1";
//Blockly.Msg["IO_GROVECOLOREDBUTTON_GET_TOOLTIP"] = IMG_MODULE_LED_BUTTON + Blockly.Tooltip.SEP + "Return grove colored button state (0 or 1) on digital pins P0 up through P20.";
//Blockly.Msg["IO_GROVECOLOREDBUTTON_SETLED_TITLE"] = "[Colored Button Module] control LED %1 on pin %2";
//Blockly.Msg["IO_GROVECOLOREDBUTTON_SETLED_TOOLTIP"] = IMG_MODULE_LED_BUTTON + Blockly.Tooltip.SEP + "Enable to switch on or switch off the LED Button Grove (0 or 1) on digitals pins P0 up through P20.";
Blockly.Msg["IO_GETGROVESLIDEPOTENTIOMETER_TITLE"] = "[Slide Potentiometer] position value on pin %1";
Blockly.Msg["IO_GETGROVESLIDEPOTENTIOMETER_TOOLTIP"] = IMG_MODULE_SLIDE_POT + Blockly.Tooltip.SEP + "Return grove slide potentiometer position value (from 0 to 1023) on analog pins A0 up through A5.";
Blockly.Msg["IO_GETGROVEROTARYANGLE_TITLE"] = "[Rotary Angle Module] angle on pin %1";
Blockly.Msg["IO_GETGROVEROTARYANGLE_TOOLTIP"] = IMG_MODULE_ROTARY_ANGLE + Blockly.Tooltip.SEP + "Return grove rotary angle position (from 0 to 1023) on analog pins A0 up through A5.";
Blockly.Msg["IO_GETGROVETACTILE_TITLE"] = "[Touch Sensor] touch state on pin %1 ";
Blockly.Msg["IO_GETGROVETACTILE_TOOLTIP"] = IMG_MODULE_TOUCH + Blockly.Tooltip.SEP + "Return grove touch sensor state (0 or 1) on digital pins D0 up through D13.";
Blockly.Msg["IO_GETGROVEBUTTON_TITLE"] = "[Button Module] button state on pin %1 ";
Blockly.Msg["IO_GETGROVEBUTTON_TOOLTIP"] = IMG_MODULE_BUTTON + Blockly.Tooltip.SEP + "Return grove button state (0 or 1) on digital pins D0 up through D13.";
Blockly.Msg["IO_GETGROVESWITCH_TITLE"] = "[Switch Module] switch state on pin %1 ";
Blockly.Msg["IO_GETGROVESWITCH_TOOLTIP"] = IMG_MODULE_SWITCH + Blockly.Tooltip.SEP + "Return grove switch state (0 or 1) on digital pins D0 up through D13.";
// Input/Output - Pins
Blockly.Msg["IO_READDIGITALPIN_TITLE"] = "read digital pin %1";
Blockly.Msg["IO_READDIGITALPIN_TOOLTIP"] = "This block reads one of the digital inputs and returns the value.";
Blockly.Msg["IO_WRITEDIGITALPIN_TITLE"] = "write on digital pin %1 state %2";
Blockly.Msg["IO_WRITEDIGITALPIN_TOOLTIP"] = "Enable to write state on digital pin.";
Blockly.Msg["IO_WRITEANALOGPIN_TITLE"] = "write on analog pin %1 value %2";
Blockly.Msg["IO_WRITEANALOGPIN_TOOLTIP"] = "Enable to write on analog pin the value (0-255)."
Blockly.Msg["IO_READANALOGPIN_TITLE"] = "read analog pin %1";
Blockly.Msg["IO_READANALOGPIN_TOOLTIP"] = "Enable to read the analog value of pins (0-1023).";
Blockly.Msg["IO_SETPWM_TITLE"] = "apply pwm signal with duty cycle %1 (%) on pin %2";
Blockly.Msg["IO_SETPWM_TOOLTIP"] = "Apply a PWM signal on pwm pin (~) with duty cycle setting (in %). For pins D3, D9, D10 et D11, signal frequency is 490 Hz (period 2.04 ms). For pins D5 et D6, it's 980 Hz (period 1.02 ms).";
Blockly.Msg["IO_READPULSEIN_TITLE"] = "read pulse in of state %1 on pin %2";
Blockly.Msg["IO_READPULSEIN_TOOLTIP"] = "Return the duration of pulse in (in μs). Choice state to measure (HIGH or LOW). Works on pulses from 10 μs to 3 min in length.";
Blockly.Msg["IO_DIGITALSIGNAL_TITLE"] = "%1";
Blockly.Msg["IO_DIGITALSIGNAL_TOOLTIP"] = "Return boolean value (HIGH ou LOW).";
Blockly.Msg["IO_DIGITALSIGNAL_HIGH"] = "HIGH";
Blockly.Msg["IO_DIGITALSIGNAL_LOW"] = "LOW";

// Communication - Serial connection
Blockly.Msg["COMMUNICATION_SERIAL_WRITE_TITLE"] = "write on the serial port %1";
Blockly.Msg["COMMUNICATION_SERIAL_WRITE_TOOLTIP"] = "This block is used to write any type of data on the serial port. They will be displayed in the console when the program is running.";
Blockly.Msg["COMMUNICATION_SERIAL_ONDATARECEIVED_TITLE"] = "on serial data received, put it in %1";
Blockly.Msg["COMMUNICATION_SERIAL_ONDATARECEIVED_INPUT_DO"] = "do %1";
Blockly.Msg["COMMUNICATION_SERIAL_ONDATARECEIVED_TOOLTIP"] = "Allows you to execute instructions if data is received by serial port in the 'serialData' variable.";
Blockly.Msg["COMMUNICATION_WRITEGRAPH_TITLE_ADD"] = "Add";
Blockly.Msg["COMMUNICATION_WRITEGRAPH_TITLE_ENTRY"] = "Entry";
Blockly.Msg["COMMUNICATION_WRITEGRAPH_TITLE"] = "show on graph";
Blockly.Msg["COMMUNICATION_WRITEGRAPH_TOOLTIP"] = "This block makes it possible to write (digital) data that will be visible in the plotter. It can be used with one or more blocks in \"Name\" and \"Data\" format.";
Blockly.Msg["COMMUNICATION_PRINT_DATAS_TITLE"] = "Name %1 Data %2";
Blockly.Msg["COMMUNICATION_PRINT_DATAS_TOOLTIP"] = "This block is to be used in the \"Write in graphic\" block. It must contain the name of the (text) value to display and the value in question.";
Blockly.Msg["COMMUNICATION_PLAYCOMPUTERNOTE_TITLE"] = "play music %1 in the serial port";
Blockly.Msg["COMMUNICATION_PLAYCOMPUTERNOTE_TOOLTIP"] = "Play selected note until execution of \"Stop music\" block.";
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
Blockly.Msg["COMMUNICATION_SETCOMPUTERFREQUENCY_TITLE"] = "play frequency %1 (Hz) on the computer";
Blockly.Msg["COMMUNICATION_SETCOMPUTERFREQUENCY_TOOLTIP"] = "This block allows to play a given frequency on the computer";
Blockly.Msg["COMMUNICATION_STOPCOMPUTERFREQUENCY_TITLE"] = "stop music of serial port";
Blockly.Msg["COMMUNICATION_STOPCOMPUTERFREQUENCY_TOOLTIP"] = "Stop the current note of serial port.";
// Communication - Data logging
Blockly.Msg["COMMUNICATION_OPENLOG_WRITE_TITLE"] = "[Openlog] write on the SD card %1 on pins RX %2 TX %3 %4 Datas %5";
Blockly.Msg["COMMUNICATION_OPENLOG_WRITE_TOOLTIP"] = IMG_MODULE_OPENLOG + Blockly.Tooltip.SEP + "Block enables writing data in the SD card of Openlog module.";
Blockly.Msg["COMMUNICATION_SDSPI_WRITE_TITLE"] = "[SD SPI module] write on the SD card %1 on pin %2 %3 Data %4";
Blockly.Msg["COMMUNICATION_SDSPI_WRITE_TOOLTIP"] = IMG_MODULE_SD_SPIMODULE + Blockly.Tooltip.SEP + "This block allows the data to be written on the microSD card with SPI module. SPI communication uses pins ISCP, and require to specifie the CS pin (for instance D4).";
// Communication - Wireless
Blockly.Msg["COMMUNICATION_BLUETOOTH_SENDDATA_TITLE"] = "[Bluetooth] send on pins RX %1 TX %2 message %3";
Blockly.Msg["COMMUNICATION_BLUETOOTH_SENDDATA_TOOLTIP"] = IMG_MODULE_SERIAL_BT + Blockly.Tooltip.SEP + "Enable to send any data by serial bluetooth module on digital pins D0 up through D13.";
Blockly.Msg["COMMUNICATION_BLUETOOTH_ONDATARECEIVED_TITLE"] = "[Bluetooth] on message received RX %1 TX %2 put it in %3";
Blockly.Msg["COMMUNICATION_BLUETOOTH_ONDATARECEIVED_INPUT_DO"] = "do";
Blockly.Msg["COMMUNICATION_BLUETOOTH_ONDATARECEIVED_TOOLTIP"] = IMG_MODULE_SERIAL_BT + Blockly.Tooltip.SEP + "Allows you to execute instructions on data received by serial Bluetooth module in the 'bluetoothData' variable on digital pins D0 up through D13.";
Blockly.Msg["COMMUNICATION_RADIONRF24_SENDDATA_TITLE"] = "[radio nRF24L01] send to Adress %1 Channel %2 on pins CE %3 CSN %4 the message %5";
Blockly.Msg["COMMUNICATION_RADIONRF24_SENDDATA_TOOLTIP"] = IMG_MODULE_NRF24L01 + Blockly.Tooltip.SEP + "Transmits wireless data through the nRF24L01 module to another similar module. It uses the 2.4 GHz band and it can operate with baud rates from 250 kbps up to 2 Mbps. With Arduino UNO, SPI communication uses pins 11 (MOSI), 12 (MISO) et 13 (SCK).";
Blockly.Msg["COMMUNICATION_RADIONRF24_DATARECEIVER_TITLE"] = "[radio nRF24L01] on data received Address %1 Channel %2 on pins CS %3 CSN %4 put it in %5";
Blockly.Msg["COMMUNICATION_RADIONRF24_DATARECEIVER_INPUT_DO"] = "do";
Blockly.Msg["COMMUNICATION_RADIONRF24_DATARECEIVER_TOOLTIP"] = "Reads the data received by the nRF24L01 module. See the tutorial (right click on the block then Help).";
Blockly.Msg["COM_GROVE_433MHZ_TRANSMITTER"] = "[Radio 315/433MHz] send on pin %1 Message %2";
Blockly.Msg["COM_GROVE_433MHZ_TRANSMITTER_TOOLTIP"] = "Send a radio message through the Grove Radio RF 433MHz or 315MHz module.";
Blockly.Msg["COM_GROVE_433MHZ_RECEIVER"] = "[Radio 315/433MHz] on data received on pin %1 put it in %2";
Blockly.Msg["COM_GROVE_433MHZ_RECEIVER_INPUT_DO"] = "do %1";
Blockly.Msg["COM_GROVE_433MHZ_RECEIVER_TOOLTIP"] = "Reads data received by the Grove Radio 433MHz or 315MHz module. The block returns the received text message, or 'No message'.";
// Communication - External modules
Blockly.Msg["COMMUNICATION_GPS_ONDATARECEIVED_TITLE"] = "[GPS module] on data received on pins RX %1 TX %2 put it in %3";
Blockly.Msg["COMMUNICATION_GPS_ONDATARECEIVED_INPUT_DO"] = "do";
Blockly.Msg["COMMUNICATION_GPS_ONDATARECEIVED_TOOLTIP"] = IMG_MODULE_GPS + Blockly.Tooltip.SEP + "Allows you to execute instructions on data received by GPS grove module in the 'gpsData' variable on pin TX/RX.";
//Blockly.Msg["COMMUNICATION_GPS_GETINFORMATIONS_TITLE"] = "[GPS module] get %1 with datas %2";
//Blockly.Msg["COMMUNICATION_GPS_GETINFORMATIONS_TOOLTIP"] = IMG_MODULE_GPS + Blockly.Tooltip.SEP + "Return analyzed datas from gps grove module choosen in ('clock','latitude,'longitude')";
//Blockly.Msg["COMMUNICATION_GPS_INFO_CLOCK"] = "clock";
//Blockly.Msg["COMMUNICATION_GPS_INFO_LATITUDE"] = "latitude °North";
//Blockly.Msg["COMMUNICATION_GPS_INFO_LONGITUDE"] = "longitude °East";
//Blockly.Msg["COMMUNICATION_GPS_INFO_SATELLITE"] = "number of satellites used";
//Blockly.Msg["COMMUNICATION_GPS_INFO_ALTITUDE"] = "altitude (m)";
//Blockly.Msg["COMMUNICATION_GPS_INFO_ALL_FRAME"] = "all frame";
Blockly.Msg["COMMUNICATION_GROVERTC_SETDAY_TITLE"] = "[Clock RTC module] initialize at %1 day %2 month %3 year %4";
Blockly.Msg["COMMUNICATION_GROVERTC_SETDAY_TOOLTIP"] = IMG_MODULE_RTC + Blockly.Tooltip.SEP + "Allows you to initialize the Grove RTC clock module so that you can read the exact date and time using the 'Read clock module' block. Place in the 'on start' block. Connect module on I2C port.";
Blockly.Msg["DAY_MONDAY"] = "monday";
Blockly.Msg["DAY_TUESDAY"] = "tuesday";
Blockly.Msg["DAY_WEDNESDAY"] = "wednesday";
Blockly.Msg["DAY_THURSDAY"] = "thursday";
Blockly.Msg["DAY_FRIDAY"] = "friday";
Blockly.Msg["DAY_SATURDAY"] = "saturday";
Blockly.Msg["DAY_SUNDAY"] = "sunday";
Blockly.Msg["COMMUNICATION_GROVERTC_SETHOUR_TITLE"] = "[Clock RTC module] initialize at hour %1 minute %2 second %3";
Blockly.Msg["COMMUNICATION_GROVERTC_SETHOUR_TOOLTIP"] = IMG_MODULE_RTC + Blockly.Tooltip.SEP + "Allows you to initialize the Grove RTC clock module so that you can read the exact date and time using the 'Read clock module' block. Place in the 'on start' block. Connect the module on I2C port.";
Blockly.Msg["COMMUNICATION_GROVERTC_READCLOCK_TITLE"] = "[Clock RTC module] read %1";
Blockly.Msg["COMMUNICATION_GROVERTC_READCLOCK_TOOLTIP"] = IMG_MODULE_RTC + Blockly.Tooltip.SEP + "Read the date and time (choose from the drop-down menu). To obtain a correct result, first use the two blocks 'Initialize the clock module'. Connect module on I2C port.";
Blockly.Msg["CLOCK_MONTH_DAY"] = "day of month";
Blockly.Msg["CLOCK_MONTH"] = "month";
Blockly.Msg["CLOCK_YEAR"] = "year";
Blockly.Msg["CLOCK_SECOND"] = "second";
Blockly.Msg["CLOCK_MINUTE"] = "minute";
Blockly.Msg["CLOCK_HOUR"] = "hour";
Blockly.Msg["CLOCK_WEEK_DAY"] = "day of week";
Blockly.Msg["COMMUNICATION_RFID_GETSTRINGCARDID_TITLE"] = "[RFID reader] UID card on pins RX %1 TX %2";
Blockly.Msg["COMMUNICATION_RFID_GETSTRINGCARDID_TOOLTIP"] = IMG_MODULE_RFID + Blockly.Tooltip.SEP + "Read the card UID of the Grove RFID module if it's available on digital pins D0 up to D13. In order to verify the UID card and validate it or not, it is enough simply to compare with the frame of type 'String' desired.";

// Sensors - Gas
Blockly.Msg["SENSORS_SGP30_READDATA_TITLE"] = "[SGP30 Sensor] gas %1";
Blockly.Msg["SENSORS_SGP30_READDATA_TOOLTIP"] = IMG_MODULE_SGP30 + Blockly.Tooltip.SEP + "Return the amount of CO2 (in ppm) or TVOC (in ppb) in the air from sgp30 sensor. Connect sensor on I2C port.";
Blockly.Msg["SENSORS_SGP30_CO2"] = "carbon dioxide (CO2) (ppm)";
Blockly.Msg["SENSORS_SGP30_TVOC"] = "volatile organic compounds (TVOC) (ppb)";
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
Blockly.Msg["SENSORS_O2_GAS_READDATA_TITLE"] = "[Oxygen Gas Sensor] O2 %1 on pin %2";
Blockly.Msg["SENSORS_O2_GAS_READDATA_TOOLTIP"] = IMG_MODULE_O2 + Blockly.Tooltip.SEP + "Return O2 concentration (in %) or voltage output (in V) from the grove O2 sensor on analog pins A0 up through A5.";
Blockly.Msg["SENSORS_O2_GAS_CONCENTRATION"] = "concentration (%)";
Blockly.Msg["SENSORS_O2_GAS_VOUT"] = "output voltage (V)";
Blockly.Msg["SENSORS_MQ135_GETGAS_TITLE"] = "[MQ135 Sensor] CO2 (ppm) on pin %1";
Blockly.Msg["SENSORS_MQ135_GETGAS_TOOLTIP"] = IMG_MODULE_MQ135 + Blockly.Tooltip.SEP + "This block uses the MQ135 sensor to send CO2 back into the air. The sensor is also sensitive to other gases such as Butane and Benzene, but gives a good approximation of the CO2 level.";
Blockly.Msg["SENSORS_DUST_READDATA_TITLE"] = "[Dust Sensor] %1 on pin %2";
Blockly.Msg["SENSORS_DUST_READDATA_TOOLTIP"] = IMG_MODULE_DUST + Blockly.Tooltip.SEP + "Return concentration of particles (diameter > 1 μm) from the grove dust sensor (PPD42NS) on digital pins D0 up through D13.";
Blockly.Msg["SENSORS_DUST_CONCENTRATION"] = "concentration (ppm)";
Blockly.Msg["SENSORS_DUST_RATIO"] = "ratio (%)";
Blockly.Msg["SENSORS_HM330X_GETPARTICULE_TITLE"] = "[HM330X Sensor] concentration of particle matter %1 (µg/m3)";
Blockly.Msg["SENSORS_HM330X_GETPARTICULE_TOOLTIP"] = IMG_MODULE_HM330X + Blockly.Tooltip.SEP + "Detect the density of particles in the air with the HM330X sensor. Connect sensor on I2C port.";
Blockly.Msg["SENSORS_HM330X_ATM_PM1"] = "PM1.0";
Blockly.Msg["SENSORS_HM330X_ATM_PM2_5"] = "PM2.5";
Blockly.Msg["SENSORS_HM330X_ATM_PM10"] = "PM10";
Blockly.Msg["SENSORS_MHZ19_GETDATA_TITLE"] = "[MH-Z19 Sensor] %1 on pins TX %2 RX %3";
Blockly.Msg["SENSORS_MHZ19_GETDATA_TOOLTIP"] = IMG_MODULE_MHZ19 + Blockly.Tooltip.SEP + "This block uses the MH-Z19 sensor to return the amount of CO2 (in ppm) in air or temperature (in °C). It's a serial sensor and can be connected on digital pins D0 up through D13.";
Blockly.Msg["SENSORS_MHZ19_CO2"] = "CO2 (ppm)";
Blockly.Msg["SENSORS_MHZ19_TEMPERATURE"] = "température (°C)";
// Sensors - Climate
Blockly.Msg["SENSORS_BMP280_READDATA_TITLE"] = "[BMP280 Sensor %1] %2";
Blockly.Msg["SENSORS_BMP280_READDATA_TOOLTIP"] = IMG_MODULE_BMP280 + Blockly.Tooltip.SEP + "This block uses the BMP280 sensor to return the ambient temperature in ° C, the pressure in Pa, or the altitude in m. Connect the sensor to I2C pins.";
Blockly.Msg["SENSORS_BMP280_TEMPERATURE"] = "temperature (°C)";
Blockly.Msg["SENSORS_BMP280_PRESSURE"] = "pressure (Pa)";
Blockly.Msg["SENSORS_BMP280_ALTITUDE"] = "altitude (m)";
Blockly.Msg["SENSORS_GETGROVEMOISTURE_TITLE"] = "[Moisture Sensor] moisture on pin %1";
Blockly.Msg["SENSORS_GETGROVEMOISTURE_TOOLTIP"] = IMG_MODULE_MOISTURE + Blockly.Tooltip.SEP + "Return moisture measurement (from 0 to 1023) from the grove moisture sensor on analog pins A0 up through A5.";
Blockly.Msg["SENSORS_GETGROVETEMPERATURE_TITLE"] = "[Temperature Sensor] temperature (°C) on pin %1 ";
Blockly.Msg["SENSORS_GETGROVETEMPERATURE_TOOLTIP"] = IMG_MODULE_TEMPERATURE + Blockly.Tooltip.SEP + "Return grove temperature sensor value (from 0 to 1023 converted in °C ) on analog pins A0 up through A5.";
Blockly.Msg["SENSORS_GETGROVEHIGHTEMP_TITLE"] = "[H.T° Sensor] temperature (°C) on pins A1 %1 A0 %2";
Blockly.Msg["SENSORS_GETGROVEHIGHTEMP_TOOLTIP"] = IMG_MODULE_HIGH_TEMPERATURE + Blockly.Tooltip.SEP + "Return thermocouple temperature dorm 50 to 600 °C with grove high temperature sensor. Connect sensor on analog pins A0 up through A5.";
Blockly.Msg["SENSORS_MAX6675_READTEMP_TITLE"] = "[MAX6675 Sensor & Thermocouple] temperature %1 %2 on pins SO %3 CS %4 CLK %5";
Blockly.Msg["SENSORS_MAX6675_READTEMP_TOOLTIP"] = IMG_MODULE_MAX6675 + Blockly.Tooltip.SEP + "This block uses the MAX6675 sensor and thermocouple to return the temperature, setting an acquisition time of more than 0.5 seconds.";
Blockly.Msg["SENSORS_DHT_READDATA_TITLE"] = "[%1 Sensor] %2 on pin %3";
Blockly.Msg["SENSORS_DHT_READDATA_TOOLTIP"] = IMG_MODULE_DHT11 + Blockly.Tooltip.SEP + "Return temperature (in °C) or air humidity (in %) from dht11 or dht22 sensor on digital pins DO up through D13.";
Blockly.Msg["SENSORS_DHT_TEMPERATURE"] = "temperature (°C)";
Blockly.Msg["SENSORS_DHT_HUMIDITY"] = "humidity (%)";
Blockly.Msg["SENSORS_MPX5700AP_GETPRESSURE_TITLE"] = "[MPX5700AP Sensor] pressure (kPa) on pin %1";
Blockly.Msg["SENSORS_MPX5700AP_GETPRESSURE_TOOLTIP"] = IMG_MODULE_MPX5700AP + Blockly.Tooltip.SEP + "Return pressure measurement (in kPa) from the pressure sensor grove MPX5700AP on analog pins A0 up through A5.";
Blockly.Msg["SENSORS_BME680_READDATA_TITLE"] = "[BME680 Sensor] %1";
Blockly.Msg["SENSORS_BME680_READDATA_TOOLTIP"] = IMG_MODULE_BME680 + Blockly.Tooltip.SEP + "This block uses the BME680 sensor to return the ambient temperature (in °C), the pressure (in Pa), the humidity (in %) or the gas (in Ω). Connect the sensor to I2C pins.";
Blockly.Msg["SENSORS_BME680_TEMPERATURE"] = "temperature (°C)";
Blockly.Msg["SENSORS_BME680_PRESSURE"] = "pressure (Pa)";
Blockly.Msg["SENSORS_BME680_HUMIDITY"] = "humidity (%)";
Blockly.Msg["SENSORS_BME680_GAS"] = "gas (Ω)";
Blockly.Msg["SENSORS_DS18B20_GETTEMPERATURE_TITLE"] = "[DS18B20 Sensor] temperature on pin %1";
Blockly.Msg["SENSORS_DS18B20_GETTEMPERATURE_TOOLTIP"] = IMG_MODULE_DS18B20 + Blockly.Tooltip.SEP + "Return the temperature with the DS18B20 grove sensor on digital pins D0 to D13. This sensor is used to measure the water temperature. Dive exerted from the probe to measure the water temperature. Please note, for temperatures over 70°C, the probe cannot measure for a long time.";
Blockly.Msg["SENSORS_GETGROVEWATER_TITLE"] = "[Water Sensor] water amount on pin %1";
Blockly.Msg["SENSORS_GETGROVEWATER_TOOLTIP"] = IMG_MODULE_WATER + Blockly.Tooltip.SEP + "Return water amount (from 0 to 1023) from the grove water sensor on analog pins A0 up through A5.";
Blockly.Msg["SENSORS_GETRAINGAUGE_TITLE"] = "[Rain Gauge Sensor] state value on pin %1 ";
Blockly.Msg["SENSORS_GETRAINGAUGE_TOOLTIP"] = IMG_MODULE_RAIN_GAUGE + Blockly.Tooltip.SEP + "Return rain gauge grove state (1 if it's raining or 0 else) on digital pins D0 up through D13.";
Blockly.Msg["SENSORS_GETANEMOMETER_TITLE"] = "[Anemometer] state value on pin %1 ";
Blockly.Msg["SENSORS_GETANEMOMETER_TOOLTIP"] = IMG_MODULE_ANEMOMETER + Blockly.Tooltip.SEP + "Return grove anemometer state (twice state HIGH on each rotation) on digital pins D0 up through D13.";
// Sensors - Sound & Light
Blockly.Msg["SENSORS_GETGROVELIGHT_TITLE"] = "[Light Sensor] light level on pin %1 ";
Blockly.Msg["SENSORS_GETGROVELIGHT_TOOLTIP"] = IMG_MODULE_LIGHT + Blockly.Tooltip.SEP + "Return grove light sensor value (from 0 to 1023) on analog pins A0 to A5.";
Blockly.Msg["SENSORS_SI1145_GETLIGHT_TITLE"] = "[SI1145 Sensor] get light %1";
Blockly.Msg["SENSORS_SI1145_GETLIGHT_TOOLTIP"] = IMG_MODULE_SI1145 + Blockly.Tooltip.SEP + "Return Ultraviolet light index, IR light (in lumen) or Visible light (in lumen) from si1145 sensor. It works with Grove Sunlight Sensor or GY1145 sensor. Connect sensor on I2C port.";
Blockly.Msg["SENSORS_SI1145_UV"] = "UV index";
Blockly.Msg["SENSORS_SI1145_VISIBLE"] = "visible (lumen)";
Blockly.Msg["SENSORS_SI1145_IR"] = "infrared (lumen)";
Blockly.Msg["SENSORS_GETUVINDEX_TITLE"] = "[Ultraviolet Sensor] UV index on pin %1";
Blockly.Msg["SENSORS_GETUVINDEX_TOOLTIP"] = IMG_MODULE_UV + Blockly.Tooltip.SEP + "Return UV index, for waves between 240 nm and 380 nm, with UV grove sensor on analog pins A0 to A5.";
Blockly.Msg["SENSORS_GROVECOLOR_GETDATA_TITLE"] = "[Color Sensor] %1";
Blockly.Msg["SENSORS_GROVECOLOR_GETDATA_TOOLTIP"] = IMG_MODULE_I2C_COLOR + Blockly.Tooltip.SEP + "Lets you read the level of one of the three primary colors with the Grove color sensor, returns a level between 0 and 10240.";
Blockly.Msg["COLOR_RED"] = "level of red";
Blockly.Msg["COLOR_GREEN"] = "level of green";
Blockly.Msg["COLOR_BLUE"] = "level of blue";
Blockly.Msg["SENSORS_GROVECOLOR_TEMP"] = "color temperature (K)";
Blockly.Msg["SENSORS_GROVECOLOR_LUX"] = "luminosity (lux)";
Blockly.Msg["SENSORS_CAMERA_SNAPSHOT_TITLE"] = " [Camera module] Take a picture %1 [SD Shield] Save to a microSD card on pin %2";
Blockly.Msg["SENSORS_CAMERA_SNAPSHOT_TOOLTIP"] = IMG_MODULE_CAMERA + Blockly.Tooltip.SEP + "Take a picture and save it to a microSD card connected to a drive connected to the Arduino. See the tutorial (right click on the block then Help)";
Blockly.Msg["SENSORS_GETGROVESOUND_TITLE"] = "[Sound Sensor] sound level (dB) on pin %1 ";
Blockly.Msg["SENSORS_GETGROVESOUND_TOOLTIP"] = IMG_MODULE_SOUND_LOUDNESS + Blockly.Tooltip.SEP + "Return grove sound sensor value (from 0 to 1023 converted in dB) on analog pins A0 to A5.";

// Sensors - Distance & Motion
Blockly.Msg["SENSORS_GETGROVEULTRASONIC_TITLE"] = "[Ultrasonic Sensor] %1 on pin %2";
Blockly.Msg["SENSORS_GETGROVEULTRASONIC_TOOLTIP"] = IMG_MODULE_ULTRASONIC + Blockly.Tooltip.SEP + "Return distance measurement (in centimeters) or the duration of round trip from the grove ultrasonic ranger sensor on digital pins D0 to D13.";
Blockly.Msg["SENSORS_GETGESTURE_TITLE"] = "[Gesture Sensor] gesture type";
Blockly.Msg["SENSORS_GETGESTURE_TOOLTIP"] = IMG_MODULE_GESTURE + Blockly.Tooltip.SEP + "Return the gesture type ('right', 'left', 'up', 'down', 'forward', 'backward', 'clockwise', 'wave') from grove gesture sensor. Connect sensor on I2C port.";
Blockly.Msg["SENSORS_GETGROVELINEFINDER_TITLE"] = "[Line Finder Sensor] line finder state on pin %1 ";
Blockly.Msg["SENSORS_GETGROVELINEFINDER_TOOLTIP"] = IMG_MODULE_LINE_FINDER + Blockly.Tooltip.SEP + "Return grove touch sensor state (0 or 1) on digital pins D0 up through D13.";
Blockly.Msg["SENSORS_GETGROVETILT_TITLE"] = "[Tilt Module] tilt state on pin %1 ";
Blockly.Msg["SENSORS_GETGROVETILT_TOOLTIP"] = IMG_MODULE_TILT + Blockly.Tooltip.SEP + "Return grove tilt state (0 or 1) on digital pins D0 up through D13.";
Blockly.Msg["SENSORS_GETGROVEMOTION_TITLE"] = "[PIR Motion Sensor] movement state value on pin %1 ";
Blockly.Msg["SENSORS_GETGROVEMOTION_TOOLTIP"] = IMG_MODULE_MOTION + Blockly.Tooltip.SEP + "Return grove PIR Motion state (0 if there is movement or 1 else) on digital pins D0 up through D13.";
Blockly.Msg["SENSORS_GETPIEZOVIBRATION_TITLE"] = "[Piezo Vibration sensor] state value on pin %1 ";
Blockly.Msg["SENSORS_GETPIEZOVIBRATION_TOOLTIP"] = IMG_MODULE_VIBRATIONS + Blockly.Tooltip.SEP + "Return vibration state (0 or 1) from piezo vibration grove sensor on digital pins D0 up through D13.";
// Sensors - Others
Blockly.Msg["SENSORS_INA219_GETDATA_TITLE"] = "[INA219 Sensor] %1";
Blockly.Msg["SENSORS_INA219_GETDATA_TOOLTIP"] = IMG_MODULE_INA219 + Blockly.Tooltip.SEP + "Return parameter choosen by user as voltage (in V), current (in mA) or power (in mW) wih the Adafruit INA219 sensor. Connect sensor on I2C port.";
Blockly.Msg["SENSORS_INA219_BUS_VOLTAGE"] = "bus voltage (V)";
Blockly.Msg["SENSORS_INA219_SHUNT_VOLTAGE"] = "shunt voltage (mV)";
Blockly.Msg["SENSORS_INA219_LOAD_VOLTAGE"] = "load voltage (V)";
Blockly.Msg["SENSORS_INA219_CURRENT"] = "current (mA)";
Blockly.Msg["SENSORS_INA219_POWER"] = "power (mW)";
Blockly.Msg["SENSORS_FSR402_GETFORCE_TITLE"] = "[Force Sensor] value on pin %1";
Blockly.Msg["SENSORS_FSR402_GETFORCE_TOOLTIP"] = IMG_MODULE_FORCE + Blockly.Tooltip.SEP + "Return force exerted on round detector from 0 to 1024 with the grove force sensor (FSR402) on analog pin A0 to A5.";
Blockly.Msg["SENSORS_GETPULSE_TITLE"] = "[Pulse Sensor] value on pin %1";
Blockly.Msg["SENSORS_GETPULSE_TOOLTIP"] = IMG_MODULE_PULSE + Blockly.Tooltip.SEP + "Return pulse value from 0 to 1024 with the grove force sensor on analog pin A0 to A5.";

// Actuators
Blockly.Msg["ACTUATORS_SERVO_SETANGLE_TITLE"] = "[Servomotor] set angle %1 on pin %2";
Blockly.Msg["ACTUATORS_SERVO_SETANGLE_TOOLTIP"] = IMG_MODULE_SERVO + Blockly.Tooltip.SEP + "Enable to control servo angle (from 0 to 180) on digital pins from D0 up through D13. Warning, microbit has to be powered by external batterie in order to provide enough energy to servomotor.";
Blockly.Msg["ACTUATORS_GROVEVIBRATIONMOTOR_CONTROL_TITLE"] = "[Vibration motor] control state to %1 on pin %2";
Blockly.Msg["ACTUATORS_GROVEVIBRATIONMOTOR_CONTROL_TOOLTIP"] = IMG_MODULE_VIBRATION_MOTOR + Blockly.Tooltip.SEP + "Enable to control state of grove vibration motor (HIGH or LOW) on digitals pins D0 up through D13.";
Blockly.Msg["ACTUATORS_GROVERELAY_CONTROL_TITLE"] = "[Relay module] control state to %1 on pin %2";
Blockly.Msg["ACTUATORS_GROVERELAY_CONTROL_TOOLTIP"] = IMG_MODULE_RELAY + Blockly.Tooltip.SEP + "Enable to control state grove relay module (HIGH or LOW) on digitals pins D0 up through D13.";
Blockly.Msg["ACTUATORS_GROVEBUZZER_CONTROLSTATE_TITLE"] = "[Buzzer/Speaker] set to %1 on pin %2";
Blockly.Msg["ACTUATORS_GROVEBUZZER_CONTROLSTATE_TOOLTIP"] = IMG_MODULE_BUZZER_SPEAKER + Blockly.Tooltip.SEP + "The Buzzer Grove module can be connected to a digital output and will emit a tone when the output is ON. It can also be connected to a PWM output (noted ~ on Arduino) to generate various frequencies (see other block).";
Blockly.Msg["ACTUATORS_GROVEBUZZER_PLAYNOTE_TITLE"] = "[Buzzer/Speaker] play the note %1 on pin %2";
Blockly.Msg["ACTUATORS_GROVEBUZZER_PLAYNOTE_TOOLTIP"] = IMG_MODULE_BUZZER_SPEAKER + Blockly.Tooltip.SEP + "Play the selected note on a digital pin.";
Blockly.Msg["ACTUATORS_GROVEBUZZER_PLAYMUSIC_TITLE"] = "[Buzzer/Speaker] play music %1 on pin %2";
Blockly.Msg["ACTUATORS_GROVEBUZZER_PLAYMUSIC_TOOLTIP"] = IMG_MODULE_BUZZER_SPEAKER + Blockly.Tooltip.SEP + "Enable to play the choosen music on grove buzzer module on digital pins D0 up through D13.";
Blockly.Msg["ACTUATORS_TONE_TITLE"] = "[Buzzer/Speaker] set the frequency %1 on pin %2";
Blockly.Msg["ACTUATORS_TONE_TOOLTIP"] = IMG_MODULE_BUZZER_SPEAKER + Blockly.Tooltip.SEP + "This block allows to play a given frequency with a loudspeaker module or a buzzer.";
Blockly.Msg["ACTUATORS_NOTONE_TITLE"] = "[Buzzer/Speaker] stop music on pin %1";
Blockly.Msg["ACTUATORS_NOTONE_TOOLTIP"] = IMG_MODULE_BUZZER_SPEAKER + Blockly.Tooltip.SEP + "Enable to stop the music in playing.";
Blockly.Msg["ACTUATORS_GROVEWATERATOMIZATION_CONTROL_TITLE"] = "[Water atomizer] control state to %1 on pin %2";
Blockly.Msg["ACTUATORS_GROVEWATERATOMIZATION_CONTROL_TOOLTIP"] = IMG_MODULE_WATER_ATOMIZER + Blockly.Tooltip.SEP + "Enable to control state of grove water atomizer (HIGH or LOW) on digitals pins D0 up through D13.";
Blockly.Msg["ACTUATORS_GROVEELECTROMAGNET_CONTROL_TITLE"] = "[Electromagnet] control state to %1 on pin %2";
Blockly.Msg["ACTUATORS_GROVEELECTROMAGNET_CONTROL_TOOLTIP"] = IMG_MODULE_ELECTROMAGNET + Blockly.Tooltip.SEP + "Enable to control state of grove water atomizer (HIGH or LOW) on digitals pins D0 up through D13.";

// Robots - basic modules
Blockly.Msg["ROBOTS_MBOT_GO_TITLE"] = "[Motors] control robot %1 speed %2";
Blockly.Msg["ROBOTS_MBOT_GO_FORWARD"] = "Forward";
Blockly.Msg["ROBOTS_MBOT_GO_REVERSE"] = "Reverse";
Blockly.Msg["ROBOTS_MBOT_GO_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Enable to control car running (FORWARD/REVERSE) and motor speed (from 0 to 255) of mBot robot.";
Blockly.Msg["ROBOTS_MBOT_CONTROLMOTOR_TITLE"] = "[Motors] control motor %1 direction %2 speed %3";
Blockly.Msg["ROBOTS_MBOT_RIGHT"] = "Right";
Blockly.Msg["ROBOTS_MBOT_LEFT"] = "Left";
Blockly.Msg["ROBOTS_MBOT_RIGHT&LEFT"] = "Right & Left";
Blockly.Msg["ROBOTS_MBOT_RIGHT_F"] = "Right";
Blockly.Msg["ROBOTS_MBOT_LEFT_F"] = "Left";
Blockly.Msg["ROBOTS_MBOT_RIGHT&LEFT_F"] = "Right & Left";
Blockly.Msg["ROBOTS_MBOT_CONTROLMOTOR_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Enable to control right motor (9) and left motor (10) changing direction (↻ : FOWARD, ↺ : REVERSE) or speed (from 0 to 255) of mBot robot.";
Blockly.Msg["ROBOTS_MBOT_STOPMOTORS_TITLE"] = "[Motors] stop motor %1";
Blockly.Msg["ROBOTS_MBOT_STOPMOTORS_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Enable to stop right, left or both motors of mBot robot.";
Blockly.Msg["ROBOTS_MBOT_SETRGBLED_TITLE"] = "[Board] set color R %1 G %2 B %3 on LED %4";
Blockly.Msg["ROBOTS_MBOT_SETRGBLED_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Enable to control RGB LED color on board of mBot robot as (R,G,B) value is from 0 to 255.";
Blockly.Msg["ROBOTS_MBOT_SETBUZZER_TITLE"] = "[Board] set buzzer at frequency %1 during %2 (ms)";
Blockly.Msg["ROBOTS_MBOT_SETBUZZER_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Enable to control mBot buzzer at any frequency during any time in milliseconds";
Blockly.Msg["ROBOTS_MBOT_PLAYMUSIC_TITLE"] = "[Board] play music %1";
Blockly.Msg["ROBOTS_MBOT_PLAYMUSIC_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Enable to play music on mBot buzzer.";
Blockly.Msg["ROBOTS_MBOT_GETLIGHT_TITLE"] = "[Board] light level";
Blockly.Msg["ROBOTS_MBOT_GETLIGHT_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Return light level of board sensor of mBot.";
Blockly.Msg["ROBOTS_MBOT_GETBUTTONSTATE_TITLE"] = "[Board] button is %1";
Blockly.Msg["ROBOTS_MBOT_PRESSED"] = "pressed";
Blockly.Msg["ROBOTS_MBOT_RELEASED"] = "released";
Blockly.Msg["ROBOTS_MBOT_GETBUTTONSTATE_TOOLTIP"] = IMG_MODULE_MBOT + Blockly.Tooltip.SEP + "Return button state of mBot board.";
Blockly.Msg["ROBOTS_MBOT_GETREMOTECONTROLBUTTON_TITLE"] = "[Remote control] button %1 is pressed";
Blockly.Msg["ROBOTS_MBOT_GETREMOTECONTROLBUTTON_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_REMOTE_CONTROL + Blockly.Tooltip.SEP + "Return true or false if any button of mBot remote control mBot is pressed.";
// Robots - Makeblock modules
Blockly.Msg["ROBOTS_MAKEBLOCK_ULTRASONICRANGER_TITLE"] = "[Ultrasonic Sensor] distance in %1 on port %2";
Blockly.Msg["ROBOTS_MAKEBLOCK_ULTRASONICRANGER_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_ULTRASONIC + Blockly.Tooltip.SEP + "Return distance measurement (in centimeters) from the ultrasonic sensor of Makeblock. Connect sensor on RJ45 port from 1 to 4.";
Blockly.Msg["ROBOTS_MAKEBLOCK_READLINEFINDER_TITLE"] = "[Line Follower] sensor %1 inside of black line on port %2";
Blockly.Msg["ROBOTS_MAKEBLOCK_READLINEFINDER_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_LINEFINDER + Blockly.Tooltip.SEP + "Return state of line follower module (0 ou 1) from sensor1 (left) or sensor2 (right). Connect sensor on RJ45 port from 1 to 4.";
Blockly.Msg["ROBOTS_MAKEBLOCK_LEFT_1"] = "left";
Blockly.Msg["ROBOTS_MAKEBLOCK_RIGHT_2"] = "right";
Blockly.Msg["ROBOTS_MAKEBLOCK_GETCOLOR_TITLE"] = "[Color Sensor] %1 on port %2";
Blockly.Msg["ROBOTS_MAKEBLOCK_GETCOLOR_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_COLOR + Blockly.Tooltip.SEP + "Lets you read the level of one of the three primary colors with the Makeblock color sensor. It returns also the measured color as 0 (White), 1 (Pinke), 2 (Red), 3 (Orange), 4 (Yellow), 5 (Green), 5 (Cyan), 6 (Blue), 7 (Purple), 8 (Black), 9 (Gold). Connect sensor on RJ45 port from 1 to 4.";
Blockly.Msg["ROBOTS_MAKEBLOCK_COLOR"] = "color";
Blockly.Msg["ROBOTS_MAKEBLOCK_RED"] = "level of red";
Blockly.Msg["ROBOTS_MAKEBLOCK_GREEN"] = "level of green";
Blockly.Msg["ROBOTS_MAKEBLOCK_BLUE"] = "level of blue";
Blockly.Msg["ROBOTS_MAKEBLOCK_GETGAS_TITLE"] = "[Gas MQ2 Sensor] %1 on port %2";
Blockly.Msg["ROBOTS_MAKEBLOCK_GETGAS_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_GAS + Blockly.Tooltip.SEP + "Lets you read the amount of gas with the Makeblock gas sensor MQ2. It is possible to get a state value as 0 (no gas) or 1 (gas). Use the potentiometer on module in order to set the appropriate concentration threshold. Connect sensor on RJ45 port 1 or 2.";
Blockly.Msg["ROBOTS_MAKEBLOCK_GAS_DIGITAL"] = "state";
Blockly.Msg["ROBOTS_MAKEBLOCK_GAS_ANALOG"] = "value";
Blockly.Msg["ROBOTS_MAKEBLOCK_GETFLAME_TITLE"] = "[Flame Sensor] %1 on port %2";
Blockly.Msg["ROBOTS_MAKEBLOCK_GETFLAME_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_FLAME + Blockly.Tooltip.SEP + "Lets you read the detectable flame with the Makeblock flame sensor. It is possible to get a state value as 0 (no flame) or 1 (flame). Use the potentiometer on module in order to set the appropriate the flame limit threshold. This sensor detect the infrared light with wavelength from 700 nm to 1200 nm. Connect sensor on RJ45 port 1 or 2.";
Blockly.Msg["ROBOTS_MAKEBLOCK_FLAME_DIGITAL"] = "state";
Blockly.Msg["ROBOTS_MAKEBLOCK_FLAME_ANALOG"] = "value";
Blockly.Msg["ROBOTS_MAKEBLOCK_WATERPROOFTEMPERATURE_TITLE"] = "[DS18B20 Sensor] temperature on port %1";
Blockly.Msg["ROBOTS_MAKEBLOCK_WATERPROOFTEMPERATURE_TOOLTIP"] = IMG_MODULE_MAKEBLOCK_WATERPROOF_TEMPERATURE + Blockly.Tooltip.SEP + "Lets you read the measure the temperature with the Makeblock waterproof ds18b20 sensor. Connect sensor on RJ45 port from 1 to 4.";


// Colour
Blockly.Msg["COLOUR_PICKER_HELPURL"] = "https://en.wikipedia.org/wiki/Color";
Blockly.Msg["COLOUR_PICKER_TOOLTIP"] = "Choose a colour from the palette.";
//Blockly.Msg["COLOUR_BLEND_COLOUR1"] = "colour 1";
//Blockly.Msg["COLOUR_BLEND_COLOUR2"] = "colour 2";
//Blockly.Msg["COLOUR_BLEND_HELPURL"] = "http://meyerweb.com/eric/tools/color-blend/";
//Blockly.Msg["COLOUR_BLEND_RATIO"] = "ratio";
//Blockly.Msg["COLOUR_BLEND_TITLE"] = "blend";
//Blockly.Msg["COLOUR_BLEND_TOOLTIP"] = "Blends two colours together with a given ratio (0.0 - 1.0).";
//Blockly.Msg["COLOUR_RANDOM_HELPURL"] = "http://randomcolour.com";
//Blockly.Msg["COLOUR_RANDOM_TITLE"] = "random colour";
//Blockly.Msg["COLOUR_RANDOM_TOOLTIP"] = "Choose a colour at random.";
//Blockly.Msg["COLOUR_RGB_BLUE"] = "blue";
//Blockly.Msg["COLOUR_RGB_GREEN"] = "green";
//Blockly.Msg["COLOUR_RGB_HELPURL"] = "http://www.december.com/html/spec/colorper.html";
//Blockly.Msg["COLOUR_RGB_RED"] = "red";
//Blockly.Msg["COLOUR_RGB_TITLE"] = "colour with";
//Blockly.Msg["COLOUR_RGB_TOOLTIP"] = "Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";

/* Blocks existing on microbit plateforme with OLED module
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
*/