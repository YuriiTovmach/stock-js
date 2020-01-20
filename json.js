document.body.style.backgroundColor = "red"; // body
	let myWidth = document.body.clientWidth; 
    let myHeight = document.body.clientHeight;
		console.log("Width = " + myWidth + " px" +" "+"Height = " + myHeight + " px" ); //размер окна

let nav = document.createElement("DIV"); //div - навигация
  nav.className = 'nav-class';
  nav.id = 'nav-id';
  nav.innerHTML = 'Привет, это header';
  nav.style.height = 50 + "px";
  nav.style.width = "auto";
  nav.style.marginLeft = 0 + "px";
  nav.style.marginRight = 0 + "px";
  nav.style.backgroundColor = "green";
  nav.style.border = "solid";
  nav.style.borderColor = "black";

  console.log(nav);
  document.body.appendChild(nav);

let navUl = document.createElement("UL"); // ul - навигация
  navUl.className = 'navUl-class';
  navUl.id = 'navUl-id';
  navUl.innerHTML = 'Привет, это UL для header';
  navUl.style.height = 20 + "px";
  navUl.style.width = 500 + "px";
  navUl.style.right = 200 + "px";
  navUl.style.marginTop = -10 + "px";
  navUl.style.backgroundColor = "violet";
  navUl.style.border = "solid";
  navUl.style.borderColor = "black";
  navUl.style.position = "absolute";
  
  console.log(navUl);
  document.body.appendChild(navUl);


let navUlInHeader = document.getElementsByClassName("navUl-class")[0]; // вставляем Ul в header
  nav.appendChild(navUlInHeader);


let navLi_1 = document.createElement("LI"); // li_1 - навигация 
  navLi_1.className = 'navLi_1-class';
  navLi_1.id = 'navLi_1-id';
  navLi_1.innerHTML = 'Привет, это Li_1 для Ul header';
  navLi_1.style.height = 20 + "px";
  navLi_1.style.width = 400 + "px";
  navLi_1.style.marginLeft = 0 + "px";
  navLi_1.style.marginRight = 0 + "px";
  navLi_1.style.backgroundColor = "orange";
  navLi_1.style.border = "solid";
  navLi_1.style.borderColor = "black";
  navLi_1.style.zIndex = "2";
  
  
  console.log(navLi_1);
  document.body.appendChild(navLi_1);

  let navLi_2 = document.createElement("LI"); // li_2 - навигация 
  navLi_2.className = 'navLi_2-class';
  navLi_2.id = 'navLi_2-id';
  navLi_2.innerHTML = 'Привет, это Li_2 для Ul header';
  navLi_2.style.height = 20 + "px";
  navLi_2.style.width = 400 + "px";
  navLi_2.style.marginLeft = 0 + "px";
  navLi_2.style.marginRight = 0 + "px";
  navLi_2.style.backgroundColor = "orange";
  navLi_2.style.border = "solid";
  navLi_2.style.borderColor = "black";
  navLi_2.style.zIndex = "2";

  
  console.log(navLi_2);
  document.body.appendChild(navLi_2);

  let navLi_3 = document.createElement("LI"); // li_3 - навигация 
  navLi_3.className = 'navLi_3-class';
  navLi_3.id = 'navLi_3-id';
  navLi_3.innerHTML = 'Привет, это Li_3 для Ul header';
  navLi_3.style.height = 20 + "px";
  navLi_3.style.width = 400 + "px";
  navLi_3.style.marginLeft = 0 + "px";
  navLi_3.style.marginRight = 0 + "px";
  navLi_3.style.backgroundColor = "orange";
  navLi_3.style.border = "solid";
  navLi_3.style.borderColor = "black";
  navLi_3.style.zIndex = "2";
 
  
  console.log(navLi_3);
  document.body.appendChild(navLi_3);

  let navLi_4 = document.createElement("LI"); // li_4 - навигация 
  navLi_4.className = 'navLi_4-class';
  navLi_4.id = 'navLi_4-id';
  navLi_4.innerHTML = 'Привет, это Li_4 для Ul header';
  navLi_4.style.height = 20 + "px";
  navLi_4.style.width = 400 + "px";
  navLi_4.style.marginLeft = 0 + "px";
  navLi_4.style.marginRight = 0 + "px";
  navLi_4.style.backgroundColor = "orange";
  navLi_4.style.border = "solid";
  navLi_4.style.borderColor = "black";
  navLi_4.style.zIndex = "2";
  
  console.log(navLi_4);
  document.body.appendChild(navLi_4);


let liInUl_1 = document.getElementsByClassName("navLi_1-class")[0]; // вставляем Li_1 в Ul header
	navUl.appendChild(liInUl_1);
let liInUl_2 = document.getElementsByClassName("navLi_2-class")[0]; // вставляем Li_2 в Ul header
	navUl.appendChild(liInUl_2);
let liInUl_3 = document.getElementsByClassName("navLi_3-class")[0]; // вставляем Li_3 в Ul header
	navUl.appendChild(liInUl_3);
let liInUl_4 = document.getElementsByClassName("navLi_4-class")[0]; // вставляем Li_4 в Ul header
	navUl.appendChild(liInUl_4);	
		


let sideRight = document.createElement("DIV"); //div - сайдбар правый
  sideRight.className = 'sideRight-class';
  sideRight.id = 'sideRight-id';
  sideRight.innerHTML = 'Привет, это сайдбар правый';
  sideRight.style.height = 540 + "px";
  sideRight.style.marginTop = 0 + "px";
  sideRight.style.width = 228 + "px";
  sideRight.style.position = "absolute";
  sideRight.style.right = 8 + "px";
  sideRight.style.backgroundColor = "pink";
  sideRight.style.border = "solid";
  sideRight.style.borderColor = "black";

  console.log(sideRight);
  document.body.appendChild(sideRight);


let sideLeft = document.createElement("DIV"); //div - сайдбар левый
  sideLeft.className = 'sideLeft-class';
  sideLeft.id = 'sideLeft-id';
  sideLeft.innerHTML = 'Привет, это сайдбар левый';
  sideLeft.style.height = 540 + "px";
  sideLeft.style.marginTop = 0 + "px";
  sideLeft.style.width = 228 + "px";
  sideLeft.style.marginLeft = 0 + "px";
  sideLeft.style.backgroundColor = "blue";
  sideLeft.style.border = "solid";
  sideLeft.style.borderColor = "black";
  
  console.log(sideLeft);
  document.body.appendChild(sideLeft);


let cont = document.createElement("DIV"); //div - контекст
  cont.className = 'cont-class';
  cont.id = 'cont-id';
  cont.innerHTML = 'Привет, это основная часть страницы';
  cont.style.height = 800 + "px";
  cont.style.width = 855 + "px";
  cont.style.marginTop = -544 + "px";
  cont.style.marginLeft = "auto";
  cont.style.marginRight = "auto";
  cont.style.backgroundColor = "yellow";
  cont.style.border = "solid";
  cont.style.borderColor = "black";
  
  console.log(cont);
  document.body.appendChild(cont);


let foot = document.createElement("DIV"); //div - футер
  foot.className = 'foot-class';
  foot.id = 'foot-id';
  foot.innerHTML = 'Привет, это подвал страницы';
  foot.style.height = 200 + "px";
  foot.style.width = "auto";
  foot.style.marginLeft = 0 + "px";
  foot.style.marginRight = 0 + "px";
  foot.style.backgroundColor = "gray";
  foot.style.border = "solid";
  foot.style.borderColor = "black";

  
  console.log(foot);
  document.body.appendChild(foot);

