myApp.service('TemplateService', function () {
    this.title = "Home";
    this.meta = "";
    this.metadesc = "";

    var d = new Date();
    this.year = d.getFullYear();

    this.init = function () {
        this.headermenu = "views/template/headermenu.html";
        this.header = "views/template/header.html";
        // this.header = "views/header1.html";
        this.menu = "views/template/menu.html";
        this.slider = "views/template/slider.html";
        this.content = "views/content/content.html";
        this.footermenu = "views/template/footermenu.html";
        this.footer = "views/template/footer.html";
    };

    this.changecontent = function (page) {
        this.init();
        var data = this;
        data.content = "views/content/" + page + ".html";
        return data;
    };

    this.getHTML = function (page) {
        this.init();
        var data = this;
        data.content = "views/" + page;
        return data;
    };

    this.init();

});