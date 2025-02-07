"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject");
const pet_1 = require("../models/pet");
const home = (req, res) => {
    let list = pet_1.Pet.getAll();
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = pet_1.Pet.getFromType('dog');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('dog'),
        banner: {
            title: 'Cahorros',
            background: 'banner_dog.jpg'
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = pet_1.Pet.getFromType('cat');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = pet_1.Pet.getFromType('fish');
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
};
exports.fishes = fishes;
