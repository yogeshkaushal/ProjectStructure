import Config from "./Config";

export const validateEmail = email => {
    const obj = {};
  
    return new Promise((resolve, reject) => {
      if (!email) {
        obj.email = Config.strings.error_empty_email;
      } else if (!obj.email && !Config.strings.regExEmail.test(email)) {
        obj.email = Config.strings.error_invalid_email;
      }
  
      if (Object.keys(obj).length != 0) {
        reject({ validationMessage: obj });
      } else {
        resolve('Email Verified');
      }
    });
  };