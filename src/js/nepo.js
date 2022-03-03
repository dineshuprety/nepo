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
        // TODO: ADD YOUR DEFAULT OPTIONS HERE
        myStyle: 'my-style1'
    };

    class Nepo {

        constructor(element, options) {
            // Merge user settings with default
            this.options = $.extend(true, {}, defaults, options);
            // Main container element
            this.main = $(element);
            console.log(this.main);
            // Initial load
            this._init();
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


            this.main.on('keypress keydown keyup', function() {

                if($(this).val().length === 10) {                   
                    //checking for valid number
                    if (nepoDigit.test($(this).val())) {
                        //checking for ncell
                        if (ncell_regex.test($(this).val())) {
                            //statement for ncell
                            $('p').addClass('ncell').text('Nepal Cell');
                        }
                        //checking for namaste
                        else if (namaste_regex.test($(this).val())) {
                            //statement for namaste
                            $("#loader").attr('src','data:image/jpeg;base64,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');
                            $('#loader').removeClass('hidden');
                        }
                        //checking for sky
                        else if (sky_regex.test($(this).val())) {
                            //statement for sky

                        }
                        //checking for smart
                        else if (smart_regex.test($(this).val())) {
                            //statement for smart
                            $('p').addClass('ncell').text('smart');

                        }
                        //checking for utl
                        else if (utl_regex.test($(this).val())) {
                            //statement for utl
                            $('p').addClass('invalid').text('utl');
                        }

                    } else {
                        //statement for invalid number
                        $('p').addClass('invalid').text('invalited');
                    }               
                    
                     
                }else{
                   
                }

            });




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