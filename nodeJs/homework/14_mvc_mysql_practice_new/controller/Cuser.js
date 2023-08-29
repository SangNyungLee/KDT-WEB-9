// const User = require('../model/User');
import * as User from '../model/User.js'    //묶어서 보냄 * as

// 원래 이거였음
// exports.index = (req, res) => {
//     res.render('index');
// };

//ES6 형태로 바꾼거
export const index = (req, res) => {
    res.render('index');
};

export const signup = (req, res) => {
    res.render('signup');
};
// export const post_signup = (req, res) => {
//     //model
//     User.post_signup(req.body, () => {
//         res.send({ result: true });
//     });
// };

export const post_signup = async (req, res) => {
    try {
        await User.post_signup(req.body)
        res.send({result : true});
    } catch (error) {
        console.log(error)
    }
};

export const signin = (req, res) => {
    res.render('signin');
};

// export const post_signin = (req, res) => {
//     //model
//     User.post_signin(req.body, (result) => {
//         if (result.length > 0) {
//             res.send({ result: true, data: result[0] });
//         } else {
//             res.send({ result: false, data: null });
//         }
//     });
// };

export const post_signin = async (req,res) =>{
    try {
        const result = await User.post_signin(req.body)
        if (result.length > 0) {
            res.send({ result: true, data: result[0] });
        } else {
            res.send({ result: false, data: null });
        }
    } catch (error) {
        console.log(error)
    }
}


// export const post_profile = (req, res) => {
//     User.post_profile(req.body, (result) => {
//         if (result.length > 0) {
//             res.render('profile', { data: result[0] });
//         }
//     });
// };

export const post_profile = async(req, res)=>{
    try {
        const result = await User.post_profile(req.body)
        res.render('profile', {data: result[0]});
    } catch (error) {
        console.log(error)
    }
}

// export const edit_profile = (req, res) => {
//     User.edit_profile(req.body, () => {
//         res.send({ result: true });
//     });
// };

export const edit_profile = async(req, res) =>{
    try {
        await User.edit_profile(req.body);
        res.send({result : true})
    } catch (error) {
        console.log(error);
    }
}
// export const delete_profile = (req, res) => {
//     User.delete_profile(req.body.id, () => {
//         res.send({ result: true });
//     });
// };

export const delete_profile = async(req,res) =>{
    try {
        await User.delete_profile(req.body.id);
        res.send({result : true});
    } catch (error) {
        console.log(error);
    }
}