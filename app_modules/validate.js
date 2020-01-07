module.exports.validate = function(par,par_name,args) {
    // обязательно к заполнению
    if (args.includes('required')) {
        if (par == null || par === undefined) {
            return 'параметр ' + par_name +' не указан'
        }
    }
    // только числа
    if (args.includes('number')) {
        if (!Number.isInteger(par)) {
            return 'параметр ' + par_name + ' должен быть числом'
        }
    }
    // только строка
    if (args.includes('string')){
        if (typeof(par) !== 'string') {
            return 'параметр '+par_name + ' должен быть строкой'
        }
    }
    // латинские символы и точка
    if (args.includes('latin')) {
        if (typeof(par) !== 'string') {
            return 'параметр '+par_name + ' должен быть строкой'
        }
            else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*$/.test(par)) {
                return 'параметр '+ par_name + 'введен не корректно'
            }
    }
    return null;
}
