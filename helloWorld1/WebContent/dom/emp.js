let xhtp = new XMLHttpRequest();
xhtp.onload = function () {
    let data = JSON.parse(xhtp.responseText);
    console.log(data);
    showEmpList(data);
}

xhtp.open('get', '../empJsonServlet.json');
xhtp.send();

function showEmpList(data) {

    let table, tr, td, txt;
    table = document.createElement('table');
    table.setAttribute('border', '1');

    let titles = ['사원번호', '이름', '이메일', '입사일자', '직무', '기능'];
    tr = document.createElement('tr');

    for (let title of titles) {
        td = document.createElement('th');
        txt = document.createTextNode(title);
        td.appendChild(txt);
        tr.appendChild(td);
    }
    table.appendChild(tr);

    //데이터
    for (let obj of data) {
        tr = document.createElement('tr');
        table.appendChild(tr);
        for (let field in data[0]) {
            td = document.createElement('td');
            txt = document.createTextNode(obj[field]);
            td.appendChild(txt);
            tr.appendChild(td);
        }

        let bnt = document.createElement('button');


    }
    document.getElementById('show').appendChild(table);
}
