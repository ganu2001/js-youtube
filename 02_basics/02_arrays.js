
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) 

//  yat he Array merge nahi hot tyat na te  Array madhyev Array yete last la dc wala Array jate 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);   //  yat flsash ans yete manje dc wala array manje 4th element ahe 

 const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros); //  he noormal all add karate bas 

const all_new_heros = [...marvel_heros, ...dc_heros]   
// "..." means Spread operator it works as a concenate means All la spread karate pan output ek new array dete all two array 
// Sperad karun dete 

 console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// flat : hi ek method ahe jr aplya kade complex value ale array madhye array ani tyala ek array la takayacha tr ma tela 
// same one array la anayacha tr ma tela flat use karayacha ma te simple one array yete 


console.log(Array.isArray("Hitesh"))   
// he "isArray " method te array ahe ka te check karate 

console.log(Array.from("Hitesh"))
// he "form " : je dila tya pasun Array tayar katrte 

console.log(Array.from({name: "hitesh"})) // interesting
// he je asa kaey value pair dila tr te na empty array dete cause te confuse hote ki kasa cha array karu kay ka value cha te 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// he "of " method te array tayar karte pan te set of elements  poasun karate
