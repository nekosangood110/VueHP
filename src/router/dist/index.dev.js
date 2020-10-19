"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("@/components/Home"));

var _Contact = _interopRequireDefault(require("@/components/Contact"));

var _Profile = _interopRequireDefault(require("@/components/Profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { component } from 'vue/types/umd'
_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  mode: 'history',
  routes: [{
    path: '/profile',
    component: _Profile["default"],
    name: 'Profile'
  }, {
    path: '/contact',
    component: _Contact["default"],
    name: 'Contact'
  }, {
    path: '/',
    component: _Home["default"],
    name: 'Home'
  }]
});

exports["default"] = _default;