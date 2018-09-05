const inquirer = require('inquirer');
const moment = require('moment');
const MenuController = require('./controllers/MenuController');
const menu = new MenuController();

menu.clear();
menu.main();
