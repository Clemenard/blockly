Blockly.Python.numpy = {};
Blockly.Python.numpy_table_with_elements = function () {
    Blockly.Python.definitions_.import_numpy = IMPORT_NUMPY;
    for (var b = Array(this.itemCount_), c = 0; c < this.itemCount_; c++) {
        b[c] = Blockly.Python.valueToCode(this, "ADD" + c, Blockly.Python.ORDER_NONE) || "None";
    }
    return ["np.array([" + b.join(", ") + "])", Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.numpy_square_matrix = function () {
    Blockly.Python.definitions_.import_numpy = IMPORT_NUMPY;
    var code = "np.array([";
    var mat = new Array();
    for (var j = 0; j < this.dim_; j++) {
        mat[j] = new Array();
        for (var i = 0; i < this.dim_; i++) {
            mat[j][i] = this.getFieldValue('element_' + j + i);
        }
        code += "[" + mat[j].join(", ") + "]";
        if (j == (this.dim_ - 1)) code += "";
        else code += ", ";
    }
    code += "])";
    return [code, Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.numpy_table_with_shape = function () {
    Blockly.Python.definitions_.import_numpy = IMPORT_NUMPY;
    var row = Blockly.Python.valueToCode(this, "COL", Blockly.Python.ORDER_NONE) || "0";
    var col = Blockly.Python.valueToCode(this, "ROW", Blockly.Python.ORDER_NONE) || "0";
    var e = Blockly.Python.valueToCode(this, "VALUE", Blockly.Python.ORDER_NONE) || "None";
    var code = "np.array([";
    var mat = new Array();
    for (var j = 0; j < row; j++) {
        mat[j] = new Array();
        for (var i = 0; i < col; i++) {
            mat[j][i] = e;
        }
        code += "[" + mat[j].join(", ") + "]";
        if (j == (row - 1)) code += "";
        else code += ", ";
    }
    code += "])";
    return [code, Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.numpy_arange = function () {
    Blockly.Python.definitions_.import_numpy = IMPORT_NUMPY;
    var min = Blockly.Python.valueToCode(this, "MIN", Blockly.Python.ORDER_NONE) || "0";
    var max = Blockly.Python.valueToCode(this, "MAX", Blockly.Python.ORDER_NONE) || "0";
    var step = Blockly.Python.valueToCode(this, "STEP", Blockly.Python.ORDER_NONE) || "0";
    return ["np.arange(" + min + ", " + max + ", " + step + ")", Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.numpy_linspace = function () {
    Blockly.Python.definitions_.import_numpy = IMPORT_NUMPY;
    var min = Blockly.Python.valueToCode(this, "MIN", Blockly.Python.ORDER_NONE) || "0";
    var max = Blockly.Python.valueToCode(this, "MAX", Blockly.Python.ORDER_NONE) || "0";
    var step = Blockly.Python.valueToCode(this, "N", Blockly.Python.ORDER_NONE) || "0";
    return ["np.linspace(" + min + ", " + max + ", " + step + ")", Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.numpy_getSizeShape = function () {
    Blockly.Python.definitions_.import_numpy = IMPORT_NUMPY;
    let t = Blockly.Python.valueToCode(this, "LIST", Blockly.Python.ORDER_NONE) || "np.array()";
    return [t + "." + this.getFieldValue("TYPE"), Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.numpy_getElement_matrix = function () {
    Blockly.Python.definitions_.import_numpy = IMPORT_NUMPY;
    let i = Blockly.Python.valueToCode(this, "I", Blockly.Python.ORDER_NONE);
    let j = Blockly.Python.valueToCode(this, "J", Blockly.Python.ORDER_NONE);
    let t = Blockly.Python.valueToCode(this, "LIST", Blockly.Python.ORDER_NONE);
    return [t + "[" + i + "," + j + "]", Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.numpy_getElement_list = function () {
    Blockly.Python.definitions_.import_numpy = IMPORT_NUMPY;
    let i = Blockly.Python.valueToCode(this, "I", Blockly.Python.ORDER_NONE);
    let t = Blockly.Python.valueToCode(this, "LIST", Blockly.Python.ORDER_NONE);
    return [t + "[" + i + "]", Blockly.Python.ORDER_ATOMIC]
};
Blockly.Python.numpy_single = function (a) {
    Blockly.Python.definitions_.import_numpy = IMPORT_NUMPY;
    let b = a.getFieldValue("OP");
    let val = Blockly.Python.valueToCode(a, "NUM", Blockly.Python.ORDER_MULTIPLICATIVE) || "0";
    let c;
    switch (b) {
        case "ABS":
            c = "np.absolute(" + val + ")";
            break;
        case "ROOT":
            c = "np.sqrt(" + val + ")";
            break;
        case "EXP":
            c = "np.exp(" + val + ")";
            break;
    }
    return [c, Blockly.Python.ORDER_FUNCTION_CALL];
};
Blockly.Python.numpy_trig = function (a) {
    Blockly.Python.definitions_.import_numpy = IMPORT_NUMPY;
    let b = a.getFieldValue("OP");
    let val = Blockly.Python.valueToCode(a, "NUM", Blockly.Python.ORDER_MULTIPLICATIVE) || "0";
    let c = false;
    switch (b) {
        case "SIN":
            c = "np.sin(" + val + ")";
            break;
        case "COS":
            c = "np.cos(" + val + ")";
            break;
        case "TAN":
            c = "np.tan(" + val + ")";
            break;
    }
    if (c)
        return [c, Blockly.Python.ORDER_FUNCTION_CALL];
    switch (b) {
        case "ASIN":
            c = "np.arcsin(" + val + ")";
            break;
        case "ACOS":
            c = "np.arccos(" + val + ")";
            break;
        case "ATAN":
            c = "np.arctan(" + val + ")";
            break;
    }
    return [c, Blockly.Python.ORDER_MULTIPLICATIVE];
};