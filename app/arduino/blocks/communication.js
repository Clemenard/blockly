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