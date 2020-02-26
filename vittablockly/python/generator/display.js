Blockly.Python.display_print = function () {
    var txt = Blockly.Python.valueToCode(this, "TEXT", Blockly.Python.ORDER_MEMBER) || "''";
    return "print(" + txt + ")" + NEWLINE;
};
Blockly.Python.display_input = function () {
    var txt = Blockly.Python.valueToCode(this, "TEXT", Blockly.Python.ORDER_MEMBER) || "''";
    return ["input(" + txt + ")", Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python.variables_force_type = function () {
    let value = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_MEMBER) || 0;
    return [this.getFieldValue("TYPE") + "(" + value + ")", Blockly.Python.ORDER_ATOMIC]
};