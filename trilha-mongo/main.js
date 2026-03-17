import { MongoClient, ObjectId } from 'mongodb';

const uri = 'mongodb://admin:123456@localhost:27017/';
const client = new MongoClient(uri);

async function connect() {
    try {
        await client.connect();
        console.log('Conectado ao MongoDB');

        const db = client.db('trilha');

        return { db };
    } catch (error) {
        console.error('Erro ao conectar:', error);
    }
}


const main = async () => {
    const { db } = await connect();

    const collection = db.collection('users');

    // await collection.insertOne({
    //     name: 'Rafael Angonese',
    //     email: 'rafael.angonese@loylegal.com',
    //     createdAt: new Date()
    // });

    // // Inserir múltiplos documentos
    // await collection.insertMany([
    //     { name: 'Pedro', age: 25 },
    //     { name: 'Maria', age: 28 }
    // ]);

    // const users = await collection.find().toArray();
    // console.log('users', users);

    // const users2 = await collection
    //     .find({ age: { $gte: 18 } })
    //     .toArray();

    // const names = await collection
    //     .find({}, { projection: { name: 1 } })
    //     .toArray();

    // console.log('users2', users2);
    // console.log('nomes', names);

    // await collection.updateOne(
    //     { email: 'ana@example.com' },
    //     { $set: { age: 31, updatedAt: new Date() } }
    // );
    // await collection.deleteMany({
    // name: 'Maria'
    // });

    // await collection.insertOne({
    //     name: 'Rafael Angonese',
    //     email: 'rafael.angonese@loylegal.com',
    //     createdAt: new Date()
    // });

    const user = await collection.findOne({ email: 'rafael.angonese@loylegal.com' });

    const orders = db.collection('orders');

    // await orders.insertOne({
    //     userId: user._id,
    //     products: [
    //         { name: 'Produto A', price: 50, quantity: 2 },
    //         { name: 'Produto B', price: 30, quantity: 1 },
    //         { name: 'Produto C', price: 29.99, quantity: 3 }
    //     ],
    //     status: 'PENDING',
    //     orderDate: new Date()
    // });

    const result = await orders.aggregate([
        // { $match: { status: 'PENDING' } },
        {
            $lookup: {
                from: 'users',
                localField: 'userId',
                foreignField: '_id',
                as: 'user'
            }
        },
        {
            $unwind: '$user'
        },
        {
            $addFields: {
                totalPrice: {
                    $sum: {
                        $map: {
                            input: '$products',
                            as: 'product',
                            in: {
                                $multiply: ['$$product.price', '$$product.quantity']
                            }
                        }
                    }
                }
            }
        },
        {
            $project: {
                _id: 1,
                orderDate: 1,
                status: 1,

                'user.name': 1,
                'user.email': 1,
                totalPrice: 1,
            },
        },
        { $sort: { totalPrice: 1 } }
    ]).toArray();

    console.log('Resultado do lookup:', result);
}

main();