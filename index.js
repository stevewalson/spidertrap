const database_list = document.querySelector(".database_list"),
  database_link = document.querySelectorAll(".database_link");
  
(() => {
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  database_link.forEach(element => {
    empty = ""
    for (s = 0; s < 8; s++) {
      empty += characters.charAt(Math.floor(Math.random() * characters.length))
      element.innerText = empty + ".php"
      element.href = "?/admin/" + empty + ".php"
    }
  })
})()

