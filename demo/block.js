(function (global) {
    var BLOCK_INFO_MAP = {
        /**
         * Triggers
         */
        trigger1: {
            selectionPanel: {
                imgSrc: "assets/eye.svg",
                title: "New visitor",
                description: "Triggers when somebody visits a specified page"
            },
            canvas: {
                imgSrc: "assets/eyeblue.svg",
                title: "New visitor",
                description: "When a <span>new visitor</span> goes to <span>Site 1</span>"
            }
        },
        trigger2: {
            selectionPanel: {
                imgSrc: "assets/action.svg",
                title: "Action is performed",
                description: "Triggers when somebody performs a specified action"
            },
            canvas: {
                imgSrc: "assets/actionblue.svg",
                title: "Action is performed",
                description: "When <span>Action 1</span> is performed"
            }
        },
        trigger3: {
            selectionPanel: {
                imgSrc: "assets/time.svg",
                title: "Time has passed",
                description: "Triggers after a specified amount of time"
            },
            canvas: {
                imgSrc: "assets/timeblue.svg",
                title: "Time has passed",
                description: "When <span>10 seconds</span> have passed"
            }
        },
        trigger4: {
            selectionPanel: {
                imgSrc: "assets/error.svg",
                title: "Error prompt",
                description: "Triggers when a specified error happens"
            },
            canvas: {
                imgSrc: "assets/errorblue.svg",
                title: "Error prompt",
                description: "When <span>Error 1</span> is triggered"
            }
        },
        /**
         * Actions
         */
        action1: {
            selectionPanel: {
                imgSrc: "assets/database.svg",
                title: "New database entry",
                description: "Adds a new entry to a specified database"
            },
            canvas: {
                imgSrc: "assets/databaseorange.svg",
                title: "New database entry",
                description: "Add <span>Data object</span> to <span>Database 1</span>"
            }
        },
        action2: {
            selectionPanel: {
                imgSrc: "assets/database.svg",
                title: "Update database",
                description: "Edits and deletes database entries and properties"
            },
            canvas: {
                imgSrc: "assets/databaseorange.svg",
                title: "Update database",
                description: "Update <span>Database 1</span>"
            }
        },
        action3: {
            selectionPanel: {
                imgSrc: "assets/action.svg",
                title: "Perform an action",
                description: "Performs or edits a specified action"
            },
            canvas: {
                imgSrc: "assets/actionorange.svg",
                title: "Perform an action",
                description: "Perform <span>Action 1</span>"
            }
        },
        action4: {
            selectionPanel: {
                imgSrc: "assets/twitter.svg",
                title: "Make a tweet",
                description: "Makes a tweet with a specified query"
            },
            canvas: {
                imgSrc: "assets/twitterorange.svg",
                title: "Make a tweet",
                description: "Tweet <span>Query 1</span> with the account <span>@alyssaxuu</span>"
            }
        },
        /**
         * Loggers
         */
        logger1: {
            selectionPanel: {
                imgSrc: "assets/log.svg",
                title: "Add new log entry",
                description: "Adds a new log entry to this project"
            },
            canvas: {
                imgSrc: "assets/logred.svg",
                title: "Add new log entry",
                description: "Add new <span>success</span> log entry"
            }
        },
        logger2: {
            selectionPanel: {
                imgSrc: "assets/log.svg",
                title: "Update logs",
                description: "Edits and deletes log entries in this project"
            },
            canvas: {
                imgSrc: "assets/logred.svg",
                title: "Update logs",
                description: "Edit <span>Log Entry 1</span>"
            }
        },
        logger3: {
            selectionPanel: {
                imgSrc: "assets/error.svg",
                title: "Prompt an error",
                description: "Triggers a specified error"
            },
            canvas: {
                imgSrc: "assets/errorred.svg",
                title: "Prompt an error",
                description: "Trigger <span>Error 1</span>"
            }
        }
    },
        TRIGGER_BLOCK_KEYS = [
            "trigger1",
            "trigger2",
            "trigger3",
            "trigger4",
        ],
        ACTION_BLOCK_KEYS = [
            "action1",
            "action2",
            "action3",
            "action4",
        ],
        LOGGER_BLOCK_KEYS = [
            "logger1",
            "logger2",
            "logger3",
        ];

    function _createBlockForSelectionPanel(key, blockInfo) {
        return '<div class="blockelem create-flowy noselect">' +
            '    <input type="hidden" name="blockelemtype" class="blockelemtype" value="' + key + '">' +
            '    <div class="grabme">' +
            '        <img src="assets/grabme.svg">' +
            '    </div>' +
            '    <div class="blockin">' +
            '        <div class="blockico">' +
            '            <span></span>' +
            '            <img src="' + blockInfo.imgSrc + '">' +
            '        </div>' +
            '        <div class="blocktext">' +
            '            <p class="blocktitle">' + blockInfo.title + '</p>' +
            '            <p class="blockdesc">' + blockInfo.description + '</p>' +
            '        </div>' +
            '    </div>' +
            '</div>';
    }

    function _createBlockList(keys, map) {
        var blockList = "";

        keys.forEach(function (key) {
            blockList += _createBlockForSelectionPanel(key, map[key].selectionPanel);
        });

        return blockList;
    }

    function _createBlockForCanvas(blockInfo) {
        return '<div class="blockyleft">' +
            '     <img src="' + blockInfo.imgSrc + '">' +
            '     <p class="blockyname">' + blockInfo.title + '</p>' +
            '</div>' +
            '<div class="blockyright">' +
            '     <img src="assets/more.svg">' +
            '</div>' +
            '<div class="blockydiv"></div>' +
            '<div class="blockyinfo">' + blockInfo.description +
            '</div>';
    }

    global.block = {
        triggers: _createBlockList(TRIGGER_BLOCK_KEYS, BLOCK_INFO_MAP),
        actions: _createBlockList(ACTION_BLOCK_KEYS, BLOCK_INFO_MAP),
        loggers: _createBlockList(LOGGER_BLOCK_KEYS, BLOCK_INFO_MAP),
        createBlock: function (key) {
            return _createBlockForCanvas(BLOCK_INFO_MAP[key].canvas);
        }
    };
})(window);