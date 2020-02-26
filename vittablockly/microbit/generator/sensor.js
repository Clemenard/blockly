Blockly.Python.sensors_getAcceleration = function () {
    let axis = this.getFieldValue('AXIS');
    if (axis !== 'strength') return ['accelerometer.get_' + this.getFieldValue('AXIS') + '()', Blockly.Python.ORDER_ATOMIC];
    else {
        Blockly.Python.definitions_.import_math = IMPORT_MATH;
        return ['math.sqrt(accelerometer.get_x()**2 + accelerometer.get_y()**2 + accelerometer.get_z()**2)', Blockly.Python.ORDER_ATOMIC];
    }
};
Blockly.Python.sensors_getLight = function () {
    return ['display.read_light_level()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_calibrateCompass = function () {
    return 'compass.calibrate()' + NEWLINE;
};
Blockly.Python.sensors_getCompass = function () {
    return ['compass.heading()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_isCompassCalibrated = function () {
    return ['compass.is_calibrated()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getTemperature = function () {
    return ['temperature()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getRotation = function () {
    Blockly.Python.definitions_.import_math = IMPORT_MATH;
    if (this.getFieldValue('AXIS') === "pitch") return ['math.atan2(accelerometer.get_y(), -accelerometer.get_z()) * 180.0/math.pi', Blockly.Python.ORDER_ATOMIC];
    else return ['math.atan2(accelerometer.get_x(), math.sqrt(accelerometer.get_y()**2 + accelerometer.get_z()**2)) * 180.0/math.pi', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getMagneticForce = function () {
    return ['compass.get_' + this.getFieldValue('AXIS') + '()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getBmp280Data = function () {
    Blockly.Python.definitions_.import_mb_bmp280 = BMP280_IMPORT;
    Blockly.Python.addInit('init_bmp280', "bmp280 = BMP280(" + this.getFieldValue("ADDR") + ")");
    switch (this.getFieldValue("DATA")) {
        case "0":
            return ['bmp280.Temperature()', Blockly.Python.ORDER_ATOMIC];
        case "1":
            return ['bmp280.Pressure()', Blockly.Python.ORDER_ATOMIC];
        case "2":
            Blockly.Python.addPowerOn('init_altitude', "h0 = bmp280.Altitude()");
            return ['bmp280.Altitude()-h0', Blockly.Python.ORDER_ATOMIC];
    }
};
Blockly.Python.sensors_getSgp30Gas = function () {
    Blockly.Python.definitions_.import_mb_sgp30 = SGP30_IMPORT;
    Blockly.Python.addInit('init_sgp30', "sgp30 = SGP30()");
    switch (this.getFieldValue("GAS")) {
        case "0":
            return ['sgp30.eCO2()', Blockly.Python.ORDER_ATOMIC];
        case "1":
            return ['sgp30.TVOC()', Blockly.Python.ORDER_ATOMIC];
    }
};
Blockly.Python.sensors_getSi1145Light = function () {
    Blockly.Python.definitions_.import_mb_si1145 = SI1145_IMPORT;
    Blockly.Python.addInit('init_si1145', "si1145 = SI1145()");
    switch (this.getFieldValue("LIGHT")) {
        case "0":
            return ['si1145.readUV()', Blockly.Python.ORDER_ATOMIC];
        case "1":
            return ['si1145.readVisible()', Blockly.Python.ORDER_ATOMIC];
        case "2":
            return ['si1145.readIR()', Blockly.Python.ORDER_ATOMIC];
    }
};
Blockly.Python.sensors_getUVindex = function () {
    Blockly.Python.addFunction('func_get_uv_index', DEF_GROVE_GET_UV_INDEX);
    return ["getUVindex(" + this.getFieldValue("PIN") + ")", Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.sensors_getMultichannelGas = function () {
    Blockly.Python.definitions_.import_mb_multichannel_gas = MULTICHANNELGAS_IMPORT;
    Blockly.Python.addInit('init_multichannel_gas', "gas = GAS()");
    Blockly.Python.addPowerOn('power_multichannel_gas', "gas.power_on()");
    return ['gas.get_gas(' + this.getFieldValue('GAS') + ')', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getGesture = function () {
    Blockly.Python.definitions_.import_mb_gesture = GESTURE_IMPORT;
    Blockly.Python.addConstant('const_command', GESTURE_R);
    Blockly.Python.addInit('init_gesture', "gesture = GESTURE(R)");
    return ['gesture.readGesture()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getGroveHighTemperature = function () {
    Blockly.Python.definitions_.import_math = IMPORT_MATH;
    Blockly.Python.addConstant('const_thmc_table', DEF_GROVE_HIGHTEMP_THMC_TABLE);
    Blockly.Python.addFunction('func_get_thmc', DEF_GROVE_HIGHTEMP_GET_THMC_TEMP);
    Blockly.Python.addFunction('func_get_room', DEF_GROVE_HIGHTEMP_GET_ROOM_TEMP);
    Blockly.Python.addFunction('func_kvtot', DEF_GROVE_HIGHTEMP_KVTOT);
    Blockly.Python.addPowerOn("power_high_temp", "tempRoom = getRoomTemp(" + this.getFieldValue("A1") + ")");
    return ["getThmcTemp(" + this.getFieldValue("A0") + ", tempRoom)", Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getGroveUltrasonicRanger = function () {
    Blockly.Python.definitions_.import_time = IMPORT_TIME;
    Blockly.Python.addFunction('func_get_range', DEF_GROVE_ULTRASONIC);
    return ["getUltrasonicRange(" + this.getFieldValue("PIN") + ", '" + this.getFieldValue("DATA") + "')", Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getO2gas = function () {
    Blockly.Python.addFunction('func_readO2', DEF_O2SENSOR_READ);
    return ['readO2(' + this.getFieldValue("PIN") + ')', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getGroveDHT11Data = function () {
    Blockly.Python.definitions_.import_time = IMPORT_TIME;
    Blockly.Python.addFunction('class_dh11', DHT11_LIBRARY)
    Blockly.Python.addInit('init_dht11', "dht11 = DHT11(" + this.getFieldValue("PIN") + ")");
    switch (this.getFieldValue("DATA")) {
        case "0":
            return ['dht11.temperature()', Blockly.Python.ORDER_ATOMIC];
        case "1":
            return ['dht11.humidity()', Blockly.Python.ORDER_ATOMIC];
    }
};
Blockly.Python.sensors_getGroveSound = function () {
    return [this.getFieldValue("PIN") + '.read_analog()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getGroveMoisture = function () {
    return [this.getFieldValue("PIN") + '.read_analog()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getGroveWaterAmount = function () {
    return [this.getFieldValue("PIN") + '.read_analog()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.io_getGroveThumbJoystick = function () {
    var axe = this.getFieldValue("AXIS") || "0";
    if (axe == "X")
        return [this.getFieldValue("A0") + '.read_analog()', Blockly.Python.ORDER_ATOMIC];
    else if (axe == "Y")
        return [this.getFieldValue("A1") + '.read_analog()', Blockly.Python.ORDER_ATOMIC];
    else return ["", Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.io_getGroveSlidePotentiometer = function () {
    return [this.getFieldValue("PIN") + '.read_analog()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.io_getGroveRotaryAngle = function () {
    return [this.getFieldValue("PIN") + '.read_analog()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getGroveLight = function () {
    return [this.getFieldValue("PIN") + '.read_analog()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getGroveTemperature = function () {
    Blockly.Python.definitions_.import_math = IMPORT_MATH;
    return ["1.0/(math.log(1023.0/" + this.getFieldValue("PIN") + '.read_analog()' + "-1.0)/4250+1/298.15)-273.15", Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getRainGauge = function () {
    return [this.getFieldValue("PIN") + '.read_digital()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getAnemometer = function () {
    return [this.getFieldValue("PIN") + '.read_digital()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.io_getGroveTactile = function () {
    return [this.getFieldValue("PIN") + '.read_digital()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.io_getGroveButton = function () {
    return [this.getFieldValue("PIN") + '.read_digital()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.io_getGroveColoredButton = function () {
    return [this.getFieldValue("PIN") + '.read_digital()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.io_setGroveColoredButton = function () {
    let state = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    if (state != 0 && state != 1) state = "True" == state ? 1 : 0;
    return this.getFieldValue("PIN") + '.write_digital(' + state + ')' + NEWLINE;
};
Blockly.Python.sensors_getGroveTilt = function () {
    return [this.getFieldValue("PIN") + '.read_digital()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.io_getGroveSwitch = function () {
    return [this.getFieldValue("PIN") + '.read_digital()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getGroveMotion = function () {
    return [this.getFieldValue("PIN") + '.read_digital()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.sensors_getPiezoVibration = function () {
    return [this.getFieldValue("PIN") + '.read_digital()', Blockly.Python.ORDER_ATOMIC];
};