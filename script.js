function labels(tagname,attname,attvalue,content){
var a1=document.createElement(tagname);
a1.setAttribute(attname,attvalue);
a1.innerHTML=content;
return a1;
}
function inputs(tagname,attname1,attvalue1,attname2,attvalue2,attname3,attvalue3){
var a2=document.createElement(tagname);
a2.setAttribute(attname1,attvalue1);
a2.setAttribute(attname2,attvalue2);
a2.setAttribute(attname3,attvalue3);
return a2;
}
function linebreak(tagname){
var br=document.createElement(tagname);
return br;
}
var fname=labels("label","for","fname","First Name");
var br1=linebreak("br");
var input1=inputs("input","type","text","name","fname","id","fname");
var br2=linebreak("br");

var mname=labels("label","for","mname","Middle Name");
var br3=linebreak("br");
var input2=inputs("input","type","text","name","mname","id","mname");
var br4=linebreak("br");

var lname=labels("label","for","lname","Last Name");
var br5=linebreak("br");
var input3=inputs("input","type","text","name","lname","id","lname");
var br6=linebreak("br");

var email=labels("label","for","email","E-mail");
var br7=linebreak("br");
var input4=inputs("input","type","email","name","email","id","email");
var br8=linebreak("br");

var password=labels("label","for","pass","Password");
var br9=linebreak("br");
var input5=inputs("input","type","password","name","pass","id","pass");
var br10=linebreak("br");
var br11=linebreak("br");
var button=labels("button","type","button","Click me!");

document.body.append(fname,br1,input1,br2,mname,br3,input2,br4,lname,br5,input3,br6,
    email,br7,input4,br8,password,br9,input5,br10,br11,button);

