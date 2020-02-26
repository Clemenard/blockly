
/**
 * SENSORS BLOCKS DEFINITION
 */

Blockly.defineBlocksWithJsonArray([
    // GROVE SGP30 SENSOR _ GET GAS
    {
        type: "sensors_getSgp30Gas",
        message0: "%{BKY_SENSORS_SGP30_READDATA_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "GAS",
            options: [
                ["%{BKY_SENSORS_SGP30_CO2}", "0"],
                ["%{BKY_SENSORS_SGP30_TVOC}", "1"]
            ]
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_SGP30_READDATA_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE MULTICHANNEL GAS SENSOR _ READ GAS JSON
    {
        type: "sensors_getMultichannelGas",
        message0: "%{BKY_SENSORS_MULTICHANNEL_GETGAS_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "GAS",
            options: [
                ["%{BKY_GAS_CO}", "CO"],
                ["%{BKY_GAS_NO2}", "NO2"],
                ["%{BKY_GAS_C2H6OH}", "C2H6OH"],
                ["%{BKY_GAS_H2}", "H2"],
                ["%{BKY_GAS_NH3}", "NH3"],
                ["%{BKY_GAS_CH4}", "CH4"],
                ["%{BKY_GAS_C3H8}", "C3H8"],
                ["%{BKY_GAS_C4H10}", "C4H10"]
            ]
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_MULTICHANNEL_GETGAS_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE O2 GAS SENSOR _ READ CONCENTRATION/VOUT
    {
        type: "sensors_getO2gas",
        message0: "%{BKY_SENSORS_O2_GAS_READDATA_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "DATA",
            options: [
                ["%{BKY_SENSORS_O2_GAS_CONCENTRATION}", "0"],
                ["%{BKY_SENSORS_O2_GAS_VOUT}", "1"]
            ]
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_O2_GAS_READDATA_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // MQ135 SENSOR _ READ CO2 JSON
    {
        type: "sensors_getMq135gas",
        message0: "%{BKY_SENSORS_MQ135_GETGAS_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_MQ135_GETGAS_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE DUST SENSOR _ READ CONCENTRATION/RATIO
    {
        type: "sensors_getDustConcentration",
        message0: "%{BKY_SENSORS_DUST_READDATA_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "DATA",
            options: [
                ["%{BKY_SENSORS_DUST_CONCENTRATION}", "0"],
                ["%{BKY_SENSORS_DUST_RATIO}", "1"]
            ]
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_DUST_READDATA_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // HM330X SENSOR _ DETECT PARTICULE MATTER JSON
    {
        type: "sensors_getParticulateMatter",
        message0: "%{BKY_SENSORS_HM330X_GETPARTICULE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "TYPE",
            options: [
                ["%{BKY_SENSORS_HM330X_ATM_PM1}", "5"],
                ["%{BKY_SENSORS_HM330X_ATM_PM2_5}", "6"],
                ["%{BKY_SENSORS_HM330X_ATM_PM10}", "7"]
            ]
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_HM330X_GETPARTICULE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // MH-Z19 SENSOR _ READ DATA JSON
    {
        type: "sensors_getMhz19Data",
        message0: "%{BKY_SENSORS_MHZ19_GETDATA_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "DATA",
            options: [
                ["%{BKY_SENSORS_MHZ19_CO2}", "0"],
                ["%{BKY_SENSORS_MHZ19_TEMPERATURE}", "1"]
            ]
        }, {
            type: "field_dropdown",
            name: "TX",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "RX",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_MHZ19_GETDATA_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE BMP280 SENSOR _ READ DATA
    {
        type: "sensors_getBmp280Data",
        message0: "%{BKY_SENSORS_BMP280_READDATA_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "ADDR",
            options: [
                ["0x76", "0x76"],
                ["0x77 (Grove)", "0x77"]
            ]
        }, {
            type: "field_dropdown",
            name: "DATA",
            options: [
                ["%{BKY_SENSORS_BMP280_TEMPERATURE}", "0"],
                ["%{BKY_SENSORS_BMP280_PRESSURE}", "1"],
                ["%{BKY_SENSORS_BMP280_ALTITUDE}", "2"]
            ]
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_BMP280_READDATA_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE MOISTURE SENSOR
    {
        type: "sensors_getGroveMoisture",
        message0: "%{BKY_SENSORS_GETGROVEMOISTURE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Number",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETGROVEMOISTURE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE TEMPERATURE SENSOR
    {
        type: "sensors_getGroveTemperature",
        message0: "%{BKY_SENSORS_GETGROVETEMPERATURE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETGROVETEMPERATURE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE HIGH TEMPERATURE 
    {
        type: "sensors_getGroveHighTemperature",
        message0: "%{BKY_SENSORS_GETGROVEHIGHTEMP_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "A1",
            options: ARDUINO_READ_ANALOG_PINS
        }, {
            type: "field_dropdown",
            name: "A0",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETGROVEHIGHTEMP_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // MAX6675 SENSOR & THERMOCOUPLE _ READ TEMP
    {
        type: "sensors_getMax6675Temp",
        message0: "%{BKY_SENSORS_MAX6675_READTEMP_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "UNIT",
            options: [
                ["(°C)", "Celsius"],
                ["(°F)", "Fahrenheit"]
            ]
        }, {
            type: "input_dummy"
        }, {
            type: "field_dropdown",
            name: "SO",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "CS",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "CLK",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_MAX6675_READTEMP_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE DHT11/22 SENSOR _ READ DATA
    {
        type: "sensors_dhtReadData",
        message0: "%{BKY_SENSORS_DHT_READDATA_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "SENSOR",
            options: [
                ["DHT11", "0"],
                ["DHT22", "1"]
            ]
        }, {
            type: "field_dropdown",
            name: "VALUE",
            options: [
                ["%{BKY_SENSORS_DHT_TEMPERATURE}", "0"],
                ["%{BKY_SENSORS_DHT_HUMIDITY}", "1"]
            ]
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_DHT_READDATA_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GOTRONIC MPX5700AP SENSOR _ READ PRESSURE
    {
        type: "sensors_mpx5700ap_getPressure",
        message0: "%{BKY_SENSORS_MPX5700AP_GETPRESSURE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_MPX5700AP_GETPRESSURE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE BME680 SENSOR _ READ DATA
    {
        type: "sensors_getBme680Data",
        message0: "%{BKY_SENSORS_BME680_READDATA_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "DATA",
            options: [
                ["%{BKY_SENSORS_BME680_TEMPERATURE}", "0"],
                ["%{BKY_SENSORS_BME680_PRESSURE}", "1"],
                ["%{BKY_SENSORS_BME680_HUMIDITY}", "2"],
                ["%{BKY_SENSORS_BME680_GAS}", "3"]
            ]
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_BME680_READDATA_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE DS18B20 SENSOR _ GET TEMPERATURE
    {
        type: "sensors_ds18b20_getTemperature",
        message0: "%{BKY_SENSORS_DS18B20_GETTEMPERATURE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_DS18B20_GETTEMPERATURE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE WATER SENSOR
    {
        type: "sensors_getGroveWaterAmount",
        message0: "%{BKY_SENSORS_GETGROVEWATER_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Number",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETGROVEWATER_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    //  RAIN GAUGE _ GET STATE
    {
        type: "sensors_getRainGauge",
        message0: "%{BKY_SENSORS_GETRAINGAUGE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Boolean",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETRAINGAUGE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    //  ANEMOMETER _ GET STATE
    {
        type: "sensors_getAnemometer",
        message0: "%{BKY_SENSORS_GETANEMOMETER_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Boolean",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETANEMOMETER_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE LIGHT SENSOR JSON
    {
        type: "sensors_getGroveLight",
        message0: "%{BKY_SENSORS_GETGROVELIGHT_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Number",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETGROVELIGHT_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE SI1145 SENSOR _ READ LIGHT JSON
    {
        type: "sensors_getSi1145Light",
        message0: "%{BKY_SENSORS_SI1145_GETLIGHT_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "LIGHT",
            options: [
                ["%{BKY_SENSORS_SI1145_UV}", "0"],
                ["%{BKY_SENSORS_SI1145_VISIBLE}", "1"],
                ["%{BKY_SENSORS_SI1145_IR}", "2"],
            ]
        }],
        output: "Number",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_SI1145_GETLIGHT_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE UV SENSOR _ GET INDEX JSON
    {
        type: "sensors_getUVindex",
        message0: "%{BKY_SENSORS_GETUVINDEX_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETUVINDEX_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE SOUND SENSOR
    {
        type: "sensors_getGroveSound",
        message0: "%{BKY_SENSORS_GETGROVESOUND_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Number",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETGROVESOUND_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE I2C COLOR SENSOR _ GET DATA JSON
    {
        type: "sensors_colorSensor_getData",
        message0: "%{BKY_SENSORS_GROVECOLOR_GETDATA_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "DATA",
            options: [
                ["%{BKY_COLOR_RED}", "0"],
                ["%{BKY_COLOR_GREEN}", "1"],
                ["%{BKY_COLOR_BLUE}", "2"],
                ["%{BKY_SENSORS_GROVECOLOR_TEMP}", "3"],
                ["%{BKY_SENSORS_GROVECOLOR_LUX}", "4"]
            ]
        }],
        output: "Number",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GROVECOLOR_GETDATA_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // CAMERA MODULE _ SNAPSHOT
    {
        type: "sensors_cameraTakePicture",
        message0: "%{BKY_SENSORS_CAMERA_SNAPSHOT_TITLE}",
        args0: [{
            type: "input_dummy"
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        inputsInline: false,
        nextStatement: null,
        previousStatement: null,
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_CAMERA_SNAPSHOT_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE ULTRASONIC SENSOR _ GET DISTANCE
    {
        type: "sensors_getGroveUltrasonicRanger",
        message0: "%{BKY_SENSORS_GETGROVEULTRASONIC_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "DATA",
            options: [
                ["distance (cm)", "0"],
                ["durée de l'aller-retour (s)", "1"]
            ],
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETGROVEULTRASONIC_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE GESTURE
    {
        type: "sensors_getGesture",
        message0: "%{BKY_SENSORS_GETGESTURE_TITLE}",
        output: "String",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETGESTURE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE LINE FINDER _ GET STATE
    {
        type: "sensors_getGroveLineFinder",
        message0: "%{BKY_SENSORS_GETGROVELINEFINDER_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Boolean",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETGROVELINEFINDER_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE TILT MODULE _ GET STATE
    {
        type: "sensors_getGroveTilt",
        message0: "%{BKY_SENSORS_GETGROVETILT_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Boolean",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETGROVETILT_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE PIR MOTION SENSOR _ GET STATE
    {
        type: "sensors_getGroveMotion",
        message0: "%{BKY_SENSORS_GETGROVEMOTION_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Boolean",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETGROVEMOTION_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE PIEZO VIBRATION SENSOR _ GET STATE
    {
        type: "sensors_getPiezoVibration",
        message0: "%{BKY_SENSORS_GETPIEZOVIBRATION_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Boolean",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETPIEZOVIBRATION_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE INA219 CURRENT SENSOR 
    {
        type: "sensors_getIna219Data",
        message0: "%{BKY_SENSORS_INA219_GETDATA_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "DATA",
            options: [
                ["%{BKY_SENSORS_INA219_BUS_VOLTAGE}", "0"],
                ["%{BKY_SENSORS_INA219_SHUNT_VOLTAGE}", "1"],
                ["%{BKY_SENSORS_INA219_LOAD_VOLTAGE}", "2"],
                ["%{BKY_SENSORS_INA219_CURRENT}", "3"],
                ["%{BKY_SENSORS_INA219_POWER}", "4"]
            ],
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_INA219_GETDATA_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE FSR402 SENSOR _ GET FORCE
    {
        type: "sensors_getFsr402Force",
        message0: "%{BKY_SENSORS_FSR402_GETFORCE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_FSR402_GETFORCE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE PULSE SENSOR
    {
        type: "sensors_getPulse",
        message0: "%{BKY_SENSORS_GETPULSE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Decimal",
        style: "sensors_blocks",
        tooltip: "%{BKY_SENSORS_GETPULSE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    }
]); // END JSON SENSORS EXTRACT //

