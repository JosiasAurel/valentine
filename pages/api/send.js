const mailer = require("nodemailer")
const smtp = require("nodemailer-smtp-transport")

let transporter = mailer.createTransport(smtp(
    {
    service: "gmail",
    auth: {
        user: "skisnippet@gmail.com",
        pass: "snippetboyo500"
    }
}
))


module.exports = (req, res) => {
    const msg = req.body

    let mail = {
    from: "skisnippet@gmail.com",
    to: "ndjosiasaurel@gmail.com",
    subject: "Valentine",
    text: String(msg)
}
 transporter.sendMail(mail, function(err, data) {
    if (err) console.log(err)
    console.log("Sent")
})
    console.log(msg)
}