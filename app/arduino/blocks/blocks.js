
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

/**
 * COMMUNICATION BLOCK DEFINITION
 */

// GRAPH ENTRY JSON
Blockly.Blocks.com_create_join_item = {
    init: function () {
        this.setColour(Blockly.Blocks.communication.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.COMMUNICATION_WRITEGRAPH_TITLE_ENTRY);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.contextMenu = !1
    }
};
// GRAPH CONTRAINER JSON
Blockly.Blocks.com_create_join_contrainer = {
    init: function () {
        this.setColour(Blockly.Blocks.communication.HUE);
        this.appendDummyInput().appendField(Blockly.Msg.COMMUNICATION_WRITEGRAPH_TITLE_ADD);
        this.appendStatementInput("STACK");
        this.contextMenu = !1
    }
};
// GRAPH SERIAL WRITE
Blockly.Blocks.communication_graphSerialWrite = {
    init: function () {
        this.jsonInit({
            colour: Blockly.Blocks.communication.HUE,
            message0: Blockly.Msg.COMMUNICATION_WRITEGRAPH_TITLE,
            tooltip: Blockly.Msg.COMMUNICATION_WRITEGRAPH_TOOLTIP,
            helpUrl: Blockly.Msg.CONTROLS_REPEAT_HELPURL,
            nextStatement: null,
            previousStatement: null
        });
        this.itemCount_ = 2;
        this.updateShape_();
        this.setMutator(new Blockly.Mutator(["com_create_join_item"]));
    },
    mutationToDom: function () {
        var a = document.createElement("mutation");
        a.setAttribute("items", this.itemCount_);
        return a
    },
    domToMutation: function (a) {
        this.itemCount_ = parseInt(a.getAttribute("items"),
            10);
        this.updateShape_()
    },
    decompose: function (a) {
        var b = a.newBlock("com_create_join_contrainer");
        b.initSvg();
        for (var c = b.getInput("STACK").connection, d = 0; d < this.itemCount_; d++) {
            var e = a.newBlock("com_create_join_item");
            e.initSvg();
            c.connect(e.previousConnection);
            c = e.nextConnection
        }
        return b
    },
    compose: function (a) {
        var b = a.getInputTargetBlock("STACK");
        for (a = []; b;) a.push(b.valueConnection_), b = b.nextConnection && b.nextConnection.targetBlock();
        for (b = 0; b < this.itemCount_; b++) {
            var c = this.getInput("ADD" + b).connection.targetConnection;
            c && -1 == a.indexOf(c) && c.disconnect()
        }
        this.itemCount_ = a.length;
        this.updateShape_();
        for (b = 0; b < this.itemCount_; b++) Blockly.Mutator.reconnect(a[b], this, "ADD" + b)
    },
    saveConnections: function (a) {
        a = a.getInputTargetBlock("STACK");
        for (var b = 0; a;) {
            var c = this.getInput("ADD" + b);
            a.valueConnection_ = c && c.connection.targetConnection;
            b++;
            a = a.nextConnection && a.nextConnection.targetBlock()
        }
    },
    updateShape_: function () {
        this.itemCount_ && this.getInput("EMPTY") ? this.removeInput("EMPTY") : this.itemCount_ || this.getInput("EMPTY") ||
            this.appendDummyInput("EMPTY").appendField(this.newQuote_(!0)).appendField(this.newQuote_(!1));
        for (var a = 0; a < this.itemCount_; a++)
            if (!this.getInput("ADD" + a)) {
                var b = this.appendValueInput("ADD" + a);
                0 == a
            }
        for (; this.getInput("ADD" + a);) this.removeInput("ADD" + a), a++
    },
    newQuote_: Blockly.Blocks.text.newQuote_,
    getBlockType: function () {
        return Blockly.Types.TEXT
    }
};

Blockly.Blocks.communication = {};
Blockly.Blocks.communication.HUE = "#7ac943";

Blockly.defineBlocksWithJsonArray([
    // BLOCK COM SERIAL WRITE 
    {
        type: "communication_serialWrite",
        message0: "%{BKY_COMMUNICATION_SERIAL_WRITE_TITLE}",
        args0: [{
            type: "input_value",
            name: "TEXT",
            check: Blockly.Types.TEXT.check
        }],
        previousStatement: null,
        nextStatement: null,
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_SERIAL_WRITE_TOOLTIP}",
    },
    //BLOCK COM SERIAL ON DATA AVAILABLE | READ 
    {
        type: "communication_onSerialDataReceived",
        message0: "%{BKY_COMMUNICATION_SERIAL_ONDATARECEIVED_TITLE}",
        args0: [{
            type: "input_value",
            name: "VALUE"
        }],
        message1: "%{BKY_COMMUNICATION_SERIAL_ONDATARECEIVED_INPUT_DO}",
        args1: [{
            type: "input_statement",
            name: "DO"
        }],
        previousStatement: null,
        nextStatement: null,
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_SERIAL_ONDATARECEIVED_TOOLTIP}",
    },
    // GRAPH DATA FORMAT
    {
        type: "communication_graphSerialWrite_datasFormat",
        message0: "%{BKY_COMMUNICATION_PRINT_DATAS_TITLE}",
        args0: [{
            type: "input_value",
            name: "NAME",
            check: "String"
        }, {
            type: "input_value",
            name: "DATA",
            check: ["Decimal", "Number", "Boolean"]
        }],
        output: "Number",
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_PRINT_DATAS_TOOLTIP}",
        inputsInline: !0,
        helpUrl: VITTASCIENCE_SITE
    },
    // PLAY COMPUTER NOTE
    {
        type: "communication_playComputerMusic",
        message0: "%{BKY_COMMUNICATION_PLAYCOMPUTERNOTE_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "Note",
            options: MUSIC_NOTES
        }],
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_PLAYCOMPUTERNOTE_TOOLTIP}",
        nextStatement: null,
        previousStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // PLAY COMPUTER FREQUENCY
    {
        type: "communication_playComputerFrequency",
        message0: "%{BKY_COMMUNICATION_SETCOMPUTERFREQUENCY_TITLE}",
        args0: [{
            type: "input_value",
            name: "FREQUENCY",
            check: "Decimal"
        }],
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_SETCOMPUTERFREQUENCY_TOOLTIP}",
        inputsInline: !0,
        previousStatement: null,
        nextStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // STOP COMPUTER MUSIC
    {
        type: "communication_stopComputerMusic",
        message0: "%{BKY_COMMUNICATION_STOPCOMPUTERFREQUENCY_TITLE}",
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_STOPCOMPUTERFREQUENCY_TOOLTIP}",
        nextStatement: null,
        previousStatement: null,
        helpUrl: VITTASCIENCE_SITE
    },
    // BLOCK WRITE ON OPENLOG SD CARD
    {
        type: "communication_writeOpenLogSd",
        message0: "%{BKY_COMMUNICATION_OPENLOG_WRITE_TITLE}",
        args0: [{
            type: "input_dummy"
        }, {
            type: "field_dropdown",
            name: "RX",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "TX",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "input_dummy"
        }, {
            type: "input_value",
            name: "DATA",
            check: ["String"]
        }],
        previousStatement: null,
        nextStatement: null,
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_OPENLOG_WRITE_TOOLTIP}",
        helpurl: ""
    },
    // WRITE DATA SD CARD JSON
    {
        type: "communication_SDWriteDataSPI",
        message0: "%{BKY_COMMUNICATION_SDSPI_WRITE_TITLE}",
        args0: [{
            type: "input_dummy"
        }, {
            type: "field_dropdown",
            name: "CS",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "input_dummy"
        }, {
            type: "input_value",
            name: "DATA",
            check: ["String"]
        }],
        previousStatement: null,
        nextStatement: null,
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_SDSPI_WRITE_TOOLTIP}"
    },
    // GROVE SERIAL BLUETOOTH _ SEND DATA JSON
    {
        type: "communication_sendSerialBluetoothData",
        message0: "%{BKY_COMMUNICATION_BLUETOOTH_SENDDATA_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "RX",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "TX",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "input_value",
            name: "TEXT"
        }],
        previousStatement: null,
        nextStatement: null,
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_BLUETOOTH_SENDDATA_TOOLTIP}",
        helpUrl: "https://vittascience.com/tutorial/19"
    },
    //BLOCK ON BLUETOOTH DATA RECEIVED
    {
        type: "communication_onSerialBluetoothDataReceived",
        message0: "%{BKY_COMMUNICATION_BLUETOOTH_ONDATARECEIVED_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "RX",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "TX",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "input_value",
            name: "DATA"
        }],
        message1: "%{BKY_COMMUNICATION_BLUETOOTH_ONDATARECEIVED_INPUT_DO} %1",
        args1: [{
            type: "input_statement",
            name: "DO"
        }],
        previousStatement: null,
        nextStatement: null,
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_BLUETOOTH_ONDATARECEIVED_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // nRF24L01 RADIO MODULE _ SEND RADIO DATA JSON
    {
        type: "communication_sendRadioNRF24Data",
        message0: "%{BKY_COMMUNICATION_RADIONRF24_SENDDATA_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "ADDR",
            options: [
                ["0", "0"],
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"],
                ["5", "5"]
            ]
        }, {
            type: "input_value",
            name: "CANAL",
            check: ["Decimal", "Number"]
        }, {
            type: "field_dropdown",
            name: "CE",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "CSN",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "input_value",
            name: "DATA"
        }],
        previousStatement: null,
        nextStatement: null,
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_RADIONRF24_SENDDATA_TOOLTIP}",
        helpUrl: "https://vittascience.com/tutorial/19"
    },
    //nRF24L01 RADIO MODULE _ GET RADIO DATA JSON
    {
        type: "communication_onRadioNRF24_dataReceived",
        message0: "%{BKY_COMMUNICATION_RADIONRF24_DATARECEIVER_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "ADDR",
            options: [
                ["0", "0"],
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"],
                ["5", "5"]
            ]
        }, {
            type: "input_value",
            name: "CANAL",
            check: "Decimal"
        }, {
            type: "field_dropdown",
            name: "CE",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "CSN",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "input_value",
            name: "DATA",
            check: "String"
        }],
        message1: "%{BKY_COMMUNICATION_RADIONRF24_DATARECEIVER_INPUT_DO} %1",
        args1: [{
            type: "input_statement",
            name: "DO"
        }],
        previousStatement: null,
        nextStatement: null,
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_RADIONRF24_DATARECEIVER_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE RFID READER _ GET STRING CARD ID
    {
        type: "communication_rfid_getCardID",
        message0: "%{BKY_COMMUNICATION_RFID_GETSTRINGCARDID_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "RX",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "TX",
            options: ARDUINO_DIGITAL_PINS
        }],
        output: "String",
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_RFID_GETSTRINGCARDID_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE 433MHZ RF MODULE _ TRANSMITTER JSON
    {
        type: "communication_sendRadio433mhzData",
        message0: "%{BKY_COM_GROVE_433MHZ_TRANSMITTER}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "input_value",
            name: "TEXT"
        }],
        previousStatement: null,
        nextStatement: null,
        style: "communication_blocks",
        tooltip: "%{BKY_COM_GROVE_433MHZ_TRANSMITTER_TOOLTIP}",
        helpUrl: "https://vittascience.com/tutorial/19"
    },
    // GROVE 433MHZ RF MODULE _ RECEIVER JSON
    {
        type: "communication_onRadio433mhzDataReceived",
        message0: "%{BKY_COM_GROVE_433MHZ_RECEIVER}",
        args0: [{
            type: "field_dropdown",
            name: "PIN",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "input_value",
            name: "VALUE"
        }],
        message1: "%{BKY_COM_GROVE_433MHZ_RECEIVER_INPUT_DO}",
        args1: [{
            type: "input_statement",
            name: "DO"
        }],
        previousStatement: null,
        nextStatement: null,
        style: "communication_blocks",
        tooltip: "%{BKY_COM_GROVE_433MHZ_RECEIVER_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE GPS MODULE _ ON GPS DATA AVAILABLE
    {
        type: "communication_onGPSDataReceived",
        message0: "%{BKY_COMMUNICATION_GPS_ONDATARECEIVED_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "RX",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "field_dropdown",
            name: "TX",
            options: ARDUINO_DIGITAL_PINS
        }, {
            type: "input_value",
            name: "DATA"
        }],
        message1: "%{BKY_COMMUNICATION_GPS_ONDATARECEIVED_INPUT_DO} %1",
        args1: [{
            type: "input_statement",
            name: "DO"
        }],
        previousStatement: null,
        nextStatement: null,
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_GPS_ONDATARECEIVED_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE RTC SET DAY
    {
        type: "communication_clockRTC_setDay",
        message0: "%{BKY_COMMUNICATION_GROVERTC_SETDAY_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "DAY",
            options: [
                ["%{BKY_DAY_MONDAY}", "MON"],
                ["%{BKY_DAY_TUESDAY}", "TUE"],
                ["%{BKY_DAY_WEDNESDAY}", "WED"],
                ["%{BKY_DAY_THURSDAY}", "THU"],
                ["%{BKY_DAY_FRIDAY}", "FRI"],
                ["%{BKY_DAY_SATURDAY}", "SAT"],
                ["%{BKY_DAY_SUNDAY}", "SUN"]
            ]
        }, {
            type: "input_value",
            name: "MONTH_DAY",
            check: "Decimal"
        }, {
            type: "input_value",
            name: "MONTH",
            check: "Decimal"
        }, {
            type: "input_value",
            name: "YEAR",
            check: "Decimal"
        }],
        style: "communication_blocks",
        previousStatement: null,
        nextStatement: null,
        inputsInline: !0,
        tooltip: "%{BKY_COMMUNICATION_GROVERTC_SETDAY_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE RTC SET HOUR
    {
        type: "communication_clockRTC_setHour",
        message0: "%{BKY_COMMUNICATION_GROVERTC_SETHOUR_TITLE}",
        args0: [{
            type: "input_value",
            name: "HOUR",
            check: "Decimal"
        }, {
            type: "input_value",
            name: "MIN",
            check: "Decimal"
        }, {
            type: "input_value",
            name: "SEC",
            check: "Decimal"
        }],
        previousStatement: null,
        nextStatement: null,
        inputsInline: !0,
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_GROVERTC_SETHOUR_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    },
    // GROVE RTC READ
    {
        type: "communication_clockRTC_readTime",
        message0: "%{BKY_COMMUNICATION_GROVERTC_READCLOCK_TITLE}",
        args0: [{
            type: "field_dropdown",
            name: "DATA",
            options: [
                ["%{BKY_CLOCK_MONTH_DAY}", "0"],
                ["%{BKY_CLOCK_MONTH}", "1"],
                ["%{BKY_CLOCK_YEAR}", "2"],
                ["%{BKY_CLOCK_HOUR}", "3"],
                ["%{BKY_CLOCK_MINUTE}", "4"],
                ["%{BKY_CLOCK_SECOND}", "5"],
                ["%{BKY_CLOCK_WEEK_DAY}", "6"]
            ]
        }],
        output: "Number",
        inputsInline: !0,
        style: "communication_blocks",
        tooltip: "%{BKY_COMMUNICATION_GROVERTC_READCLOCK_TOOLTIP}",
        helpUrl: VITTASCIENCE_SITE
    }
]); // END JSON COMMUNICATION EXTRACT //

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

/**
 * STARTING BLOCKS DEFINITION
 */

Blockly.defineBlocksWithJsonArray([
    // BLOCK START
    {
        type: "on_start",
        message0: "%{BKY_ON_START_TITLE}",
        message1: "%{BKY_ON_START_INPUT_DO} %1",
        args1: [{
            type: "input_statement",
            name: "DO"
        }],
        tooltip: "%{BKY_ON_START_TOOLTIP}",
        style: "loop_blocks",
    },
    // BLOCK FOREVER
    {
        type: "forever",
        message0: "%{BKY_FOREVER_TITLE}",
        message1: "%{BKY_FOREVER_INPUT_DO} %1",
        args1: [{
            type: "input_statement",
            name: "DO"
        }],
        tooltip: "%{BKY_FOREVER_TOOLTIP}",
        style: "loop_blocks",
    }
]);