interface Cookies {
  [key: string]: string;
}

const cookies: Cookies = {};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/`;
};

export const updateOrCreateCookie = (
  name: string,
  value: string,
  expires: Date = new Date(Date.now() + 1000 * 60 * 60 * 24)
) => {
  if (expires <= new Date(Date.now())) {
    deleteCookie(name);
    return;
  }
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  cookies[name] = value;
};

export const getCookie = (name: string) => {
  return cookies[name];
};

export const init = () => {
  const rawCookies = document.cookie.split("; ");
  rawCookies.forEach((cookie) => {
    if (cookie === "") return;
    const symbol = cookie.split("=");
    cookies[symbol[0]] = symbol[1];
  });
};
init();
