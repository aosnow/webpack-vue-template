// ------------------------------------------------------------------------------
// name: config.d
// author: 喵大斯( mschool.tech )
// created: 2019/8/23
// ------------------------------------------------------------------------------

export declare const Config:{
  // ----------------------------------------
  // 平台配置
  // ----------------------------------------

  /**
   * 平台识别编码
   */
  invoke_source:number,

  /**
   * 应用的唯一识别码，用于支持缓存数据的独立作用域
   */
  unique:string,

  // ----------------------------------------
  // 通信配置
  // ----------------------------------------

  http:{
    /**
     * `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
     * 该参数将作为请求时的默认前缀
     * 当局域网环境时，将通过 vue-cli 中的 proxyTable 配置来识别 '/api' 进行跨域
     * 当服务器环境时，通过如 ngix 配置来识别 '/api' 进行跨域
     */
    baseURL:string,

    /**
     * `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
     * 如果请求会话超过 `timeout` 的时间，请求将被中断
     */
    timeout:number
  }

};