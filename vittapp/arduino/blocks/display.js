
/**
 * DISPLAY BLOCKS DEFINITION
 */

Blockly.defineBlocksWithJsonArray([
    // GROVE I2C LCD1602 RGB MODULE _ SET TEXT JSON
    {
        type: "display_lcdRGBSetText",
        message0: "%{BKY_DISPLAY_LCD_SETTEXT_TITLE}",
        args0: [{
            type: "input_value",
            name: "TEXT"
        }, {
            type: "field_dropdown",
            name: "line",
            options: [
                ["0", "0"],
                ["1", "1"]
            ]
        }],
        inputsInline: !0,
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_LCD_SETTEXT_TOOLTIP}",
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE I2C LCD1602 RGB MODULE _ SET RGB JSON
    {
        type: "display_lcdRGBSetColor",
        message0: "%{BKY_DISPLAY_LCD_SETRGBCOLOR_TITLE}",
        args0: [{
            type: "input_value",
            name: "R",
            value: 255,
            check: "Decimal"
        }, {
            type: "input_value",
            name: "G",
            value: 255,
            check: "Decimal"
        }, {
            type: "input_value",
            name: "B",
            value: 255,
            check: "Decimal"
        }],
        inputsInline: !0,
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_LCD_SETRGBCOLOR_TOOLTIP}",
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE I2C LCD1602 RGB MODULE _ SET RGB PALETTE JSON
    {
        type: "display_lcdRGBSetPaletteColor",
        message0: "%{BKY_DISPLAY_LCD_SETPALETTERGBCOLOR_TITLE}",
        args0: [{
            type: "input_value",
            name: "COLOR",
            check: "Colour"
        }],
        previousStatement: null,
        nextStatement: null,
        inputsInline: !0,
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_LCD_SETPALETTERGBCOLOR_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE,
    },
    // GROVE I2C LCD1602 RGB MODULE _ CLEAR SCREEN JSON
    {
        type: "display_lcdRGBClear",
        message0: "%{BKY_DISPLAY_LCD_CLEAR_TITLE}",
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_LCD_CLEAR_TOOLTIP}",
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK OLED ADD TEXT
    {
        type: "display_addOledText",
        message0: "%{BKY_DISPLAY_OLED_ADDTEXT_TITLE}",
        args0: [{
            type: "input_value",
            name: "TEXT"
        }, {
            type: "input_value",
            name: "X",
            check: "Decimal"
        }, {
            type: "input_value",
            name: "Y",
            check: "Decimal"
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_OLED_ADDTEXT_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK OLED DRAW BITMAP LOGO
    {
        type: "display_oledScreen_drawBitmapLogo",
        message0: "%{BKY_DISPLAY_OLED_DRAWBITMAPLOGO_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "LOGO",
            options: [
                ["%{BKY_LOGO_VITTASCIENCE}", "vittascienceLogo"],
                ["%{BKY_LOGO_ARDUINO}", "arduinoLogo"],
                ["%{BKY_LOGO_SEEED}", "seeedLogo"],
                ["%{BKY_LOGO_MICROBIT}", "microbitLogo"]
            ]
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_OLED_DRAWBITMAPLOGO_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK OLED CLEAR DISPLAY
    {
        type: "display_clearOledScreen",
        message0: "%{BKY_DISPLAY_OLED_CLEARSCREEN_TITLE}",
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_OLED_CLEARSCREEN_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE LED MODULE _ WRITE DIGITAL JSON
    {
        type: "display_setGroveSocketLed",
        message0: "%{BKY_DISPLAY_SETGROVELED_TITLE}",
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
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_SETGROVELED_TOOLTIP}",
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // LED MODULE _ WRITE ANALOG PWM
    {
        type: "display_setLEDintensity",
        message0: "%{BKY_DISPLAY_SETLEDINTENSITY_TITLE}",
        args0: [{
            type: "input_value",
            name: "VALUE",
            check: "Decimal"
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_WRITE_ANALOG_PINS
        }],
        inputsInline: !0,        
        previousStatement: null,
        nextStatement: null,
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_SETLEDINTENSITY_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE CHAINABLE LED RGB MODULE _ DEFINE MODULE
    {
        type: "display_defineChainableRGBLed",
        message0: "%{BKY_DISPLAY_CHAINABLERGBLED_DEFINE_TITLE}",
        args0: [{
            type: "input_value",
            name: "NLED",
            check: "Decimal"
        }, {
            type: "field_dropdown",
            name: "CIN",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "DIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_CHAINABLERGBLED_DEFINE_TOOLTIP}",
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE CHAINABLE LED RGB MODULE _ SET COLOR
    {
        type: "display_setColorChainableRGBLed",
        message0: "%{BKY_DISPLAY_CHAINABLE_RGBLED_TITLE}",
        args0: [{
            type: "input_value",
            name: "LED",
            check: "Decimal"
        }, {
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
        }],
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_CHAINABLE_RGBLED_TOOLTIP}",
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE CHAINABLE LED RGB MODULE _ SET PALETTE COLOR
    {
        type: "display_setPaletteColorChainableRGBLed",
        message0: "%{BKY_DISPLAY_CHAINABLE_PALETTERGBLED_TITLE}",
        args0: [{
            type: "input_value",
            name: "LED",
            check: "Decimal"
        }, {
            type: "input_value",
            name: "COLOR",
            check: "Colour"
        }],
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_CHAINABLE_PALETTERGBLED_TOOLTIP}",
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK CONTROL NEOPIXEL LED
    {
        type: "display_controlNeopixelLed",
        message0: "%{BKY_DISPLAY_NEOPIXEL_LEDCONTROL_TITLE}",
        args0: [{
            type: "input_value",
            name: "LED",
            check: "Decimal"
        }, {
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
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        previousStatement: null,
        nextStatement: null,
        inputsInline: !0,
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_NEOPIXEL_LEDCONTROL_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE,
    },
    // BLOCK CONTROL NEOPIXEL LED WITH COLOR
    {
        type: "display_controlColorNeopixelLed",
        message0: "%{BKY_DISPLAY_NEOPIXEL_COLORLEDCONTROL_TITLE}",
        args0: [{
            type: "input_value",
            name: "LED",
            check: "Decimal"
        }, {
            type: "input_value",
            name: "COLOR",
            check: "Colour"
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        previousStatement: null,
        nextStatement: null,
        inputsInline: !0,
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_NEOPIXEL_COLORLEDCONTROL_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE,
    },
    // BLOCK RAINBOW NEOPIXEL
    {
        type: "display_rainbowNeopixel",
        message0: "%{BKY_DISPLAY_NEOPIXEL_RAINBOW_TITLE}",
        args0: [{
            type: "input_value",
            name: "LED",
            check: "Decimal"
        }, {
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }],
        previousStatement: null,
        nextStatement: null,
        inputsInline: !0,
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_NEOPIXEL_RAINBOW_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE 4 DIGIT DISPLAY _ SET NUMBER JSON
    {
        type: "display_setNumberGrove4Digit",
        message0: "%{BKY_DISPLAY_4DIGIT_SETNUMBER_TITLE}",
        args0: [{
            type: "input_value",
            name: "N",
            check: Blockly.Types.NUMBER.check
        }, {
            type: "field_dropdown",
            name: "CLK",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "DIO",
            options: ARDUINO_DIGITAL_PINS
        }],
        inputsInline: !0,
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_4DIGIT_SETNUMBER_TOOLTIP}",
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK GROVE 4DIGIT SET CLOCK
    {
        type: "display_setClockGrove4Digit",
        message0: "%{BKY_DISPLAY_4DIGIT_SETCLOCK_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "CLK",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "DIO",
            options: ARDUINO_DIGITAL_PINS
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_4DIGIT_SETCLOCK_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE LED BAR MODULE _  DISPLAY JSON
    {
        type: "display_setLevelLedBar",
        message0: "%{BKY_DISPLAY_LEDBARSETLEVEL_TITLE}",
        args0: [{
            type: "input_value",
            name: "VALUE",
            check: "Decimal"
        }, {
            type: "field_dropdown",
            name: "DI",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "DCKI",
            options: ARDUINO_DIGITAL_PINS
        }],
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        style: "display_blocks",
        tooltip: "%{BKY_DISPLAY_LEDBARSETLEVEL_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    }
]);
