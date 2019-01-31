import { Subject } from 'rxjs';

export class UsernameService {
    userHasName = new Subject();
    genresSubject = new Subject();
}