function handleClick() {
    var weather = document.querySelector("#list") 
    weather.innerHTML = "1: Why do you think i schould know it? Ask next button please-->"
}

function handleClick1() {
    var list = document.querySelector('#list')

    var listItem = document.createElement("li")

          listItem.innerHTML =  "2:Sorry I dont know the weather today. Ask next button please-->"
          

    
    list.append(listItem)
}

/*function handleClick2() {
    var list = document.querySelector('#list')

    var listItem = document.createElement("li")
    
    listItem.innerHTML = "Ask Google PLS!"

      list.append(listItem)
}
*/

