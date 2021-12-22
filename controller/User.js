import { getUserdetails } from "../model/UserModel.js";

export const showUsers = (req, res) => {
    const username = req.params.username;
    const password = req.params.password;
    getUserdetails(username, password, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}