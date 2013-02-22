var roox = roox || {};

(function () {


    function UIController(moduleId) {
        this.versionHolder = $("#webapi-version");
    }


    UIController.prototype = {
        getVersionAction: function () {
            var self = this;
            self.hideData();
            self.getVersion(function (data) {
                if (data.result) {
                    self.showData(data.result.version)
                } else if (data.error && data.error.message) {
                    self.showData(data.error.message)
                } else {
                    self.showData("Error")
                }
            }, 1000)
        },

        testAction: function () {
            function processResponse(response) {
                alert(JSON.stringify(response));
            }

            var params = {
                'CONTENT_TYPE': 'HTML',
                'METHOD': 'GET'
            };
            gadgets.io.makeRequest("http://ya.ru/", processResponse, params);
        },

        getVersion: function (callback) {
            function processResponse(response) {
                if (response['errors'][0]) {
                    callback({
                        error: {
                            'code': response['rc'],
                            'message': response['text']
                        }
                    });
                } else {
                    var jsonResponse = response['result'] || response['data'];
                    if (!jsonResponse || jsonResponse['error']) {
                        callback(jsonResponse);
                    } else {
                        var responseMap = {};
                        for (var i = 0; i < jsonResponse.length; i++) {
                            responseMap[jsonResponse[i]['id']] = jsonResponse[i];
                        }
                        callback(jsonResponse);
                    }
                }
            }

            var request = {
                "jsonrpc": "2.0",
                "method": "system.getVersion",
                "id": 1,
                "params": {}
            };

            var headers = { 'Content-Type': 'application/json' }
            var authtoken = shindig.auth.getSecurityToken();
            if (authtoken) {
                headers['Authorization'] = "Bearer " + authtoken;
            }

            var params = {
                'POST_DATA': gadgets.json.stringify(request),
                'CONTENT_TYPE': 'JSON',
                'METHOD': 'POST',
                'AUTHORIZATION': 'BEARER',
                'HEADERS': headers
            };
            // get WebAPI endpoint from config
            var endpoint= gadgets.config.get('com.rooxteam.webapi').endpointUrl;
            gadgets.io.makeRequest(endpoint, processResponse, params);

        },

        showData: function (version) {
            this.versionHolder.html(version);
            this.versionHolder.show();
        },

        hideData: function () {
            this.versionHolder.hide();
        }

    };

    roox.UIController = UIController;

})();