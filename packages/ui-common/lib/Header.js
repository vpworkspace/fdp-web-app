"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;

var _react = _interopRequireDefault(require("react"));

require("./WebApp.css");

var _natwest = _interopRequireDefault(require("./natwest.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Header() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rowCHeader"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _natwest["default"],
    className: "App-logo",
    alt: "logo"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "App"
  }, "Flex Debt Planner"));
}