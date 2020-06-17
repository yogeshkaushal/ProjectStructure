import NetInfo from '@react-native-community/netinfo';
import { Platform } from 'react-native';
import Config from './Config';
import { Log } from './Logger';

export const executePostRequest = async (
  endpoint,
  paramsObject,
  token,
  isUrlEncoded = false,
) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        status: {
          code: 400,
          message: [{ error: Config.strings.error_internet_connection }],
        },
      };
    }
    Log(Config.strings.base_url + '/' + endpoint, 'endpoint');
    let formBody = isUrlEncoded ? encodeParamsObject(paramsObject) : [];
    Log(JSON.stringify(paramsObject), '<===form');
    const res = await fetch(`${Config.strings.base_url}/${endpoint}`, {
      method: 'POST',
      headers: getAPIHeader(token, isUrlEncoded),
      body: isUrlEncoded ? formBody : JSON.stringify(paramsObject),
    });
    const response = await res.json();
    console.log(endpoint, response);
    return response;
  } catch (error) {
    console.log(endpoint, error);
  }
};

export const executePutRequest = async (
  endpoint,
  paramsObject,
  token,
  isUrlEncoded = false,
) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        status: {
          code: 400,
          message: [{ error: Config.strings.error_internet_connection }],
        },
      };
    }
    Log(Config.strings.base_url + '/' + endpoint, 'endpoint');
    let formBody = isUrlEncoded ? encodeParamsObject(paramsObject) : [];
    Log(JSON.stringify(paramsObject), '<===form');
    const res = await fetch(`${Config.strings.base_url}/${endpoint}`, {
      method: 'PUT',
      headers: getAPIHeader(token, isUrlEncoded),
      body: isUrlEncoded ? formBody : JSON.stringify(paramsObject),
    });
    const response = await res.json();
    console.log(endpoint, response);
    return response;
  } catch (error) {
    console.log(endpoint, error);
  }
};

export const executeGetRequest = async (endpoint, token) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        status: {
          code: 400,
          message: [{ error: Config.strings.error_internet_connection }],
        },
      };
    }
    Log(Config.strings.base_url + '/' + endpoint, 'endpoint');
    const res = await fetch(`${Config.strings.base_url}/${endpoint}`, {
      method: 'GET',
      headers: getAPIHeader(token),
    });
    const response = await res.json();
    console.log(endpoint, response);
    return response;
  } catch (err) {
    console.log(endpoint, err);
  }
};

export const executePatchRequest = async (endpoint, paramsObject, token) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        status: {
          code: 400,
          message: [{ error: Config.strings.error_internet_connection }],
        },
      };
    }
    const res = await fetch(`${Config.strings.base_url}/${endpoint}`, {
      method: 'PATCH',
      body: paramsObject ? JSON.stringify(paramsObject) : undefined,
      headers: getAPIHeader(token),
    });
    const response = await res.json();
    console.log(endpoint, response);
    return response;
  } catch (err) {
    console.log(endpoint, err);
  }
};

export const executeDeleteRequest = async (endpoint, paramsObject, token) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        status: {
          code: 400,
          message: [{ error: Config.strings.error_internet_connection }],
        },
      };
    }
    const res = await fetch(`${Config.strings.base_url}/${endpoint}`, {
      method: 'DELETE',
      body: paramsObject ? JSON.stringify(paramsObject) : undefined,
      headers: getAPIHeader(token),
    });
    const response = await res.json();
    console.log(endpoint, response);
    return response;
  } catch (err) {
    console.log(endpoint, err);
  }
};

const getAPIHeader = (token, isUrlEncoded) => {
  return {
    Accept: 'application/json',
    'Content-Type': isUrlEncoded
      ? 'application/x-www-form-urlencoded'
      : 'application/json',
    authorization: token ? 'Bearer ' + token : '',
  };
};

const encodeParamsObject = paramsObject => {
  let formBody = [];
  for (var property in paramsObject) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(paramsObject[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
};

export const uploadImageAPI = async (endpointAPI, imageFile, token) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        status: {
          code: 400,
          message: [{ error: Config.strings.error_internet_connection }],
        },
      };
    }
    Log(imageFile, '<===hereeee');
    const data = new FormData();
    const extension = imageFile.path.split('.').pop();
    const obj = {
      name: 'profilePic.' + extension,
      type: imageFile.mime,
      uri:
        Platform.OS === 'android'
          ? imageFile.path
          : imageFile.path.replace('file://', ''),
    };

    data.append('file', obj);
    const endpoint = Config.strings.base_url + endpointAPI;
    Log(endpoint, '<===hereeee');
    const res = await fetch(endpoint, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        authorization: token !== undefined ? 'Bearer ' + token : '',
      },
    });
    const response = await res.json();
    console.log(endpointAPI, response);
    return response;
  } catch (err) {
    console.log(endpointAPI, err);
  }
};

export const uploadDocAPI = async (endpointAPI, file, token) => {
  try {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      return {
        status: {
          code: 400,
          message: [{ error: Config.strings.error_internet_connection }],
        },
      };
    }
    Log(file, '<===hereeee');
    const data = new FormData();
    const extension = file.path.split('.').pop();
    const obj = {
      name: 'doc.' + extension,
      type: 'doc/pdf',
      uri:
        Platform.OS === 'android'
          ? file.path
          : file.path.replace('file://', ''),
    };

    data.append('file', obj);
    const endpoint = Config.strings.base_url + endpointAPI;
    Log(endpoint, '<===hereeee');
    const res = await fetch(endpoint, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        authorization: token !== undefined ? 'Bearer ' + token : '',
      },
    });
    const response = await res.json();
    console.log(endpointAPI, response);
    return response;
  } catch (err) {
    console.log(endpointAPI, err);
  }
};
