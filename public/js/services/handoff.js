var app = angular.module('handoff.svc', []);

app.service('dataHandoff', function() {
    this.objectInQueue = null;
})