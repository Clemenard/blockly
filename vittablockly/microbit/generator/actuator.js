Blockly.Python.display_lcdSetText = function () {
    Blockly.Python.definitions_.import_mb_i2c_lcd = LCD1602_IMPORT;
    Blockly.Python.addInit('init_lcd1602', "lcd = LCD1602()");
    var txt = Blockly.Python.valueToCode(this, "TEXT", Blockly.Python.ORDER_NONE) || "''";
    return "lcd.setCursor(0," + this.getFieldValue('LINE') + ")" + NEWLINE + "lcd.writeTxt(str(" + txt + "))" + NEWLINE;
};
Blockly.Python.display_lcdClear = function () {
    Blockly.Python.definitions_.import_mb_i2c_lcd = LCD1602_IMPORT;
    Blockly.Python.addInit('init_lcd1602', "lcd = LCD1602()");
    return "lcd.clear()" + NEWLINE;
};
Blockly.Python.display_controlNeopixelLed = function () {
    Blockly.Python.definitions_.import_neopixel = IMPORT_NEOPIXEL;
    Blockly.Python.addInit('init_neopixel', "np = neopixel.NeoPixel(" + this.getFieldValue("PIN") + ", 30)");
    var led = Blockly.Python.valueToCode(this, "LED", Blockly.Python.ORDER_NONE) || 0;
    var r = Blockly.Python.valueToCode(this, "R", Blockly.Python.ORDER_NONE) || 0;
    var g = Blockly.Python.valueToCode(this, "G", Blockly.Python.ORDER_NONE) || 0;
    var b = Blockly.Python.valueToCode(this, "B", Blockly.Python.ORDER_NONE) || 0;
    if (r > 255) r = 255;
    if (r < 0) r = 0;
    if (g > 255) g = 255;
    if (g < 0) g = 0;
    if (b > 255) b = 255;
    if (b < 0) b = 0;
    return "np[" + led + "] = (" + r + ", " + g + ", " + b + ")" + NEWLINE + "np.show()" + NEWLINE;
};
Blockly.Python.display_controlColorNeopixelLed = function () {
    Blockly.Python.definitions_.import_neopixel = IMPORT_NEOPIXEL;
    Blockly.Python.addInit('init_neopixel', "np = neopixel.NeoPixel(" + this.getFieldValue("PIN") + ", 30)");
    var led = Blockly.Python.valueToCode(this, "LED", Blockly.Python.ORDER_NONE) || 0;
    var colour = Blockly.Python.valueToCode(this, "COLOR", Blockly.Python.ORDER_NONE) || "(0,0,0)";
    return "np[" + led + "] = " + colour + NEWLINE + "np.show()" + NEWLINE;
};
Blockly.Python.display_rainbowNeopixel = function () {
    Blockly.Python.definitions_.import_neopixel = IMPORT_NEOPIXEL;
    var led = Blockly.Python.valueToCode(this, "LED", Blockly.Python.ORDER_NONE) || 0;
    Blockly.Python.addInit('init_neopixel', "np = neopixel.NeoPixel(" + this.getFieldValue("PIN") + ", " + led + ")");
    Blockly.Python.addFunction('func_rainbow', DEF_NEOPIXEL_RAINBOW);
    return "rainbow(" + led + ")" + NEWLINE;
};
Blockly.Python.actuators_setServoAngle = function () {
    Blockly.Python.addFunction('func_set_angle', DEF_SERVO_SET_ANGLE);
    let angle = Blockly.Python.valueToCode(this, "ANGLE", Blockly.Python.ORDER_NONE) || 0;
    return "setServoAngle(" + this.getFieldValue("PIN") + ", " + angle + ")" + NEWLINE;
};
Blockly.Python.io_getKeypadNumber = function () {
    Blockly.Python.addInit('init_one_module', "uart.init(baudrate=9600, bits=8, parity=None, stop=1, tx=" + this.getFieldValue("TX") + ", rx=" + this.getFieldValue("RX") + ")");
    Blockly.Python.addFunction('func_get_keypad', DEF_KEYPAD_GET_NUMBER);
    return ['getKeypadNumber()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.display_setNumberGrove4Digit = function () {
    let pinCLK = this.getFieldValue("CLK");
    let pinDIO = this.getFieldValue("DIO");
    Blockly.Python.addConstant('const_ascii_num', DEF_4DIGIT_ASCII_NUMERIC_TABLE);
    Blockly.Python.addFunction('func_tm1637_init', DEF_4DIGIT_INIT);
    Blockly.Python.addFunction('func_tm1637_encode_num', DEF_4DIGIT_ENCODE_NUM);
    Blockly.Python.addInit('init_tm1637', "init4dd(" + pinCLK + ", " + pinDIO + ")");
    var n = Blockly.Python.valueToCode(this, "N", Blockly.Python.ORDER_NONE) || 0;
    switch (this.getFieldValue("SHOW")) {
        case "num":
            if (n < 0) n = 0;
            if (n > 9999) n = 9999;
            Blockly.Python.addFunction('func_tm1637_set_number', DEF_4DIGIT_SET_NUMBER);
            return "setNumber(" + pinCLK + ", " + pinDIO + ", " + n + ")" + NEWLINE;
        case "temp":
            if (n < 0) n = 0;
            if (n > 99) n = 99;
            Blockly.Python.addFunction('func_tm1637_set_number', DEF_4DIGIT_SET_TEMP);
            return "setTemp(" + pinCLK + ", " + pinDIO + ", int(" + n + "))" + NEWLINE;
        default:
            throw Error("Unhandled option (lists_getSublist)");
    }
};
Blockly.Python.display_setClockGrove4Digit = function () {
    var date = new Date();
    var pinCLK = this.getFieldValue("CLK");
    var pinDIO = this.getFieldValue("DIO");
    Blockly.Python.addConstant('const_chronometerClock', "chrono0Clk = 0" + NEWLINE
        + "#Warning, the clock is recovered by browser when micro:bit is flashed." + NEWLINE
        + "#If micro:bit is powered off, time will not flow." + NEWLINE
        + "MIN_START = " + date.getMinutes() + NEWLINE
        + "HOUR_START = " + date.getHours());
    Blockly.Python.addConstant('const_ascii_num', DEF_4DIGIT_ASCII_NUMERIC_TABLE);
    Blockly.Python.addFunction('func_tm1637_init', DEF_4DIGIT_INIT);
    Blockly.Python.addFunction('func_tm1637_encode_num', DEF_4DIGIT_ENCODE_NUM);
    Blockly.Python.addFunction('func_tm1637_set_clock', DEF_4DIGIT_SET_CLOCK);
    Blockly.Python.addFunction('func_tm1637_get_time', DEF_4DIGIT_GET_TIME);
    Blockly.Python.addInit('init_tm1637', "init4dd(" + pinCLK + ", " + pinDIO + ")");
    return "setClock(" + pinCLK + ", " + pinDIO + ", getTime()[0], getTime()[1])" + NEWLINE;
};
Blockly.Python.actuators_setGroveBuzzerFreq = function () {
    Blockly.Python.definitions_.import_time = IMPORT_TIME;
    Blockly.Python.addFunction('func_beep', DEF_BUZZER_BEEP);
    var freq = Blockly.Python.valueToCode(this, "FREQ", Blockly.Python.ORDER_NONE) || "0";
    var time = Blockly.Python.valueToCode(this, "TIME", Blockly.Python.ORDER_NONE) || "0";
    return "beep(" + this.getFieldValue("PIN") + ", " + freq + ", " + time + ")" + NEWLINE;
};
Blockly.Python.actuators_playMusicGroveBuzzer = function () {
    var pin = this.getFieldValue("PIN");
    Blockly.Python.definitions_.import_time = IMPORT_TIME;
    Blockly.Python.addFunction('func_beep', DEF_BUZZER_BEEP);
    switch (this.getFieldValue("MUSIC")) {
        case "0":
            Blockly.Python.addFunction('func_music_G', DEF_BUZZER_GAMME);
            return "BuzzerGamme(" + pin + ")" + NEWLINE;
        case "1":
            Blockly.Python.addFunction('func_music_SW', DEF_BUZZER_STARWARS);
            return "BuzzerStarWars(" + pin + ")" + NEWLINE;
        case "2":
            Blockly.Python.addFunction('func_music_R2D2', DEF_BUZZER_R2D2);
            return "BuzzerR2D2(" + pin + ")" + NEWLINE;
        default:
            throw Error("Unhandled option (lists_getSublist)");
    }
};
Blockly.Python.display_morpionNewGame = function () {
    Blockly.Python.definitions_.import_oled_mp = OLEDM_IMPORT;
    Blockly.Python.definitions_.import_mb_morpion = MORPION_IMPORT;
    Blockly.Python.addInit('init_oledm', "oled = OLEDM()");
    Blockly.Python.addInit('init_morpion', "morpion = MORPION(oled._s)");
    return "morpion.newGame()" + NEWLINE;
};
Blockly.Python.display_morpionMoveCursor = function () {
    Blockly.Python.definitions_.import_oled_mp = OLEDM_IMPORT;
    Blockly.Python.definitions_.import_mb_morpion = MORPION_IMPORT;
    Blockly.Python.addInit('init_oledm', "oled = OLEDM()");
    Blockly.Python.addInit('init_morpion', "morpion = MORPION(oled._s)");
    return "morpion.mvCursor()" + NEWLINE;
};
Blockly.Python.display_morpionSetPlayerFigure = function () {
    Blockly.Python.definitions_.import_oled_mp = OLEDM_IMPORT;
    Blockly.Python.definitions_.import_mb_morpion = MORPION_IMPORT;
    Blockly.Python.addInit('init_oledm', "oled = OLEDM()");
    Blockly.Python.addInit('init_morpion', "morpion = MORPION(oled._s)");
    if (this.getFieldValue("FIGURE") == "X") return "morpion.addCross()" + NEWLINE;
    if (this.getFieldValue("FIGURE") == "O") return "morpion.addCircle()" + NEWLINE;
};
Blockly.Python.display_morpionIsEndGame = function () {
    Blockly.Python.definitions_.import_oled_mp = OLEDM_IMPORT;
    Blockly.Python.definitions_.import_mb_morpion = MORPION_IMPORT;
    Blockly.Python.addInit('init_oledm', "oled = OLEDM()");
    Blockly.Python.addInit('init_morpion', "morpion = MORPION(oled._s)");
    return ['morpion.endGame()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.display_addOledText = function () {
    Blockly.Python.definitions_.import_mb_oled = OLED_IMPORT;
    Blockly.Python.addInit('init_oled', "oled = OLED()");
    let t = Blockly.Python.valueToCode(this, "TEXT", Blockly.Python.ORDER_NONE) || 0;
    let x = Blockly.Python.valueToCode(this, "X", Blockly.Python.ORDER_NONE) || 0;
    if (x > 11) x = 11;
    if (x < 0) x = 0;
    let y = Blockly.Python.valueToCode(this, "Y", Blockly.Python.ORDER_NONE) || 0;
    if (y > 3) y = 3;
    if (y < 0) y = 0;
    return "oled.addTxt(" + x + ", " + y + ", " + t + ")" + NEWLINE;
};
Blockly.Python.display_setOledPixel = function () {
    Blockly.Python.definitions_.import_mb_oled = OLED_IMPORT;
    Blockly.Python.addInit('init_oled', "oled = OLED()");
    let x = Blockly.Python.valueToCode(this, "X", Blockly.Python.ORDER_NONE) || 0;
    if (x > 63) x = 63;
    if (x < 0) x = 0;
    let y = Blockly.Python.valueToCode(this, "Y", Blockly.Python.ORDER_NONE) || 0;
    if (y > 31) y = 31;
    if (y < 0) y = 0;
    return "oled.set_px(" + x + ", " + y + ")" + NEWLINE;
};
Blockly.Python.display_showOledIcon = function () {
    Blockly.Python.definitions_.import_mb_oled = OLED_IMPORT;
    Blockly.Python.addInit('init_oled', "oled = OLED()");
    let i = this.getFieldValue("ICON") || "NO";
    let x = Blockly.Python.valueToCode(this, "X", Blockly.Python.ORDER_NONE) || 0;
    if (x > 59) x = 59;
    if (x < 0) x = 0;
    let y = Blockly.Python.valueToCode(this, "Y", Blockly.Python.ORDER_NONE) || 0;
    if (y > 31) y = 31;
    if (y < 0) y = 0;
    let state = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    if (state != 0 && state != 1) state = "True" == state ? 1 : 0;
    Blockly.Python.addPowerOn('stamp_' + i, "STAMP_" + i + " = oled.create_stamp(Image." + i + ")")
    return "oled.draw_stamp(" + x + ', ' + y + ', ' + "STAMP_" + i + ", s=" + state + ")" + NEWLINE;
};
Blockly.Python.display_clearOledScreen = function () {
    Blockly.Python.definitions_.import_mb_oled = OLED_IMPORT;
    Blockly.Python.addInit('init_oled', "oled = OLED()");
    return "oled.clear()" + NEWLINE;
};
Blockly.Python.display_setLevelLedBar = function () {
    Blockly.Python.addFunction('func_ledBar_init', DEF_LEDBAR_INIT);
    Blockly.Python.addFunction('func_ledBar_setLevel', DEF_LEDBAR_LEVEL);
    let val = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    return "levelBar(" + this.getFieldValue("DI") + ", " + this.getFieldValue("DCKI") + ", " + val + ")" + NEWLINE;
};
Blockly.Python.actuators_setVibrationMotor = function () {
    let state = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    if (state != 0 && state != 1) state = "True" == state ? 1 : 0;
    return this.getFieldValue("PIN") + '.write_digital(' + state + ')' + NEWLINE;
};
Blockly.Python.actuators_setGroveRelay = function () {
    let state = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    if (state != 0 && state != 1) state = "True" == state ? 1 : 0;
    return this.getFieldValue("PIN") + '.write_digital(' + state + ')' + NEWLINE;
};
Blockly.Python.display_setGroveSocketLed = function () {
    let state = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    if (state != 0 && state != 1) state = "True" == state ? 1 : 0;
    return this.getFieldValue("PIN") + '.write_digital(' + state + ')' + NEWLINE;
};
Blockly.Python.display_setTrafficLight = function () {
    let state = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    if (state != 0 && state != 1) state = "True" == state ? 1 : 0;
    return this.getFieldValue("PIN") + '.write_digital(' + state + ')' + NEWLINE;
};