const bsNoticeBarController = {
    $bs_dialog_init: function (options) {
        this.setData({
            bs_notice_bar: {
                options
            }
        });
    },
    $bs_notice_bar_click: function (e) {
        let item=e.currentTarget.dataset.content;
        let mode=item.mode;
        if(mode=='link'){

        }else if(mode==='closeable'){

        }
    },
    $bs_notice_bar_show:function(option={}){

    },

};

export{bsNoticeBarController}

