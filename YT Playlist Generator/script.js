function createCard(Introduction , topic , Tutorial , png , duration , Channel , views , OldDuration){
let viewStr
if(views >1000){
    viewStr=views/1000 + "k"
}
if(views < 1000){
    viewStr = views 
}
if(views > 1000000){
    viewStr = views / 1000000 + "M"
}
let old

let html=`<div class="card">
            <div class="images">
                <img src="${png}"
                    alt="">
                <div class="duration">${duration}</div>
            </div>
            <div class="info">
                <h2>${Introduction} | ${topic} - ${Tutorial}</h2>
                <p>${Channel} . ${viewStr} views .${old}ago</p>

            </div>
        </div>`
document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;

}
createCard("Introduction to Nature" ,"Welcome to the Jungle","Wonder Of Nature","https://t4.ftcdn.net/jpg/07/18/12/87/360_F_718128776_nJReWqPkf5qF4Y5na8ZqGWAbdCJTpczZ.jpg","7:59","INTRONature",700000000000,2);