/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
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

                    target.innerHTML += `

                         <li class ="hero">

                             <h4 class ="title">
                                 <strong class ="name" >${elName}</strong>
                                 <em class ="alter-ego">${elAtlerEgo}</em>
                             </h4>
                             
                             <p class ="powers">${elPowers}</p> 
                         </li>

                     `;

                });

            }).catch(function (err) {
                console.error(err);
            });
        });

    });

})();














// POSSIBLE SOLUTION USING FOREACH, PREFERED BUT TOO LONG :/
/*   

function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
}
const li = document.createElement("li");
const h4 = document.createElement("h4");
const heroName = document.createElement("strong");
const alterEgo = document.createElement("em");
const p = document.createElement("p");


addClass(li, "hero");
addClass(h4, "title");
addClass(heroName, "name");
addClass(alterEgo, "alter-ego");
addClass(p, "powers");
*/

/*
heroName.innerText = elName;
alterEgo.innerText = elAtlerEgo;
p.innerText = elPowers;


h4.appendChild(heroName);
h4.appendChild(alterEgo);
li.appendChild(h4);
li.appendChild(p);
target.appendChild(li);
*/