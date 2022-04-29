function validate()
{
    var loginname=document.getElementById("lgd").value;
    var loginpwd=document.getElementById("pwd").value;
    var reglname=/^([A-Za-z0-9\._-]+)@([A-Za-z0-9-]+).([a-z]{2,10})(.[a-z]{2,8})?$/;
    var ln=reglname.test(loginname);

    if(loginname.trim()=="")
    {
        lgd.style.border="solid 2px red";
        document.getElementById("loginlabel").innerHTML="Required";
        return false;
    }
    else if(loginpwd.trim()=="")
    {
        pwd.style.border="solid 2px red";
        document.getElementById("loginpwd").innerHTML="Required";
        return false;
    }
    else
    {
        return true;
    }

}

// function val()
// {
//     var fn=document.getElementById("name").value;
//     var refn=/^[a-z]+$/i;
//     var em=document.getElementById("lgd2").value;
//     var reem=/^([A-Za-z0-9\._-]+)@([A-Za-z0-9-]+).([a-z]{2,10})(.[a-z]{2,8})?$/;
//     var pass=document.getElementById("pwd2").value;
//     var repwd=/^[a-z0-9@_]{5,20}$/i;
    

//     if(fn.trim()=="")
//     {
//         fname.style.border="solid 2px red";
//         document.getElementById("regname").innerHTML="Required";
//         return false;
//     }
//     else if(refn.test(fn)==false)
//     {
//         fname.style.border="solid 2px red";
//         document.getElementById("regname").innerHTML="Only Text Allow";
//         return false;
//     }
//     else if(reln.test(fn)==false)
//     {
//         lname.style.border="solid 2px red";
//         document.getElementById("relname").innerHTML="Only Text Allow";
//         return false;
//     }
//     else if(em.trim()=="")
//     {
//         lgd2.style.border="solid 2px red";
//         document.getElementById("rege").innerHTML="Required";
//         return false;
//     }
//     else if(reem.test(em)==false)
//     {
//         lgd2.style.border="solid 2px red";
//         document.getElementById("rege").innerHTML="Invalid Format";
//         return false;
//     }
//     else if(pass.trim()=="")
//     {
//         pwd2.style.border="solid 2px red";
//         document.getElementById("relpwd2").innerHTML="Required";
//         return false;
//     }
//     else if(repwd.test(pass)==false)
//     {
//         pwd2.style.border="solid 2px red";
//         document.getElementById("relpwd2").innerHTML="Length must be 5-20";
//         return false;
//     }

// }