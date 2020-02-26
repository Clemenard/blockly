'use strict';

goog.provide('Blockly.Themes.Classic');

goog.require('Blockly.Theme');


// Temporary holding object.
Blockly.Themes.Classic.defaultBlockStyles = {
    "display_blocks": {
        "colourPrimary": "#ff9302"
    },
    "turtle_blocks": {
        "colourPrimary": "#9962ff"
    },
    "numpy_blocks": {
        "colourPrimary": "#ff4d6a"
    },
    "graph_blocks": {
        "colourPrimary": "#4389e5"
    },
    "logic_blocks": {
        "colourPrimary": "#fc7417"
    },
    "loop_blocks": {
        "colourPrimary": "#22B573"
    },
    "math_blocks": {
        "colourPrimary": "#3fa9f5"
    },
    "text_blocks": {
        "colourPrimary": "#1a6da8"
    },
    "list_blocks": {
        "colourPrimary": "#e58544"
    },
    "variable_blocks": {
        "colourPrimary": "#f9d142"
    },
    "procedure_blocks": {
        "colourPrimary": "#0fb9b1"
    },
    "comment_block": {
        "colourPrimary": "#bdbdbd"
    },
    "colour_blocks": {
        "colourPrimary": "#ffffff"
    }
}
Blockly.Themes.Classic.categoryStyles = {
    "display_category": {
        "colour": defaultBlockStyles.display_blocks.colourPrimary
    },
    "turtle_category": {
        "colour": defaultBlockStyles.turtle_blocks.colourPrimary
    },
    "numpy_category": {
        "colour": defaultBlockStyles.numpy_blocks.colourPrimary
    },
    "graph_category": {
        "colour": defaultBlockStyles.graph_blocks.colourPrimary
    },
    "logic_category": {
        "colour": defaultBlockStyles.logic_blocks.colourPrimary
    },
    "loop_category": {
        "colour": defaultBlockStyles.loop_blocks.colourPrimary
    },
    "math_category": {
        "colour": defaultBlockStyles.math_blocks.colourPrimary
    },
    "text_category": {
        "colour": defaultBlockStyles.text_blocks.colourPrimary
    },
    "list_category": {
        "colour": defaultBlockStyles.list_blocks.colourPrimary
    },
    "variable_category": {
        "colour": defaultBlockStyles.variable_blocks.colourPrimary
    },
    "procedure_category": {
        "colour": defaultBlockStyles.procedure_blocks.colourPrimary
    }
};