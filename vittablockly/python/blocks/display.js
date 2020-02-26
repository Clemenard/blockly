Blockly.defineBlocksWithJsonArray([{
    type: "display_print",
    message0: "%{BKY_DISPLAY_PRINT_TITLE}",
    args0: [{
        type: "input_value",
        name: "TEXT"
    }],
    nextStatement: null,
    previousStatement: null,
    style: "display_blocks",
    tooltip: "%{BKY_DISPLAY_PRINT_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type: "display_input",
    message0: "%{BKY_DISPLAY_INPUT_TITLE}",
    args0: [{
        type: "input_value",
        name: "TEXT",
        check: "String"
    }],
    output: "String",
    style: "display_blocks",
    tooltip: "%{BKY_DISPLAY_INPUT_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE    
}, {
    type: "variables_force_type",
    message0: "%{BKY_VARIABLES_FORCE_TYPE}",
    args0: [{
        type: "field_dropdown",
        name: "TYPE",
        options: [
            ["%{BKY_VARIABLES_FORCE_TYPE_INTEGER}", "int"],
            ["%{BKY_VARIABLES_FORCE_TYPE_FLOAT}", "float"],
            ["%{BKY_VARIABLES_FORCE_TYPE_TEXT}", "str"]
        ]
    }, {
        type: "input_value",
        name: "VALUE"
    }],
    output: "Number" | "String",
    style: "display_blocks",
    tooltip: "%{BKY_VARIABLES_FORCE_TYPE_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}]);