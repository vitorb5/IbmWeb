function validaCpf(el){


  var str = el.value;
  str = str.replace(/\D+/g, '');
  var i, j, s, r;
  if (str.length !== 11 || str.match(/^(\d)\1+$/)){
    el.classList.add("erro");
  }

  for (i = 0; i < 2; i++) {
    s = 0;
    for (j = 0; j <= 9 + i; j++)
    s += window.parseInt(str.substring(j - 1, j) || 0) * (11 + i - j);
    r = (s * 10) % 11;
    r = (r === 10) || (r === 11) ? 0 : r;
    if (r !== window.parseInt(str.substring(9 + i, 10 + i))){
      el.classList.add("erro");
    }

  }
}

function validaEmail(){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1}\.[0-9]{1}\.[0-9]{1}\.[0-9]{1}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
  return re.test(el.value);
}

function limpaCampo(el) {
  el.classList.remove("erro");
}

function login(){
  var login =document.querySelector("#user").value
  var senha = document.querySelector("#senha").value;

  if(login == 'login' && senha == 'senha'){
    location.href = "html/terreno.html";
  }
}
