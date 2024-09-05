const ensureAuthenticated = require("../Middlewares/Auth");

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([
        {
            name: "Gagan",
            Phone: "9996892070"
        }
    ])
});

module.exports = router;