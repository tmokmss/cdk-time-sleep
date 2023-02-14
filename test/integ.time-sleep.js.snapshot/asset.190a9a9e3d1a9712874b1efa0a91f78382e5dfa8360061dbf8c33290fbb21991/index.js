"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var lambda_exports = {};
__export(lambda_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(lambda_exports);
var import_promises = require("timers/promises");
var handler = async (event, context) => {
  try {
    switch (event.RequestType) {
      case "Create":
        await (0, import_promises.setTimeout)(event.ResourceProperties.createDurationSeconds * 1e3);
        break;
      case "Update":
        break;
      case "Delete":
        await (0, import_promises.setTimeout)(event.ResourceProperties.destroyDurationSeconds * 1e3);
        break;
    }
    await sendStatus("SUCCESS", event, context);
  } catch (e) {
    console.log(e);
    const err = e;
    await sendStatus("FAILED", event, context, err.message);
  }
};
var sendStatus = async (status, event, context, reason) => {
  const responseBody = JSON.stringify({
    Status: status,
    Reason: reason ?? "See the details in CloudWatch Log Stream: " + context.logStreamName,
    PhysicalResourceId: context.logStreamName,
    StackId: event.StackId,
    RequestId: event.RequestId,
    LogicalResourceId: event.LogicalResourceId,
    NoEcho: false,
    Data: {}
  });
  await fetch(event.ResponseURL, {
    method: "PUT",
    body: responseBody,
    headers: {
      "Content-Type": "",
      "Content-Length": responseBody.length.toString()
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
