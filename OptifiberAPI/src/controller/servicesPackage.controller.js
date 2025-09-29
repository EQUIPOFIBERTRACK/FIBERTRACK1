import client from '../models/clientSchema.js';

//Crear servicio
export const newService = async (req, res) => {
    const { Client, ...packageData } = req.body;

    if (!Client) {
        return res.status(400).json({ message: 'Client ID is required' });
    }

    try {
        const clientFound = await client.findById(Client);

        if (!clientFound) {
            return res.status(404).json({ message: 'Client not found' });
        }

        clientFound.Packages.push(packageData);
        await clientFound.save();

        return res.status(201).json({ message: 'Package assigned successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error!' });
    }
};

//Ver todos los servicios
export const viewAllServices = async (req, res) => {
    try {
        const clients = await client.find({ "Packages.0": { "$exists": true } }).select('Name LastName Packages');

        const allPackages = clients.flatMap(c =>
            c.Packages.map(p => ({
                ...p.toObject(),
                ClientName: `${c.Name.FirstName} ${c.LastName.FatherLastName}`
            }))
        );

        return res.status(200).json(allPackages);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error' });
    }
};

//Ver un solo servicio
export const viewOneService = async(req, res) => {
    const id = req.params.id;

    try {
        const idService = await service.findById(id);

        if (!idService) {
            return res.status(404).json({ message: 'Service doesnt exist' });
        }

        const viewPackage = await service.findById(idService)
            .populate('Admin', 'UserName')
            .exec();

        return res.status(200).json(viewPackage);
    } catch (error) {
        return res.status(500).json({ message: 'Server Error!' });
    }
}

//Editar servicio
export const editService = async(req, res) => {
    const id = req.params.id;

    try {
        const idService = await service.findById(id);
        const UpdateQuery = {}

        if (!idService) {
            return res.status(404).json({ message: 'Service doesnt exist' });
        }

        const fields = {
            CreateDate: (value) => { UpdateQuery['CreateDate'] = value },
            Name: (value) => { UpdateQuery['Name'] = value },
            Price: (value) => { UpdateQuery['Price'] = value },
            Description: (value) => { UpdateQuery['Description'] = value },
        }

        for (const [key, updateFunction] of Object.entries(fields)) {
            if (req.body[key]) {
                await updateFunction(req.body[key]);
            }
        }

        await service.findByIdAndUpdate(idService, { $set: UpdateQuery }, { $new: true });
        return res.status(201).json({ message: 'Service updated' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server error!' });
    }
}

//Eliminar servicio
export const deleteService = async(req, res) => {
    const id = req.params.id;

    try {
        const idService = await service.findById(id);

        if (!idService) {
            return res.status(404).json({ message: 'Services doesnt exist' });
        }

        await service.findByIdAndDelete(idService);
        return res.status(200).json({ message: 'Service deletes' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server Error!' });
    }
}