//for(i = 0; i <= 9; i ++){


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

