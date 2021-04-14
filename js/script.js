$(document).ready(function () {
    // referenze
    var template = $("#template li");
    var lista = $(".dx-section .lista ul");
    var input = $(".sx-section input");
    
    // lista esempio default
    var items =[
        {
            text : "Comprare il latte",
            complete : false,
        },
        {
            text : "Fare i compiti",
            complete : true,
        },
        {
            text : "Annullare abbonamento Netflix",
            complete : false,
        },
        {
            text : "Guardare video consigliato da Marco",
            complete : false,
        },
        {
            text : "Studiare nuovo spartito",
            complete : true,
        },
        {
            text : "Pulire macchina",
            complete : true,
        },
    ]

    // integrazione items in html
    for(i=0; i<items.length; i++){
        var templateClone = template.clone();
        templateClone.find("span").text(items[i].text);
        lista.append(templateClone);
    };

    input.keyup(function(event){
        // console.log(event.which);
        // key id enter = 13 
        if(event.which === 13){
            var newItem = input.val().trim();
            newItem = capitalize(newItem);
            input.val("");
            console.log(newItem);

            // inserimento input in lista
            var templateClone = template.clone();
            templateClone.find("span").text(newItem);
            lista.append(templateClone);
        }
    })

    // delete item
    $("body").on("click", ".foglio i",function(){
        $(this).parent("li").remove();
    })

    



    // fine doc ready 
});

/************************************************
 * FUNCTIONS
 ************************************************
 */

 /**
 * CAPITALIZE
 * @param {string} string // stringa su cui applicare il capitalize
 * @returns // string;
 */
 function capitalize(string){
    var newString = string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    return newString;
 }