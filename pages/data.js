var btn = document.getElementById("btn")
btn.addEventListener("click", (e)=>{
    e.preventDefault()
    var name = document.getElementById("name")
    var phnumber = document.getElementById("phnumber")
    var mail = document.getElementById("mail")
    var msg = document.getElementById("msg")
    var btndiv = document.getElementById("btndiv")
    console.log(name.value)
    console.log(phnumber.value)
    console.log(mail.value)
    console.log(msg.value)
    btn.innerHTML = "Submitted successfully.I'll contact you ASAP..!"
    btn.style.backgroundColor = "grey"
    btn.style.opacity = "0.5"
    var tq = document.createElement("h3")
    tq.style.fontSize = "15px"
    tq.style.padding = "5px"
    tq.innerHTML = "Thankyou for contacting❤️"
    btndiv.appendChild(tq)
})


