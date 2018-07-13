const host = "192.168.4.1";

export async function requestDeviceId() {
  let data = await rpcCall("Device.Id");
  let deviceId = data['device_id'];
  return deviceId;
}

export async function requestSetOwner(ownerId) {
  await rpcCall("Device.Owner", {owner_id: ownerId})
  console.log("set owner to",ownerId);
}

export async function requestWifiList() {
  const data = await rpcCall("Wifi.Scan");
  const wifiList = data["results"];
  const wifiListLength = wifiList.length;
  const filteredWifiList = [];

  // 나중에는 auth level이 5여도 처리되게 해야함
  for (let i = 0; i < wifiListLength; i++) {
    console.log("wifi is",wifiList[i])
    if (wifiList[i].auth != 5) {
      filteredWifiList.push(wifiList[i])
    }
  }

  return filteredWifiList;
}

export async function requestSsidList() {
  const data = await rpcCall("Wifi.Scan");
  const wifiList = data["results"];
  const wifiListLength = wifiList.length;
  const filteredSsidList = [];

  // 나중에는 auth level이 5여도 처리되게 해야함
  for (let i = 0; i < wifiListLength; i++) {
    console.log("wifi is",wifiList[i])
    if (wifiList[i].auth != 5) {
      filteredSsidList.push(wifiList[i].ssid)
    }
  }

  return filteredSsidList;
}

export async function asyncConnectWifi(ssid, password='') {
  console.log("ConnectWifi:",ssid);
  await requestSetWifi(ssid, password);
  await saveConfig();
  await timeout(2000);
  let error = null
  for (let i = 0; i < 10; i++) {
    try {
      let connected = await requestIsWifiConnected();
      if (connected) {
        await handleWifiConnected();
        return;
      }
    } catch(err) {
      error = err;
      console.log(error);
    }
    await timeout(1000)
  }
}

export async function requestSetWifi(ssid, password='') {
  console.log("need to connect to wifi ",ssid,"with password",password);
  const params = {
    "ssid": ssid,
    "pw": password
  }
  return await rpcCall("Wifi", params);
}

export async function requestIsWifiConnected() {
  let reps = await rpcCall("Sys.GetInfo");
  console.log(reps);
  if (reps["wifi"]["sta_ip"].length > 6) {
    console.log("Wifi is connected")
    return true;
  }
  console.log("Wifi is not connected")
  return false;
}

export async function handleWifiConnected() {
  requestSetSoftAp(false);

}

export async function requestSetSoftAp(enable) {
  await rpcCall("softApDisable", {});
}

export async function saveConfig() {
  await rpcCall("Config.Save", {reboot: true});
}

export async function rpcCall(name, params={}) {
  console.log("inside rpc call")
  try {
    let response = await fetch(
      'http://'+host+'/rpc/'+name, {
        method: 'POST',
        body: JSON.stringify(params)
      }
    );
    console.log('awaiting response');
    let responseJson = await response.json();
    console.log("response JSON is",responseJson);
    return responseJson;
  } catch (error) {
    console.log(error);
  }
}

function timeout(ms) {
  console.log("waiting for",ms,"ms");
  return new Promise(resolve => setTimeout(resolve, ms));
}