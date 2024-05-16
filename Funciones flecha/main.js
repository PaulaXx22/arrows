

const greetings = () => {
    return "Hola";
  };
  console.log(greetings)


  const division=(a,b)=>{
    return a/b;
  }


  const myName = (name) => {
    return 'mi nombre es ${name}';
  }

  const test2=()=> {
    console.log("Función test 2 ejecutada.")
  }
  const test1=(callback) =>{
    callback();
  }
  test1(test2)


  //foreach

  let people = [
    { name: 'Jamiro', age: 45 },
    { name: 'Juan', age: 35 },
    { name: 'Paco', age: 34 },
    { name: 'Pepe', age: 14 },
    { name: 'Pilar', age: 24 },
    { name: 'Laura', age: 24 },
    { name: 'Jenny', edad: 10 },
   ]
   
 const agefilter = []
 people.forEach ((ages) => {
   if (ages.age > 25) {
     agefilter.push(ages)
   }
 } )
 
 
 const letterj = []
  people.forEach ((letters) => { 
  if  (letters.name [0] === 'J') {
       letterj.push (letters)
  }
 })

 
 
 
 //Map
  
 const arraymayor25 = []
 people.map ((ages) => {
   if (ages.age > 25 )
     arraymayor25.push (ages)
 
 })
 console.log (arraymayor25)
 
 const arrayletterj = []
  people.forEach ((letters) => { 
  if  (letters.name [0] === 'J') {
       arrayletterj.push (letters)
  }
 })
 console.log (arrayletterj)
 
 
 const numbers1 = [ 4, 5, 6, 7, 8, 9, 10]
 
 const elevarsimismo =numbers1.map((numero)=>
   Math.pow(numero,numero))
 
 console.log (elevarsimismo)
 