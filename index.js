function introduction(name) {
    return `Hi, my name is ${name}.`;
}
introduction('Cathy');

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage('Cathy', 'English');

function introductionWithLanguageOptional(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional('Cathy', 'English');

function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}