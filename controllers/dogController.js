import userService from './dogService';

const createDogControllerFn = async (req,res) =>
{
    try{
        console.log(req.body);
        const status = await dogServive.createDogControllerFn(req,body);
        console.log(status);

        if(status) {
            res.send({"status": true, "message": "Account created successfully"});
        } else {
            res.send({"status": false, "message": "Error !"})
        }
    }
    catch(err)
{
    console.log(err);
}
}


export default { createDogControllerFn };
