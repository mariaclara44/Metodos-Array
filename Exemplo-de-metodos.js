let playlist = ["Rock", "Pop", "Mpb"];
console.log(`Antes do push: ${playlist}`);
// Adiconando uma nova música á playlist playlist.push (`Trap`);

playlist.push (`Trap`)
console.log(`Depois do push: ${playlist}`);

console.log(`Antes do pop: ${playlist}`);

//  Removendo a última música da playlist 
let musicaRemovida = playlist.pop();

console.log(`Depois do pop: ${playlist}`);
console.log(`Música removida: ${musicaRemovida}`);

let segundaMusicaRemovida = playlist.pop();

console.log(`Depois do pop: ${playlist}`);
console.log(`Segunda música removida: ${segundaMusicaRemovida}`);


