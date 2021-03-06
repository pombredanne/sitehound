
var seedUrlFactory = ngApp.factory('seedUrlFactory',['$http', '$httpParamSerializer', function($http, $httpParamSerializer){

	var urlBase = '/api/workspace/{0}/seed-url';
	var dataFactory = {};

	dataFactory.get = function (workspaceId, filters) {
		var url =  String.format(urlBase, workspaceId);
		var qs = $httpParamSerializer(filters);
		return $http.get(url + (qs ? '?' + qs : ""));
	};
/*

	dataFactory.get = function (workspaceId, source, filters) {
		var url =  String.format(urlBase, workspaceId);
		debugger;

//		po = {};
//		po.sources = filters.sources;
//		po.relevances = filters.relevances;
//		po.categories = filters.categories;
//		po.udcs = filters.udcs;
//		po.lastId = lastId;
		return $http.post(url + '/' + source, filters);
	};
*/

	dataFactory.getUdcs = function (workspaceId) {
		var url =  String.format(urlBase, workspaceId);
//		return $http.get(url + '/' + source + '/udcs');
		return $http.get(url + '/udcs');
	};


//	dataFactory.update = function(workspaceId, id, relevance){
//		var url =  String.format(urlBase, workspaceId);
//		var po = {};
//		po.relevance = relevance
//		console.log("id: " + id + " , relevance: " + relevance);
//		return $http.put(url + "/url/" + id, po);
//	};
//

	dataFactory.update = function(workspaceId, id, relevance, categories, udc){
		var url =  String.format(urlBase, workspaceId);
		var po = {};
		po.relevance = relevance;
		po.categories = categories;
		po.udc = udc;
//		console.log("id: " + id + " , relevance: " + relevance);
		return $http.put(url + "/url/" + id, po);
	};

	dataFactory.label = function(workspaceId, id, relevance){
		var urlBase = '/api/workspace/{0}/label';
		var url =  String.format(urlBase, workspaceId);
		var po = {};
		po.relevance = relevance;
		// po.categories = categories;
		// po.udc = udc;
//		console.log("id: " + id + " , relevance: " + relevance);
		return $http.put(url + "/url/" + id, po);
	};



// Moved to fetch-service
//	dataFactory.generate = function(workspaceId, nResults, crawlProvider, crawlSources) {
//		var url =  String.format(urlBase, workspaceId);
//		var po = {};
//		po.nResults = nResults;
//		po.crawlProvider = crawlProvider;
//		po.crawlSources = crawlSources;
//		return $http.post(url + '/generation', po);
//	};

	dataFactory.delete = function(workspaceId, id){
		var url =  String.format(urlBase, workspaceId);
		return $http.delete(url + "/url/" + id);
	};

//	return dataFactory;
//}]);
//
//
//var seedUrlSourceFactory = ngApp.factory('seedUrlSourceFactory',['$http', function($http){

//	var seedUrlGenerationUrlBase = '/api/seed-url/generation';
//	var seedUrlBase = '/api/seed-url' ;
//	var dataFactory = {};


// Moved to fetch-service
//	dataFactory.resetResults = function(workspaceId, source){
//		var url =  String.format(urlBase, workspaceId);
//		return $http.delete(url + '/generation/' + source);
//	}



// Moved to fetch-service
	dataFactory.getAggregated = function (workspaceId) {
		var url =  String.format(urlBase+'/aggregated', workspaceId);
		return $http.get(url);
	};
	return dataFactory;
}]);
