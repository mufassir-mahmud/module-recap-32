// function anything(handler,name){
//     handler(name)
// }

// // const name = 'Halim Mama';
// // anything(name)
// // const num = 45;
// // anything(num)
// function handler(name){
//     console.log('Special Function', name);
// }
// anything(handler, 'Mufassir Mahmud')


function anything(handler, name){
    handler(name)
}


function handler(name){
    console.log('Special Person', name );
}
anything(handler, 'Mufassir Mahmud')