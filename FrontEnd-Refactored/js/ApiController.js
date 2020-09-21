function ApiController(ApiService) {
    API = '//localhost:3000/parentheses';
    this.start = false;
    let ctrl = this;
    this.entry = "";
    this.result = {};
    this.getUser = () => {
        // if (!this.entry) {
        //     return;
        // }
        ApiService
            .getUser(this.entry)
            .then(function(response) {
                ctrl.result = response;
            })
        this.start = true;
    };

    this.clear = () => {
        ctrl.result = null;
        this.entry = null;
        this.start = false;
    }
}

angular
    .module('app')
    .controller('ApiController', ApiController);
