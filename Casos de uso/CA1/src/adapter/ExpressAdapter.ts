export default class ExpressAdapter {
    static create(fn) {
        return async function (req, res) {
            // fn (example) = async getParkingLots(req, res)
            // fn return (example)  = getParkingLot database
            const obj = await fn(req.params, req.body);

            res.json(obj);
        }
    }
}