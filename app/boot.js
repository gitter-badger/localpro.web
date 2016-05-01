System.register(['angular2/platform/browser', './app.component', 'angular2-google-maps/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, core_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // this line boots our application on the page in the <my-app> element:
            // Note: It is required to add the ANGULAR2_GOOGLE_MAPS_PROVIDERS here!
            browser_1.bootstrap(app_component_1.AppComponent, [core_1.ANGULAR2_GOOGLE_MAPS_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot.js.map