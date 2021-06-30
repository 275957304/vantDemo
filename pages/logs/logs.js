// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  },
  onReady(){
    const query = wx.createSelectorQuery()
    query.select('#myCanvas')
    .fields({ node: true, size: true })
    .exec((res) => {
      const canvas = res[0].node
      const ctx = canvas.getContext('2d');

      console.log(res);

      const dpr = wx.getSystemInfoSync().pixelRatio;
      console.log(wx)
      console.log(dpr)
      canvas.width = res[0].width * dpr
      canvas.height = res[0].height * dpr
      ctx.scale(dpr, dpr)
      
      ctx.fillRect(0, 0, 300, 300);
      
    })
  }
})
