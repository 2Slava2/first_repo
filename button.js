function handleClick() {
    var weather = document.querySelector("#list") 
    weather.innerHTML = "Today i dont know the weather,sorry"
}

function handleClick1() {
    var list = document.querySelector('#list')

    var listItem = document.createElement("li")

          listItem.innerHTML = "Sorry I dont know the weather today"

    
    list.append(listItem)
}

/*function handleClick2() {
    var list = document.querySelector('#list')

    var listItem = document.createElement("li")
    
    listItem.innerHTML = "Ask Google PLS!"

      list.append(listItem)
}
*/

