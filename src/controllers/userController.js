import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join"});
export const postJoin = async (req, res) => {
    const {name, username, email, password, password2, location} = req.body;
    const exists = await User.exists({ $or: [{username }, {email}] });
    const pageTitle = "Join";
    if (exists) {
        return res.render("join", {
            pageTitle,
            errorMessage: "This username/email is already taken.",
        });
    };
    if (password !== password2) {
        return res. render("join", {
            pageTitle,
            errorMessage: "Password comfirmation does not match",
        });
    };
    await User.create({
        name,
        username,
        email,
        password,
        password2,
        location,
    });
    return res.redirect("/login");
};
export const edit = (req, res) => res.send("Edit user");
export const remove = (req, res) => res.send("Remove user");
export const login = (req, res) => res.send("Log in");
export const logout = (req, res) => res.send("Log out")
export const see = (req, res) => res.send("See user")