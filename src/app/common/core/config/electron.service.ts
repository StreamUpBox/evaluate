import { Injectable } from '@angular/core';
import { ipcRenderer, webFrame, remote, shell } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  shell: typeof shell;
  fs: typeof fs;
 
  get isElectron() {
    return window && window.process && window.process.type;
  }
   viewTitleBar(){
    const customTitlebar = window.require('custom-electron-titlebar');
    return new customTitlebar.Titlebar({
      backgroundColor: customTitlebar.Color.WHITE,
      icon: './assets/logo/icon.ico',
      shadow: false
    });
  }

  constructor() {
    // Conditional imports
    if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;
      this.remote = window.require('electron').remote;

      this.childProcess = window.require('child_process');
      this.shell = window.require('electron').shell;
      this.fs = window.require('fs');
    }
  }
}
