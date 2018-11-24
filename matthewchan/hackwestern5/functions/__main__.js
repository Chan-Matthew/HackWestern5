const lib = require('lib')({token: 'u9JRrvf8NnMajPmDXq3XNNUyX9iYqhKSiQCIH86Lyb2PHslTabzSV_5vo0BZWnlO'});


/**
 * @param {string} sender The phone number that sent the text to be handled
 * @param {string} receiver The StdLib phone number that received the SMS
 * @param {string} message The contents of the SMS
 * @param {string} createdDatetime Datetime when the SMS was sent
 * @returns {any}
 */
module.exports = async (sender, receiver, message, createdDatetime, context) => {
  let split = message.split(",");
  split[0] = split[0].replace(/ /g,"");
  let result = await lib.messagebird.tel.sms({
      originator: '12262860381',
      recipient: sender,
      body: "pls"
    });
  return result;
};
