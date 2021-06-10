// PASANGAN DNA
// A -> T
// C -> G

function pairElement(str) {
  let arr = str.split('');
  let result = [];
  let pasangan;
  
  arr.map(value => {
    switch(value) {
      case 'A':
        pasangan = 'T';
        result.push([value, pasangan]);
        break;
      case 'T':
        pasangan = 'A';
        result.push([value, pasangan]);
        break;
      case 'C':
        pasangan = 'G';
        result.push([value, pasangan]);
        break;
      case 'G':
        pasangan = 'C';
        result.push([value, pasangan]);
        break;
    }
  })
  console.log(result);
  return result;
}

pairElement("GCG"); // [["G", "C"], ["C","G"], ["G", "C"]]
pairElement("ATCGA"); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
