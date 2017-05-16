myApp.controller('HomeCtrl', function ($scope, $timeout, TemplateService, NavigationService, ContentService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("home");
        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        TemplateService.header = "views/template/header.html";
        // TemplateService.header = "";

        ContentService.getHomeSliders(function (data) {
            $scope.slides = data.data.data;
        });

        $scope.mySlides = [
            'img/home/1.jpg',
            'img/home/2.jpg',
            'img/home/3.jpg',
            'img/home/4.jpg'
        ];

        $scope.mySlidess = [
            'img/mobile/c1.jpg',
            'img/mobile/c2.jpg',
            'img/mobile/towers.jpg',
            'img/mobile/symphony.jpg',

        ];
        //     $scope.$on('$viewContentLoaded', function() {

        //     $(window).scroll(function() {
        //         var scroller = $(document).scrollTop();
        //         var height = 0;
        //         if (height <= scroller) {
        //             $('body').addClass('show-header');

        //         } else {
        //             $('body').removeClass('show-header');

        //         }
        //     });
        // });



    })
    .controller('BuildCtrl', function ($scope, $state, $timeout, $uibModal, TemplateService, NavigationService, ContentService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("build");
        $scope.menutitle = NavigationService.makeactive("Build");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.validEmail = /^[a-z]+[@][a-z]+[.]+[a-z]*$/;

        ContentService.getBuild(function (data) {
            console.log("Build data: ", data);
            $scope.buildData = data.data.data.build[0];
            $scope.projects = data.data.data.project;
        });

        $scope.contactsubmit = function (formData) {
            console.log("hi contact");
            ContentService.ContactSave(formData, function (data) {
                console.log("m in give", data);
                if (data) {
                    $scope.thanks();
                    $timeout(function () {
                        $state.reload();
                    }, 2000);
                }
            });

        };

        $scope.thanks = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/thank.html",
                scope: $scope

            })
        };
        // $scope.formData ={};
        // $scope.contactForm=function(formData){
        //   console.log("formData",formData);
        //   if(formData){
        //     $scope.thanks();
        //      $timeout(function() {

        //                     $state.reload();
        //                 }, 2000);
        //   }

        // }


    })
    .controller('GiveCtrl', function ($scope, $state, TemplateService, NavigationService, $timeout, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("give");
        $scope.menutitle = NavigationService.makeactive("Give");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.validEmail = /^[a-z]+[@][a-z]+[.]+[a-z]*$/;
        $scope.subscribeForm = {};
        $scope.formData = {};


        $scope.contactsubmit = function (formData) {
            console.log("hi contact");
            NavigationService.ContactSave(formData, function (data) {
                console.log("m in give", data);
                if (data) {
                    $scope.thanks();
                    $timeout(function () {
                        $state.reload();
                    }, 2000);
                }
            });

        };

        $scope.thanks = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/thank.html",
                scope: $scope

            })
        };
        // $scope.subscribe=function(formData){
        //   console.log("email",formData);
        //   if(formData){
        //     $scope.show = true;
        //       $scope.thanks();
        //       $timeout(function() {
        //                   $scope.show = false;
        //                   $scope.formData = {};
        //               }, 2000);
        //   }

        // } 

    })
    .controller('ShantilalCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("shantilal");
        $scope.menutitle = NavigationService.makeactive("Give");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('BjsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("bjs");
        $scope.menutitle = NavigationService.makeactive("Give");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('CareersCtrl', function ($scope, $state, TemplateService, NavigationService, $timeout, $uibModal) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("careers");
        $scope.menutitle = NavigationService.makeactive("Careers");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.contactsubmit = function (formData) {
            console.log("hi contact");
            NavigationService.ContactSave(formData, function (data) {
                console.log("m in give", data);
                if (data) {
                    $scope.thanks();
                    $timeout(function () {
                        $state.reload();
                    }, 2000);
                }
            });

        };
        $scope.thanks = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/thank.html",
                scope: $scope

            })
        };
        // $scope.formData ={};
        // $scope.contactForm=function(formData){
        //   console.log("formData",formData);
        //   if(formData){
        //     $scope.thanks();
        //      $timeout(function() {

        //                     $scope.formData = {};
        //                 }, 2000);
        //               }
        //             }



    })

    .controller('ContactCtrl', function ($scope, $state, $timeout, $uibModal, TemplateService, NavigationService, ContentService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("contact");
        $scope.menutitle = NavigationService.makeactive("Contact");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.validEmail = /^[a-z]+[@][a-z]+[.]+[a-z]*$/;

        ContentService.getDetails(function (data) {
            $scope.contact = data.data.data;
            console.log("contact: ", $scope.contact);
        });

        $scope.contactsubmit = function (formData) {
            ContentService.ContactSave(formData, function (data) {
                if (data) {
                    $scope.thanks();
                    $timeout(function () {
                        $state.reload();
                    }, 2000);
                    //  $state.reload();
                }
            });

        };

        $scope.thanks = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/thank.html",
                scope: $scope

            })
        };
        // $scope.formData ={};
        // $scope.contactForm=function(formData){
        //   console.log("formData",formData);
        //   if(formData){
        //     $scope.thanks();
        //      $timeout(function() {

        //                     $scope.formData = {};
        //                 }, 2000);
        //   }

        // }





    })
    // .controller('MediaCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //   //Used to name the .html file
    //   $scope.template = TemplateService.changecontent("media");
    //   $scope.menutitle = NavigationService.makeactive("Media");
    //   TemplateService.title = $scope.menutitle;
    //   $scope.navigation = NavigationService.getnav();
    //
    //   $scope.news = [{
    //     img: "img/news/n1.jpg",
    //     name: "Bombay Times",
    //     date: "24 Jan 2015"
    //
    //   }, {
    //     img: "img/news/n2.jpg",
    //     name: "Hindustan Times",
    //     date: "12 Feb 2015"
    //
    //   }, {
    //     img: "img/news/n3.jpg",
    //     name: "Mumbai Mirror",
    //     date: "15 Mar 2015"
    //
    //   }, {
    //     img: "img/news/n4.jpg",
    //     name: "Times Of India",
    //     date: "27 Aug 2015"
    //
    //   }, {
    //     img: "img/news/n2.jpg",
    //     name: "Hindustan Times",
    //     date: "12 Feb 2015"
    //
    //   }, {
    //     img: "img/news/n3.jpg",
    //     name: "Mumbai Mirror",
    //     date: "15 Mar 2015"
    //
    //   },{
    //     img: "img/news/n1.jpg",
    //     name: "Bombay Times",
    //     date: "24 Jan 2015"
    //
    //   }, {
    //     img: "img/news/n4.jpg",
    //     name: "Times Of India",
    //     date: "27 Aug 2015"
    //
    //   }];
    //
    //   var news =_.chunk($scope.news,4);
    //   $scope.news = _.map(news,function (key) {
    //     return _.chunk(key,2);
    //   });
    //
    // })
    .controller('ClientCtrl', function ($scope, $timeout, TemplateService, NavigationService, ContentService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("client");
        $scope.menutitle = NavigationService.makeactive("Client");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        ContentService.getEnabledClients(function (data) {
            $scope.clients = _.chunk(data.data.data.clients, 2);
            $scope.banner = data.data.data.banner;
        });
    })
    .controller('ProjectCtrl', function ($scope, $state, $timeout, $stateParams, $uibModal, TemplateService, NavigationService, ContentService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("project");
        $scope.menutitle = NavigationService.makeactive("Project");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.projectimages = {};
        // $scope.oneAtATime = true;
        $scope.validEmail = /^[a-z]+[@][a-z]+[.]+[a-z]*$/;
        $scope.subscribeForm = {};

        // $scope.subscribe=function(email){
        //   console.log("email",email);
        //   if(email){
        //     $scope.show = true;
        //       $scope.thanks();
        //       $timeout(function() {
        //                   $scope.show = false;
        //                   $scope.subscribeForm = {};
        //               }, 2000);
        //   }

        // } 

        $scope.contactsubmit = function (formData) {
            console.log("hi contact");
            formData.project = $scope.project._id;
            NavigationService.ContactSave(formData, function (data) {
                console.log("m in give", data);
                if (data) {
                    $scope.thanks();
                    $timeout(function () {
                        $state.reload();
                    }, 2000);
                    //  $state.reload();
                }
            });

        };

        $scope.thanks = function () {
            $uibModal.open({
                animation: true,
                templateUrl: "views/modal/thank.html",
                scope: $scope

            })
        };
        $scope.paramId = $stateParams.id;
        var projectId = {
            _id: $scope.paramId
        }
        ContentService.getProjectWithId(projectId, function (data) {
            $scope.project = data.data.data;
            $scope.designFeatures = _.split($scope.project.designFeature, '\n');
            $scope.keyDistances = _.split($scope.project.keyDistance, '\n');
            $scope.specifications = _.split($scope.project.specification, '\n');
            $scope.images = _.sortBy($scope.project.images, 'order');
        });


    })

    .controller('KnowCtrl', function ($scope, $timeout, TemplateService, NavigationService, ContentService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("know");
        $scope.menutitle = NavigationService.makeactive("Know");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        ContentService.getKnow(function (data) {
            $scope.know = data.data.data[0];
            console.log("Know: ", $scope.know);
            $scope.managements = _.sortBy($scope.know.management, 'order');
        });

    })

    .controller('footerctrl', function ($scope, $state, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService;

        //  $scope.modl=function(){

        //  }
        $scope.validEmail = /^[a-z]+[@][a-z]+[.]+[a-z]*$/;
        $scope.formData = {};

        $scope.contactsubmit = function (formData) {
            console.log("hi contact");
            NavigationService.ContactSave(formData, function (data) {
                console.log("m in give", data);
                if (data) {
                    $scope.show = true;
                    $timeout(function () {
                        $scope.show = false;
                        $scope.formData = {};
                    }, 2000);
                }
            });

        };

        // $scope.subscribe=function(email){
        //   console.log("email",email);
        //   if(email.email){
        //     $scope.show = true;
        //       $timeout(function() {
        //                   $scope.show = false;
        //                   $scope.subscribeForm = {};
        //               }, 2000);
        //   }

        // } 


        console.log("im in footer");
        $scope.pages = [ // Taken from https://gist.github.com/unceus/6501985
            {
                name: 'Muttha Chambers I',
                code: 'kkk',
                link: 'project({id:1})'
            }, {
                name: 'Muttha Chambers II',
                code: 'BH',
                link: 'project({id:2})'
            }, {
                name: 'Muttha Towers',
                code: 'AA',
                link: 'project({id:4})'
            }, {
                name: 'Muttha Symphony',
                code: 'D',
                link: 'project({id:5})'
            },
            {
                name: 'Muttha Business Center',
                code: 'll',
                link: 'project({id:6})'
            }
        ];
    })

    .controller('headerctrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });

        $scope.menu = "menu-out";
        $scope.getMenu = function () {
            $(".side-menu").addClass("menu-in");
            $(".side-menu").removeClass("menu-out");
        };
        $scope.closeMenu = function () {
            $(".side-menu").removeClass("menu-in");
            $(".side-menu").addClass("menu-out");
        };
        $(".template.content").click(function () {
            $(".side-menu").removeClass("menu-in");
            $(".side-menu").addClass("menu-out");
        });


        $scope.pages = [ // Taken from https://gist.github.com/unceus/6501985
            {
                name: 'Muttha Chambers I',
                code: 'kkk',
                link: 'project({id:1})'
            }, {
                name: 'Muttha Chambers II',
                code: 'BH',
                link: 'project({id:2})'
            }, {
                name: 'Muttha Towers',
                code: 'AA',
                link: 'project({id:4})'
            }, {
                name: 'Muttha Symphony',
                code: 'D',
                link: 'project({id:5})'
            },
            {
                name: 'Muttha Business Center',
                code: 'll',
                link: 'project({id:6})'
            }
        ];
        // $.fancybox.close(true);
    })
