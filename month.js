//for(i = 0; i <= 9; i ++){
window.addEventListener('load', () => {

    console.log({ pageLoaded: new Date() });

    const t = document.getElementsByTagName("table");
    const capt = document.getElementsByTagName("caption");
    const currentDate = new Date();
    let itemSelected = document.getElementById("monthSelected");
    let monthDiv = document.getElementById("monthDiv");

    let a = 0;

    itemSelected.value = currentDate.getMonth();
    itemSelected.addEventListener('change', ce => {
        currentDate.setMonth(ce.target.value);
        currentDate.setDate(1);
        console.log({"data" : ce.target.value, currentDate});
        a = ce.target.value; 
        updateMonth(monthDiv);

    });

    function updateMonth($element){
        let d = 1;
        const dayIndex = (currentDate.getFirstDay().getDay());
        const lastDayIndex = (currentDate.getLastDay().getDate());
        console.log(lastDayIndex);
        const tds = [...$element.querySelectorAll("td")];
        //const monthName = currentDate.getMonthName();
        capt[0].innerText = currentDate.getMonthName(); 
        tds.forEach( (e, i) => {
            
            e.innerText = "";
            if(i >= dayIndex && i <= (lastDayIndex +1)){
                console.log(dayIndex);
                e.innerText = d;
                d++
            }else{
                e.innerText = "";
            }

        });
    };
    includeHTML(updateMonth);
})

/*
const t = document.getElementsByTagName("table");
const capt = document.getElementsByTagName("caption");
const currentDate = new Date();
currentDate.setMonth(i);

function updateMonth($element){
    let d = 1;
    const dayIndex = parseInt(currentDate.getFirstDay().getDay());
    const lastDayIndex = parseInt(currentDate.getLastDay().getDate());
    const tds = [...$element.querySelectorAll("td")];
    capt[0].innerText = currentDate.getMonthName(); 
    tds.forEach( (e, i) => {
        
        e.innerText = "";
        if(i >= dayIndex && i <= (lastDayIndex + 1)){
            e.innerText = d;
            d++
        }else{
            e.innerText = "";
        }

    });
};
// }
*/
