var kanonwali = (function() {
    var kw = {};
    kw.init = function() {
            kw.handlePay();
            kw.handleClick();
        },
        kw.handleClick = function() {
            console.log("Listeners");
            document.body.addEventListener('click', function() {
                console.log("click");
                //window.location.href = "#contact";
            });
        },
        kw.handlePay = function() {
            var sendButton = document.getElementById("sendMessageButton");
            sendButton.addEventListener('click', function() {
                console.log("alert here");
            })

        },
        kw.start = function() {

        },
        kw.bootstrap = function() {

        }
    return kw;

})();

kanonwali.init();