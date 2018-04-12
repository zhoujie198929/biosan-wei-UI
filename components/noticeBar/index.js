function resolveClickLink() {
    if (this.handleActionLinkClick) {
        this.handleActionLinkClick();
    } else {
        console.warn('页面缺少 handleActionLinkClick 回调函数');
    }
}

const bsNoticeBarController = {
    $bs_notice_bar_init: function (options) {
        let {
            action='',
            content='notice content',
            mode='closeable',
            icon='',
            show=true
        }=options;
        this.setData({
            bs_notice_bar: {
                action,
                content,
                mode,
                icon,
                show
            }
        });
    },
    $bs_notice_bar_click: function (e) {
        let item=e.currentTarget.dataset.content;
        let mode=item.mode;
        if(mode=='link'){
            resolveClickLink.call(this);
        }else if(mode==='closeable'){
            this.setData({
                'bs_notice_bar.show':false
            })
        }
    },
    $bs_notice_bar_show:function(option={}){
        this.setData({
            'bs_notice_bar.show':true
        })
    },

};

export{bsNoticeBarController}

