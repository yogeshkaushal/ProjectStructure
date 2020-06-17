export default {
    strings: {
        // server urls example
        base_url: 'https://google.com',

        // regular Expressions
        regExEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        nameRegEx: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
        numericRegEx: /\d/,
        specialCharRegEx: /[^a-zA-Z ]/,

        // errors
        error_field_empty: "This feild is required.",
        error_numbers_only: "Please enter numeric values only.",
        error_internet_connection:'Something not Right. Please check your internet connection.',
        error_empty_email:'Please enter Email',
        error_invalid_email:'Email is invalid'
        //fonts

        //default images
    }
}