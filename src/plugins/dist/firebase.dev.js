"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functions = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  apiKey: "AIzaSyByUpy1OLNglpXhVlDCIg_ywiEKbdtXXdY",
  authDomain: "my-vue-contact.firebaseapp.com",
  databaseURL: "https://my-vue-contact.firebaseio.com",
  projectId: "my-vue-contact",
  storageBucket: "my-vue-contact.appspot.com",
  messagingSenderId: "G-EZVWN39VX2"
};

_firebase["default"].initializeApp(config);

var functions = _firebase["default"].functions();

exports.functions = functions;