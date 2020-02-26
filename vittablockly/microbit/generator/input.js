Blockly.Python.io_pause = function () {
    var d = Blockly.Python.valueToCode(this, "TIME", Blockly.Python.ORDER_NONE) || 0;
    return "sleep(" + d * this.getFieldValue("UNIT") + ")" + NEWLINE;
};
Blockly.Python.io_initChronometer = function () {
    Blockly.Python.addConstant('init_chronometer', "chrono0 = 0");
    return "chrono0 = running_time()" + NEWLINE;
};
Blockly.Python.io_getChronometer = function () {
    Blockly.Python.addConstant('init_chronometer', "chrono0 = 0");
    return ["(running_time()-chrono0)/" + this.getFieldValue('UNIT'), Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.io_onButtonPressed = function () {
    var button = this.getFieldValue('BUTTON');
    var branchCode = Blockly.Python.statementToCode(this, 'DO') || Blockly.Python.PASS;
    if (button === 'a' || button === 'b') {
        return 'if button_' + button + '.' + this.getFieldValue("STATE") + 'pressed():' + NEWLINE + branchCode;
    } else {
        return 'if button_a.' + this.getFieldValue("STATE") + 'pressed() and button_b.' + this.getFieldValue("STATE") + 'pressed():' + NEWLINE + branchCode;
    }
};
Blockly.Python.io_onMovement = function () {
    var branchCode = Blockly.Python.statementToCode(this, 'DO') || Blockly.Python.PASS;
    return "if accelerometer.current_gesture() == '" + this.getFieldValue('MOV') + "' :" + NEWLINE + branchCode;
};
Blockly.Python.io_onPinPressed = function () {
    var pin = this.getFieldValue("PIN");
    var branchCode = Blockly.Python.statementToCode(this, 'DO') || Blockly.Python.PASS;
    var code = "if pin" + pin + ".is_touched():" + NEWLINE + branchCode;
    return code;
};
Blockly.Python.io_isButtonPressed = function () {
    var code;
    var button = this.getFieldValue('BUTTON');
    if (button === 'a' || button === 'b') {
        code = 'button_' + button + '.is_pressed()';
    } else {
        code = 'button_a.is_pressed() and button_b.is_pressed()';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.io_isPinPressed = function () {
    return [this.getFieldValue("PIN") + '.is_touched()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.io_readDigitalPin = function () {
    return [this.getFieldValue("PIN") + ".read_digital()", Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.io_writeDigitalPin = function () {
    var state = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    if (state != 0 && state != 1) state = "True" == state ? 1 : 0;
    return this.getFieldValue("PIN") + ".write_digital(" + state + ")" + NEWLINE;
};
Blockly.Python.io_readAnalogPin = function () {
    return [this.getFieldValue('PIN') + ".read_analog()", Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.io_writeAnalogPin = function () {
    var value = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    if (value < 0) value = 0;
    if (value > 1023) value = 1023;
    return this.getFieldValue('PIN') + ".write_analog(" + value + ")" + NEWLINE;
};
Blockly.Python.io_setPwm = function () {
    var period = Blockly.Python.valueToCode(this, "PERIOD", Blockly.Python.ORDER_NONE) || 0;
    if (period < 256) period = 256;
    return this.getFieldValue("PIN") + ".set_analog_period_microseconds(" + period + ")" + NEWLINE;
};
Blockly.Python.io_readPulseIn = function () {
    Blockly.Python.definitions_.import_time = IMPORT_TIME;
    var state = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    if (state != 0 && state != 1) state = "True" == state ? 1 : 0;
    Blockly.Python.addFunction('func_pulse', DEF_IO_PULSE_IN);
    return ["pulseIn(" + this.getFieldValue("PIN") + ", " + state + ")", Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.io_digital_signal = function (a) {
    return ["ON" == a.getFieldValue("BOOL") ? 1 : 0, Blockly.Python.ORDER_ATOMIC]
};