const router = require("express").Router();
const { User } = require("../../db")
const CryptoJS = require("crypto-js");


//REGISTER
router.post("/", async (req, res) => {


    try {
        const { username, name, last_name, email, password, img } = req.body;

        const newUser = await User.create({
            username,
            name,
            last_name,
            email,
            img,
            password: CryptoJS.AES.encrypt(
                password,
                process.env.PASS_SEC
            ).toString(),

        })

        res.send({ newUser })
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }



    /*   try {
          const { username, name, last_name, email, password, img, } = req.body;
          const newUser = await User.create({
              username,
              name,
              last_name,
              email,
              img,
              password
          })
  
          console.log(newUser);
          res.status(200).send(newUser);
      } catch (error) {
          console.log(error)
          res.status(500).send(error)
      }
  */
})

module.exports = router;