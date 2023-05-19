angular.module('aplicacao').controller('PrevisaoTempoController', function($scope, $resource) {

    var WeatherChannel = $resource("https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.64&daily=temperature_2m_max,temperature_2m_min&forecast_days=1&timezone=America%2FSao_Paulo");

    var getWeather = function () {
        WeatherChannel.get().$promise.then(function (res) {
            $scope.tempo = res;
            console.log(res);
        }), function (promise) {
            alert("Erro ao requesitar!")
        }
    }

    getWeather();
})