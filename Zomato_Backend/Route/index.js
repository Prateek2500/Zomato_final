const express = require("express");
const locationController = require("../Controller/location");
const restaurantController = require("../Controller/restaurant");
const mealtypeController = require("../Controller/mealtype");
const userController = require("../Controller/user");
const menuController = require("../Controller/menu")

const route = express.Router();

route.get('/location', locationController.getLocation);
route.get('/rest/:locId', restaurantController.getRestaurantByLocationId);
route.get('/restaurants/:id', restaurantController.getRestaurantById);
route.get('/mealtype', mealtypeController.getMealtype);
route.post('/signup', userController.postSignup);
route.post('/login', userController.postLogin);
route.get('/menu/:resId', menuController.getMenubyRestaurantId);

//Filter

route.get('/restaurant', restaurantController.getRestaurant);
route.post('/filter', restaurantController.filteredRestaurant);
route.get('/meal/:mealId', mealtypeController.getMealtypeById);



module.exports = route;