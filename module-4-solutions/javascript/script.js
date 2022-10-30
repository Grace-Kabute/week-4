(function() {
    let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    (function(window) {
        let helloSpeaker = {};
        helloSpeaker.call = 'hello';

        helloSpeaker.hello = function speak() {
            console.log(helloSpeaker.call + ' ' + names[i]);
        }
        window.helloSpeaker = helloSpeaker;
    })(window);


    (function(window) {
        let speakGoodbye = {};
        speakGoodbye.call = 'goodbye';

        speakGoodbye.hello = function speak() {
            console.log(speakGoodbye.call + ' ' + names[i]);
        }
        window.speakGoodbye = speakGoodbye;
    })(window);


    for (var i = 0; i < names.length; i++) {


        var firstLetter = names[i].charAt(0).toLowerCase();


        if (firstLetter === 'j') {
            speakGoodbye.hello();
        } else {
            helloSpeaker.hello();
        }
    };
})();