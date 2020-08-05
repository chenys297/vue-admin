export function login (loginForm) {
  return new Promise((resolve, reject) => {
    if (loginForm.username === 'admin' && loginForm.password === 'admin') {
      resolve({ ...loginForm, token: 'HFfoc4D84fdfkFsdfK439sfsdjWfojo' })
    } else {
      reject('请使用admin登录')
    }
  })
}

export function logout () {
  return new Promise((resolve, reject) => {
    resolve()
  })
}
