const Menu = require("../Model/menuDB");

exports.getMenubyRestaurantId = (req, res) => {
    const {resId} = req.params;

    Menu.find({restaurantId: resId})
        .then(response => {
            res.status(200).json({
                message: "Menu Fetched Successfully",
                menuItem: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
}
