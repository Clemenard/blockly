Blockly.Blocks.basic = {};
Blockly.Python.forever = function (a) {
    if (Blockly.Python.definitions_.import_test === undefined)
        Blockly.Python.definitions_.import_test = "from microbit import *";
    var b = Blockly.Python.statementToCode(a, "DO");
    b = Blockly.Python.addLoopTrap(b, a.id) || Blockly.Python.PASS;
    return "while True:" + NEWLINE + b;
};
Blockly.Python.show_leds = function (a) {
    const BRIGHTNESS = 9;
    var image = "";
    for (var r = 0; r < 5; r++) {
        for (var c = 0; c < 5; c++) {
            var label = "LED" + r + "" + c;
            image += (a.getFieldValue(label, Blockly.Python.ORDER_MEMBER) === "TRUE") ? BRIGHTNESS : "0";
        }
        image += (r < 4) ? ":" : "";
    }
    return "led_image = Image(\"" + image + "\")" + NEWLINE + "display.show(led_image)" + NEWLINE;
};
Blockly.Python.show_number = function (a) {
    var b = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    return "display.scroll(" + b + ")" + NEWLINE;
};
Blockly.Python.show_string = function (a) {
    var a = Blockly.Python.valueToCode(a, "TEXT", Blockly.Python.ORDER_NONE) || "''";
    return "display.scroll(str(" + a + "))" + NEWLINE;
};
Blockly.Python.show_icon = function (a) {
    var b = a.getFieldValue("ICON") || "NO";
    return "display.show(Image." + b + ")" + NEWLINE;
};
Blockly.Python.show_clock = function (a) {
    var b = Blockly.Python.valueToCode(a, "CLOCK", Blockly.Python.ORDER_NONE) || "NO";
    if (b < 1) b = 1;
    if (b > 12) b = 12;
    return "display.show(Image.CLOCK" + b + ")" + NEWLINE;
};
Blockly.Python.show_arrow = function (a) {
    var b = a.getFieldValue("ARROW") || "NO";
    return "display.show(Image.ARROW_" + b + ")" + NEWLINE;
};
Blockly.Python.show_gauge = function (a) {
    Blockly.Python.addFunction('func_gauge', DEF_MICROBIT_LED_GAUGE);
    var value = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    var max = Blockly.Python.valueToCode(a, "MAX", Blockly.Python.ORDER_NONE) || 0;
    return "plotBarGraph(" + value + ", " + max + ")" + NEWLINE;
};
Blockly.Python.set_pixel = function (a) {
    var x = Blockly.Python.valueToCode(a, "X", Blockly.Python.ORDER_NONE) || 0;
    if (x < 0) b = 0;
    if (x > 5) b = 5;
    var y = Blockly.Python.valueToCode(a, "Y", Blockly.Python.ORDER_NONE) || 0;
    if (y < 0) b = 0;
    if (y > 5) b = 5;
    var state = Blockly.Python.valueToCode(a, "VALUE", Blockly.Python.ORDER_NONE) || 0;
    var light = 9;
    if (state == 0) light = 0;
    return "display.set_pixel(" + x + "," + y + "," + light + ")" + NEWLINE;
};
Blockly.Python.set_light_pixel = function (a) {
    var x = Blockly.Python.valueToCode(a, "X", Blockly.Python.ORDER_NONE) || 0;
    if (x < 0) b = 0;
    if (x > 5) b = 5;
    var y = Blockly.Python.valueToCode(a, "Y", Blockly.Python.ORDER_NONE) || 0;
    if (y < 0) b = 0;
    if (y > 5) b = 5;
    var light = Blockly.Python.valueToCode(a, "LIGHT", Blockly.Python.ORDER_NONE) || 0;
    if (light < 0) light = 0;
    if (light > 9) light = 9;
    return "display.set_pixel(" + x + ',' + y + ',' + light + ')' + NEWLINE;
};
Blockly.Python.clear = function () {
    return "display.clear()" + NEWLINE;
};
Blockly.Python.on_start = function (a) {
    if (Blockly.Python.definitions_.import_test === undefined)
        Blockly.Python.definitions_.import_test = "from microbit import *";
    var b = Blockly.Python.statementToCode(a, "DO");
    var statements = b.split(NEWLINE);
    var formatted = function () {
        var formattedSetup = "";
        statements.forEach(function (statement) {
            if (statement !== "") {
                if (statement.search(/\S/) <= 2)
                    formattedSetup += statement.trim();
                else
                    formattedSetup += statement;
                formattedSetup += NEWLINE;
            }
        });
        return formattedSetup;
    };
    b = formatted();
    Blockly.Python.definitions_.setup = b
    return "";
};

