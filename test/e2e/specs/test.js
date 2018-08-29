// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .assert.visible('input[id=student-number]')//判断学号输入框是否存在
      .assert.visible('input[id=password]')//判断密码输入框是否存在
      .setValue("input[id=student-number]","2015118004")//输入学号
      .setValue('input[id=__BVID__29]', "agreementsChecked: true");//勾选同意软件使用条款
      browser.expect.element('#__BVID__29').to.be.selected;//判断是否勾选到同意软件使用条款
      browser.click('button[id=loginBtn]');//点击登录
  }
}
