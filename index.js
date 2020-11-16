// fetch("http://strainapi.evanbusse.com/oEh2d0R/searchdata/effects")
// .then(response => response.json())
// // .then((data) => {
// //   console.log(data)
// // })
// .then(data=> displayData(data))                                                  //Recupere les données de la reponse et lui appliquer la fonction "displayData"                                                                     
// .catch(error => console.log("Erreur: " + error))


// function displayData(datas){
//     let type = []
//     let body = Array.from(document.querySelectorAll("table tbody"));
//     datas.forEach(element => {
//         type.push(element.children);
//         console.log(type);
//     });
// }

/////////////MIEUUUUX//////////////////

fetch("https://cat-fact.herokuapp.com/facts")
.then(response => response.json())
// .then((data) => {
//   console.log(data.all)
// })
.then(data=> displayData(data.all))                                                  //Recupere les données de la reponse et lui appliquer la fonction "displayData"                                                                     
.catch(error => console.log("Erreur: " + error))

function displayData(datas){
    let catFact = []
    datas.forEach(element => {
        catFact.push(element.text);
    });
    console.log(catFact);
    (function() {

          document.getElementById("run").addEventListener("click",function() {
            alert(catFact[Math.floor(Math.random()*283)])

        })

    })();
}

chart = document.querySelector('body #chart')
chart.insertAdjacentHTML('afterend', '<canvas id="pie-chart" width="800" height="450"></canvas>')

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Yes", "No"],
      datasets: [{
        label: ["Cool", "Not cool"],
        backgroundColor: ["#3e95cd", "#8e5ea2"],
        data: [100, 0]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'These fun facts are interesting?'
      }
    }
});
