package pl.edu.pwsip.Reception.exceptions;

public class VisitNotFoundException extends RuntimeException {
    public VisitNotFoundException(String idVisit) {
        super("Visit with id = " + idVisit + " not found!");
    }
}
