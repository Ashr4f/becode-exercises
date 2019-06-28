/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // objects RegEx /(?:{.*?)(?:})/igm

    document.getElementById("run").addEventListener("click", function () {
        let apiURL = "http://localhost:3000/heroes";

        fetch(apiURL).then(function (data) {

            data.json().then(function (dataToJson) {
                console.log(dataToJson);

            }).catch(function (err) {
                console.error(err);
            });
        });

    });
})();