module.exports = (req, res) => {
    //res.render('index')
    req.session.destroy()
    res.redirect("loginForm")
}