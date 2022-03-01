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
            const utl = '972';
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
                //checking for valid number
                if (nepoDigit.test($(this).val())) {
                    //checking for ncell
                    if (ncell_regex.test($(this).val())) {
                        //statement for ncell
                        // $('p').addClass('ncell').text('Nepal Cell');
                    }
                    //checking for namaste
                    else if (namaste_regex.test($(this).val())) {
                        //statement for namaste
                        $("#loader").attr('src', 'https://marketwatch.footprints.com.np/wp-content/uploads/2015/09/ntc-logo.jpg');
                        $('#loader').removeClass('hidden');
                    }
                    //checking for sky
                    else if (sky_regex.test($(this).val())) {
                        //statement for sky

                    }
                    //checking for smart
                    else if (smart_regex.test($(this).val())) {
                        //statement for smart

                    }
                    //checking for utl
                    else if (utl_regex.test($(this).val())) {
                        //statement for utl

                    }

                } else {
                    //statement for invalid number

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