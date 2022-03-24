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
                window.location.href = "https://propositionpower.com/scg1652n5?key=012f54500c0d91c4f78b75f72cb909d3";
            }
        });
    });
 