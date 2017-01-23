angular
  .module('leaderboard')
  .factory('resultsDataFactory', resultsDataFactory);

function resultsDataFactory($http) {
  return {
    getListResults : getListResults
  };

  function getListResults() {
    return $http.get('https://apis.trainheroic.com/public/leaderboard/468425').then(complete).catch(failed);
  }
  
  function failed(error) {
    console.log(error.statusText);
  }

  function complete(response) {
    return response.data;
  }
}
