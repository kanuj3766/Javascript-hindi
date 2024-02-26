const marvel_hero = ["thor", "Iornman", "spiderman","Doctor stranger"]
const dc_hero = ["superman", "flash", "Batman"]
marvel_hero.push(dc_hero)
/*console.log(marvel_hero);   output=> [
                                'thor',
                                'Iornman',
                                'spiderman',
                                'Doctor stranger',
                                 [ 'superman', 'flash', 'Batman' ]
//                               ]
//console.log(marvel_hero[3][1]); // output => o
//console.log(dc_hero[2]);        // output => Batman
//console.log(dc_hero[2][2]);     // output => t

const allHero =marvel_hero.concat(dc_hero);
console.log(allHero);                   /* output=> [
                                                 'thor',
                                                 'Iornman',
                                                 'spiderman',
                                                 'Doctor stranger',
                                                 [ 'superman', 'flash', 'Batman' ],
                                                 'superman',
                                                 'flash',
                                                 'Batman'
                                                ]*/



/*
const all_new_hero = [...marvel_hero,...dc_hero];
console.log(all_new_hero);                              /*[
                                                           'thor',
                                                           'Iornman',
                                                           'spiderman',
                                                           'Doctor stranger',
                                                           [ 'superman', 'flash', 'Batman' ],
                                                           'superman',
                                                           'flash',
                                                           'Batman'
                                                           ] 
*/
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);                                  /*   [
                                                                         1, 2, 3, 4, 5,
                                                                         6, 7, 6, 7, 4,
                                                                         5
                                                                      ]       */

console.log(Array.isArray("Anuj kumar"));      // false
console.log(Array.from("Anuj kumar"));         /*  [
                                                    'A', 'n', 'u', 'j',
                                                   ' ', 'k', 'u', 'm',
                                                   'a', 'r'
                                                    ]

                                                  */


console.log(Array.from({name: "Anuj kumar"})); // interesting   output => []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]