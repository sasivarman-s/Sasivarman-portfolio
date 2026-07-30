var btn = document.getElementById("btn")
btn.addEventListener("click", (e) => {
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

    savedata(name.value, phnumber.value, mail.value, msg.value)

})

function savedata(name, phnumber, mail, msg) {
    const firebaseConfig = {
        apiKey: "AIzaSyB-Zf4O7AsUt8lYb4AHcPeINEw1OZGrnE4",
        authDomain: "sasivarman-portfolio.firebaseapp.com",
        databaseURL: "https://sasivarman-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "sasivarman-portfolio",
        storageBucket: "sasivarman-portfolio.firebasestorage.app",
        messagingSenderId: "285901526523",
        appId: "1:285901526523:web:f57e141ede432f61c5675e"
    };
    firebase.initializeApp(firebaseConfig);

    const db = firebase.database().ref("ReqForm");

    db.push({
        name: name,
        phnumber: phnumber,
        mail: mail,
        msg: msg,
    });
}

