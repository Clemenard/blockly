
/**
 * ACTUATORS BLOCKS DEFINITION
 */

Blockly.defineBlocksWithJsonArray([
    // SERVOMOTEUR _ SET POSITION JSON
    {
        type: "actuators_setServoAngle",
        message0: "%{BKY_ACTUATORS_SERVO_SETANGLE_TITLE}",
        args0: [{
            type: "input_value",
            name: "ANGLE",
            check: "Decimal"
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        inputsInline: !0,
        style: "actuators_blocks",
        tooltip: "%{BKY_ACTUATORS_SERVO_SETANGLE_TOOLTIP}",
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK CONTROL VIBRATION MOTOR
    {
        type: "actuators_setVibrationMotorState",
        message0: "%{BKY_ACTUATORS_GROVEVIBRATIONMOTOR_CONTROL_TITLE}",
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
        previousStatement: null,
        nextStatement: null,
        style: "actuators_blocks",
        tooltip: "%{BKY_ACTUATORS_GROVEVIBRATIONMOTOR_CONTROL_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE RELAY MODULE _ WRITE DIGITAL JSON
    {
        type: "actuators_setGroveRelayState",
        message0: "%{BKY_ACTUATORS_GROVERELAY_CONTROL_TITLE}",
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
        style: "actuators_blocks",
        tooltip: "%{BKY_ACTUATORS_GROVERELAY_CONTROL_TOOLTIP}",
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE BUZZER MODULE _ WRITE DIGITAL JSON
    {
        type: "actuators_controlGroveBuzzerState",
        message0: "%{BKY_ACTUATORS_GROVEBUZZER_CONTROLSTATE_TITLE}",
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
        style: "actuators_blocks",
        tooltip: "%{BKY_ACTUATORS_GROVEBUZZER_CONTROLSTATE_TOOLTIP}",
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE SPEAKER MODULE OR BUZZER _ PLAY NOTE JSON
    {
        type: "actuators_playNoteGroveBuzzer",
        message0: "%{BKY_ACTUATORS_GROVEBUZZER_PLAYNOTE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "Note",
            options: MUSIC_NOTES
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        style: "actuators_blocks",
        tooltip: "%{BKY_ACTUATORS_GROVEBUZZER_PLAYNOTE_TOOLTIP}",
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE SPEAKER MODULE OR BUZZER _ PLAY MUSIC JSON
    {
        type: "actuators_playMusicGroveBuzzer",
        message0: "%{BKY_ACTUATORS_GROVEBUZZER_PLAYMUSIC_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "MUSIC",
            options: [
                ["Gamme", "0"],
                ["Star Wars", "1"],
                ["R2D2", "2"]
            ]
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        style: "actuators_blocks",
        tooltip: "%{BKY_ACTUATORS_GROVEBUZZER_PLAYMUSIC_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE SPEAKER MODULE OR BUZZER _ PLAY FREQUENCY JSON
    {
        type: "actuators_tone",
        message0: "%{BKY_ACTUATORS_TONE_TITLE}",
        args0: [{
            type: "input_value",
            name: "FREQUENCY",
            check: "Decimal"
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        style: "actuators_blocks",
        tooltip: "%{BKY_ACTUATORS_TONE_TOOLTIP}",
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE SPEAKER MODULE OR BUZZER _ STOP MUSIC JSON
    {
        type: "actuators_noTone",
        message0: "%{BKY_ACTUATORS_NOTONE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        style: "actuators_blocks",
        tooltip: "%{BKY_ACTUATORS_NOTONE_TOOLTIP}",
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK CONTROL WATER ATOMIZER
    {
        type: "actuators_setWaterAtomizerState",
        message0: "%{BKY_ACTUATORS_GROVEWATERATOMIZATION_CONTROL_TITLE}",
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
        previousStatement: null,
        nextStatement: null,
        style: "actuators_blocks",
        tooltip: "%{BKY_ACTUATORS_GROVEWATERATOMIZATION_CONTROL_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK CONTROL ELECTROMAGNET
    {
        type: "actuators_setElectromagnetState",
        message0: "%{BKY_ACTUATORS_GROVEELECTROMAGNET_CONTROL_TITLE}",
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
        previousStatement: null,
        nextStatement: null,
        style: "actuators_blocks",
        tooltip: "%{BKY_ACTUATORS_GROVEELECTROMAGNET_CONTROL_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    }
]); // END JSON ACTUATORS EXTRACT //
