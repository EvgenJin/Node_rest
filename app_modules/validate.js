module.exports.validate = function(par,par_name,args) {
    // required, not null
    if (args.includes('required')) {
        if (par == null || par === undefined) {
            return 'параметр ' + par_name +' не указан'
        }
    }
    // only numbers
    if (args.includes('number')) {
        if (!Number.isInteger(par)) {
            return 'параметр ' + par_name + ' должен быть числом'
        }
    }
    // only string
    if (args.includes('string')){
        if (typeof(par) !== 'string') {
            return 'параметр '+par_name + ' должен быть строкой'
        }
    }
    // only latin symbols 
    if (args.includes('latin')) {
        if (typeof(par) !== 'string') {
            return 'параметр '+par_name + ' должен быть строкой'
        }
            else if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]*$/.test(par)) {
                return 'параметр '+ par_name + 'введен не корректно'
            }
    }
    // if all checks passed
    return null;
}
