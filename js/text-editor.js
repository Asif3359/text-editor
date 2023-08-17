

let check = 0;

document.getElementById('bold').addEventListener('click',function()
{
    if( check == 0){
        document.getElementById('text-Value').style.fontWeight="bold" ;
        check=1;
    }
    else{
        document.getElementById('text-Value').style.fontWeight="normal" ;
        check=0;
    }
    
});

document.getElementById('italic').addEventListener('click',function()
{
    if(check==0)
    {
        document.getElementById('text-Value').style.fontStyle="italic" ;
        check=1;
    }
    else{
        document.getElementById('text-Value').style.fontStyle="normal" ;
        check=0;
    }
    
    
});

document.getElementById('underline').addEventListener('click',function()
{
    if(check==0)
    {
        document.getElementById('text-Value').style.textDecoration="underline" ;
        check=1;
    }
    else{
        document.getElementById('text-Value').style.textDecoration="none" ;
        check=0;
    }
    
    
});

document.getElementById('text-left').addEventListener('click',function()
{
   
    if(check==0)
    {
        document.getElementById('text-Value').style.textAlign="left" ;
        check=1;
    }
    else{
        document.getElementById('text-Value').style.textAlign="left" ;
        check=0;
    }
    
});
document.getElementById('text-center').addEventListener('click',function()
{
    
    if(check==0)
    {
        document.getElementById('text-Value').style.textAlign="center" ;
        check=1;
    }
    else{
        document.getElementById('text-Value').style.textAlign="left" ;
        check=0;
    }
    
});
document.getElementById('text-right').addEventListener('click',function()
{
   
    if(check==0)
    {
        document.getElementById('text-Value').style.textAlign="right" ;
        check=1;
    }
    else{
        document.getElementById('text-Value').style.textAlign="left" ;
        check=0;
    }
    
});
document.getElementById('text-justify').addEventListener('click',function()
{
   
    if(check==0)
    {
        document.getElementById('text-Value').style.textAlign="justify" ;
        check=1;
    }
    else{
        document.getElementById('text-Value').style.textAlign="left" ;
        check=0;
    }
    
});
document.getElementById('text-color').addEventListener('change',function()
{
    const Value = document.getElementById("text-color").value;

    document.getElementById('text-Value').style.color= Value;
    
    
});


document.getElementById('text-size').addEventListener('change',function()
{
    const selectFontSise = document.getElementById('text-size').value ;
    document.getElementById('text-Value').style.fontSize = selectFontSise+'px';
    document.getElementById('Size').innerText = selectFontSise;

});
