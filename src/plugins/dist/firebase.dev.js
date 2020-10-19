"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functions = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  apiKey: "xxxxxx",
  authDomain: "xxxxxx.firebaseapp.com",
  databaseURL: "xxxxxx.firebaseio.com",
  projectId: "xxxxxx",
  storageBucket: "xxxxxx.appspot.com",
  messagingSenderId: "xxxxxx"
};

_firebase["default"].initializeApp(config);

var functions = _firebase["default"].functions();

exports.functions = functions;