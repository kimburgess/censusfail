document.addEventListener("DOMContentLoaded", function () {

    "use strict";

    var source = document.getElementById("source");
    var output = document.getElementById("output");

    // A collection of common, visually similar ASCII character replacements
    var confusables = {
        A: ["À", "Á", "Â", "Â", "Ä", "Å"],
        C: ["Ç"],
        E: ["È", "É", "Ê", "Ë"],
        I: ["Ì", "Í", "Î", "Ï"],
        N: ["Ñ"],
        O: ["Ò", "Ó", "Ô", "Õ", "Ö", "Ø"],
        U: ["Ù", "Ú", "Û", "Ü"],
        Y: ["Ý"],
        a: ["à", "á", "â", "ã", "ä", "å"],
        c: ["ç"],
        e: ["è", "é", "ê", "ë"],
        i: ["ì", "í", "î", "ï"],
        n: ["ñ"],
        o: ["ò", "ó", "ô", "õ", "ö", "ø"],
        u: ["ù", "ú", "û", "ü"],
        y: ["ý", "ÿ"]
    };

    function confuse(text) {
        return text.split("").map(function (x) {
            var replacements = confusables[x] || [x];
            return replacements[Math.floor(Math.random() * replacements.length)];
        }).join("");
    }


    source.addEventListener("input", function () {
        output.value = confuse(source.value);
    });

});