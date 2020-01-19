export const setApis = payload => ({ type: "set-apis", payload });

export const loadApis = () => ({ type: "load-apis" });

export const loadApisFail = () => ({ type: "load-apis-fail" });
