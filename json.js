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
  navUl.style.marginLeft = 0 + "px";
  navUl.style.marginRight = 0 + "px";
  navUl.style.backgroundColor = "violet";
  navUl.style.border = "solid";
  navUl.style.borderColor = "black";
  
  console.log(navUl);
  document.body.appendChild(navUl);


  let navLi = document.createElement("LI"); // li - навигация 
  navLi.className = 'navLi-class';
  navLi.id = 'navLi-id';
  navLi.innerHTML = 'Привет, это Li для Ul header';
  navLi.style.height = 20 + "px";
  navLi.style.width = 400 + "px";
  navLi.style.marginLeft = 0 + "px";
  navLi.style.marginRight = 0 + "px";
  navLi.style.backgroundColor = "orange";
  navLi.style.border = "solid";
  navLi.style.borderColor = "black";
  
  console.log(navLi);
  document.body.appendChild(navLi);




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
  let cont_1 = document.body.appendChild(cont);





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




// let btn = document.createElement("BUTTON"); //button 
// btn.innerHTML = "Click me!";

// console.log(btn);
// let btn_1 = document.body.appendChild(btn);



















// let json = `{
// 	   	"id": 1,
//         "name": "Проволока низкоуглеродистая Ø 0,4 мм ГОСТ 3282-74 (ОК)",
//         "price": 0.04,
//         "img": "C:/Server/data/htdocs/site-test.com/9.jpg",
//         "url" : "<a href='https://provoloka.inf.ua/product44'><b>Характеристика товара</b></a>",
//         "stock" : "<b style='color:green;'>На складе 10.03 тонн</b>"      
// 	}`;


// // let obj = JSON.stringify(json);
// let data = JSON.parse(json);
// let keysData = Object.entries(data); 


// console.log(keysData);

// let header = '<h2>' + keysData[1][1] + '</h2>';
// let list = '';

// for (let i in keysData) {
//   list += '<li>' + keysData[i][1] + ' </li>';
// }

// document.getElementById('1').innerHTML += header;
// document.getElementById('1').innerHTML += '<ul>' + list + '</ul>';
