import db from "../config/database.js";

const genEncPassword = (Oripassword) => {
    let mCode = "62032299487305311";
    let istr2 = "";
    let strEncode = "";
    let x2 = 0;
    console.log(Oripassword);
    for(var i=1; i< Oripassword.length; i++)
    {
        x2 = i % (mCode).Length;
        if (x2 == 0)
        {
            x2 = (mCode).Length;
        }
        //istr2 = chr(ord(substr(message,i-1,1)) + ord(substr(mCode,x2-1,1)));
        let a = oriPassword.Substring(i - 1, 1);
        let b = mCode.Substring(x2 - 1, 1);

        istr2 = ord(a) + ord(b);
        strEncode = istr2 + strEncode;
    }
    return strEncode;
}

export const getUserdetails = (user, pw, result) => {
        const pwEnc = genEncPassword(pw);
        db.query("SELECT * FROM map_fiber.cdi_admin_user_info WHERE PW_ENC = ?", [pwEnc], (err, results) => {             
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(err, results[0]);
            }
        });   
    }