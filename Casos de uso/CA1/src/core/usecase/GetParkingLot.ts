import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class GetParkingLot {
    private parkingLotRepository: ParkingLotRepository;

    constructor(parkingLotRepository: ParkingLotRepository) {
          this.parkingLotRepository = parkingLotRepository;
    }

    execute(code: string) {
        return this.parkingLotRepository.getParkingLot(code);
    }

}