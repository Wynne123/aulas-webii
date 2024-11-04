document.getElementById("binario").onclick = function() {
   var texto = document.getElementById("texto").value

   
   zero=texto.replaceAll("0","22222222.");

   um=zero.replaceAll("1","00110001 ");
   ZERO=um.replaceAll("22222222.","00110000 ");
   dois=ZERO.replaceAll("2","00110010 ");
 tres=dois.replaceAll("3","00110011 ");
quatro=tres.replaceAll("4","00110100 ");
cinco=quatro.replaceAll("5","00110101 ");
seis=cinco.replaceAll("6","00110110 ");
 sete=seis.replaceAll("7","00110111 ");
 oito=sete.replaceAll("8","00111000 ");
 nove=oito.replaceAll("9","00111001 ");

   a=nove.replaceAll("a","01100001 ");
   b=a.replaceAll("b","01100010 ");
   c=b.replaceAll("c","01100011 ");
   d=c.replaceAll("d","01100100 ");
   e=d.replaceAll("e","01100101 ");
   f=e.replaceAll("f","01100110 ");
   g=f.replaceAll("g","01100111 ");
   h=g.replaceAll("h","01101000 ");
   i=h.replaceAll("i","01101001 ");
   j=i.replaceAll("j","01101010 ");
   k=j.replaceAll("k","01101011 ");
   l=k.replaceAll("l","01101100 ");
   m=l.replaceAll("m","01101101 ");
   n=m.replaceAll("n","01101110 ");
   o=n.replaceAll("o","01101111 ");
   p=o.replaceAll("p","01110000 ");
   q=p.replaceAll("q","01110001 ");
   r=q.replaceAll("r","01110010 ");
   s=r.replaceAll("s","01110011 ");
   t=s.replaceAll("t","01110100 ");
   u=t.replaceAll("u","01110101 ");
   v=u.replaceAll("v","01110110 ");
   w=v.replaceAll("w","01110111 ");
   x=w.replaceAll("x","01111000 ");
   y=x.replaceAll("y","01111001 ");
   z=y.replaceAll("z","01111010 ");

   A=z.replaceAll("A","01000001 ");
   B=A.replaceAll("B","01000010 ");
   C=B.replaceAll("C","01000011 ");
   D=C.replaceAll("D","01000100 ");
   E=D.replaceAll("E","01000101 ");
   F=E.replaceAll("F","01000110 ");
   G=F.replaceAll("G","01000111 ");
   H=G.replaceAll("H","01001000 ");
   I=H.replaceAll("I","01001001 ");
   J=I.replaceAll("J","01001010 ");
   K=J.replaceAll("K","01001011 ");
   L=K.replaceAll("L","01001100 ");
   M=L.replaceAll("M","01001101 ");
   N=M.replaceAll("N","01001110 ");
   O=N.replaceAll("O","01001111 ");
   P=O.replaceAll("P","01010000 ");
   Q=P.replaceAll("Q","01010001 ");
   R=Q.replaceAll("R","01010010 ");
   S=R.replaceAll("S","01010011 ");
   T=S.replaceAll("T","01010100 ");
   U=T.replaceAll("U","01010101 ");
   V=U.replaceAll("V","01010110 ");
   W=V.replaceAll("W","01010111 ");
   X=W.replaceAll("X","01011000 ");
   Y=X.replaceAll("Y","01011001 ");
   Z=Y.replaceAll("Z","01011010 ");

   espaco=Z.replaceAll("  "," 00100000 ");
   aspas=espaco.replaceAll("\"","00100010 ");
   exclamacao=aspas.replaceAll("!","00100001 ");
   hash=exclamacao.replaceAll("#","00100011 ");
   sifrao=hash.replaceAll("$","00100100 ");
   porcentagem=sifrao.replaceAll("%","00100101 ");
   ecomercial=porcentagem.replaceAll("&","00100110 ");
   aspassimples=ecomercial.replaceAll("\'","00100111 ");
   parenteses=aspassimples.replaceAll("(","00101000 ");
   parenteses2=parenteses.replaceAll(")","00101001 ");
   asterisco=parenteses2.replaceAll("*","00101010 ");
   mais=asterisco.replaceAll("+","00101011 ");
   virgula=mais.replaceAll(",","00101100 ");
   menos=virgula.replaceAll("-","00101101 ");
   ponto=menos.replaceAll(".","00101110 ");
   barra=ponto.replaceAll("/","00101111 ");

   doispontos=barra.replaceAll(":","00111010 ");
   pontoevirgula=doispontos.replaceAll(";","00111011 ");
   menorque=pontoevirgula.replaceAll("<","00111100 ");
   igual=menorque.replaceAll("=","00111101 ");
   maiorque=igual.replaceAll(">","00111110 ");
   interrogacao=maiorque.replaceAll("?","00111111 ");
   arroba=interrogacao.replaceAll("@","01000000 ");
   
   squarebarra=arroba.replaceAll("[","01011011 ");
   barra2=squarebarra.replaceAll("\\","01011100 ");
   squarebarra2=barra2.replaceAll("]","01011101 ");
   chapeu=squarebarra2.replaceAll("^","01011110 ");
   anderline=chapeu.replaceAll("_","01011111 ");
   crase=anderline.replaceAll("`","01100000 ");

   chaves=crase.replaceAll("{","01111011 ");
   barraempe=chaves.replaceAll("\|","01111100 ");
   chaves2=barraempe.replaceAll("}","01111101 ");
   tio=chaves2.replaceAll("~","01111110 ");

   cc=tio.replaceAll("ç","11100111 ");
   ee=cc.replaceAll("é","11101001 ");
   aa=ee.replaceAll("à","11100000 ");

   
   CC=aa.replaceAll("Ç","11000111 ");
   EE=CC.replaceAll("É","11001001 ");
   AA=EE.replaceAll("À","11000000 ");

       document.getElementById("caixatext").innerHTML=AA
}      
   document.getElementById("alfa").onclick = function() {
   var texto = document.getElementById("texto").value
   
   zero=texto.replaceAll("00110000 ","22222222.");
   um=zero.replaceAll("00110001 ","1");
   ZERO=um.replaceAll("22222222.","0");
   dois=ZERO.replaceAll("00110010 ","2");
 tres=dois.replaceAll("00110011 ","3");
quatro=tres.replaceAll("00110100 ","4");
cinco=quatro.replaceAll("00110101 ","5");
seis=cinco.replaceAll("00110110 ","6");
 sete=seis.replaceAll("00110111 ","7");
 oito=sete.replaceAll("00111000 ","8");
 nove=oito.replaceAll("00111001 ","9");

  a=nove.replaceAll("01100001 ","a");
  b=a.replaceAll("01100010 ","b");
  c=b.replaceAll("01100011 ","c");
  d=c.replaceAll("01100100 ","d");
  e=d.replaceAll("01100101 ","e");
  f=e.replaceAll("01100110 ","f");
  g=f.replaceAll("01100111 ","g");
  h=g.replaceAll("01101000 ","h");
  i=h.replaceAll("01101001 ","i");
  j=i.replaceAll("01101010 ","j");
  k=j.replaceAll("01101011 ","k");
  l=k.replaceAll("01101100 ","l");
  m=l.replaceAll("01101101 ","m");
  n=m.replaceAll("01101110 ","n");
  o=n.replaceAll("01101111 ","o");
  p=o.replaceAll("01110000 ","p");
  q=p.replaceAll("01110001 ","q");
  r=q.replaceAll("01110010 ","r");
  s=r.replaceAll("01110011 ","s");
  t=s.replaceAll("01110100 ","t");
  u=t.replaceAll("01110101 ","u");
  v=u.replaceAll("01110110 ","v");
  w=v.replaceAll("01110111 ","w");
  x=w.replaceAll("01111000 ","x");
  y=x.replaceAll("01111001 ","y");
  z=y.replaceAll("01111010 ","z");

  A=z.replaceAll("01000001 ","A");
  B=A.replaceAll("01000010 ","B");
  C=B.replaceAll("01000011 ","C");
  D=C.replaceAll("01000100 ","D");
  E=D.replaceAll("01000101 ","E");
  F=E.replaceAll("01000110 ","F");
  G=F.replaceAll("01000111 ","G");
  H=G.replaceAll("01001000 ","H");
  I=H.replaceAll("01001001 ","I");
  J=I.replaceAll("01001010 ","J");
  K=J.replaceAll("01001011 ","K");
  L=K.replaceAll("01001100 ","L");
  M=L.replaceAll("01001101 ","M");
  N=M.replaceAll("01001110 ","N");
  O=N.replaceAll("01001111 ","O");
  P=O.replaceAll("01010000 ","P");
  Q=P.replaceAll("01010001 ","Q");
  R=Q.replaceAll("01010010 ","R");
  S=R.replaceAll("01010011 ","S");
  T=S.replaceAll("01010100 ","T");
  U=T.replaceAll("01010101 ","U");
  V=U.replaceAll("01010110 ","V");
  W=V.replaceAll("01010111 ","W");
  X=W.replaceAll("01011000 ","X");
  Y=X.replaceAll("01011001 ","Y");
  Z=Y.replaceAll("01011010 ","Z");

  espaco=Z.replaceAll("00100000 "," ");
  aspas=espaco.replaceAll("00100010 ","\"");
  exclamacao=aspas.replaceAll("00100001 ","!");
  hash=exclamacao.replaceAll("00100011 ","#");
  sifrao=hash.replaceAll("00100100 ","$");
  porcentagem=sifrao.replaceAll("00100101 ","%");
  ecomercial=porcentagem.replaceAll("00100110 ","&");
  aspassimples=ecomercial.replaceAll("00100111 ","\'");
  parenteses=aspassimples.replaceAll("00101000 ","(");
  parenteses2=parenteses.replaceAll("00101001 ",")");
  asterisco=parenteses2.replaceAll("00101010 ","*");
  mais=asterisco.replaceAll("00101011 ","+");
  virgula=mais.replaceAll("00101100 ",",");
  menos=virgula.replaceAll("00101101 ","-");
  ponto=menos.replaceAll("00101110 ",".");
  barra=ponto.replaceAll("00101111 ","/");  

  doispontos=barra.replaceAll("00111010 ",":");
  pontoevirgula=doispontos.replaceAll("00111011 ",";");
  menorque=pontoevirgula.replaceAll("00111100 ","<");
  igual=menorque.replaceAll("00111101 ","=");
  maiorque=igual.replaceAll("00111110 ",">");
  interrogacao=maiorque.replaceAll("00111111 ","?");
  arroba=interrogacao.replaceAll("01000000 ","@");

  squarebarra=arroba.replaceAll("01011011 ","[");
  barra2=squarebarra.replaceAll("01011100 ","\\");
  squarebarra2=barra2.replaceAll("01011101 ","]");
  chapeu=squarebarra2.replaceAll("01011110 ","^");
  anderline=chapeu.replaceAll("01011111 ","_");
  crase=anderline.replaceAll("01100000 ","`");

  chaves=crase.replaceAll("01111011 ","{");
   barraempe=chaves.replaceAll("01111100 ","\|");
   chaves2=barraempe.replaceAll("01111101 ","}");
   tio=chaves2.replaceAll("01111110 ","~");

   cc=tio.replaceAll("11100111 ","ç");
   ee=cc.replaceAll("11101001 ","é");
   aa=ee.replaceAll("11100000 ","à");

   
   CC=aa.replaceAll("11000111 ","Ç");
   EE=CC.replaceAll("11001001 ","É");
   AA=EE.replaceAll("11000000 ","À");

   document.getElementById("caixatext").innerHTML=AA
   

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






