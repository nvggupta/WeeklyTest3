const userAuthenticate =(req ,res , next)=>{
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).send({ "error": "invalid input" });
        return;
    }
    next();
}

export default userAuthenticate