package pl.edu.pwsip.Reception.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import pl.edu.pwsip.Reception.models.Visit;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface VisitRepository extends MongoRepository<Visit, String> {

    Optional<List<Visit>> findByDoctorId(String doctorId);
    Optional<List<Visit>> findByPatientId(String patientId);
    Optional<List<Visit>> findByVisitDate(Date visitDate);

}
