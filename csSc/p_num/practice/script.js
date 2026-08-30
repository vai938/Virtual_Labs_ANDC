var steps = 0;
function next()
{
    steps++;

    if(steps == 1)
    {
        var step1 = document.getElementsByClassName("circle1")
        for(var i = 0 ; i < step1.length ; i++)
        {
            step1[i].style.backgroundColor="red";
        }
        document.getElementById("number").innerHTML="";
        document.getElementById("result").innerHTML="";
    }
    if(steps == 2) 
    {
        var step2 = document.getElementsByClassName("circle2")
        for(var i = 0 ; i < step2.length ; i++)
        {
            step2[i].style.backgroundColor="lightgreen";
        }
        document.getElementById("number").innerHTML="n = 1";
        document.getElementById("result").innerHTML="Nth Prime Number = 2";
    }
    if(steps == 3) 
    {
        var step3 = document.getElementsByClassName("circle3")
        for(var i = 0 ; i < step3.length ; i++)
        {
            step3[i].style.backgroundColor="lightgreen";
        }
        var step2 = document.getElementsByClassName("circle2")
        for(var i = 0 ; i < step2.length ; i++)
        {
            step2[i].style.backgroundColor="yellow";
        }
        document.getElementById("number").innerHTML="n = 2";
        document.getElementById("result").innerHTML="Nth Prime Number = 3";
    }
    if(steps == 4) 
    {
        var step4 = document.getElementsByClassName("circle4")
        for(var i = 0 ; i < step4.length ; i++)
        {
            step4[i].style.backgroundColor="red";
        }
        var step3 = document.getElementsByClassName("circle3")
        for(var i = 0 ; i < step3.length ; i++)
        {
            step3[i].style.backgroundColor="yellow";
        }
        document.getElementById("number").innerHTML="";
        document.getElementById("result").innerHTML="";
    }
    if(steps == 5) 
    {
        var step5 = document.getElementsByClassName("circle5")
        for(var i = 0 ; i < step5.length ; i++)
        {
            step5[i].style.backgroundColor="lightgreen";
        }
        document.getElementById("number").innerHTML="n = 3";
        document.getElementById("result").innerHTML="Nth Prime Number = 5";
    }
    if(steps == 6) 
    {
        var step6 = document.getElementsByClassName("circle6")
        for(var i = 0 ; i < step6.length ; i++)
        {
            step6[i].style.backgroundColor="red";
        }
        var step5 = document.getElementsByClassName("circle5")
        for(var i = 0 ; i < step5.length ; i++)
        {
            step5[i].style.backgroundColor="yellow";
        }
        document.getElementById("number").innerHTML="";
        document.getElementById("result").innerHTML="";
    }
    if(steps == 7) 
    {
        var step7 = document.getElementsByClassName("circle7")
        for(var i = 0 ; i < step7.length ; i++)
        {
            step7[i].style.backgroundColor="lightgreen";
        }
        document.getElementById("number").innerHTML="n = 4";
        document.getElementById("result").innerHTML="Nth Prime Number = 7";
    }
    if(steps == 8) 
    {
        var step8 = document.getElementsByClassName("circle8")
        for(var i = 0 ; i < step8.length ; i++)
        {
            step8[i].style.backgroundColor="red";
        }
        var step7 = document.getElementsByClassName("circle7")
        for(var i = 0 ; i < step7.length ; i++)
        {
            step7[i].style.backgroundColor="yellow";
        }
        document.getElementById("number").innerHTML="";
        document.getElementById("result").innerHTML="";
    }
    if(steps == 9) 
    {
        var step9 = document.getElementsByClassName("circle9")
        for(var i = 0 ; i < step9.length ; i++)
        {
            step9[i].style.backgroundColor="red";
        }
        document.getElementById("number").innerHTML="";
        document.getElementById("result").innerHTML="";
    }
    if(steps == 10) 
    {
        var step10 = document.getElementsByClassName("circle10")
        for(var i = 0 ; i < step10.length ; i++)
        {
            step10[i].style.backgroundColor="red";
        }
        document.getElementById("number").innerHTML="";
        document.getElementById("result").innerHTML="";
        
        
    }
    if(steps == 11)
    {
        var step1 = document.getElementsByClassName("circle1")
        for(var i = 0 ; i < step1.length ; i++)
        {
            step1[i].style.backgroundColor="white";
        }
        var step2 = document.getElementsByClassName("circle2")
        for(var i = 0 ; i < step2.length ; i++)
        {
            step2[i].style.backgroundColor="white";
        }  
        var step3 = document.getElementsByClassName("circle3")
        for(var i = 0 ; i < step3.length ; i++)
        {
            step3[i].style.backgroundColor="white";
        }  
        var step4 = document.getElementsByClassName("circle4")
        for(var i = 0 ; i < step4.length ; i++)
        {
            step4[i].style.backgroundColor="white";
        }
        var step5 = document.getElementsByClassName("circle5")
        for(var i = 0 ; i < step5.length ; i++)
        {
            step5[i].style.backgroundColor="white";
        } 
        var step6 = document.getElementsByClassName("circle6")
        for(var i = 0 ; i < step6.length ; i++)
        {
            step6[i].style.backgroundColor="white";
        } 
        var step7 = document.getElementsByClassName("circle7")
        for(var i = 0 ; i < step7.length ; i++)
        {
            step7[i].style.backgroundColor="white";
        } 
        var step8 = document.getElementsByClassName("circle8")
        for(var i = 0 ; i < step8.length ; i++)
        {
            step8[i].style.backgroundColor="white";
        }
        var step9 = document.getElementsByClassName("circle9")
        for(var i = 0 ; i < step9.length ; i++)
        {
            step9[i].style.backgroundColor="white";
        } 
        var step10 = document.getElementsByClassName("circle10")
        for(var i = 0 ; i < step10.length ; i++)
        {
            step10[i].style.backgroundColor="white";
        }
        document.getElementById("number").innerHTML="n = ";
        document.getElementById("result").innerHTML="Nth Prime Number = ";
        steps=0;
    }

}

    
