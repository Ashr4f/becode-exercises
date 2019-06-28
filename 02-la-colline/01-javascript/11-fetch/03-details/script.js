/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let target = document.getElementById("target");
    const apiURL = "http://localhost:3000/heroes";

    document.getElementById("run").addEventListener("click", function () {
        let inputField = document.getElementById("hero-id");
        target.innerHTML = "";

        fetch(apiURL).then(function (data) {
            data.json().then(function (dataToJson) {
                dataToJson.forEach((el, index) => {

                    let elID = el.id;
                    let elName = el.name;
                    let elAtlerEgo = el.alterEgo;
                    let elPowers = el.abilities;

                    if (el.id === undefined || el.id === null) {
                        elID = index + 1;
                    }
                    if (el.name === undefined || el.name === null) {
                        elName = "";
                    }
                    if (el.alterEgo === undefined || el.alterEgo === null) {
                        elAtlerEgo = "";
                    }
                    if (el.abilities === undefined || el.abilities === null) {
                        elPowers = "";
                    }
                    if (parseInt(inputField.value) === el.id) {
                        target.innerHTML = `

                         <li class ="hero">

                             <h4 class ="title">
                                 <strong class ="name" >${elName}</strong>
                                 <em class ="alter-ego">${elAtlerEgo}</em>
                             </h4>
                             
                             <p class ="powers">${elPowers}</p> 
                         </li>

                     `;
                    } else {
                        if (isNaN(parseInt(inputField.value)) && index === dataToJson.length - 1) {
                            alert("Please enter a valid number");
                        }
                        if (index === dataToJson.length - 1 &&
                            parseInt(inputField.value) > dataToJson.length |
                            parseInt(inputField.value) <= 0) {
                            alert(`There're ${dataToJson.length} heroes, to show one simply enter and ID between 1 and ${dataToJson.length}`);
                        }
                    }

                });

            }).catch(function (err) {
                console.error(err);
            });
        });

    });
})();