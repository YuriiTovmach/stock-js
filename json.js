let div = document.createElement("DIV");
  document.body.style.backgroundColor = "red";
  div.style.height = 1200 + "px";
  div.style.width = 1200 + "px";
  div.style.backgroundColor = "green";
  div.style.border = 40 + "px";
  div.style.border = "solid";
  div.style.borderColor = "black";

  console.log(div);
  document.body.appendChild(div);


let json = `{
	   	"id": 1,
        "name": "Проволока низкоуглеродистая Ø 0,4 мм ГОСТ 3282-74 (ОК)",
        "price": 0.04,
        "img": "C:/Server/data/htdocs/site-test.com/9.jpg",
        "url" : "<a href='https://provoloka.inf.ua/product44'><b>Характеристика товара</b></a>",
        "stock" : "<b style='color:green;'>На складе 10.03 тонн</b>"      
	}`;


// let obj = JSON.stringify(json);
let data = JSON.parse(json);
let keysData = Object.entries(data); 


console.log(keysData);

let header = '<h2>' + keysData[1][1] + '</h2>';
let list = '';

for (let i in keysData) {
  list += '<li>' + keysData[i][1] + ' </li>';
}

document.getElementById('1').innerHTML += header;
document.getElementById('1').innerHTML += '<ul>' + list + '</ul>';
