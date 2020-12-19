import { http, httpForm } from '@/utils/request.js'

// 获取视图配置
export function getViewConfig(params) {
  return http.get(
    'http://jdxz.huojiangame.com:11658/ftsm/viewConfig.php',
    {params}
  )
}

// 获取更新信息
export function getUpdate(params) {
  return http.get(
    'http://jdxz.huojiangame.com:11658/ftsm/update.php',
    {params}
  )
}

// 获取远端选项信息
export function getRemoteOptions(params) {
  return http.get(
    'http://jdxz.huojiangame.com:11658/ftsm/options.php',
    {params}
  )
}

// 登录辅助
export function loginFuzhu(params) {
  return http.get(
    'http://jdxz.huojiangame.com:11658/api/denglu.py',
    {params}
  )
}

// 获取角色信息
export function getRoleInfo(params) {
  return http.get(
    'http://jdxz.huojiangame.com:11658/ftsm/get_role_info.php',
    {params}
  )
}

// 获取配置信息
export function getConfigInfo(params) {
  return http.get(
    'http://jdxz.huojiangame.com:11658/ftsm/get_role_settings.php',
    {params}
  )
}

// 修改配置信息
export function changeConfigInfo(data) {
  return http.post(
    'http://jdxz.huojiangame.com:11658/ftsm/change_settings.php',
    data
  )
}

export function getDescription(params) {
  return http.get(
    'http://jdxz.huojiangame.com:11658/ftsm/description.php',
    {params}
  )
}

export function getHelp(params) {
  return http.get(
    'http://jdxz.huojiangame.com:11658/ftsm/help_info.php',
    {params}
  )
}

export function getGonglue(params) {
  return http.get(
    'http://jdxz.huojiangame.com:11658/ftsm/gonglue.php',
    {params}
  )
}

export function startGuaji(params) {
  return http.get(
    'http://jdxz.huojiangame.com:11658/ftsm/start.php',
    {params}
  )
}

export function stopGuaji(params) {
  return http.get(
    'http://jdxz.huojiangame.com:11658/ftsm/stop.php',
    {params}
  )
}

export function getUtils(params) {
  return http.get(
    'http://jdxz.huojiangame.com:11658/ftsm/utils.php',
    {params}
  )
}

// 转移时间
export function transferTime(data) {
  return httpForm.post(
    'http://jdxz.huojiangame.com:11658/ftsm/transfer_time.php',
    data
  )
}

