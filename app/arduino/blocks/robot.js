
/**
 * ROBOTS BLOCKS DEFINITION
 */

Blockly.defineBlocksWithJsonArray([ // BEGIN ROBOTS JSON EXTRACT //
    /* Begin mBot basic blocks definitions */
    // BLOCK MBOT CONTROL MOTOR GO
    {
        type: "robots_setmBotGo",
        message0: "%{BKY_ROBOTS_MBOT_GO_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "DIR",
            options: [
                ["%{BKY_ROBOTS_MBOT_GO_FORWARD}", "1"],
                ["%{BKY_ROBOTS_MBOT_GO_REVERSE}", "-1"]
            ]
        }, {
            type: "input_value",
            name: "SPEED",
            check: "Decimal"
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MBOT_GO_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK MBOT CONTROL MOTOR
    {
        type: "robots_controlmBotMotor",
        message0: "%{BKY_ROBOTS_MBOT_CONTROLMOTOR_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "MOTOR",
            options: [
                ["%{BKY_ROBOTS_MBOT_RIGHT}", "9"],
                ["%{BKY_ROBOTS_MBOT_LEFT}", "10"]
            ]
        }, {
            type: "field_dropdown",
            name: "DIR",
            options: [
                ["↻", "1"],
                ["↺", "-1"]
            ]
        }, {
            type: "input_value",
            name: "SPEED",
            check: "Decimal"
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MBOT_CONTROLMOTOR_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK MBOT STOP MOTORS
    {
        type: "robots_stopmBotMotors",
        message0: "%{BKY_ROBOTS_MBOT_STOPMOTORS_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "MOTOR",
            options: [
                ["%{BKY_ROBOTS_MBOT_RIGHT}", "9"],
                ["%{BKY_ROBOTS_MBOT_LEFT}", "10"],
                ["%{BKY_ROBOTS_MBOT_RIGHT&LEFT}", "all"]
            ]
        }],
        previousStatement: null,
        nextStatement: null,
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MBOT_STOPMOTORS_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK MBOT SET RGB LED
    {
        type: "robots_setmBotRgbLed",
        message0: "%{BKY_ROBOTS_MBOT_SETRGBLED_TITLE}",
        args0: [{
            type: "input_value",
            name: "R",
            check: "Decimal"
        }, {
            type: "input_value",
            name: "G",
            check: "Decimal"
        }, {
            type: "input_value",
            name: "B",
            check: "Decimal"
        }, {
            type: "field_dropdown",
            name: "LED",
            options: [
                ["%{BKY_ROBOTS_MBOT_RIGHT_F}", "1"],
                ["%{BKY_ROBOTS_MBOT_LEFT_F}", "2"],
                ["%{BKY_ROBOTS_MBOT_RIGHT&LEFT_F}", "0"]
            ]
        }],
        previousStatement: null,
        nextStatement: null,
        inputsInline: !0,
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MBOT_SETRGBLED_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK MBOT SET BUZZER
    {
        type: "robots_setmBotBuzzer",
        message0: "%{BKY_ROBOTS_MBOT_SETBUZZER_TITLE}",
        args0: [{
            type: "input_value",
            name: "FREQ",
            check: "Decimal"
        }, {
            type: "input_value",
            name: "TIME",
            check: "Decimal"
        }],
        previousStatement: null,
        nextStatement: null,
        inputsInline: !0,
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MBOT_SETBUZZER_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK MBOT PLAY MUSIC
    {
        type: "robots_playmBotMusic",
        message0: "%{BKY_ROBOTS_MBOT_PLAYMUSIC_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "MUSIC",
            options: [
                ["Gamme", "0"],
                ["Star Wars", "1"],
                ["R2D2", "2"],
            ]
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MBOT_PLAYMUSIC_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK MBOT LIGHT SENSOR
    {
        type: "robots_getmBotSensorLight",
        message0: "%{BKY_ROBOTS_MBOT_GETLIGHT_TITLE}",
        output: "Decimal",
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MBOT_GETLIGHT_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK MBOT BOARD BUTTON
    {
        type: "robots_getmBotButtonState",
        message0: "%{BKY_ROBOTS_MBOT_GETBUTTONSTATE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "STATE",
            options: [
                ["%{BKY_ROBOTS_MBOT_PRESSED}", "0"],
                ["%{BKY_ROBOTS_MBOT_RELEASED}", "1"]
            ]
        }],
        output: "Boolean",
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MBOT_GETBUTTONSTATE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK MBOT REMOTE CONTROL BUTTON
    {
        type: "robots_getmBotRemoteControlButton",
        message0: "%{BKY_ROBOTS_MBOT_GETREMOTECONTROLBUTTON_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "BUTTON",
            options: MBOT_REMOTE_CONTROL
        }],
        output: "Boolean",
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MBOT_GETREMOTECONTROLBUTTON_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    /* Begin mBot external modules blocks definitions */
    // BLOCK MAKEBLOCK ULTRASONIC RANGER
    {
        type: "robots_makeBlock_getUltrasonicRanger",
        message0: "%{BKY_ROBOTS_MAKEBLOCK_ULTRASONICRANGER_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "UNIT",
            options: [
                ["cm", "Cm"],
                ["inch", "Inch"]
            ]
        }, {
            type: "field_dropdown",
            name: "PORT",
            options: MBOT_DIGITAL_PINS
        }],
        inputsInline: !0,
        output: "Decimal",
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MAKEBLOCK_ULTRASONICRANGER_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK MAKEBLOCK LINE FINDER
    {
        type: "robots_makeBlock_getLineState",
        message0: "%{BKY_ROBOTS_MAKEBLOCK_READLINEFINDER_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "SENSOR",
            options: [
                ["%{BKY_ROBOTS_MAKEBLOCK_LEFT_1}", "Sensor1"],
                ["%{BKY_ROBOTS_MAKEBLOCK_RIGHT_2}", "Sensor2"]
            ]
        }, {
            type: "field_dropdown",
            name: "PORT",
            options: MBOT_DIGITAL_PINS
        }],
        output: "Boolean",
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MAKEBLOCK_READLINEFINDER_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK MAKEBLOCK COLOR SENSOR
    {
        type: "robots_makeBlock_getColor",
        message0: "%{BKY_ROBOTS_MAKEBLOCK_GETCOLOR_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "DATA",
            options: [
                ["%{BKY_ROBOTS_MAKEBLOCK_COLOR}", "0"],
                ["%{BKY_ROBOTS_MAKEBLOCK_RED}", "1"],
                ["%{BKY_ROBOTS_MAKEBLOCK_GREEN}", "2"],
                ["%{BKY_ROBOTS_MAKEBLOCK_BLUE}", "3"]
            ]
        }, {
            type: "field_dropdown",
            name: "PORT",
            options: MBOT_DIGITAL_PINS
        }],
        output: "Number",
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MAKEBLOCK_GETCOLOR_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    }, 
    // BLOCK MAKE BLOCK GAS SENSOR
    {
        type: "robots_makeBlock_MQ2_getGas",
        message0: "%{BKY_ROBOTS_MAKEBLOCK_GETGAS_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "TYPE",
            options: [
                ["%{BKY_ROBOTS_MAKEBLOCK_GAS_DIGITAL}", "Digital"],
                ["%{BKY_ROBOTS_MAKEBLOCK_GAS_ANALOG}", "Analog"]
            ]
        }, {
            type: "field_dropdown",
            name: "PORT",
            options: MBOT_ANALOG_PINS
        }],
        output: "Number" | "Boolean",
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MAKEBLOCK_GETGAS_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    }, 
    // BLOCK MAKE BLOCK GAS SENSOR
    {
        type: "robots_makeBlock_getFlame",
        message0: "%{BKY_ROBOTS_MAKEBLOCK_GETFLAME_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "TYPE",
            options: [
                ["%{BKY_ROBOTS_MAKEBLOCK_FLAME_DIGITAL}", "Digital"],
                ["%{BKY_ROBOTS_MAKEBLOCK_FLAME_ANALOG}", "Analog"]
            ]
        }, {
            type: "field_dropdown",
            name: "PORT",
            options: MBOT_DIGITAL_PINS
        }],
        output: "Number" | "Boolean",
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MAKEBLOCK_GETFLAME_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK MAKEBLOCK TEMPERATURE WATERPROOF
    {
        type: "robots_makeBlock_getWaterproofTemperature",
        message0: "%{BKY_ROBOTS_MAKEBLOCK_WATERPROOFTEMPERATURE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PORT",
            options: MBOT_DIGITAL_PINS
        }],
        output: "Decimal",
        style: "robots_blocks",
        tooltip: "%{BKY_ROBOTS_MAKEBLOCK_WATERPROOFTEMPERATURE_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    }
]); // END JSON ROBOTS EXTRACT (Do not delete this comment.)
