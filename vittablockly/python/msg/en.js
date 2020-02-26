'use strict';
//categories
var MSG = {
    title: "Code",
    blocks: "Blocks",
    linkTooltip: "Save and link to blocks.",
    runTooltip: "Run the program defined by the blocks in the workspace.",
    badCode: "Program error:\n%1",
    timeout: "Maximum execution iterations exceeded.",
    trashTooltip: "Discard all blocks.",
    catDisplay: "Display",
    catTurtle: "Turtle",
    catNumpy: "Numpy",
    catGraph: "Graphics",
    catLogic: "Logic",
    catLoops: "Loops",
    catMath: "Math",
    catText: "Text",
    catLists: "Lists",
    catColour: "Colour",
    catVariables: "Variables",
    catFunctions: "Functions",
    listVariable: "list",
    textVariable: "text",
    httpRequestError: "There was a problem with the request.",
    linkAlert: "Share your blocks with this link:\n\n%1",
    hashError: "Sorry, '%1' doesn't correspond with any saved program.",
    xmlError: "Could not load your saved file. Perhaps it was created with a different version of Blockly?",
    badXml: "Error parsing XML:\n%1\n\nSelect 'OK' to abandon your changes or 'Cancel' to further edit the XML."
};


Blockly.Msg["VARIABLES_FORCE_TYPE"] = "convert to %1 %2";
Blockly.Msg["VARIABLES_FORCE_TYPE_TOOLTIP"] = "Enable to convert any variable in choosen type ('int' or 'string')";
Blockly.Msg["VARIABLES_FORCE_TYPE_INTEGER"] = "integer";
Blockly.Msg["VARIABLES_FORCE_TYPE_FLOAT"] = "float";
Blockly.Msg["VARIABLES_FORCE_TYPE_TEXT"] = "text";

Blockly.Msg["FOREVER_TITLE"] = "Forever";
Blockly.Msg["FOREVER_INPUT_DO"] = "Add instructions to this block to execute them in a loop.";
Blockly.Msg["ON_START_TITLE"] = "On start";
Blockly.Msg["ON_START_INPUT_DO"] = "Add instructions in this block to execute them when the micro:bit card is powered up.";

Blockly.Msg["TEXT_COMMENT"] = "Comment %1";
Blockly.Msg["TEXT_COMMENT_TOOLTIP"] = "Add comment in code.";

Blockly.Msg["DISPLAY_PRINT_TITLE"] = "print %1";
Blockly.Msg["DISPLAY_PRINT_TOOLTIP"] = "Print block content in python console.";
Blockly.Msg["DISPLAY_INPUT_TITLE"] = "request user with %1";
Blockly.Msg["DISPLAY_INPUT_TOOLTIP"] = "Request user to input a value in python console.";

Blockly.Msg["TURTLE_FORWARD_TITLE"] = "forward";
Blockly.Msg["TURTLE_BACKWARD_TITLE"] = "backward";
Blockly.Msg["TURTLE_DIRECTION_TITLE"] = "Move %1 by %2";
Blockly.Msg["TURTLE_DIRECTION_TOOLTIP"] = "Move by specifying the direction and the distance";
Blockly.Msg["TURTLE_RIGHT_TITLE"] = "right ↻";
Blockly.Msg["TURTLE_LEFT_TITLE"] = "left ↺";
Blockly.Msg["TURTLE_TURN_TITLE"] = "Turn  %1 by %2";
Blockly.Msg["TURTLE_TURN_TOOLTIP"] = "Turn by specifying the value of the angle";
Blockly.Msg["TURTLE_GOTO_TITLE"] = "Go to position %1 , %2";
Blockly.Msg["TURTLE_GOTO_TOOLTIP"] = "Go to specified absciss and ordinate";
Blockly.Msg["TURTLE_CIRCLE_TITLE"] = "Circle of radius %1";
Blockly.Msg["TURTLE_CIRCLE_TOOLTIP"] = "Create a circle by specifying the radius";
Blockly.Msg["TURTLE_WRITE_TITLE"] = "Write  %1  with size %2";
Blockly.Msg["TURTLE_WRITE_TOOLTIP"] = "Write text with specified size";
Blockly.Msg["TURTLE_FILL_TITLE"] = "Fill with color %1";
Blockly.Msg["TURTLE_FILL_TOOLTIPE"] = "Fill drawing with color";
Blockly.Msg["TURTLE_TURTLE_TITLE"] = "turtle 🐢";
Blockly.Msg["TURTLE_CIRCLE1_TITLE"] = "circle ⚫";
Blockly.Msg["TURTLE_CLASSIC_TITLE"] = "classic ➤";
Blockly.Msg["TURTLE_SQUARE_TITLE"] = "square ⬛";
Blockly.Msg["TURTLE_TRIANGLE_TITLE"] = "triangle ▶";
Blockly.Msg["TURTLE_SHAPE_TITLE"] = "Shape %1";
Blockly.Msg["TURTLE_SHAPE_TOOLTIP"] = "Select the shape of the cursor";
Blockly.Msg["TURTLE_COLOR_TITLE"] = "Color %1 width %2";
Blockly.Msg["TURTLE_COLOR_TOOLTIP"] = "Color and width of the lines";
Blockly.Msg["TURTLE_PEN_TITLE"] = "Pen  %1";
Blockly.Msg["TURTLE_PEN_TOOLTIP"] = "Put pen up or down to draw lines";
Blockly.Msg["TURTLE_PEN_UP"] = "up";
Blockly.Msg["TURTLE_PEN_DOWN"] = "down";
Blockly.Msg["TURTLE_VISIBILITY_TITLE"] = "Turtle %1";
Blockly.Msg["TURTLE_VISIBILITY_TOOLTIPE"] = "Specify the visibility of the turtle";
Blockly.Msg["TURTLE_VISIBILITY_SHOW"] = "show";
Blockly.Msg["TURTLE_VISIBILITY_HIDE"] = "hide";
Blockly.Msg["TURTLE_STAMP_TITLE"] = "Stamp the turtle";
Blockly.Msg["TURTLE_STAMP_TOOLTIP"] = "Stamp the cursor at the current position";
Blockly.Msg["TURTLE_SPEED_TITLE"] = "Speed %1";
Blockly.Msg["TURTLE_SPEED_TOOLTIPE"] = "Specify the speed of the turtle";
Blockly.Msg["TURTLE_RESET_TITLE"] = "Reset the drawing";

Blockly.Msg["NUMPY_TABLE_WITH_INPUT_TITLE"] = "create table with";
Blockly.Msg["NUMPY_TABLE_WITH_INPUT_TOOLTIP"] = "Create a table with any number of elements.";
Blockly.Msg["NUMPY_TABLE_CONTAINER_TITLE"] = "table";
Blockly.Msg["NUMPY_TABLE_CONTAINER_TOOLTIP"] = "Add, remove, or reorder sections to reconfigure this table block.";
Blockly.Msg["NUMPY_TABLE_ELEMENT_TITLE"] = "element"
Blockly.Msg["NUMPY_TABLE_ELEMENT_TOOLTIP"] = "Add an element to the table.";
Blockly.Msg["NUMPY_TABLE_EMPTY_TITLE"] = "create empty table";
Blockly.Msg["NUMPY_TABLE_EMPTY_TOOLTIP"] = "Returns a table, of length 0, containing no data records";
Blockly.Msg["NUMPY_SQUARE_MATRIX_TITLE"] = "initialize table"
Blockly.Msg["NUMPY_SQUARE_MATRIX_TOOLTIP"] = "Initialize square matrix of any type, from size 2 to 10.";
Blockly.Msg["NUMPY_TABLE_WITH_SHAPE_TITLE"] = "table size %1 * %2 with element %3";
Blockly.Msg["NUMPY_TABLE_WITH_SHAPE_TOOLTIP"] = "Initialize table with shape (i*j) with one element";
Blockly.Msg["NUMPY_ARANGE_TITLE"] = "aranged table from %1 to %2 by step %3";
Blockly.Msg["NUMPY_ARANGE_TOOLTIP"] = "Return an array aranged from min to max by step.";
Blockly.Msg["NUMPY_LINSPACE_TITLE"] = "aranged table from %1 to %2 with %3 values";
Blockly.Msg["NUMPY_LINSPACE_TOOLTIP"] = "Return an array aranged from min to max with number of items choosen.";
Blockly.Msg["NUMPY_SIZESHAPE_TITLE"] = "%1 of %2";
Blockly.Msg["NUMPY_SIZESHAPE_TOOLTIP"] = "Return size or shape of numpy table.";
Blockly.Msg["NUMPY_SIZE"] = "size";
Blockly.Msg["NUMPY_SHAPE"] = "shape";
Blockly.Msg["NUMPY_GET_ELEMENT_MATRIX_TITLE"] = "get element [%1, %2] of %3";
Blockly.Msg["NUMPY_GET_ELEMENT_MATRIX_TOOLTIP"] = "Get element [i,j] from numpy array.";
Blockly.Msg["NUMPY_GET_ELEMENT_LIST_TITLE"] = "get element [%1] of %2";
Blockly.Msg["NUMPY_GET_ELEMENT_LIST_TOOLTIP"] = "Get element [i] from numpy array.";

Blockly.Msg["GRAPH_PLOT"] = "plot %1 xaxis %2 yaxis %3";
Blockly.Msg["GRAPH_SETLABEL"] = "define title %1 xlabel %2 ylabel %3";