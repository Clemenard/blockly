Blockly.Python.graph_matplotlib_plot = function () {
    Blockly.Python.definitions_.import_graph = IMPORT_MATPLOTLIB;
    let xTab = Blockly.Python.valueToCode(this, "X", Blockly.Python.ORDER_NONE) || "";
    let yTab = Blockly.Python.valueToCode(this, "Y", Blockly.Python.ORDER_NONE) || "";
    return "plt.plot(" + xTab + "," + yTab + ")" + NEWLINE + "plt.show()" + NEWLINE;
};
Blockly.Python.graph_matplotlib_setLabel = function () {
    Blockly.Python.definitions_.import_graph = IMPORT_MATPLOTLIB;
    let titleLabel = Blockly.Python.valueToCode(this, "TITLE_LABEL", Blockly.Python.ORDER_NONE) || "''";
    let xLabel = Blockly.Python.valueToCode(this, "X_LABEL", Blockly.Python.ORDER_NONE) || "''";
    let yLabel = Blockly.Python.valueToCode(this, "Y_LABEL", Blockly.Python.ORDER_NONE) || "''";
    return "plt.title(" + titleLabel + ")" + NEWLINE + "plt.xlabel(" + xLabel + ")" + NEWLINE + "plt.ylabel(" + yLabel + ")" + NEWLINE;
};