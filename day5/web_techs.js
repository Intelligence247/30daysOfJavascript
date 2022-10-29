const webTechsExercise = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
// 5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechsConfirm = webTechsExercise.includes('Sass');
let addSass = webTechsExercise.push('Sass');
if (webTechsConfirm) {
    console.log(`Sass is a CSS preprocess`);
} else {
    console.log(`${webTechsExercise}`)
}
