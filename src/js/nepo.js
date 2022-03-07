/*!
 * nepo 1.0.0
 * Nepo, is a phone number checker for Nepali developers which helps to detect the number belongs to nepal sim company.
 *
 * Created by FortranCoder
 *
 * @license MIT
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function(root, jQuery) {
            if (jQuery === undefined) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if (typeof window !== 'undefined') {
                    jQuery = require('jquery');
                } else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    "use strict";

    // Default Options
    var defaults = {
      // Default css class for image
        imageClass: 'nepo-image',
        
    };

    class Nepo {

        constructor(element, options) {
            // Merge user settings with default
            this.options = $.extend(true, {}, defaults, options);

            // Main container element
            this.main = $(element);

            // Initial load
            this._init();

            // replace inputToNumber
            this._changeInputToNumber();
            
            //only numeric (0-9) in HTML
            this._changeInputTypeToText();           

           
        }

        // Initial Method
        _init() {

            /**
             * Plugin init and logic
             * ncell - ncell number
             */
            const ncell = ['980', '981', '982'];
            /**
             * namaste - namaste number
             */
            const namaste = ['984', '985', '986'];
            /**
             * sky - nepal telecom 
             */
            const sky = ['974', '975'];
            /**
             * smart - smart cell
             */
            const smart = ['961', '988'];
            /**
             * Utl - utl cell
             */
            const utl = ['972'];
            /**
             * 10 digit number - 10 digit number
             * valid_type - valid type
             */
            const nepoDigit = /^[0-9]{10}$/;

            /**
             * Changeing array to regex string for matching purpose
             */
            const ncell_regex = new RegExp(ncell.join('|'));
            const namaste_regex = new RegExp(namaste.join('|'));
            const sky_regex = new RegExp(sky.join('|'));
            const smart_regex = new RegExp(smart.join('|'));
            const utl_regex = new RegExp(utl);

            // plugin user settings
            const settings = this.options;
            // new nepoElement
            const nepoElement = $('<div class="nepo-element"></div>');        

            this.main.on('keypress keydown keyup',function() {
                        // make empty nepo element
                        nepoElement.remove();
                        //checking for valid number
                    if (nepoDigit.test($(this).val()) === true) {
                           
                        // checking for ncell number
                        if (ncell_regex.test($(this).val())) {
                            //statement for ncell
                            nepoElement.html("<img src='data:image/webp;base64,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'  title='ncell' alt='ncell' />").appendTo($(this).parent());
                            $( "div.nepo-element > img" ).addClass(settings.imageClass);
                           
                        }
                        //checking for namaste
                        else if (namaste_regex.test($(this).val())) {
                            //statement for namaste
                            nepoElement.html("<img src='data:image/webp;base64,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' alt='namaste' class='nepo-image'/>").appendTo($(this).parent());
                            $( "div.nepo-element > img" ).addClass(settings.imageClass);
                        }
                        //checking for sky
                        else if (sky_regex.test($(this).val())) {
                            //statement for sky
                            nepoElement.html("<img src='data:image/webp;base64,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' alt='sky cell' class='nepo-image'/>").appendTo($(this).parent());
                            $( "div.nepo-element > img" ).addClass(settings.imageClass);
                        }
                        //checking for smart
                        else if (smart_regex.test($(this).val())) {
                            //statement for smart
                            nepoElement.html("<img src='data:image/webp;base64,UklGRmABAABXRUJQVlA4TFMBAAAvL8ALAKegoI0kxb/cY340oRBAACR/51HYtg3S/9/tGOe/DvtPKZQwAQpMoIQJVEhmOBuomxf8kpc/oAKSZNsK2+gCX4iom+jDf/vfLJZke5hRRP8nQH/C3c4va9ij4e5xMS/8IqJR3H3ciAJQNDLUArs0ayLtkryQGy/nVWVtylz2KKy7HLBGMrNN18YuSQPGTpobVkmn7zAyFmqY7jfW7iDH1DCjSyr8QOgNYQu/76ggqZMfrA7/7lSS6+BiQA3f9quZWH/vROHlK+2s6WqwHgPTYJNTNWsiFf6TF7UEZVxpurukKWlKCq1DCkW8kGboe8/smvn4SJztXEbvU2o0OfaJMwF5agdoXzAgFzgalAL9cxULzSOguhfy54xTkpzLb2hLQDEz2z/XoXXjLKTWW6iR3aG/TxvrORLAoQn0AvV96mbbkGY1ayG5ZY8tHx/4UwkA' title='smart cell' class='nepo-element'/>").appendTo($(this).parent());
                            $( "div.nepo-element > img" ).addClass(settings.imageClass);

                        }
                        //checking for utl
                        else if (utl_regex.test($(this).val())) {
                            //statement for utl
                           nepoElement.html("<img src='data:image/png;base64,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'  title='Utl cell' class='nepo-image' />").appendTo($(this).parent());
                           $( "div.nepo-element > img" ).addClass(settings.imageClass);
                        }
                        
                    }            
            });




        }
       // change input type to number
        _changeInputToNumber() {
            this.main.keypress(function (e) {    
                var charCode = (e.which) ? e.which : e.keyCode;
                if (String.fromCharCode(charCode).match(/[^0-9]/g))
                  return false;
              });   
        }

        // change input type to text and add maxlength
        _changeInputTypeToText() {
            //check if input type is number
           
            if (this.main.attr('type') == 'number' || this.main.attr('type') == 'email' || this.main.attr('type') == 'password' || this.main.attr('type') == 'tel') {
                //change input type to number
                this.main.attr({
                    type:'text',
                    maxlength:'10'
                });
            }
        }

       

    }

    // Wrapper for the plugin
    $.fn.nepo = function(options) {
        var pluginName = "nepo";

        if (options === undefined || typeof options === 'object') {
            return this.each(function() {
                if (!$.data(this, pluginName)) {
                    $.data(this, pluginName, new Nepo(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            let instance = $.data(this[0], pluginName);

            if (options === 'destroy') {
                $.data(this, pluginName, null);
            }

            if (instance instanceof Nepo && typeof instance[options] === 'function') {
                return instance[options].apply(instance, Array.prototype.slice.call(arguments, 1));
            } else {
                return this;
            }
        }
    };
}));