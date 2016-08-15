(function(app) {
    document.addEventListener('DomContentLoaded', function() {
        ng.platformBrowserDynamic
          .platformBrowserDynamic()
          .bootstrapModule(app.AppModule);
    });
})(window.app || (window.app = {}));