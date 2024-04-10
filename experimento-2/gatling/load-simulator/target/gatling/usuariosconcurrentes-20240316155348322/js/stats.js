var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "116",
        "ok": "72",
        "ko": "44"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "10",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "5027",
        "ok": "5027",
        "ko": "5026"
    },
    "meanResponseTime": {
        "total": "1558",
        "ok": "2334",
        "ko": "290"
    },
    "standardDeviation": {
        "total": "2177",
        "ok": "2305",
        "ko": "1100"
    },
    "percentiles1": {
        "total": "31",
        "ok": "1575",
        "ko": "3"
    },
    "percentiles2": {
        "total": "4605",
        "ok": "5018",
        "ko": "4"
    },
    "percentiles3": {
        "total": "5020",
        "ok": "5020",
        "ko": "2150"
    },
    "percentiles4": {
        "total": "5026",
        "ok": "5025",
        "ko": "5026"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 33,
    "percentage": 28
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 37,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 44,
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.365",
        "ok": "0.847",
        "ko": "0.518"
    }
},
contents: {
"req_get-token-1318270063": {
        type: "REQUEST",
        name: "Get Token",
path: "Get Token",
pathFormatted: "req_get-token-1318270063",
stats: {
    "name": "Get Token",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.012",
        "ok": "0.012",
        "ko": "-"
    }
}
    },"req_post-usuario-va-1086779557": {
        type: "REQUEST",
        name: "post usuario valido",
path: "post usuario valido",
pathFormatted: "req_post-usuario-va-1086779557",
stats: {
    "name": "post usuario valido",
    "numberOfRequests": {
        "total": "115",
        "ok": "71",
        "ko": "44"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "18",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "5027",
        "ok": "5027",
        "ko": "5026"
    },
    "meanResponseTime": {
        "total": "1572",
        "ok": "2367",
        "ko": "290"
    },
    "standardDeviation": {
        "total": "2182",
        "ok": "2304",
        "ko": "1100"
    },
    "percentiles1": {
        "total": "31",
        "ok": "1631",
        "ko": "3"
    },
    "percentiles2": {
        "total": "4681",
        "ok": "5018",
        "ko": "4"
    },
    "percentiles3": {
        "total": "5020",
        "ok": "5021",
        "ko": "2150"
    },
    "percentiles4": {
        "total": "5026",
        "ok": "5025",
        "ko": "5026"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 32,
    "percentage": 28
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 37,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 44,
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.353",
        "ok": "0.835",
        "ko": "0.518"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
