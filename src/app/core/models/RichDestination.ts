import {Facility} from './Facility';
import {Service} from './Service';

export class RichDestination {
  id: number;
  destination: string;
  service: Service;
  facility: Facility;
}
