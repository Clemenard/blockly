Blockly.defineBlocksWithJsonArray([{
    type: "graph_matplotlib_plot",
    message0: "%{BKY_GRAPH_PLOT}",
    args0: [{
        type: "input_dummy"
    },{
        type: "input_value",
        name: "X",
        check: "Array"
    },{
        type: "input_value",
        name: "Y",
        check: "Array"
    }],
    nextStatement: null,
    previousStatement: null,
    inputsInline: false,
    style: "graph_blocks",
    tooltip: "",
    helpUrl: VITTASCIENCE_SITE
}, {
    type: "graph_matplotlib_setLabel",
    style: "graph_blocks",
    message0: "%{BKY_GRAPH_SETLABEL}",
    args0: [{
        type: "input_value",
        name: "TITLE_LABEL",
        check: "String"
    }, {
        type: "input_value",
        name: "X_LABEL",
        check: "String"
    }, {
        type: "input_value",
        name: "Y_LABEL",
        check: "String"
    }],
    inputsInline: true,
    tooltip: "",
    nextStatement: null,
    previousStatement: null,
    helpUrl: VITTASCIENCE_SITE
}]);