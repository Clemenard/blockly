

/**
 * INPUT/OUTPUT BLOCKS DEFINITION
 */

Blockly.defineBlocksWithJsonArray([ // BEGIN INPUT JSON EXTRACT //

    // ARDUINO PAUSE JSON
    {
        type: "io_wait",
        message0: "%{BKY_IO_PAUSE_TITLE} %1 %2",
        args0: [{
            type: "input_value",
            name: "NUM",
            check: "Decimal"
        }, {
            type: "field_dropdown",
            name: "UNIT",
            options: [
                ["%{BKY_IO_PAUSE_SECOND}", "1000"],
                ["%{BKY_IO_PAUSE_MILLISECOND}", "1"]
            ]
        }],
        previousStatement: null,
        nextStatement: null,
        style: "io_blocks",
        tooltip: "%{BKY_IO_PAUSE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK INIT CHRONOMETER
    {
        type: "io_initChronometer",
        message0: "%{BKY_IO_INITCHRONOMETER_TITLE}",
        previousStatement: null,
        nextStatement: null,
        style: "io_blocks",
        tooltip: "%{BKY_IO_INITCHRONOMETER_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK GET CHRONOMETER
    {
        type: "io_getChronometer",
        message0: "%{BKY_IO_GETCHRONOMETER_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "UNIT",
            options: [
                ["(s)", "1000.0"],
                ["(ms)", "1.0"]
            ]
        }],
        output: "Decimal",
        style: "io_blocks",
        tooltip: "%{BKY_IO_GETCHRONOMETER_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // CONTROL ARDUINO LED  
    {
        type: "io_control_arduino_led",
        message0: "%{BKY_IO_ARDUINOLED_TITLE}",
        args0: [{
            type: "input_value",
            name: "STATE",
            check: "Boolean"
        }],
        previousStatement: null,
        nextStatement: null,
        inputsInline: !0,
        style: "io_blocks",
        tooltip: "%{BKY_IO_ARDUINOLED_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK GET KEYPAD NUMBER
    {
        type: "io_getKeypadNumber",
        message0: "%{BKY_IO_GROVEKEYPAD_GETNUMBER_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "RX",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "TX",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Number" || "String",
        inputsInline: !0,
        style: "io_blocks",
        tooltip: "%{BKY_IO_GROVEKEYPAD_GETNUMBER_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE THUMB JOYSTICK
    {
        type: "io_getGroveThumbJoystick",
        message0: "%{BKY_IO_GROVEJOYSTICK_GETAXIS_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "AXIS",
            options: [
                ["X", "X"],
                ["Y", "Y"]
            ]
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Number",
        style: "io_blocks",
        tooltip: "%{BKY_IO_GROVEJOYSTICK_GETAXIS_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // READ ANALOG POTENTIOMETER
    {
        type: "io_getGroveSlidePotentiometer",
        message0: "%{BKY_IO_GETGROVESLIDEPOTENTIOMETER_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Number",
        style: "io_blocks",
        tooltip: "%{BKY_IO_GETGROVESLIDEPOTENTIOMETER_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE ROTARY ANGLE _ GET VALUE
    {
        type: "io_getGroveRotaryAngle",
        message0: "%{BKY_IO_GETGROVEROTARYANGLE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Number",
        style: "io_blocks",
        tooltip: "%{BKY_IO_GETGROVEROTARYANGLE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE TACTILE BUTTON _ READ DIGITAL
    {
        type: "io_getGroveTactile",
        message0: "%{BKY_IO_GETGROVETACTILE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Boolean",
        style: "io_blocks",
        tooltip: "%{BKY_IO_GETGROVETACTILE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE SIMPLE BUTTON _ READ DIGITAL 
    {
        type: "io_getGroveButton",
        message0: "%{BKY_IO_GETGROVEBUTTON_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Boolean",
        style: "io_blocks",
        tooltip: "%{BKY_IO_GETGROVEBUTTON_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE SWITCH BUTTON _ READ DIGITAL
    {
        type: "io_getGroveSwitch",
        message0: "%{BKY_IO_GETGROVESWITCH_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "Boolean",
        style: "io_blocks",
        tooltip: "%{BKY_IO_GETGROVESWITCH_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // READ DIGITAL PIN JSON 
    {
        type: "io_readDigitalPin",
        message0: "%{BKY_IO_READDIGITALPIN_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        style: "io_blocks",
        output: "Boolean",
        tooltip: "%{BKY_IO_READDIGITALPIN_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK WRITE DIGITAL PIN
    {
        type: "io_writeDigitalPin",
        message0: "%{BKY_IO_WRITEDIGITALPIN_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS.concat(ARDUINO_READ_ANALOG_PINS)
        }, {
            type: "input_value",
            name: "STATE",
            check: "Boolean"
        }],
        previousStatement: null,
        nextStatement: null,
        inputsInline: !0,
        style: "io_blocks",
        tooltip: "%{BKY_IO_WRITEDIGITALPIN_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK READ ANALOG 
    {
        type: "io_readAnalogPin",
        message0: "%{BKY_IO_READANALOGPIN_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_READ_ANALOG_PINS
        }],
        output: "Number",
        style: "io_blocks",
        tooltip: "%{BKY_IO_READANALOGPIN_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK WRITE ANALOG 
    {
        type: "io_writeAnalogPin",
        message0: "%{BKY_IO_WRITEANALOGPIN_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_WRITE_ANALOG_PINS
        }, {
            type: "input_value",
            name: "VALUE",
            check: "Decimal"
        }],
        previousStatement: null,
        nextStatement: null,
        inputsInline: !0,
        style: "io_blocks",
        tooltip: "%{BKY_IO_WRITEANALOGPIN_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK SET PWM SIGNAL 
    {
        type: "io_setPwm",
        message0: "%{BKY_IO_SETPWM_TITLE}",
        args0: [{
            type: "input_value",
            name: "VALUE",
            check: "Decimal"
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_WRITE_ANALOG_PINS
        }],
        previousStatement: null,
        nextStatement: null,
        inputsInline: !0,
        style: "io_blocks",
        tooltip: "%{BKY_IO_SETPWM_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK PULSE IN HIGH/LOW 
    {
        type: "io_pulse_in",
        message0: "%{BKY_IO_READPULSEIN_TITLE}",
        args0: [{
            type: "input_value",
            name: "STATE",
            check: "Boolean"
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        inputsInline: !0,
        output: "Number",
        style: "io_blocks",
        tooltip: "%{BKY_IO_READPULSEIN_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK ON/OFF BOOLEAN
    {
        type: "io_digital_signal",
        message0: "%{BKY_IO_DIGITALSIGNAL_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "STATE",
            options: [
                ["%{BKY_IO_DIGITALSIGNAL_HIGH}", "HIGH"],
                ["%{BKY_IO_DIGITALSIGNAL_LOW}", "LOW"]
            ]
        }],
        output: "Boolean",
        style: "io_blocks",
        tooltip: "%{BKY_IO_DIGITALSIGNAL_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
]); // END JSON INPUT EXTRACT //
