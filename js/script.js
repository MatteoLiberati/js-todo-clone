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
        console.log(i);
    };
    



    // fine doc ready 
});