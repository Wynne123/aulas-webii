document.getElementById("mostrar").onclick = function() {
    var texto = document.getElementById("texto").value
    var cr = document.getElementById("binario");
    var ds = document.getElementById("alfa");

    var cript= cr.checked;
    var descript= ds.checked;

    a=texto.replaceAll("a","10111111.");
    b=a.replaceAll("b","10111110.");
    c=b.replaceAll("c","10111101.");
    d=c.replaceAll("d","10111100.");
    e=d.replaceAll("e","10111011.");
    f=e.replaceAll("f","10111010.");
    g=f.replaceAll("g","10111001.");
    h=g.replaceAll("h","10111000.");
    i=h.replaceAll("i","10110111.");
    j=i.replaceAll("j","10110110.");
    k=j.replaceAll("k","10110101.");
    l=k.replaceAll("l","10110100.");
    m=l.replaceAll("m","10110011.");
    n=m.replaceAll("n","10110010.");
    o=n.replaceAll("o","10110001.");
    p=o.replaceAll("p","10110000.");
    q=p.replaceAll("q","10101111.");
    r=q.replaceAll("r","10101110.");
    s=r.replaceAll("s","10101101.");
    t=s.replaceAll("t","10101100.");
    u=t.replaceAll("u","10101011.");
    v=u.replaceAll("v","10101010.");
    w=v.replaceAll("w","10101001.");
    x=w.replaceAll("x","10101000.");
    y=x.replaceAll("y","10100111.");
    z=y.replaceAll("z","10100110.");
    ee=z.replaceAll("ê","01000101.");
    cc=ee.replaceAll("ç","01000011.");
    ponto=cc.replaceAll(".","1");

    
    
    var text=cc
    var nun = texto.length; 
 
    
     if(cript==true){

        document.getElementById("resposta").innerHTML=text
   
        console.log(text)
    
   
 }else if(descript==true){

    
    a=cc.replaceAll("10111111.","a");
    b=a.replaceAll("10111110.","b");
    c=b.replaceAll("10111101.","c");
    d=c.replaceAll("10111100.","d");
    e=d.replaceAll("10111011.","e");
    f=e.replaceAll("10111010.","f");
    g=f.replaceAll("10111001.","g");
    h=g.replaceAll("10111000.","h");
    i=h.replaceAll("10110111.","i");
    j=i.replaceAll("10110110.","j");
    k=j.replaceAll("10110101.","k");
    l=k.replaceAll("10110100.","l");
    m=l.replaceAll("10110011.","m");
    n=m.replaceAll("10110010.","n");
    o=n.replaceAll("10110001.","o");
    p=o.replaceAll("10110000.","p");
    q=p.replaceAll("10101111.","q");
    r=q.replaceAll("10101110.","r");
    s=r.replaceAll("10101101.","s");
    t=s.replaceAll("10101100.","t");
    u=t.replaceAll("10101011.","u");
    v=u.replaceAll("10101010.","v");
    w=v.replaceAll("10101001.","w");
    x=w.replaceAll("10101000.","x");
    y=x.replaceAll("10100111.","y");
    z=y.replaceAll("10100110.","z");
    ee=z.replaceAll("01000101.","ê");
    cc=ee.replaceAll("01000011.","ç");


    console.log(cc)

    document.getElementById("resposta2").innerHTML=cc
    

 }
}
function limpar() {

location.reload();

}
var btLimpar = document.getElementById("limpar");
btLimpar.addEventListener("click", limpar);

document.getElementById("n1").focus();