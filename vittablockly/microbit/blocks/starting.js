
/**
 * STARTING BLOCKS DEFINITION
 */

Blockly.defineBlocksWithJsonArray([
    // BLOCK START
    {
        type: "on_start",
        message0: "%{BKY_ON_START_TITLE}",
        message1: "%{BKY_ON_START_INPUT_DO} %1",
        args1: [{
            type: "input_statement",
            name: "DO"
        }],
        tooltip: "%{BKY_ON_START_TOOLTIP}",
        style: "loop_blocks",
    },
    // BLOCK FOREVER
    {
        type: "forever",
        message0: "%{BKY_FOREVER_TITLE}",
        message1: "%{BKY_FOREVER_INPUT_DO} %1",
        args1: [{
            type: "input_statement",
            name: "DO"
        }],
        tooltip: "%{BKY_FOREVER_TOOLTIP}",
        style: "loop_blocks",
    }
]);