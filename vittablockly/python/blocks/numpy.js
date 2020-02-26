
Blockly.Blocks.numpy_table_with_elements = {
    init: function () {
        this.setStyle("numpy_blocks");
        this.itemCount_ = 3;
        this.updateShape_();
        this.setOutput(!0, "Array");
        this.setMutator(new Blockly.Mutator(["numpy_table_element"]));
        this.setTooltip(Blockly.Msg.NUMPY_TABLE_WITH_INPUT_TOOLTIP)
    },
    mutationToDom: function () {
        var a = document.createElement("mutation");
        a.setAttribute("items", this.itemCount_);
        return a
    },
    domToMutation: function (a) {
        this.itemCount_ = parseInt(a.getAttribute("items"));
        this.updateShape_()
    },
    decompose: function (a) {
        var b = a.newBlock("numpy_table_container");
        b.initSvg();
        for (var c = b.getInput("STACK").connection, d = 0; d < this.itemCount_; d++) {
            var e = a.newBlock("numpy_table_element");
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
            this.appendDummyInput("EMPTY").appendField(Blockly.Msg.NUMPY_TABLE_EMPTY_TITLE);
        for (var a = 0; a < this.itemCount_; a++)
            if (!this.getInput("ADD" + a)) {
                var b = this.appendValueInput("ADD" + a);
                0 == a && b.appendField(Blockly.Msg.NUMPY_TABLE_WITH_INPUT_TITLE)
            }
        for (; this.getInput("ADD" + a);) this.removeInput("ADD" + a), a++
    }
};
Blockly.Blocks.numpy_table_container = {
    init: function () {
        this.setStyle("numpy_blocks");
        this.appendDummyInput().appendField(Blockly.Msg.NUMPY_TABLE_CONTAINER_TITLE);
        this.appendStatementInput("STACK");
        this.setTooltip(Blockly.Msg.NUMPY_TABLE_CONTAINER_TOOLTIP);
        this.contextMenu = !1
    }
};
Blockly.Blocks.numpy_table_element = {
    init: function () {
        this.setStyle("numpy_blocks");
        this.appendDummyInput().appendField(Blockly.Msg.NUMPY_TABLE_ELEMENT_TITLE);
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setTooltip(Blockly.Msg.NUMPY_TABLE_ELEMENT_TOOLTIP);
        this.contextMenu = !1
    }
};
Blockly.Blocks.numpy_square_matrix = {
    dim_: 3,
    init: function () {
        this.line = new Array();
        this.setStyle("numpy_blocks");
        this.appendDummyInput()
            .appendField(Blockly.Msg.NUMPY_SQUARE_MATRIX_TITLE)
            .appendField(new Blockly.FieldTextButton('+', function () {
                this.sourceBlock_.raiseMatrixSize();
                return this.dim_;
            }))
            .appendField(new Blockly.FieldTextButton('–', function () {
                this.sourceBlock_.reduceMatrixSize();
                return this.dim_;
            }));
        this.setInputsInline(false);
        this.setOutput(!0, "Array");
        this.setTooltip(Blockly.Msg.NUMPY_SQUARE_MATRIX_TOOLTIP)
    },
    mutationToDom: function () {
        var a = document.createElement("mutation");
        for (var j = 0; j < this.dim_; j++) {
            for (var i = 0; i < this.dim_; i++) {
                a.setAttribute("dim", this.dim_);
            }
        }
        return a
    },
    domToMutation: function (a) {
        this.dim_ = parseInt(a.getAttribute("dim"));
        this.updateShape_();
    },
    raiseMatrixSize: function () {
        if (this.dim_ < 10) {
            this.addColumnFields();
            this.line[this.dim_] = this.appendDummyInput('line_' + this.dim_);
            for (var i = 0; i < this.dim_ + 1; i++) {
                this.line[this.dim_].appendField(new Blockly.FieldTextInput("0"), 'element_' + this.dim_ + i);
            }
            this.dim_ += 1;
        }
    },
    reduceMatrixSize: function () {
        if (this.dim_ > 2) {
            this.removeColumnFields();
            this.removeInput('line_' + (this.dim_ - 1));
            this.dim_ -= 1;
        }
    },
    updateShape_: function () {
        for (var j = 0; j < this.dim_; j++) {
            this.line[j] = this.appendDummyInput('line_' + j);
            for (var i = 0; i < this.dim_; i++) {
                this.line[j].appendField(new Blockly.FieldTextInput("0"), 'element_' + j + i);
            }
        }
    },
    removeColumnFields: function () {
        for (var j = this.dim_ - 1; j >= 0; j--) {
            this.line[j].removeField('element_' + j + (this.dim_ - 1));
        }

    },
    addColumnFields: function () {
        for (var j = 0; j < this.dim_; j++) {
            this.line[j].appendField(new Blockly.FieldTextInput("0"), 'element_' + j + this.dim_);
        }
    }
};

Blockly.defineBlocksWithJsonArray([{
    type: "numpy_table_with_shape",
    message0: "%{BKY_NUMPY_TABLE_WITH_SHAPE_TITLE}",
    args0: [{
        type: "input_value",
        name: "COL",
        check: "Number"
    }, {
        type: "input_value",
        name: "ROW",
        check: "Number"
    }, {
        type: "input_value",
        name: "VALUE",
    }],
    output: "Array",
    inputsInline: true,
    style: "numpy_blocks",
    tooltip: "%{BKY_NUMPY_TABLE_WITH_SHAPE_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type: "numpy_arange",
    message0: "%{BKY_NUMPY_ARANGE_TITLE}",
    args0: [{
        type: "input_value",
        name: "MIN",
        check: "Number"
    }, {
        type: "input_value",
        name: "MAX",
        check: "Number"
    }, {
        type: "input_value",
        name: "STEP",
        check: "Number"
    }],
    output: "Array",
    inputsInline: true,
    style: "numpy_blocks",
    tooltip: "%{BKY_NUMPY_ARANGE_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type: "numpy_linspace",   
    message0: "%{BKY_NUMPY_LINSPACE_TITLE}",
    args0: [{
        type: "input_value",
        name: "MIN",
        check: "Number"
    }, {
        type: "input_value",
        name: "MAX",
        check: "Number"
    }, {
        type: "input_value",
        name: "N",
        check: "Number"
    }],
    output: "Array",
    inputsInline: true,
    style: "numpy_blocks",
    tooltip: "%{BKY_NUMPY_LINSPACE_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type: "numpy_getSizeShape",
    message0: "%{BKY_NUMPY_SIZESHAPE_TITLE}",
    args0: [{
        type: "field_dropdown",
        name: "TYPE",
        options: [
            ["%{BKY_NUMPY_SIZE}", "size"],
            ["%{BKY_NUMPY_SHAPE}", "shape"]
        ]
    }, {
        type: "input_value",
        name: "LIST",
        check: "Array"
    }],
    output: "Number" || "array",
    inputsInline: true,
    style: "numpy_blocks",
    tooltip: "%{BKY_NUMPY_SIZESHAPE_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type: "numpy_getElement_matrix",
    message0: "%{BKY_NUMPY_GET_ELEMENT_MATRIX_TITLE}",
    args0: [{
        type: "input_value",
        name: "I",
        check: "Number"
    }, {
        type: "input_value",
        name: "J",
        check: "Number"
    }, {
        type: "input_value",
        name: "LIST"
    }],
    output: "Number" || "String" || "Boolean",
    inputsInline: true,
    style: "numpy_blocks",
    tooltip: "{BKY_NUMPY_GET_ELEMENT_MATRIX_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type: "numpy_getElement_list",
    message0: "%{BKY_NUMPY_GET_ELEMENT_LIST_TITLE}",
    args0: [{
        type: "input_value",
        name: "I",
        check: "Number"
    }, {
        type: "input_value",
        name: "LIST"
    }],
    output: "Number" || "String" || "Boolean",
    inputsInline: true,
    style: "numpy_blocks",
    tooltip: "{BKY_NUMPY_GET_ELEMENT_LIST_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type: "numpy_single",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"],
            ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"],
            ["e^", "EXP"]
        ]
    }, {
        type: "input_value",
        name: "NUM",
        check: "Array"
    }],
    output: "Array",
    style: "numpy_blocks",
    helpUrl: VITTASCIENCE_SITE,
    extensions: ["math_op_tooltip"]
}, {
    type: "numpy_trig",
    message0: "%1 %2",
    args0: [{
        type: "field_dropdown",
        name: "OP",
        options: [
            ["%{BKY_MATH_TRIG_SIN}", "SIN"],
            ["%{BKY_MATH_TRIG_COS}", "COS"],
            ["%{BKY_MATH_TRIG_TAN}", "TAN"],
            ["%{BKY_MATH_TRIG_ASIN}", "ASIN"],
            ["%{BKY_MATH_TRIG_ACOS}", "ACOS"],
            ["%{BKY_MATH_TRIG_ATAN}", "ATAN"]
        ]
    }, {
        type: "input_value",
        name: "NUM",
        check: "Array"
    }],
    output: "Array",
    style: "numpy_blocks",
    helpUrl: VITTASCIENCE_SITE
}]); 