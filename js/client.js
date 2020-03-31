function send(form) {
        var valid = jQuery(form).validationEngine('validate');
        if(valid == true){
            var options = {
                      url: jQuery(form).attr('action'),
                      type:'POST',
                      resetForm:true
                    };
            jQuery(form).ajaxSubmit(options);
        }
}

jQuery(document).ready(function(){
    jQuery(".afl-cf, #comment-form").validationEngine();
});