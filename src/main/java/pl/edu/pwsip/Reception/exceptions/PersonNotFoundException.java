package pl.edu.pwsip.Reception.exceptions;

public class PersonNotFoundException extends RuntimeException {
    public PersonNotFoundException(String id) {
        super("Person with id = " + id + " not found!");
    }
}
