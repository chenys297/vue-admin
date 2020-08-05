
export function login (loginForm) {
  return new Promise((resolve, reject) => {
    if (loginForm.username === 'admin' && loginForm.password === 'admin') {
      resolve({ code: 200, data: { ...loginForm, token: 'HFfoc4D84fdfkFsdfK439sfsdjWfojo' } })
    } else {
      reject({ code: 401, message: '请使用admin登录' })
    }
  })
}
