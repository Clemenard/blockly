Blockly.Python.turtle_direction = function () {
    Blockly.Python.definitions_.import_turtle = IMPORT_TURTLE;
    let direction = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || "None";
    return "turtle." + this.getFieldValue("TYPE") + "(" + direction + ")" + NEWLINE;
};
Blockly.Python.turtle_turn = function () {
    Blockly.Python.definitions_.import_turtle = IMPORT_TURTLE;
    let direction = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || "None";
    return "turtle." + this.getFieldValue("TYPE") + "(" + direction + ")" + NEWLINE;
};
Blockly.Python.turtle_goto = function () {
    Blockly.Python.definitions_.import_turtle = IMPORT_TURTLE;
    let ord = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || "None";
    let abs = Blockly.Python.valueToCode(this, "TYPE", Blockly.Python.ORDER_NONE) || "None";
    return "turtle.goto(" + abs + "," + ord + ")" + NEWLINE;
};
Blockly.Python.turtle_circle = function () {
    Blockly.Python.definitions_.import_turtle = IMPORT_TURTLE;
    let radius = Blockly.Python.valueToCode(this, "RADIUS", Blockly.Python.ORDER_NONE) || "None";
    return "turtle.circle(" + radius + ")" + NEWLINE;
};
Blockly.Python.turtle_write = function () {
    Blockly.Python.definitions_.import_turtle = IMPORT_TURTLE;
    let size = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || "None";
    let word = Blockly.Python.valueToCode(this, "TYPE", Blockly.Python.ORDER_NONE) || "None";
    return "turtle.write(" + word + ", None, None, \"" + size + "pt normal\")" + NEWLINE;
};
Blockly.Python.turtle_shape = function () {
    Blockly.Python.definitions_.import_turtle = IMPORT_TURTLE;
    return "turtle.shape(\"" + this.getFieldValue("TYPE") + "\")" + NEWLINE;
};
Blockly.Python.turtle_colour = function () {
    Blockly.Python.definitions_.import_turtle = IMPORT_TURTLE;
    let turtleColor = this.getFieldValue("FIELDNAME") || "None";
    let width = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || "None";
    return "turtle.color(\"" + turtleColor + "\")" + NEWLINE + "turtle.width(" + width + ")" + NEWLINE;
};
Blockly.Python.turtle_fill = function () {
    Blockly.Python.definitions_.import_turtle = IMPORT_TURTLE;
    let fillColor = this.getFieldValue("FIELDNAME") || "None";
    var branchCode = Blockly.Python.statementToCode(this, 'DO') || Blockly.Python.PASS;
    //branchCode = branchCode.substr(2) // enlever la tabulation de python
    var res = branchCode.split(NEWLINE);
    var finalres = "";
    for (var i = 0; i < res.length; i++) {
        finalres += res[i].substr(2) + NEWLINE;
    }
    return "turtle.fillcolor(\"" + fillColor + "\")" + NEWLINE + "turtle.begin_fill()" + NEWLINE + finalres.substr(0, finalres.length - 1) + "turtle.end_fill()" + NEWLINE;
};
Blockly.Python.turtle_pen = function () {
    Blockly.Python.definitions_.import_turtle = IMPORT_TURTLE;
    return "turtle." + this.getFieldValue("TYPE") + "()" + NEWLINE;
};
Blockly.Python.turtle_visibility = function () {
    Blockly.Python.definitions_.import_turtle = IMPORT_TURTLE;
    return "turtle." + this.getFieldValue("TYPE") + "turtle()" + NEWLINE;
};
Blockly.Python.turtle_stamp = function () {
    Blockly.Python.definitions_.import_turtle = IMPORT_TURTLE;
    return "turtle.stamp()" + NEWLINE;
};
Blockly.Python.turtle_speed = function () {
    Blockly.Python.definitions_.import_turtle = IMPORT_TURTLE;
    let speed = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || "None";
    return "turtle.speed(" + speed + ")" + NEWLINE;
};
Blockly.Python.turtle_reset = function () {
    Blockly.Python.definitions_.import_turtle = IMPORT_TURTLE;
    return "turtle.reset()" + NEWLINE;
};