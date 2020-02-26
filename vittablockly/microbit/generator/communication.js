Blockly.Python.communication_writeOpenLogSd = function () {
    Blockly.Python.addPowerOn('init_one_module', "uart.init(baudrate=4800, tx=" + this.getFieldValue('TX') + ", rx=" + this.getFieldValue('RX') + ")");
    var data = Blockly.Python.valueToCode(this, "DATA", Blockly.Python.ORDER_NONE) || "''";
    return "uart.write(" + data + " + '\\n')" + NEWLINE;
};
Blockly.Python.communication_radioSendString = function () {
    Blockly.Python.definitions_.import_radio = IMPORT_RADIO;
    Blockly.Python.addPowerOn('power_radio', "radio.on()");
    var str = Blockly.Python.valueToCode(this, "STR", Blockly.Python.ORDER_NONE) || "";
    return "radio.send(str(" + str + "))" + NEWLINE;
};
Blockly.Python.communication_onRadioDataReceived = function () {
    Blockly.Python.definitions_.import_radio = IMPORT_RADIO;
    Blockly.Python.addPowerOn('power_radio', "radio.on()");
    var branchCode = Blockly.Python.statementToCode(this, 'DO') || Blockly.Python.PASS;
    var a = Blockly.Python.valueToCode(this, "DATA", Blockly.Python.ORDER_MEMBER) || "''";
    return a + " = radio.receive()" + NEWLINE + "if " + a + ":" + NEWLINE + branchCode;
};
Blockly.Python.communication_radioConfig = function () {
    Blockly.Python.definitions_.import_radio = IMPORT_RADIO;
    var canal = Blockly.Python.valueToCode(this, "CANAL", Blockly.Python.ORDER_NONE) || 0;
    if (canal > 83) canal = 83;
    if (canal < 0) canal = 0;
    var power = Blockly.Python.valueToCode(this, "POWER", Blockly.Python.ORDER_NONE) || 0;
    if (power > 7) power = 7;
    if (power < 0) power = 0;
    var len = Blockly.Python.valueToCode(this, "LEN", Blockly.Python.ORDER_NONE) || 0;
    if (len > 251) len = 251;
    if (len < 0) len = 0;
    return "radio.config(channel = " + canal + ", power = " + power + ", length = " + len + ")" + NEWLINE;
};
Blockly.Python.communication_serialWrite = function () {
    var str = Blockly.Python.valueToCode(this, "TEXT", Blockly.Python.ORDER_NONE) || 0;
    return "print(str(" + str + ") + '\\n')" + NEWLINE;
};
Blockly.Python.communication_serialInit = function () {
    return "uart.init(baudrate=" + this.getFieldValue("BAUD") + ", bits=8, parity=None, stop=1, tx=" + this.getFieldValue("TX") + ", rx=" + this.getFieldValue("RX") + ")" + NEWLINE;
};
Blockly.Python.communication_serialRedirectUSB = function () {
    return "uart.init(baudrate=115200, bits=8, parity=None, stop=1)" + NEWLINE;
};
Blockly.Python.communication_onSerialDataReceived = function () {
    var branchCode = Blockly.Python.statementToCode(this, 'DO') || Blockly.Python.PASS;
    var a = Blockly.Python.valueToCode(this, "DATA", Blockly.Python.ORDER_MEMBER) || "''";
    return "if uart.any():" + NEWLINE + "  " + a + " = uart.read()" + NEWLINE + branchCode;
};
Blockly.Python.communication_onGPSDataReceived = function () {
    Blockly.Python.addPowerOn('init_one_module', "uart.init(baudrate=9600, bits=8, parity=None, stop=1, tx=" + this.getFieldValue("TX") + ", rx=" + this.getFieldValue("RX") + ")");
    var branchCode = Blockly.Python.statementToCode(this, 'DO') || Blockly.Python.PASS;
    var a = Blockly.Python.valueToCode(this, "DATA", Blockly.Python.ORDER_MEMBER) || "''";
    return "if uart.any():" + NEWLINE + "  " + a + " = uart.read()" + NEWLINE + branchCode;
};
Blockly.Python.communication_analyzeGPSInfo = function () {
    Blockly.Python.addFunction('func_gps_read', DEF_COM_GPS_READ);
    Blockly.Python.addFunction('func_gps_getTime', DEF_COM_GPS_GET_CLOCK);
    Blockly.Python.addFunction('func_gps_getPos', DEF_COM_GPS_GET_POS);
    var a = Blockly.Python.valueToCode(this, "DATA", Blockly.Python.ORDER_MEMBER) || "''";
    return ["getGPSInformations(" + a + ", info=" + this.getFieldValue("INFO") + ")", Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.communication_onBluetoothDataReceived = function () {
    Blockly.Python.addPowerOn('init_one_module', "uart.init(baudrate=9600, bits=8, parity=None, stop=1, tx=" + this.getFieldValue("TX") + ", rx=" + this.getFieldValue("RX") + ")");
    var branchCode = Blockly.Python.statementToCode(this, 'DO') || Blockly.Python.PASS;
    var a = Blockly.Python.valueToCode(this, "DATA", Blockly.Python.ORDER_MEMBER) || "''";
    return "if uart.any():" + NEWLINE + "  " + a + " = uart.read()" + NEWLINE + branchCode;
};
Blockly.Python.communication_sendBluetoothData = function () {
    Blockly.Python.addPowerOn('init_one_module', "uart.init(baudrate=9600, bits=8, parity=None, stop=1, tx=" + this.getFieldValue("TX") + ", rx=" + this.getFieldValue("RX") + ")");
    var txt = Blockly.Python.valueToCode(this, "DATA", Blockly.Python.ORDER_NONE) || 0;
    return "uart.write(str(" + txt + "))" + NEWLINE;
};
Blockly.Python.communication_playComputerMusic = function () {
    let note = this.getFieldValue("Note");
    return "print('@music:" + note + "|' + '\\n')" + NEWLINE;
};
Blockly.Python.communication_playComputerFrequency = function () {
    let frequency = Blockly.Python.valueToCode(this, "FREQUENCY", Blockly.Python.ORDER_ATOMIC);
    return "print('@music:' + str(" + frequency + ") + '|' + '\\n')" + NEWLINE;
};
Blockly.Python.communication_stopComputerMusic = function () {
    return "print('@music:stop|' + '\\n')" + NEWLINE;
};
Blockly.Python.communication_graphSerialWrite = function () {
    var c = [];
    let b = '';

    b = "print('@Graph:";
    for (var d = 1; d < this.itemCount_ + 1; d++) {

        c = Blockly.Python.valueToCode(this, "ADD" + (d - 1), Blockly.Python.ORDER_NONE);
        if (c[c.length - 1] === '|') {
            c = c.substring(0, c.length - 1);
            let data = c.split(':');
            b += data[0] + ":' + str(" + data[1] + ") + '|";
        }
    }
    b += "' + '\\n')" + NEWLINE;
    return (b);
};
Blockly.Python.communication_graphSerialWrite_datasFormat = function () {
    var name = Blockly.Python.valueToCode(this, "NAME", Blockly.Python.ORDER_ATOMIC);
    var data = Blockly.Python.valueToCode(this, "DATA", Blockly.Python.ORDER_ATOMIC);
    if (name == "") name = '""';
    else if (data == "") data = '""';
    else {
        name = name.substring(1, name.length);
        name = name.substring(0, name.length - 1);
    }
    if (!isNaN(data)) {
        data = data.toString();
    }
    let syntax = name + ":" + data + "|";
    let code = syntax;
    // The original file from IDE used "Blockly.ORDER_ATOMIC" which is not defined so we replaced it by "Blockly.Python.ORDER_ATOMIC".
    return [code.toString(), Blockly.Python.ORDER_ATOMIC];
};