// import { readFile, writeFile } from 'node:fs';
import fs from "fs/promises";

// readFile('names.txt', 'utf8', (err, names) => {
//     if (err) throw err;
//     let namesArr = names.split("\n");
//     readFile('places.txt', 'utf8', (err, places) => {
//         if (err) throw err;
//         let placeArr = places.split("\n")
//         let combainesArr = [];
//         for (let i = 0; i < namesArr.length; i++) {
//             combainesArr.push(`${namesArr[i]},${placeArr[i]}`)
//         }
//         let data = combainesArr.join("\n")
//         writeFile('output.txt', data, (err) => {
//             if (err) throw err;
//             console.log('The file has been saved!');
//         });


//     });

// });

let combainesArr = [];
Promise.all([
    fs.readFile("names.txt", "utf8"),
    fs.readFile('places.txt', "utf8")
]).then((arr) => {
    const [names, places] = arr;
    let namesArr = names.split("\n")
    let placesArr = places.split("\n");
    for (let i = 0; i < namesArr.length; i++) {
        combainesArr.push(`${namesArr[i]},${placesArr[i]}`)
    }
    let data = combainesArr.join("\n");
    return fs.writeFile('output.txt', data)
}).then(() => {
    console.log('The file has been saved!');
})



