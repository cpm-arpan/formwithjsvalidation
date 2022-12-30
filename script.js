let btn = document.getElementById("sbt-btn");
btn.disabled = true;

function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsbyClassName('formerror')[0].innerHTML = error;

}

function validateform() {
    btn.disabled = true;

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var patt = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var website=document.getElementById("website").value;
    var url = /^(ftp|http|https):\/\/[^ "]+$/;
    if (name == "" || email=="" || phone==""||website=="") { 
        btn.disabled = true;
    }else if(phone.length>10 || phone.length<10){
        btn.disabled = true;
    }else if(!patt.test(email)){
        btn.disabled = true;
    }else if(!url.test(website)){
        btn.disabled = true;
    }
    else{
        btn.disabled = false;
    }

}