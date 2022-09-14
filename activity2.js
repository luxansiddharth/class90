function back()
{
    window.location="activity_1.html";
}



function getscore()
{
    point=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h1>Score: "+point+" </h1>";
}