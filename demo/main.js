document.addEventListener("DOMContentLoaded", function () {
    var rightcard = false,
        tempblock, tempblock2;

    document.getElementById("blocklist").innerHTML = block.triggers;

    flowy(document.getElementById("canvas"), drag, release, snapping);

    function addEventListenerMulti(type, listener, capture, selector) {
        var nodes = document.querySelectorAll(selector);
        for (var i = 0; i < nodes.length; i++) {
            nodes[i].addEventListener(type, listener, capture);
        }
    }

    function snapping(drag, first) {
        var grab = drag.querySelector(".grabme");
        grab.parentNode.removeChild(grab);
        var blockin = drag.querySelector(".blockin");
        blockin.parentNode.removeChild(blockin);

        drag.innerHTML += block.createBlock(drag.querySelector(".blockelemtype").value);

        return true;
    }

    function drag(block) {
        block.classList.add("blockdisabled");
        tempblock2 = block;
    }

    function release() {
        if (tempblock2) {
            tempblock2.classList.remove("blockdisabled");
        }
    }

    function disabledClick() {
        document.querySelector(".navactive").classList.add("navdisabled");
        document.querySelector(".navactive").classList.remove("navactive");
        this.classList.add("navactive");
        this.classList.remove("navdisabled");
        document.getElementById("blocklist").innerHTML = block[this.getAttribute("id")];
    }

    addEventListenerMulti("click", disabledClick, false, ".side");

    document.getElementById("close").addEventListener("click", function () {
        if (rightcard) {
            rightcard = false;
            document.getElementById("properties").classList.remove("expanded");
            setTimeout(function () {
                document.getElementById("propwrap").classList.remove("itson");
            }, 300);
            tempblock.classList.remove("selectedblock");
        }
    });

    document.getElementById("removeblock").addEventListener("click", function () {
        flowy.deleteBlocks();
    });

    var aclick = false;
    var noinfo = false;

    function beginTouch(event) {
        aclick = true;
        noinfo = false;
        if (event.target.closest(".create-flowy")) {
            noinfo = true;
        }
    }

    function checkTouch(event) {
        aclick = false;
    }

    function doneTouch(event) {
        if (event.type === "mouseup" && aclick && !noinfo) {
            if (!rightcard && event.target.closest(".block") && !event.target.closest(".block").classList.contains("dragging")) {
                tempblock = event.target.closest(".block");
                rightcard = true;
                document.getElementById("properties").classList.add("expanded");
                document.getElementById("propwrap").classList.add("itson");
                tempblock.classList.add("selectedblock");
            }
        }
    }

    addEventListener("mousedown", beginTouch, false);
    addEventListener("mousemove", checkTouch, false);
    addEventListener("mouseup", doneTouch, false);
    addEventListenerMulti("touchstart", beginTouch, false, ".block");
});
