const URL = 'http://localhost:8080/';

function getAllVisits() {
    $.ajax({
        url: URL + 'visits',
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            console.log(data);
        },
        error: function() {

        }
    });
}

function getVisitById(id) {
    $.ajax({
        url: URL + 'visits/' + id,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            console.log(data);
        },
        error: function() {

        }
    });
}

function addVisit(visit) {
    $.ajax({
        url: URL + 'visits',
        type: "POST",
        data: visit,
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            console.log(data);
        },
        error: function() {

        }
    });
}

function deleteVisit(id) {
    $.ajax({
        url: URL + 'visits/' + id,
        type: "DELETE",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            console.log(data);
        },
        error: function() {

        }
    });
}

function getPersonData(id) {
    $.ajax({
        url: URL + 'persons/' + id,
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            console.log(data);
        },
        error: function() {

        }
    });
}

function getVisitWithFullData() {
    $.ajax({
        url: URL + 'visits/' + id + '/full',
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {

        }
    });
}

getAllVisits();