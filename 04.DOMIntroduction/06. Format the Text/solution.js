function solve() {
  let text = document.getElementById('input').value;
  let sentances = text.split('.');
  let count = 0;
  let res = '';
  for(let sentence of sentances){
      if (sentence.length < 1){
        continue;
      }
      count += 1;
      if (count <= 3){
        res += `${sentence}.`;
      }
      else{
        document.getElementById('output').innerHTML += `<p>${res}</p>`;
        count = 1;
        res = '';
        res = `${sentence}.`;
      }
  }
  document.getElementById('output').innerHTML += `<p>${res}</p>`;
}