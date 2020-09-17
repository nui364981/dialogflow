const region = 'asia-northeast1';
const runtimeOpts = {
    timeoutSeconds: 10,
    memory: "2GB"
};

const functions = require('firebase-functions');
const request = require("request-promise");
const querystring = require('querystring');
const admin = require('firebase-admin');

let LINE_HEADER;
const LINE_OAUTH_API = "https://api.line.me/v2/oauth";
const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";

const CHANNEL_ID = "YOUR-CHANNEL-ID";
const CHANNEL_SECRET = "YOUR-CHANNEL-SECRET";

admin.initializeApp();
