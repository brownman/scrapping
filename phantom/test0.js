// Read the Phantom webpage '#intro' element text using jQuery and "includeJs"

var url1='http://www.goethe-verlag.com/book2/EM/EMIT/EMIT002.HTM';
var page = require('webpage').create();


page.onConsoleMessage = function(msg) {
    console.log(msg);
};

page.open(url1, function(status) 
{
    if ( status === "success" ) 
    {       
                  page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() 
                  {
                                page.evaluate(function()
                                {
                                //    console.log(page.content);
                                var selector1='.Stil39 > a';
                            
                                  var res=$(selector1).text();
                                  console.log(res);
                                });
                              phantom.exit()
                  });
      };
});

/*
page.open("http://www.phantomjs.org", function(status) {
    if ( status === "success" ) {
        page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
              var content = page.content;
  console.log('Content: ' + content);
  
            page.evaluate(function() {
                console.log("$(\".explanation\").text() -> " + $(".explanation").text());
            });
           // phantom.exit();
        });
    }
});
*/
