import {Owner} from './Owner';

export interface RichFacility {
  id: number;
  name: String;
  description: String;
  facilityOwners: Owner[];
}
