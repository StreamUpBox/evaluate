"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_electron_titlebar_1 = require("custom-electron-titlebar");
const app = require("electron");
new custom_electron_titlebar_1.Titlebar({
    backgroundColor: custom_electron_titlebar_1.Color.WHITE,
    icon: './favicon.svg',
    shadow: true
});

//customTitlebar.updateTitle('Flipper - version:' +app.getVersion());