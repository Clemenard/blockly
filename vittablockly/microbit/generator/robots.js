
Blockly.Python.robots_getMaqueenUltrasonicRanger = function () {
    Blockly.Python.definitions_.import_time = IMPORT_TIME;
    Blockly.Python.addFunction('func_maqueen_get_range', DEF_MAQUEEN_ULTRASONIC);
    return ["getUltrasonicRangeMq(" + this.getFieldValue('UNIT') + ")", Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.robots_controlMaqueenLed = function () {
    var state = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    if (state != 0 && state != 1) state = "True" == state ? 1 : 0;
    if (this.getFieldValue('LED') == 1) return "pin8.write_digital(" + state + ")" + NEWLINE;
    else return "pin12.write_digital(" + state + ")" + NEWLINE;
};
Blockly.Python.robots_setMaqueenGo = function () {
    var speed = Blockly.Python.valueToCode(this, "SPEED", Blockly.Python.ORDER_NONE) || 0;
    if (speed > 255) speed = 255;
    if (speed < 0) speed = 0;
    return "i2c.write(0x10, bytearray([0x00, " + this.getFieldValue('DIR') + ", " + speed + "]))" + NEWLINE + "i2c.write(0x10, bytearray([0x02, " + this.getFieldValue('DIR') + ", " + speed + "]))" + NEWLINE;
};
Blockly.Python.robots_controlMaqueenMotor = function () {
    var speed = Blockly.Python.valueToCode(this, "SPEED", Blockly.Python.ORDER_NONE) || 0;
    if (speed > 255) speed = 255;
    if (speed < 0) speed = 0;
    return "i2c.write(0x10, bytearray([" + this.getFieldValue('MOTOR') + ", " + this.getFieldValue('DIR') + ", " + speed + "]))" + NEWLINE;
};
Blockly.Python.robots_stopMaqueenMotors = function () {
    if (this.getFieldValue('MOTOR') == "all") {
        return "i2c.write(0x10, bytearray([0x00, 0, 0]))" + NEWLINE + "i2c.write(0x10, bytearray([0x02, 0, 0]))" + NEWLINE;
    }
    else return "i2c.write(0x10, bytearray([" + this.getFieldValue('MOTOR') + ", 0, 0]))" + NEWLINE;
};
Blockly.Python.robots_readMaqueenPatrol = function () {
    return [this.getFieldValue("PIN") + '.read_digital()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.robots_setMaqueenNeopixel = function () {
    Blockly.Python.definitions_.import_neopixel = IMPORT_NEOPIXEL;
    Blockly.Python.addInit('init_maqueen_neopixel', "npMaq = neopixel.NeoPixel(pin15, 4)");
    var r = Blockly.Python.valueToCode(this, "R", Blockly.Python.ORDER_NONE) || 0;
    var g = Blockly.Python.valueToCode(this, "G", Blockly.Python.ORDER_NONE) || 0;
    var b = Blockly.Python.valueToCode(this, "B", Blockly.Python.ORDER_NONE) || 0;
    if (r > 255) r = 255;
    if (r < 0) r = 0;
    if (g > 255) g = 255;
    if (g < 0) g = 0;
    if (b > 255) b = 255;
    if (b < 0) b = 0;
    if (this.getFieldValue("LED") == "all") {
        return "for i in range(4):" + NEWLINE + "  npMaq[i] = (" + r + ", " + g + ", " + b + ")" + NEWLINE + "npMaq.show()" + NEWLINE;
    }
    else {
        return "npMaq[" + this.getFieldValue("LED") + "] = (" + r + ", " + g + ", " + b + ")" + NEWLINE + "npMaq.show()" + NEWLINE;
    }
};
Blockly.Python.robots_setMaqueenRainbow = function () {
    Blockly.Python.definitions_.import_neopixel = IMPORT_NEOPIXEL;
    Blockly.Python.addInit('init_maqueen_neopixel', "npMaq = neopixel.NeoPixel(pin15, 4)");
    Blockly.Python.addFunction('func_rainbow', DEF_NEOPIXEL_RAINBOW);
    return "rainbow(4)" + NEWLINE;
};
Blockly.Python.robots_setMaqueenBuzzer = function () {
    Blockly.Python.definitions_.import_time = IMPORT_TIME;
    Blockly.Python.addFunction('func_beep', DEF_BUZZER_BEEP);
    let freq = Blockly.Python.valueToCode(this, "FREQ", Blockly.Python.ORDER_NONE) || "0";
    let time = Blockly.Python.valueToCode(this, "TIME", Blockly.Python.ORDER_NONE) || "0";
    return "beep(pin0, " + freq + ", " + time + ")" + NEWLINE;
};
Blockly.Python.robots_playMaqueenMusic = function () {
    Blockly.Python.definitions_.import_time = IMPORT_TIME;
    Blockly.Python.addFunction('func_beep', DEF_BUZZER_BEEP);
    switch (this.getFieldValue("MUSIC")) {
        case "0":
            Blockly.Python.addFunction('func_music_G', DEF_BUZZER_GAMME);
            return "BuzzerGamme(pin0)" + NEWLINE;
        case "1":
            Blockly.Python.addFunction('func_music_SW', DEF_BUZZER_STARWARS);
            return "BuzzerStarWars(pin0)" + NEWLINE;
        case "2":
            Blockly.Python.addFunction('func_music_R2D2', DEF_BUZZER_R2D2);
            return "BuzzerR2D2(pin0)" + NEWLINE;
        default:
            throw Error("Unhandled option (lists_getSublist)");
    }
};
Blockly.Python.robots_readBitBotLightSensor = function () {
    Blockly.Python.addFunction('func_bb_light_sensor', DEF_BITBOT_LIGHT_SENSOR);
    return ["readBBLightSensor(" + this.getFieldValue("RL") + ")", Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.robots_readBitBotPatrol = function () {
    return [this.getFieldValue("PIN") + '.read_digital()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.robots_setBitbotGo = function () {
    Blockly.Python.addFunction('func_bitbot_go', DEF_BITBOT_GO);
    var speed = Blockly.Python.valueToCode(this, "SPEED", Blockly.Python.ORDER_NONE) || 0;
    if (speed > 1023) speed = 1023;
    if (speed < 0) speed = 0;
    return "setBitBotgo(" + this.getFieldValue('DIR') + ", " + speed + ")" + NEWLINE;
};
Blockly.Python.robots_controlBitBotMotor = function () {
    var speed = Blockly.Python.valueToCode(this, "SPEED", Blockly.Python.ORDER_NONE) || 0;
    if (speed > 1023) speed = 1023;
    if (speed < 0) speed = 0;
    let pins = this.getFieldValue("MOTOR").split('/');
    return pins[0] + ".write_analog(" + speed + ")" + NEWLINE + pins[1] + ".write_digital(" + this.getFieldValue('DIR') + ")" + NEWLINE;
};
Blockly.Python.robots_stopBitBotMotors = function () {
    if (this.getFieldValue('MOTOR') == "all") {
        Blockly.Python.addFunction('func_bitbot_go', DEF_BITBOT_GO);
        return "setBitBotgo(0, 0)" + NEWLINE;
    }
    else {
        let pins = this.getFieldValue("MOTOR").split('/');
        return pins[0] + ".write_analog(0)" + NEWLINE + pins[1] + ".write_digital(0)" + NEWLINE;
    }
};
Blockly.Python.robots_setBitBotNeopixel = function () {
    Blockly.Python.definitions_.import_neopixel = IMPORT_NEOPIXEL;
    Blockly.Python.addInit('init_bitbot_neopixel', "np = neopixel.NeoPixel(pin13, 12)");
    var r = Blockly.Python.valueToCode(this, "R", Blockly.Python.ORDER_NONE) || 0;
    var g = Blockly.Python.valueToCode(this, "G", Blockly.Python.ORDER_NONE) || 0;
    var b = Blockly.Python.valueToCode(this, "B", Blockly.Python.ORDER_NONE) || 0;
    var l = Blockly.Python.valueToCode(this, "LED", Blockly.Python.ORDER_NONE) || 0;
    if (r > 255) r = 255;
    if (r < 0) r = 0;
    if (g > 255) g = 255;
    if (g < 0) g = 0;
    if (b > 255) b = 255;
    if (b < 0) b = 0;
    if (l < 0 || l > 11) return "np[0]=(0,0,0)" + NEWLINE + "np.show()" + NEWLINE;
    return "np[" + l + "] = (" + r + ", " + g + ", " + b + ")" + NEWLINE + "np.show()" + NEWLINE;
};
Blockly.Python.robots_setBitBotRainbow = function () {
    Blockly.Python.definitions_.import_neopixel = IMPORT_NEOPIXEL;
    Blockly.Python.addInit('init_bitbot_neopixel', "np = neopixel.NeoPixel(pin13, 12)");
    Blockly.Python.addFunction('func_rainbow', DEF_NEOPIXEL_RAINBOW);
    return "rainbow(12)" + NEWLINE;
};
Blockly.Python.robots_setGamepadLED = function () {
    var state = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    if (state != 0 && state != 1) state = "True" == state ? 1 : 0;
    return "pin16.write_digital(" + state + ");" + NEWLINE;
};
Blockly.Python.robots_setGamepadMotorVibration = function () {
    var state = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    if (state != 0 && state != 1) state = "True" == state ? 1 : 0;
    return "pin12.write_digital(" + state + ");" + NEWLINE;
};
Blockly.Python.robots_setGamepadBuzzerFreq = function () {
    Blockly.Python.definitions_.import_time = IMPORT_TIME;
    Blockly.Python.addFunction('func_beep', DEF_BUZZER_BEEP);
    var freq = Blockly.Python.valueToCode(this, "FREQ", Blockly.Python.ORDER_NONE) || "0";
    var time = Blockly.Python.valueToCode(this, "TIME", Blockly.Python.ORDER_NONE) || "0";
    return "beep(pin0, " + freq + ", " + time + ")" + NEWLINE;
};
Blockly.Python.robots_playGamepadMusic = function () {
    Blockly.Python.definitions_.import_time = IMPORT_TIME;
    Blockly.Python.addFunction('func_beep', DEF_BUZZER_BEEP);
    switch (this.getFieldValue("MUSIC")) {
        case "0":
            Blockly.Python.addFunction('func_music_G', DEF_BUZZER_GAMME);
            return "BuzzerGamme(pin0)" + NEWLINE;
        case "1":
            Blockly.Python.addFunction('func_music_SW', DEF_BUZZER_STARWARS);
            return "BuzzerStarWars(pin0)" + NEWLINE;
        case "2":
            Blockly.Python.addFunction('func_music_R2D2', DEF_BUZZER_R2D2);
            return "BuzzerR2D2(pin0)" + NEWLINE;
        default:
            throw Error("Unhandled option (lists_getSublist)");
    }
};
Blockly.Python.robots_onGamepadButtonEvent = function () {
    var button = this.getFieldValue('BUTTON');
    var branchCode = Blockly.Python.statementToCode(this, 'DO') || Blockly.Python.PASS;
    Blockly.Python.addPowerOn('set_pull_' + button, button + ".set_pull(pin1.PULL_UP)")
    switch (this.getFieldValue("STATE")) {
        case "0":
            return 'if not ' + button + '.read_digital():' + NEWLINE + branchCode;
        case "1":
            return 'if ' + button + '.read_digital():' + NEWLINE + branchCode;
    }
};