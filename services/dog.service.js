const dogModel = reuire('./dogModel');
const key = '';
const encryptor = require('simple-encryptor')(key);

module.exports.createDogDBService = (dogDetails) => {

    return new Promise(function myFn(resolve, reject) {

        const dogModelData = new dogModel();

        dogModelData.firstname = dogDetails.firstname;
        dogModelData.lastname = dogDetails.lastname;
        dogModelData.email = dogDetails.email;
        dogModelData.password = dogDetails.password;
        const encrypted = encryptor.encrypt(dogDetails.password);
        dogModelData.password = encrypted;

        dogModelData.save(function resultHanddle(error, result){

            if(error){
                reject(false);
            }else{
                resolve(true);
            }
        });
      
}); 