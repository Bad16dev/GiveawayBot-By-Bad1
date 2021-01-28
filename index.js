const express = require("express");
const app = express();
///////////Bad - بدرو
app.listen(() => console.log("Bad Ro Start Now"));
app.listen(() => console.log("Dev Server : https://discord.gg/D2mMz7KQjS"));
app.use('/ping', (req, res) => {
  res.send(new Date());
});
///////////Bad - بدرو
const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

/////////////////


var prefix = "-"//برفكس لي تبيه///////////Bad - بدرو
var id = "460187505493409835"//ايديك///////////Bad - بدرو

////////////////////////////////Bad - بدرو
///////////Bad - بدرو
client.on('ready', () => {///////////Bad - بدرو
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Servers! [ " ${client.guilds.size} " ]         `);
  console.log(`Users! [ " ${client.users.size} " ]             `);
  console.log(`Channels! [ " ${client.channels.size} " ]       `);
  client.user.setStatus("online");///////////Bad - بدرو
    client.user.setActivity("");///////////Bad - بدرو
});///////////Bad - بدرو



client.login(process.env.token);
