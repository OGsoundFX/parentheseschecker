function ApiService($http) {
    API = '//localhost:3000/parentheses';
    this.getUser = (entry) => {
        // console.log(this.entry);
        return $http
            .post(API, { string: entry} )
            .then(function (response) {
                // console.log(response.data);
                return response.data;
            }, function (reason) {
                // error
            })
        // this.entry = "";
    };
};

angular
    .module('app')
    .service('ApiService', ApiService);