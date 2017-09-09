const AdminApi = {
  getUser: function () {
    return new Promise((resolve, reject) => {
      // get from cache
      let user = localStorage.getItem('_user')
      if (user && user.length > 0) {
        try {
          user = JSON.parse(user)
        } catch (e) {
          user = null
        }
      }
      if (user === null) {
        // TODO: find remember info and request
        resolve(null)
      }
      resolve(user)
    })
  },
  login: function (loginInfo) {
    return new Promise((resolve, reject) => {
      //TODO: save in cache, return user, faild throw error
      const user = {
        username: loginInfo.username,
        privileges: ''
      }
      localStorage.setItem('_user', JSON.stringify(user))
      resolve(user)
      //reject("error here!")
    })
  },
  logout: function () {
    return new Promise((resolve, reject) => {
      // TODO: logout request
      localStorage.removeItem('_user')
      resolve()
    })
  }
}

export default AdminApi