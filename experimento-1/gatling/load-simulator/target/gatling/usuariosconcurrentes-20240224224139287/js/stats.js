var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "2924",
        "ok": "1105",
        "ko": "1819"
    },
    "minResponseTime": {
        "total": "161",
        "ok": "161",
        "ko": "240"
    },
    "maxResponseTime": {
        "total": "60021",
        "ok": "35611",
        "ko": "60021"
    },
    "meanResponseTime": {
        "total": "41450",
        "ok": "10966",
        "ko": "59968"
    },
    "standardDeviation": {
        "total": "24773",
        "ok": "11267",
        "ko": "1401"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "5452",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "18442",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "34511",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60010",
        "ok": "35540",
        "ko": "60014"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 13,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1085,
    "percentage": 37
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1819,
    "percentage": 62
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.865",
        "ok": "7.129",
        "ko": "11.735"
    }
},
contents: {
"req_post-usuario-va-1064480997": {
        type: "REQUEST",
        name: "POST Usuario Valido",
path: "POST Usuario Valido",
pathFormatted: "req_post-usuario-va-1064480997",
stats: {
    "name": "POST Usuario Valido",
    "numberOfRequests": {
        "total": "2922",
        "ok": "1105",
        "ko": "1817"
    },
    "minResponseTime": {
        "total": "161",
        "ok": "161",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60021",
        "ok": "35611",
        "ko": "60021"
    },
    "meanResponseTime": {
        "total": "41457",
        "ok": "10966",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "24767",
        "ok": "11267",
        "ko": "2"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "5452",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "18442",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "34511",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60010",
        "ok": "35540",
        "ko": "60014"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 13,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1085,
    "percentage": 37
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1817,
    "percentage": 62
},
    "meanNumberOfRequestsPerSecond": {
        "total": "18.852",
        "ok": "7.129",
        "ko": "11.723"
    }
}
    },"req_post-usuario-er-988981974": {
        type: "REQUEST",
        name: "POST Usuario Error",
path: "POST Usuario Error",
pathFormatted: "req_post-usuario-er-988981974",
stats: {
    "name": "POST Usuario Error",
    "numberOfRequests": {
        "total": "2",
        "ok": "0",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "240",
        "ok": "-",
        "ko": "240"
    },
    "maxResponseTime": {
        "total": "60000",
        "ok": "-",
        "ko": "60000"
    },
    "meanResponseTime": {
        "total": "30120",
        "ok": "-",
        "ko": "30120"
    },
    "standardDeviation": {
        "total": "29880",
        "ok": "-",
        "ko": "29880"
    },
    "percentiles1": {
        "total": "30120",
        "ok": "-",
        "ko": "30120"
    },
    "percentiles2": {
        "total": "45060",
        "ok": "-",
        "ko": "45060"
    },
    "percentiles3": {
        "total": "57012",
        "ok": "-",
        "ko": "57012"
    },
    "percentiles4": {
        "total": "59402",
        "ok": "-",
        "ko": "59402"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 2,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.013",
        "ok": "-",
        "ko": "0.013"
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
