
function getAllVisits() {
    $.ajax({
        url: 'visits/',
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            data.forEach(visit => getVisitWithFullData(visit.id));
        }
    });
}


function getVisitWithFullData(id) {
    $.ajax({
        url: 'visits/' + id + '/full',
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            let list = $('#visits');
            let msg = 'Lekarz: ' + data.doctor.name + ' ' + data.doctor.surname + ' / Pacjent: ' + data.patient.name
                + ' ' + data.patient.surname + ' / Data: ' + new Date(data.visitDate);
            let entry = $('<li>')
                .text(msg)
                .addClass('mt-2')
                .appendTo(list);
            let deleteBtn = $('<button>', {
                id: id
            })
                .addClass('btn btn-sm btn-danger')
                .text('Usuń')
                .css({ float: 'right' })
                .on('click', function() {
                    $.ajax({
                        url: 'visits/' + id,
                        type: "DELETE",
                        contentType: "application/json",
                        dataType: "json",
                        success: function(data) {
                            $('#visits')
                                .empty();
                            getAllVisits();
                        }
                    });
                })
                .appendTo(entry);
        }
    });
}

function deleteVisit(id) {

}

getAllVisits();