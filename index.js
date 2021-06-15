// function sayHelloTo(firstName) {
//     console.log(`Hello, ${firstName}!`);
// }

function introduction(name) {
    return (`Hi, my name is ${name}.`);
}

introduction ("Josh");
introduction ("Nancy");

function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

introductionWithLanguage("Josh", "Ember.js");
introductionWithLanguage("Nancy","React")

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

introductionWithLanguageOptional("Gracie");

function introductionWithLanguageOptional2(name, language = "Python") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

introductionWithLanguageOptional2("Gracie");