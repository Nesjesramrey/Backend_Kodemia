const Koder = require('../models/koder.model');

async function getKoders(filter) {
    const koders = await Koder.find(filter);

    return koders;
}

async function createKoders(koder) {
    const newKoder = new Koder(koder);

    await Koder.create(newKoder);

    return newKoder;
}

async function updateKoder(id, koder) {
    const filter = {
        _id: id,
    };

    await Koder.findOneAndUpdate(filter, koder);

    const updatedKoder = Koder.findOne(filter);

    return updatedKoder;
}


async function deleteKoder(id, koder) {
    const filter = {
        _id: id,
    };

    await Koder.findOneAndDelete(filter, koder);

    const updatedKoder = Koder.findOne(filter);

    return updatedKoder;
}

module.exports = {
    getKoders,
    createKoders,
    updateKoder,
    deleteKoder,

}