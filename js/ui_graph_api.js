var ui_graph_api = (function() {
    'use strict';

    // api endpoints
    var endpoints = {};

    endpoints.getSessionData = "http://localhost:5000/api/GetSessionData";
    endpoints.getNodeList = "http://localhost:5000/api/GetNodeList";
    endpoints.getUREList = "http://localhost:5000/api/GetUREList";
    endpoints.searchEdgeProperties = "http://localhost:5000/api/SearchEdgeProperties";

    endpoints.getNodeListFromSearchItem = "http://localhost:5000/api/GetNodeListFromSearchItem";

    endpoints.getNetworkTrxnList = "http://localhost:5000/api/GetNetworkTrxnList";

    endpoints.undo = "http://localhost:5000/api/Undo";
    endpoints.redo = "http://localhost:5000/api/Redo";
    endpoints.undoredo = "http://localhost:5000/api/UndoRedo";


    endpoints.resetGraph = "http://localhost:5000/api/ResetGraph";
    endpoints.initGraph = "http://localhost:5000/api/InitGraph";
    endpoints.getGraph = "http://localhost:5000/api/GetGraph";
    endpoints.getNodeProperties = "http://localhost:5000/api/GetNodeProperties";
    endpoints.getEdgeProperties = "http://localhost:5000/api/GetEdgeProperties";
    endpoints.induceGraphWithHops = "http://localhost:5000/api/InduceGraphWithHops"; //TODO: rename
    endpoints.expandGraph = "http://localhost:5000/api/ExpandGraph";
    endpoints.contractGraph = "http://localhost:5000/api/ContractGraph";
    endpoints.explodeNodes = "http://localhost:5000/api/ExplodeNodes";
    endpoints.addNodes = "http://localhost:5000/api/AddNodes";
    endpoints.removeNodes = "http://localhost:5000/api/RemoveNodes";
    endpoints.mergeNodes = "http://localhost:5000/api/MergeNodes";
    endpoints.unmergeNodes = "http://localhost:5000/api/UnmergeNodes";


    endpoints.setDateRange = "http://localhost:5000/api/SetDateRange";
    endpoints.setNodeFix = "http://localhost:5000/api/SetNodeFix";
    endpoints.setViewInfo = "http://localhost:5000/api/SetViewInfo";

    // variables to store API response data
    var responses = {}
    responses.resp_boolUpdatedStatus;
    responses.resp_strFocalNodeIDList;
    responses.resp_intNumNodes;
    responses.resp_intNumEdges;
    responses.resp_intNumComponents;
    responses.resp_jsonGraph;
    responses.resp_focal_node_id_list;

    // combine endpoints and response vars into single object
                    



}());