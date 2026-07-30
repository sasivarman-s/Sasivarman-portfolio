var btn = document.getElementById("btn")
btn.addEventListener("click", (e)=>{
    e.preventDefault()
    var name = document.getElementById("name")
    var phnumber = document.getElementById("phnumber")
    var mail = document.getElementById("mail")
    var msg = document.getElementById("msg")
    var end = document.getElementById("end")
    console.log(name.value)
    console.log(phnumber.value)
    console.log(mail.value)
    console.log(msg.value)
    btn.remove("btn")
    end.style.backgroundColor = "gray"
    end.style.color = "white"
    end.style.padding = "10px"
    end.style.fontSize = "20px"
    end.style.borderRadius = "30px"
    end.innerHTML = "Submitted successfully, I'll contact you ASAP!..."

    
})


