const ACCESS_TOKEN = 'ACCESS_TOKEN';
const USER_TYPE = 'USER_TYPE'; 
const DATE_LOGIN = 'DATE_LOGIN';

export default {
    getUserType() {
      return localStorage.getItem(USER_TYPE);
    },
    getAccessToken() {
      return localStorage.getItem(ACCESS_TOKEN);
    },
    setTokens(access, role) {
        localStorage.setItem(ACCESS_TOKEN, access);
        localStorage.setItem(USER_TYPE, role);
        localStorage.setItem(DATE_LOGIN, moment(new Date()).format());
    },
    removeAccessToken() {
        localStorage.removeItem(ACCESS_TOKEN);
      },
      removeDateLogin() {
        localStorage.removeItem(DATE_LOGIN);
      },
      async resetLoginStore() {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(DATE_LOGIN);
        localStorage.removeItem(USER_TYPE);
        localStorage.removeItem('persist:lsd');
    },
    get isAuthenticated() {
        try {
          return !!this.getAccessToken();
        } catch (e) {
          console.log(e);
          return false;
        }
      },    
}  