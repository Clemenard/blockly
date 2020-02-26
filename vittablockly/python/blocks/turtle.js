
Blockly.defineBlocksWithJsonArray([{
    type:"turtle_direction",
    message0: "%{BKY_TURTLE_DIRECTION_TITLE}",
    args0: [{
        type: "field_dropdown",
        name: "TYPE",
        options: [
            ["%{BKY_TURTLE_FORWARD_TITLE}", "forward"],
            ["%{BKY_TURTLE_BACKWARD_TITLE}", "backward"]
        ]
    }, {
        type: "input_value",
        name: "VALUE"
    }],
    nextStatement: null,
    previousStatement: null,
    style: "turtle_blocks",
    tooltip: "%{BKY_TURTLE_DIRECTION_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type:"turtle_turn",
    message0: "%{BKY_TURTLE_TURN_TITLE}",
    args0: [{
        type: "field_dropdown",
        name: "TYPE",
        options: [
            ["%{BKY_TURTLE_RIGHT_TITLE}", "right"],
            ["%{BKY_TURTLE_LEFT_TITLE}", "left"]
        ]
    }, {
        type: "input_value",
        name: "VALUE"
    }],
    nextStatement: null,
    previousStatement: null,
    style: "turtle_blocks",
    tooltip: "%{BKY_TURTLE_TURN_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type:"turtle_goto",
    message0: "%{BKY_TURTLE_GOTO_TITLE}",
    args0: [{
        type: "input_value",
        name: "TYPE",
    },{
        type: "input_value",
        name: "VALUE"
    }],
    nextStatement: null,
    previousStatement: null,
    inputsInline: true,
    style: "turtle_blocks",
    tooltip: "%{BKY_TURTLE_GOTO_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type:"turtle_circle",
    message0: "%{BKY_TURTLE_CIRCLE_TITLE}",
    args0: [{
        type: "input_value",
        name: "RADIUS",
        check: "Number"
    }],
    nextStatement: null,
    previousStatement: null,
    style: "turtle_blocks",
    tooltip: "%{BKY_TURTLE_CIRCLE_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type:"turtle_write",
    message0: "%{BKY_TURTLE_WRITE_TITLE}",
    args0: [{
        type: "input_value",
        name: "TYPE",
    }, {
        type: "input_value",
        name: "VALUE"
    }],            
    nextStatement: null,
    previousStatement: null,
    inputsInline: true,
    style: "turtle_blocks",
    tooltip: "%{BKY_TURTLE_write_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type:"turtle_shape",
    message0: "%{BKY_TURTLE_SHAPE_TITLE}",
    args0: [{
        type: "field_dropdown",
        name: "TYPE",
        options: [
            ["%{BKY_TURTLE_TURTLE_TITLE}", "turtle"],
            ["%{BKY_TURTLE_CIRCLE1_TITLE}", "circle"],
            ["%{BKY_TURTLE_CLASSIC_TITLE}", "classic"],
            ["%{BKY_TURTLE_SQUARE_TITLE}", "square"],
            ["%{BKY_TURTLE_TRIANGLE_TITLE}", "triangle"]
        ]
    }],
    nextStatement: null,
    previousStatement: null,
    style: "turtle_blocks",
    tooltip: "%{BKY_TURTLE_SHAPE_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type:"turtle_colour",
    message0: "%{BKY_TURTLE_COLOR_TITLE}",
    args0: [{
        type: "field_colour",
        name: "FIELDNAME"
    }, {
        type: "input_value",
        name: "VALUE"
    }],
    nextStatement: null,
    previousStatement: null,
    style: "turtle_blocks",
    tooltip: "%{BKY_TURTLE_COLOR_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type:"turtle_fill",
    message0: "%{BKY_TURTLE_FILL_TITLE}",
    args0: [{
        type: "field_colour",
        name: "FIELDNAME"
    }],
    message1: "%1",
    args1: [{
        type: "input_statement",
        name: "DO"
    }],
    nextStatement: null,
    previousStatement: null,
    style: "turtle_blocks",
    tooltip: "%{BKY_TURTLE_FILL_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type:"turtle_pen",
    message0: "%{BKY_TURTLE_PEN_TITLE}",
    args0: [{
        type: "field_dropdown",
        name: "TYPE",
        options: [
            ["%{BKY_TURTLE_PEN_UP}", "penup"],
            ["%{BKY_TURTLE_PEN_DOWN}", "pendown"]
        ]
    }],
    nextStatement: null,
    previousStatement: null,
    style: "turtle_blocks",
    tooltip: "%{BKY_TURTLE_PEN_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type:"turtle_visibility",
    message0: "%{BKY_TURTLE_VISIBILITY_TITLE}",
    args0: [{
        type: "field_dropdown",
        name: "TYPE",
        options: [
            ["%{BKY_TURTLE_VISIBILITY_SHOW}", "show"],
            ["%{BKY_TURTLE_VISIBILITY_HIDE}", "hide"]
        ]
    }],
    nextStatement: null,
    previousStatement: null,
    style: "turtle_blocks",
    tooltip: "%{BKY_TURTLE_VISIBILITY_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type:"turtle_stamp",
    message0: "%{BKY_TURTLE_STAMP_TITLE}",
    nextStatement: null,
    previousStatement: null,
    style: "turtle_blocks",
    tooltip: "%{BKY_TURTLE_SHAPE_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type:"turtle_speed",
    message0: "%{BKY_TURTLE_SPEED_TITLE}",
    args0: [{
        type: "input_value",
        name: "VALUE",
        check: "Number"
    }],
    nextStatement: null,
    previousStatement: null,
    style: "turtle_blocks",
    tooltip: "%{BKY_TURTLE_SPEED_TOOLTIPE}",
    helpUrl: VITTASCIENCE_SITE
}, {
    type:"turtle_reset",
    message0: "%{BKY_TURTLE_RESET_TITLE}",
    nextStatement: null,
    previousStatement: null,
    style: "turtle_blocks",
    tooltip: "%{BKY_TURTLE_SHAPE_TOOLTIP}",
    helpUrl: VITTASCIENCE_SITE
}]); 