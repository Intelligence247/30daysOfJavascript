const webTechsExercise = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
// 19.Slice out the middle IT company or companies from the array
let rslice = webTechsExercise.slice(4, -4)
console.log(rslice)
console.log(webTechsExercise)
// 21.Remove the middle IT company or companies from the array

let r = webTechsExercise.splice(1, 4,)
console.log(r)
console.log(webTechsExercise)
// 5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechsConfirm = webTechsExercise.includes('Sass');
let addSass = webTechsExercise.push('Sass');
if (webTechsConfirm) {
    console.log(`Sass is a CSS preprocess`);
} else {
    console.log(`${webTechsExercise}`)
}
// let removemiddle = webTechsExercise



const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months)