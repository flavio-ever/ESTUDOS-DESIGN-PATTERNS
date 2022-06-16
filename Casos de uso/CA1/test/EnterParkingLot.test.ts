import EnterParkingLot from "../src/core/usecase/EnterParkingLot";
import GetParkingLot from "../src/core/usecase/GetParkingLot";
import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";
import ParkingLotRepositorySQL from "../src/infra/repository/ParkingLotRepositorySQL";

test("Should enter parking lot", async () => {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const parkingLotRepositorySQL = new ParkingLotRepositorySQL();

    // parkingLotRepositoryMemory é compartilhado entre [enter] e [get] parking lot (database);
    const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);
    const enterParkingLot = new EnterParkingLot(parkingLotRepositorySQL);
    const parkingLot = await getParkingLot.execute("Shopping");

    console.log(parkingLot);
})

test.skip("Should enter parking lot", async () => {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const parkingLotRepositorySQL = new ParkingLotRepositorySQL();

    // parkingLotRepositoryMemory é compartilhado entre [enter] e [get] parking lot (database);
    const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);
    const enterParkingLot = new EnterParkingLot(parkingLotRepositorySQL);

    const parkingLotBeforeEnter = await getParkingLot.execute("Shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

    await enterParkingLot.execute("Shopping", "MMM-0001", new Date("2022-02-14T10:00:00"));

    const parkingLotAfterEnter =  await getParkingLot.execute('Shopping');
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);

})

test.skip("Should enter closed", async () => {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const parkingLotRepositorySQL = new ParkingLotRepositorySQL();

    // parkingLotRepositoryMemory é compartilhado entre [enter] e [get] parking lot (database);
    const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);
    const enterParkingLot = new EnterParkingLot(parkingLotRepositorySQL);

    // Espera que parkingLot possua 0 carros
    const parkingLotBeforeEnter = await getParkingLot.execute("Shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

    // Adiciona carros
    await enterParkingLot.execute("Shopping", "MMM-0001", new Date("2022-02-14T22:00:00"));
    await enterParkingLot.execute("Shopping", "MMM-0002", new Date("2022-02-14T22:00:00"));
    await enterParkingLot.execute("Shopping", "MMM-0003", new Date("2022-02-14T22:00:00"));
    await enterParkingLot.execute("Shopping", "MMM-0004", new Date("2022-02-14T22:00:00"));
    await enterParkingLot.execute("Shopping", "MMM-0005", new Date("2022-02-14T22:00:00"));
    await enterParkingLot.execute("Shopping", "MMM-0006", new Date("2022-02-14T22:00:00"));
})