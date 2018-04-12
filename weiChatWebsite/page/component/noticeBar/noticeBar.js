/**
 * Created by zhoujie on 2018/4/9.
 */
import {bsNoticeBarController} from "../../../dist/index.js";
Page(Object.assign({
        /**
         * 页面的初始数据
         */
        data: {
            api:[
                {
                    props:'action',
                    defaultValue:'null',
                    dataType:'string',
                    description:"用于替换操作 icon 的文案"
                },
                {
                    props: 'content',
                    defaultValue: 'null',
                    dataType: 'string',
                    description: "notice显示文字"
                },
                {
                    props:'mode',
                    defaultValue: '\'\'',
                    dataType: 'string',
                    description: "提示类型，可选 closable,link"
                },
                {
                    props: 'icon',
                    defaultValue: ' ',
                    dataType: 'string',
                    description: "开始位置设置图标"
                },
                {
                    props:'show',
                    defaultValue: 'false',
                    dataType: 'boolean',
                    description: "是否显示"
                }
            ]
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
            this.$bs_notice_bar_init({
                action:'',
                content:'notice bar 默认样式',
                mode:'closeable',
                icon:'',
                show:true
            })
        },
        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function () {
        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function () {

        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide: function () {

        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload: function () {

        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefresh: function () {

        },

        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom: function () {

        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage: function () {

        }
}, bsNoticeBarController
));