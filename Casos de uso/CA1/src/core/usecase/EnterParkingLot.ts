import ParkedCar from "../entity/ParkedCar";
import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class EnterParkingLot {
    private parkingLotRepository: ParkingLotRepository;

    constructor(parkingLotRepository: ParkingLotRepository) {
        this.parkingLotRepository = parkingLotRepository;
    }

    // Caso de uso será executado
    async execute(code: string, plate: string, date: Date) {
        const partkingLot = await this.parkingLotRepository.getParkingLot(code);

        const parkedCar = new ParkedCar(code, plate, date);

        // Uma implementacao <parkingLotRepository> retorna outra <ParkingLot>, porque foi definido como resultado outra <ParkingLot>
        if(!partkingLot.isOpen(parkedCar.date)) throw new Error('The parking lot is closed');
        if(partkingLot.isFull()) throw new Error('The parking lot is full');

        await this.parkingLotRepository.saveParkedCar(parkedCar.code, parkedCar.plate, parkedCar.date);
        
        return partkingLot;
    }
}