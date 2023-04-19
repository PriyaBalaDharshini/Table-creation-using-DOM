
var table = document.createElement("table");
table.setAttribute("class", "table");

var thead = document.createElement("thead");
var trhead = document.createElement("tr");

function th(tagname, content) {
    var th = document.createElement(tagname);
    th.innerHTML = content;
    return th;
} 

var th1 = th("th", "First");
var th2 = th("th", "Last");
var th3 = th("th", "Handle"); 

trhead.append(th1,th2,th3);
thead.append(trhead);
 
var tbody=document.createElement("tbody");

var trbody1=document.createElement("tr");

function createtrtd(tagname,content){
    var ele=document.createElement(tagname);
    ele.innerHTML = content;
    return ele;
}

var td1=createtrtd("td","Mark");
var td2=createtrtd("td","Otto");
var td3=createtrtd("td","@mdo");
trbody1.append(td1,td2,td3);
tbody.append(trbody1);

var trbody2=document.createElement("tr");
var td4=createtrtd("td","Jacob");
var td5=createtrtd("td","Thornton");
var td6=createtrtd("td","@fat");
trbody2.append(td4,td5,td6);
tbody.append(trbody2);

var trbody3=document.createElement("tr");
var td7=createtrtd("td","Larry");
var td8=createtrtd("td","the Bird");
var td9=createtrtd("td","@twitter");
trbody3.append(td7,td8,td9);
tbody.append(trbody3);

table.append(thead,tbody);
document.body.append(table);


