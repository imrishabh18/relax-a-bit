#!/usr/bin/env node

const brightness = require('brightness');
const syncExec = require('sync-exec');

const command = process.argv.slice(2).join(' ');
// console.log(command)

var initialBrightness

brightness.get().then(level => {
	initialBrightness = level
    brightness.set(0.05)
    syncExec(command, {stdio: [0, 1, 2]})
});


const restoreBrightness = () => {
    brightness.set(initialBrightness)
    process.exit()
};

process.on('exit',restoreBrightness);