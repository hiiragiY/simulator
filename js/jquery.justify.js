
/**
 * jQuery justify
 * 
 * Copyright 2009, nojimage (http://php-tips.com/)
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 * 
 * @filesource 
 * @version    1.1
 * @author     nojimage <nojimage at gmail.com>
 * @copyright  2009 nojimage
 * @license    http://www.opensource.org/licenses/mit-license.php The MIT License
 * @link       http://php-tips.com/
 * @modifiedby nojimage <nojimage at gmail.com>
 * 
 */
(function($) {
    
    /**
     * letter-spacingの計算
     */
    var calcLetterSpacing = function(element, width){
        
        var letterSpacing = 0;
        
        // elementを複製
        var copy = $(element).clone();
        copy.hide();
        $(element).before(copy);
        
        // letter-spacing 0の状態で幅を取得
        copy.css({letterSpacing: 0, float: 'left', width: 'auto'});
        if( !jQuery.support.noCloneEvent && jQuery.support.tbody ) {
            copy.css({display: 'table-cell'});
        }
        var innerWidth = copy.innerWidth();
        
        // 文字数
        var textLength = jQuery.trim(copy.text()).length;
        
        // 文字数からletter-spacingを算出
        letterSpacing = (width - innerWidth) / (textLength - 1);
        
        copy.remove();
        
        letterSpacing = Math.floor(letterSpacing);
        
        return letterSpacing;
    }
    
    /**
     * console.log wrapper
     */
    var log = function(msg){
        if (typeof console != 'undefined') {
            console.log(msg);
        }
    };
    
    jQuery.fn.justify = function(){
        // 最大幅の取得
        var maxWidth = 0;
        this.each(function(){
            if (maxWidth < $(this).innerWidth()) {
                maxWidth = $(this).innerWidth();
            }
        });
        
        // letter-spacingの計算
        this.each(function(){
            
            var letterSpacing = 0;
            
            if (jQuery.trim($(this).text()).length < 2) {
                return;
            }
                
            letterSpacing = calcLetterSpacing(this, maxWidth);
            
            if( !jQuery.support.noCloneEvent && !jQuery.support.tbody ) {
                // 文字列をtrim
                $(this).text(jQuery.trim($(this).text()));
            } else {
                // 末尾の文字のletter-spaceを除去
                var text = $(this).text();
                $(this).text(text.slice(0, text.length - 1));
                var lastText = $('<span>').text(text.slice(text.length - 1));
                $(this).append(lastText);
                $(lastText).css({letterSpacing: 0, display: 'inline', padding: 0});
            }
            
            $(this).css({letterSpacing: letterSpacing + 'px'});
        });
        
    };
}(jQuery));