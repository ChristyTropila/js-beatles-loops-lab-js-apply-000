// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i=0; i< musicians.length; i++){
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var results = [];
  var counter=0;

  while( counter<facts.length){
    results.push(facts(counter) + "!!!");
    counter++;
  }
  return results;
}