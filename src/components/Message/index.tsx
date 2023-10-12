// @ts-nocheck
import { getI18n } from 'react-i18next';

import { message } from 'antd';

export default function showMessage(msgType, msgContent, objValue?: any) {
  if (typeof document === 'undefined') {
    return;
  }
  message.config({
    maxCount: 1,
  });

  let fieldMsg;
  if (objValue) {
    const key = (Object.keys(objValue) || [])[0];
    const val = objValue[key];
    fieldMsg = {
      [key]: getI18n()?.t(val),
    };
  }

  if (msgContent) {
    message[msgType]({
      content: getI18n()?.t(msgContent, fieldMsg) || msgContent,
      className: 'event-message',
      duration: 3,
      maxCount: 1,
    });
  }
}
