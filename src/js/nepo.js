/*!
 * nepo 1.0.0
 * Nepo, is a phone number checker for Nepali developers which helps to detect the number belongs to sim company.
 *
 * Created by FortranCoder
 *
 * @license MIT
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
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
}(function ($) {
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
         this.main    = $(element);

         // Initial load
         this._init();
     }

     // Initial Method
     _init() {
        // Plugin init and logic
        this.main.addClass(this.options.myStyle).html(this.options.myStyle);
     }

     // TODO: YOU CAN ADD MORE FUNCTIONS FOR YOUR PLUGIN HERE

   }

   // Wrapper for the plugin
   $.fn.nepo = function (options) {
      var pluginName = "nepo";

      if (options === undefined || typeof options === 'object') {
         return this.each(function () {
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
