function AtualizarPagina() {
    location.reload();
}

function VerificaMaior(num1, num2, num3) {
    var maior = 0;

    if (num1 > num2 && num1 > num3) {
        document.getElementById("num1").style.borderColor = '#120a8f';
        document.getElementById("num1").style.borderWidth = '4px';
        document.getElementById("num2").disabled = true;
        document.getElementById("num3").disabled = true;
        maior = num1;
    }
    else if (num2 > num3) {
        document.getElementById("num2").style.borderColor = '#120a8f';
        document.getElementById("num2").style.borderWidth = '4px';
        document.getElementById("num1").disabled = true;
        document.getElementById("num3").disabled = true;
        maior = num2;
    } else {
        document.getElementById("num3").style.borderColor = '#120a8f';
        document.getElementById("num3").style.borderWidth = '4px';
        document.getElementById("num1").disabled = true;
        document.getElementById("num2").disabled = true;
        maior = num3;
    }
    return maior;
}

function Maior() {
    var a = document.getElementById("num1");
    var b = document.getElementById("num2");
    var c = document.getElementById("num3");
    var v1 = Number(a.value);
    var v2 = Number(b.value);
    var v3 = Number(c.value);
    var resp = VerificaMaior(v1, v2, v3);

    document.getElementById('btnMaior').style.display = 'none';
    document.getElementById('btnCresc').style.display = 'none';
    document.getElementById('btnRefazer').style.display = 'block';
    document.getElementById("results").textContent = "Maior Número:"
}

function CalcCresc(num1, num2, num3) {
    var maior = 0, menor = 0, meio = 0;

    if (num1 > num2 && num1 > num3) {
        maior = num1;
    }
    else if (num2 > num3) {
        maior = num2;
    } else {
        maior = num3;
    }

    if (num1 < num2 && num1 < num3) {
        menor = num1;
    }
    else if (num2 < num3) {
        menor = num2;
    } else {
        menor = num3;
    }
    if (num1 > menor && num1 < maior) {
        meio = num1;
    }
    else if (num2 > menor && num2 < maior) {
        meio = num2;
    } else {
        meio = num3;
    }
    var r = [menor, meio, maior];
    return r;

}

function Cresc() {
    var a = document.getElementById("num1");
    var b = document.getElementById("num2");
    var c = document.getElementById("num3");
    var v1 = Number(a.value);
    var v2 = Number(b.value);
    var v3 = Number(c.value);
    var resp = CalcCresc(v1, v2, v3);

    document.getElementById("num1").value = resp[0];
    document.getElementById("num2").value = resp[1];
    document.getElementById("num3").value = resp[2];
    document.getElementById("num1").disabled = true;
    document.getElementById("num2").disabled = true;
    document.getElementById("num3").disabled = true;

    document.getElementById('btnRefazer').style.display = 'block';
    document.getElementById('btnCresc').style.display = 'none';
    document.getElementById('btnMaior').style.display = 'none';
    document.getElementById("results").textContent = "Ordem Crescente:"
}
