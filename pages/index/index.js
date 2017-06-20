//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    show:"none"
  },
  //事件处理函数
  houseModel: function() {
    this.setData({
      show:'block'
    })
  },
  close:function(){
    this.setData({
      show: 'none'
    })
  },
  // 查看详情
  showDetail:function(){
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  complain: function () {
    wx.navigateTo({
      url: '../complain/complain'
    })
  },
  onReady: function (e) {
    var context = wx.createCanvasContext('firstCanvas')
    context.setStrokeStyle("#F68200")
    context.setLineWidth(2)
    context.setFillStyle('white')
    context.setFontSize(14)

    context.fillText('31℃', 2, 25)
    context.arc(10, 30, 2, 0, 2 * Math.PI, false)
    context.moveTo(10, 30)

    context.fillText('29℃', 62, 35)
    context.arc(70, 40, 2, 0, 2 * Math.PI, false)
    context.lineTo(70, 40)

    context.fillText('20℃', 122, 60)
    context.arc(130, 70, 2, 0, 2 * Math.PI, false)
    context.lineTo(130, 70)

    context.fillText('31℃', 182, 25)
    context.arc(190, 30, 2, 0, 2 * Math.PI, false)
    context.lineTo(190, 30)

    context.fillText('33℃', 242, 20)
    context.arc(250, 25, 2, 0, 2 * Math.PI, false)
    context.lineTo(250, 25)

    context.fillText('34℃', 302, 16)
    context.arc(310, 21, 2, 0, 2 * Math.PI, false)
    context.lineTo(310, 21)

    context.stroke()
    context.draw()
  }
})
