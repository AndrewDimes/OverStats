const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const { v4: uuidv4 } = require('uuid');
const S3 = require('aws-sdk/clients/s3');
const s3 = new S3(); // initialize the construcotr
// now s3 can crud on our s3 buckets

module.exports = {
  signup,
  login,
  edit,
  deleteUser
};








function signup(req, res) {

  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////

  // FilePath unique name to be saved to our butckt
  if (req.body.photo === '') {
    console.log('we in')
    req.body.photo = 'https://react.semantic-ui.com/images/wireframe/square-image.png'
    async function createUser() {
      const user = new User({ ...req.body });
      console.log(user)
      try {
        await user.save();
        const token = createJWT(user); // user is the payload so this is the object in our jwt
        res.json({ token });
      } catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
      }
    }
    createUser()
  } else {
    console.log(req.body, 'heree????')
    const filePath = `${uuidv4()}/${req.file.originalname}`
    const params = { Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer };
    //your bucket name goes where collectorcat is 
    //////////////////////////////////////////////////////////////////////////////////
    s3.upload(params, async function (err, data) {
      console.log(data, 'from aws') // data.Location is our photoUrl that exists on aws
      console.log(data.location, 'look right here')
      const user = new User({ ...req.body, photoUrl: data.Location });
      try {
        await user.save();
        const token = createJWT(user); // user is the payload so this is the object in our jwt
        res.json({ token });
      } catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
      }



    })
  }

  //////////////////////////////////////////////////////////////////////////////////

}

function deleteUser(req, res) {
  console.log(req.params.id, 'in controller')
  const user = User.findByIdAndRemove(req.params.id).exec().then(doc => {
    if (!doc) { return res.status(404).end(); }
    return res.status(204).end();
  })
    .catch(err => next(err));



}

async function edit(req, res) {
  console.log('User Id', req.params)
  console.log('body', req.body)
  try {
    const user = await User.findOne({ _id: req.user._id });
    console.log(user, 'user is here')
    user.battletag = req.body.battletag
    user.region = req.body.region
    user.platform = req.body.platform
    await user.save();
    const token = createJWT(user);
    res.json({ token })

  } catch (err) {
    return res.status(400).json(err);
  }




}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user, ' this user in login')
    if (!user) return res.status(401).json({ err: 'bad credentials' });
    // had to update the password from req.body.pw, to req.body password
    user.comparePassword(req.body.password, (err, isMatch) => {

      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: 'bad credentials' });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}


/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    SECRET,
    { expiresIn: '24h' }
  );
}
