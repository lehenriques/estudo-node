import User from '../models/User';

class SessionController{
    async store(req, res){
        const {name} = req.body;
        const {email} = req.body;
        const {password} = req.body;

        let user = await User.findOne({email});

        if(!user){
            user = await User.create({name, email, password});
        }

        return res.json(user);
    }
}

export default new SessionController();