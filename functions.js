const closeModal = document.querySelector("#close-modal")
const openModal = document.querySelector("#plus")
const confirmName = document.querySelector("#confirm-the-name")

let toggleModal = () => {
    modal.classList.toggle("hide")
    fade.classList.toggle("hide")
}
[openModal, closeModal, fade, confirmName].forEach((e) => {
    e.addEventListener('click', () => toggleModal())
})

function confirma() {

    let valor = newPerson.value

    if(valor != ""){

        let novaPessoa = document.createElement("h3")
        let texto  = document.createTextNode(valor)
        novaPessoa.appendChild(texto)
        novaPessoa.classList.add("people-window-views")
        htmlMain.appendChild(novaPessoa)

    }else{
        alert("talvez você tenha esquecido o nome! confere aí.")
    }  
}


//fazer o evento de click na "nova pessoa".depois, fazer a implementaçao da label que será preenchida as informações pessoais do 
//usuário 


        