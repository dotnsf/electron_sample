'use strict';

var electron = require( 'electron' );
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow;

app.on( 'window-all-closed', function(){
  if( process.platform != 'darwin' ){
    app.quit();
  }
});

app.on( 'ready', function(){
  mainWindow = new BrowserWindow( { width: 800, height: 600 } );
  mainWindow.loadURL( 'file://' + __dirname + '/index.html' );

  mainWindow.on( 'closed', function(){
    mainWindow = null;
  });
});


