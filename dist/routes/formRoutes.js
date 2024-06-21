"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formController_1 = require("../controllers/formController");
const router = (0, express_1.Router)();
router.post('/submit', formController_1.submitForm);
router.get('/read', formController_1.readForm);
exports.default = router;
