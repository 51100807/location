import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    create(createLocationDto: CreateLocationDto): Promise<import("./location.entity").Location>;
    findAll(): Promise<import("./location.entity").Location[]>;
    findOne(id: number): Promise<import("./location.entity").Location>;
    update(id: number, updateLocationDto: UpdateLocationDto): Promise<import("./location.entity").Location>;
    remove(id: number): Promise<void>;
}
