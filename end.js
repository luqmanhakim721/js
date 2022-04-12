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
                window.location.href = "https://propositionpower.com/atqha1jbis?key=5c90716a99e5ea6f567377cb74e8a480";
            }
        });
    });
 
