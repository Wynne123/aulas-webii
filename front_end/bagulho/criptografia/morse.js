document.getElementById("morse").onclick = function() {
    var texto = document.getElementById("texto").value
   var text= texto.toUpperCase()
   ponto=text.replaceAll(".","22222222.");
   menos=ponto.replaceAll("-","-....- ");
   PONTO=menos.replaceAll("22222222.",".-.-.- ");
   
   a=PONTO.replaceAll("A",".- ");
   b=a.replaceAll("B","-... ");
   c=b.replaceAll("C","-.-. ");
   d=c.replaceAll("D","-.. ");
   e=d.replaceAll("E",". ");
   f=e.replaceAll("F","..-. ");
   g=f.replaceAll("G","--. ");
   h=g.replaceAll("H",".... ");
   i=h.replaceAll("I",".. ");
   j=i.replaceAll("J",".--- ");
   k=j.replaceAll("K","-.- ");
   l=k.replaceAll("L",".-.. ");
   m=l.replaceAll("M","-- ");
   n=m.replaceAll("N","-. ");
   o=n.replaceAll("O","--- ");
   p=o.replaceAll("P",".--. ");
   q=p.replaceAll("Q","--.- ");
   r=q.replaceAll("R",".-. ");
   s=r.replaceAll("S","... ");
   t=s.replaceAll("T","- ");
   u=t.replaceAll("U","..- ");
   v=u.replaceAll("V","...- ");
   w=v.replaceAll("W",".-- ");
   x=w.replaceAll("X","-..- ");
   y=x.replaceAll("Y","-.-- ");
   z=y.replaceAll("Z","--.. ");

   zero=z.replaceAll("0","----- ");
   um=zero.replaceAll("1",".---- ");
   dois=um.replaceAll("2","..--- ");
 tres=dois.replaceAll("3","...-- ");
quatro=tres.replaceAll("4","....- ");
cinco=quatro.replaceAll("5","..... ");
seis=cinco.replaceAll("6","-.... ");
 sete=seis.replaceAll("7","--... ");
 oito=sete.replaceAll("8","---.. ");
 nove=oito.replaceAll("9","----. ");
   aspas=nove.replaceAll("\"",".-..-. ");
   exclamacao=aspas.replaceAll("!","-.-.-- ");
   sifrao=exclamacao.replaceAll("$","...-..- ");
   aspassimples=sifrao.replaceAll("\'",".----. ");
   parenteses=aspassimples.replaceAll("(","-.--. ");
   parenteses2=parenteses.replaceAll(")","-.--.- ");
   mais=parenteses2.replaceAll("+",".-.-. ");
   virgula=mais.replaceAll(",","--..-- ");
   barra=virgula.replaceAll("//","-..-. ");
   interrogacao=barra.replaceAll("?","..--.. ");
   doispontos=interrogacao.replaceAll(":","---... ");
   pontoevirgula=doispontos.replaceAll(";","-.-.-. ");
   igual=pontoevirgula.replaceAll("=","-...- ");
   anderline=igual.replaceAll("_","..--.- ");
   arroba=anderline.replaceAll("@",".--.-. ");
   cc=arroba.replaceAll("Ç","-.-.. ");
   aa=cc.replaceAll("À",".--.- ");
   ee=aa.replaceAll("É","..-.. ");

 document.getElementById("caixatext").innerHTML=ee

}
document.getElementById("alfa").onclick = function() {
  var texto = document.getElementById("texto").value
  var text= texto.toUpperCase()

  sifrao=text.replaceAll("...-..- ","$");

  aspas=sifrao.replaceAll(".-..-. ","\"");
  exclamacao=aspas.replaceAll("-.-.-- ","!");
  aspassimples=exclamacao.replaceAll(".----. ","\'");
  parenteses2=aspassimples.replaceAll("-.--.- ",")");
  virgula=parenteses2.replaceAll("--..-- ",",");
  interrogacao=virgula.replaceAll("..--.. ","?");
  doispontos=interrogacao.replaceAll("---... ",":");
  pontoevirgula=doispontos.replaceAll("-.-.-. ",";");
  anderline=pontoevirgula.replaceAll("..--.- ","_");
  arroba=anderline.replaceAll(".--.-. ","@");
  ponto=arroba.replaceAll(".-.-.- ","22222222.");
  menos=ponto.replaceAll("-....- ","33333333.");

  cc=menos.replaceAll("-.-.. ","Ç");
  aa=cc.replaceAll(".--.- ","À");
  ee=aa.replaceAll("..-.. ","É");
  zero=ee.replaceAll("----- ","0");
  um=zero.replaceAll(".---- ","1");
  dois=um.replaceAll("..--- ","2");
  tres=dois.replaceAll("...-- ","3");
  quatro=tres.replaceAll("....- ","4");
  cinco=quatro.replaceAll("..... ","5");
  seis=cinco.replaceAll("-.... ","6");
  sete=seis.replaceAll("--... ","7");
  oito=sete.replaceAll("---.. ","8");
  nove=oito.replaceAll("----. ","9");
  parenteses=nove.replaceAll("-.--. ","(");
  mais=parenteses.replaceAll(".-.-. ","+");
  barra=mais.replaceAll("-..-. ","//");
  igual=barra.replaceAll("-...- ","=");

  x=igual.replaceAll("-..- ","X");
  y=x.replaceAll("-.-- ","Y");
  z=y.replaceAll("--.. ","Z");
  v=z.replaceAll("...- ","V");
  q=v.replaceAll("--.- ","Q");
  p=q.replaceAll(".--. ","P");
  l=p.replaceAll(".-.. ","L");
  j=l.replaceAll(".--- ","J");
  h=j.replaceAll(".... ","H");
  f=h.replaceAll("..-. ","F");
  b=f.replaceAll("-... ","B");
  c=b.replaceAll("-.-. ","C");

  o=c.replaceAll("--- ","O");
  d=o.replaceAll("-.. ","D");
  g=d.replaceAll("--. ","G");
  k=g.replaceAll("-.- ","K");
  r=k.replaceAll(".-. ","R");
  s=r.replaceAll("... ","S");
  u=s.replaceAll("..- ","U");
  w=u.replaceAll(".-- ","W");

  a=w.replaceAll(".- ","A");
  i=a.replaceAll(".. ","I");
  m=i.replaceAll("-- ","M");
  n=m.replaceAll("-. ","N"); 
  
  t=n.replaceAll("- ","T");
  e=t.replaceAll(". ","E");
  PONTO=e.replaceAll("22222222.",".");
  MENOS=PONTO.replaceAll("33333333.","-");
  document.getElementById("caixatext").innerHTML=MENOS
}

function limpar() {

  location.reload();
  
  }
  var btLimpar = document.getElementById("limpar");
  btLimpar.addEventListener("click", limpar);
  
  document.getElementById("texto").focus();
  
  document.getElementById("copiar").onclick = function(){
  let textocopiado= document.getElementById("caixatext")
  textocopiado.select()
  textocopiado.setSelectionRange(0,99999)
  document.execCommand("copy")
  
  }