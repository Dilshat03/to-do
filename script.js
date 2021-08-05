const textInput = document.querySelector(".text-input")
const addBtn = document.querySelector(".add-btn")
const list = document.querySelector(".list")
const clearBtn = document.querySelector(".clear-all")




addBtn.addEventListener("click" , () =>{
    if (textInput.value.trim()){
        list.innerHTML += ` <li>
                        <input type="checkbox">
                        ${textInput.value}
                        <button class="del-btn">Удалить</button>
                    </li>`
        textInput.value = ""
    }
})


list.addEventListener("click", (event) =>{
    if (event.target.classList[0] === "del-btn"){
        event.target.parentNode.remove()

    }
})
clearBtn.addEventListener("click", (event) =>{
    list.innerHTML = ""
})

// document.addEventListener("keypress", (event) => {
//     if (event.key === "Enter"){
//         console.log("Huraaah!")
//     }
// })




