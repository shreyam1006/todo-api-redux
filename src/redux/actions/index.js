export const storeLoginEmail = (email) => {
  return {
    type: "STORE_LOGIN_EMAIL",
    payload: email
  }
}

export const storeLoginPassword = (password) => {
  return {
    type: "STORE_LOGIN_PASSWORD",
    payload: password
  }
}

export const storeRegisterEmail = (email) => {
  return {
    type: "STORE_REGISTER_EMAIL",
    payload: email
  }
}

export const storeRegisterPassword = (password) => {
  return {
    type: "STORE_REGISTER_PASSWORD",
    payload: password
  }
}

export const storeRegisterName = (name) => {
  return {
    type: "STORE_REGISTER_NAME",
    payload: name
  }
}

export const storeRegisterAge = (age) => {
  return {
    type: "STORE_REGISTER_AGE",
    payload: age
  }
}


