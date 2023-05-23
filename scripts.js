const inputDia = document.getElementById("input-dia");
const inputMes = document.getElementById("input-mes");
const inputAno = document.getElementById("input-ano");

inputDia.addEventListener("input", function(){
  if(this.value.length > this.maxLength){
    this.value = this.value.slice(0, this.maxLength);
  }
  if(inputMes.value === 1 || inputMes.value === 3 || inputMes.value === 5 || inputMes.value === 7 ||
    inputMes.value === 8 || inputMes.value === 10 || inputMes.value === 12)
    {
      this.max = 31;
    }
  else if(inputMes.value === 2){
    this.max = 28;
  }
  else{
    this.max = 30;
  }
  if(this.value[1] < this.min && this.value[0] < this.min){
    this.value = 01;
  }

});

inputMes.addEventListener("input", function(){
  if(this.value.length > this.maxLength){
    this.value = this.value.slice(0, this.maxLength);
  }
  if(this.value >= this.max){
    this.value = 12;
  }
  if(this.value[1] < this.min && this.value[0] < this.min){
    this.value = 1;
  }
});

inputAno.addEventListener("input", function(){
  if(this.value.length > this.maxLength){
    this.value = this.value.slice(0, this.maxLength);
  }
  if(this.value >= this.max){
    this.value = 2023;
  }
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
});



function calcularIdade() {
  const date = new Date();

  const anoAtual = date.getFullYear();
  const anoDeNascimento = document.getElementById("input-ano").value;
  let anosVividos = anoAtual - anoDeNascimento;

  const mesAtual = date.getMonth() + 1;
  const mesDeNascimento = document.getElementById("input-mes").value;
  const mesesVividos = mesAtual - mesDeNascimento;
  
  const diaAtual = date.getDate();
  const diaDeNascimento = document.getElementById("input-dia").value;
  const diasVividos = diaAtual - diaDeNascimento;

  const contagemAno = document.getElementById("contagem-ano");
  const contagemMes = document.getElementById("contagem-mes");
  const contagemDia = document.getElementById("contagem-dia");

  if(anoDeNascimento === "" || diaDeNascimento === "" || mesDeNascimento === ""){
    alert("Erro, não deixe campos em branco");
  }else{
    if(mesesVividos ===  0 && diasVividos === 0){
      contagemAno.textContent = anosVividos;
      contagemMes.textContent = mesesVividos;
      contagemDia.textContent = diasVividos;
  
    } else if(mesesVividos === 0 && diasVividos > 0){
      contagemAno.textContent = anosVividos;
      contagemMes.textContent = mesesVividos;
      contagemDia.textContent = diasVividos;
    }
    else{
      contagemAno.textContent = anosVividos - 1;
      contagemMes.textContent = Math.abs(mesesVividos) ;
      contagemDia.textContent = diasVividos; 
    } 
  }
}
