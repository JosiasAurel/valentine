module.exports = (req, res) => {
    const msg = req.body
    console.log(msg)
    res.send(msg)
}