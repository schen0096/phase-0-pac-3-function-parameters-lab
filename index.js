// function sayHelloTo(firstName) {
//     console.log(`Hello, ${firstName}!`);
// }

function introduction(name) {
    console.log(`"Hi, my name is ${name}."`);
}

introduction ("Josh");
introduction ("Nancy");

function introductionWithLanguage(name, language) {
    console.log(`"Hi, my name is ${name} and I am learning to program in ${language}."`)
}

introductionWithLanguage("Josh", "Ember.js");
introductionWithLanguage("Nancy","React")

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`"Hi, my name is ${name} and I am learning to program in ${language}."`)
}

introductionWithLanguageOptional("Gracie");

function introductionWithLanguageOptional2(name, language = "Python") {
    console.log(`"Hi, my name is ${name} and I am learning to program in ${language}."`)
}

introductionWithLanguageOptional2("Gracie");