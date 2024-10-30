const word=document.querySelector(".word"),range=document.querySelector(".range"),wordLen=document.querySelector(".length"),strong=document.querySelector(".strong"),uppercaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ",lowercaseLetters="abcdefghijklmnopqrstuvwxyz",symbols=`!@#$%^&*()-=+{}[]|:;"'<>?,./`,numbers="0123456789",elements=[{selector:"#one",data:uppercaseLetters,index:0},{selector:"#two",data:lowercaseLetters,index:1},{selector:"#three",data:numbers,index:2},{selector:"#four",data:symbols,index:3}];let checks=[true,true,true,true],mainWord=[];function updateMainWord(){mainWord=[],elements.forEach(({data:a,index:b})=>{checks[b]&&mainWord.push(...a)})}function updateDisplay(){checks.some(Boolean)?(generateWord(),checkStrength()):(word.value="Check at least one",strong.innerHTML="No Thing")}function generateWord(){word.value=Array.from({length:range.value},()=>mainWord[Math.floor(Math.random()*mainWord.length)]).join("")}function checkStrength(){let a,b;range.value<5?(a="Very Weak",b="#d9534f"):range.value<8?(a="Weak",b="#f0ad4e"):range.value<10?(a="Good",b="#5bc0de"):range.value<12?(a="Strong",b="#5cb85c"):(a="Very Strong",b="#4cae4c"),strong.innerHTML=a,strong.style.backgroundColor=b}function updateLengthDisplay(){wordLen.innerHTML=`Word Length Is ${String(range.value).padStart(2,"0")}:`}elements.forEach(({selector:a,index:b})=>{document.querySelector(a)?.addEventListener("change",()=>{checks[b]=!checks[b],updateMainWord(),updateDisplay()})}),range.addEventListener("input",()=>{updateLengthDisplay(),updateDisplay()}),document.querySelector(".plus").addEventListener("click",()=>{range.value<range.max&&range.value++,updateLengthDisplay(),updateDisplay()}),document.querySelector(".mins").addEventListener("click",()=>{range.value>range.min&&range.value--,updateLengthDisplay(),updateDisplay()}),document.querySelector("i").onclick=updateDisplay,document.querySelector(".copy").onclick=function(){navigator.clipboard.writeText(word.value),this.innerHTML="Copied",setTimeout(()=>this.innerHTML="Copy",1500)},updateMainWord(),updateDisplay(),updateLengthDisplay();