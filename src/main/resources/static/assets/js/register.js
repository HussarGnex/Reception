function addVisitBtnEvent() {
    $('#addVisit')
        .on('click', function() {
            let data = {
                "doctorId": $('#doctor').children("option:selected").val(),
                "patientId": $('#patient').children("option:selected").val(),
                "visitDate": $('#visitDate').val()
            };
            $.ajax({
                url: 'visits',
                type: "POST",
                data: JSON.stringify(data),
                contentType: "application/json",
                dataType: "json",
                success: function(data) {
                    $('#successMsg')
                        .text('Wizyta została dodana!')
                }
            });
        })
}

function getDoctorsOptions() {
    $.ajax({
        url: 'persons/search?by=role&what=doctor',
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            let select = $('#doctor');
            data.forEach((doctor) => {
                let msg = doctor.name + ' ' + doctor.surname;
                let id = doctor.id;

            let entry = $('<option>')
                .text(msg)
                .val(id)
                .addClass('mt-2')
                .appendTo(select);
        });
        }
    });
}

function getPatientOptions() {
    $.ajax({
        url: 'persons/search?by=role&what=patient',
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            let select = $('#patient');
            data.forEach((patient) => {
                let msg = patient.name + ' ' + patient.surname;
            let id = patient.id;

            let entry = $('<option>')
                .text(msg)
                .val(id)
                .addClass('mt-2')
                .appendTo(select);
        });
        }
    });
}

function getDoctors() {
    $.ajax({
        url: 'persons/search?by=role&what=doctor',
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            let list = $('#doctors');
            data.forEach((doctor) => {
                let msg = doctor.name + ' ' + doctor.surname + ' / ID = '
                    + doctor.id;
            let entry = $('<li>')
                .text(msg)
                .addClass('mt-2')
                .appendTo(list);
            });
        }
    });
}

function getPatients() {
    $.ajax({
        url: 'persons/search?by=role&what=patient',
        type: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
            let list = $('#patients');
            data.forEach((patient) => {
                let msg = patient.name + ' ' + patient.surname + ' / ID = '
                    + patient.id;
            let entry = $('<li>')
                .text(msg)
                .addClass('mt-2')
                .appendTo(list);
        });
        }
    });
}

addVisitBtnEvent();
getDoctors();
getPatients();
getDoctorsOptions();
getPatientOptions();