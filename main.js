
let sesion=prompt("Enter Your Month")
let a=new Date();
a.setMonth(sesion);
let b=a.getMonth();

if(sesion<4){
	c="Summer";
}

else if(sesion<8){
	
	c="Fall";
	
}

else{
	c="Winter";
}

document.write("<h1>"+c);
