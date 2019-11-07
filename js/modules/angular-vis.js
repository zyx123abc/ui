// angular-vis module
angular
    .module('ngVis', [])

    .factory('VisDataSet', function () {
        'use strict';
        return function (data, options) {
            // Create the new dataSets
            return new vis.DataSet(data, options);
        };
    })



/**
 * Directive for network chart.
 */
    .directive('visNetwork', ['$http','ui_api_call', function ($http, ui_api_call) {
        return {
            restrict: 'EA',
            transclude: false,
            scope: {
                data: '=',
                options: '=',
                events: '=',
                control: '=',
                outnetworks: '='
            },
            
            replace: true,

            // template: '<div>internal network :{{control}}</div>',

            link: function (scope, element, attr) {
                

                // scope.internalControl = scope.control || {};
                // scope.internalControl.takenTablets = 0;
                // scope.internalControl.takeTablet = function() {
                //     scope.internalControl.takenTablets += 1;
                // }


                scope.network = scope.outnetworks || null;
                scope.networkViewInfo = scope.control || {};

                scope.$watch('data', function () {
                    // Sanity check
                    if (scope.data == null) {
                        return;
                    }

                    // If we've actually changed the data set, then recreate the graph
                    // We can always update the data by adding more data to the existing data set
                    if (scope.network != null) {
                        scope.network.destroy();
                    }

                    // Create the graph2d object
                    // console.log('Initializing new empty network vis for RE')
                    scope.network = new vis.Network(element[0], scope.data, scope.options);

                    scope.network.controlParams = {
                        'dragMode': false,
                        'dragInProgress': false,
                        'dragCoords': {'x1':0, 'y1':0, 'x2':0, 'y2': 0},
                        // 'showCommunities': true
                        'colorTheme': 'colTheme_default',
                        'splitCurrencies': false,
                        'focal_items': { 
                            'node_list':[],
                            'edge_list':[],
                            're_list':[],
                            'ure_list':[],
                            'trxn_list':[]
                        }
                    }

                    // EVENTS
                    var networkEvents = [
                        'click',
                        'doubleClick',
                        'oncontext',
                        'hold',
                        'release',
                        'selectNode',
                        'selectEdge',
                        'deselectNode',
                        'deselectEdge',
                        'dragStart',
                        'dragging',
                        'dragEnd',
                        'hoverNode',
                        'blurNode',
                        'hoverEdge',
                        'blurEdge', 
                        'zoom',
                        'showPopup',
                        'hidePopup',
                        'startStabilizing',
                        'stabilizationProgress',
                        'stabilizationIterationsDone',
                        'stabilized',
                        'resize',
                        'initRedraw',
                        'beforeDrawing',
                        'afterDrawing',
                        'animationFinished',
                        'configChange'
                    ];


                    scope.networkViewInfo = scope.control || {};
                    scope.networkViewInfo = {
                            'node_coords': scope.network.getPositions(),
                            'curr_scale': scope.network.getScale(),
                            'curr_viewPos': scope.network.getViewPosition()
                    };
                    scope.control = scope.networkViewInfo;

                    // console.log('info inside directive scope: ', scope.control);



                    // Attach an event handler if defined
                    angular.forEach(scope.events, function (callback, event) {
                        if (networkEvents.indexOf(String(event)) >= 0) {
                            scope.network.on(event, callback);
                            // console.log('**********again', event)
                        }
                    });

                    // onLoad callback
                    if (scope.events != null && scope.events.onload != null &&
                        angular.isFunction(scope.events.onload)) {
                        scope.events.onload(graph);


                    }




                    console.log('new graph', scope.network, 'with data: ', scope.data);

                    scope.outnetworks = scope.network;

                    // console.log('----> outer network: ', scope.outnetworks);

                });





                // OPTIONS

                scope.$watchCollection('options', function (options) {
                    if (scope.network == null) { return;}
                    scope.network.setOptions(options);
                });





                

            }
        };
    }
    ]
    );

