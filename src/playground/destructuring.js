const address = [ '1299 & Junipi','Philadelphia','Pensilvina','1209']
console.log(`you are in ${address[1]}`);

const [ , , state =  'NewYork'] = address
console.log(`you are in ${state}`);

const item = ['coffee','$4.00','$5.99']
const [itemName , ,mediumPrice] = item
console.log(`${itemName} is ${mediumPrice}`);