const axios = require("axios");

module.exports.sendDispatchSMS = (
  number,
  orderId,
  trackingID,
  link,
  DeleiveryProvider
) => {
  return axios.get(
    `
    http://sms.text91msg.com/http-tokenkeyapi.php?authentic-key=353854484550414b4b493438391669709485&senderid=TPAKII&route=3&number=${number}&message=Great News! Your Order ${orderId} is on the way. Track your shipment to see the delivery status ${DeleiveryProvider} ${trackingID} ! MOFFA&templateid=1707168984129273047 `
  );
};

module.exports.sendOTP = async (number, otp) => {
  return axios.get(
    `http://sms.text91msg.com/http-tokenkeyapi.php?authentic-key=353854484550414b4b493438391669709485&senderid=TPAKII&route=3&number=${number}&message=Your OTP is ${otp} for Login. Do not share your OTP with anyone. This OTP will be valid only for the next 5 Minutes. Regards MOFFA&templateid=1707168983398332660`
  );
};

module.exports.sendOrderPlacedSMS = (id, number) => {
  return axios.get(
    `http://sms.text91msg.com/http-tokenkeyapi.php?authentic-key=353854484550414b4b493438391669709485&senderid=TPAKII&route=3&number=${number}&message=Thanks for shopping with us! Your Order ${id} is confirmed and will be shipped shortly. Check your status here: https://thepaaki.com Regards MOFFA&templateid=1707168983395683325`
  );
};
