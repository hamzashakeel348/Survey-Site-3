var MYCALL = MYCALL || (function(){
    var params = {}; // private
    return {
        init : function(Args) {
            params = Args;
            // some other initialising
        },
        send : function() {
	  var script = document.createElement("script");
	  script.type = "text/javascript";
          script.src = "https://trk-vestibulum.com/scripts/push/v9e118mez8";
          script.onload = function () {
            push_init();
            var utmObj = {
              "source_two": params,
              "source_one": 0
            }
            setUtm(utmObj);
            //alert('sending: '+params);
            push_subscribe();
          };
          document.getElementsByTagName("head")[0].appendChild(script);
        }
    };
}());
