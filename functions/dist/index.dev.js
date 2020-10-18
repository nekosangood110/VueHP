"use strict";

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
var functions = require("firebase-functions");

var nodemailer = require("nodemailer");

var gmailEmail = functions.config().gmail.email;
var gmailPassword = functions.config().gmail.password;
var adminEmail = functions.config().admin.email; // 送信に使用するメールサーバーの設定

var mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
}); // 管理者用のメールテンプレート

var adminContents = function adminContents(data) {
  return "\u4EE5\u4E0B\u5185\u5BB9\u3067\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8\u3088\u308A\u304A\u554F\u3044\u5408\u308F\u305B\u3092\u53D7\u3051\u307E\u3057\u305F\u3002\n\n\u304A\u540D\u524D\uFF1A\n".concat(data.name, "\n\n\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\uFF1A\n").concat(data.email, "\n\n\u5185\u5BB9\uFF1A\n").concat(data.contents, "\n");
};

exports.sendMail = functions.https.onCall(function _callee(data, context) {
  var adminMail;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // メール設定
          adminMail = {
            from: gmailEmail,
            to: adminEmail,
            subject: "ホームページお問い合わせ",
            text: adminContents(data)
          }; // 管理者へのメール送信

          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(mailTransport.sendMail(adminMail));

        case 4:
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](1);
          console.error("send failed. ".concat(_context.t0));
          throw new functions.https.HttpsError('internal', 'send failed');

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 6]]);
});