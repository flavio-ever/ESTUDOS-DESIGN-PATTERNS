export default class HapiAdapter {
    static create(fn) {
        return async function (req) {
            // fn (example) = async getParkingLots(req)
            // fn return (example)  = getParkingLot database
            const obj = await fn(req.params, req.payload);

            return obj;
        }
    }
}