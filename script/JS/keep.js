/*
 * https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/keep.js

*******************************

[Script]
keep = type=http-response, requires-body=true, max-size=-1, timeout=60, pattern=^https:\/\/api\.gotokeep\.com, script-path=keep.js

[MITM]
hostname = %APPEND% api.gotokeep.com

*******************************

*/

body = $response['body']['replace'](/\"memberStatus":\d+/g, '"memberStatus":1')['replace'](/\"buttonText":".*?"/g, '"buttonText":"已永久"')['replace'](/\"hasPaid\":\w+/g, '"hasPaid":true')['replace'](/\"downLoadAll\":\w+/g, '"downLoadAll":true')['replace'](/\"videoTime\":\d+/g, '"videoTime":3000')['replace'](/\"startEnable\":\w+/g, '"startEnable":true')['replace'](/\"memberStatus\":\d+/g, '"memberStatus":1')['replace'](/\"preview\":\w+/g, '"preview":true')['replace'](/\"errorCode\":\d+/g, '"errorCode":0')['replace'](/\"status\":\w+/g, '"status":true');
var obj = {};
obj['body'] = body;
$done(obj);