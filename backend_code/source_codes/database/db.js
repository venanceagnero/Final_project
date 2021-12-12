import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = "Asmt_Pro_database";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to database');
    }
    const db = client.db(databaseName);






    //applying crud


    //deleting data
    //db.collection('users').deleteMany({
    // age: 35
    // _id: new ObjectID("619839b5a28e6f67fc776ac6")
    //}).then((result) => {
    // console.log(result);
    //}).catch((error) => {
    // console.log(error);
    //});

    //doing many updates
    //db.collection("tasks").updateMany({
    // completed: false
    //  }, {
    //set value
    //  $set: {
    //      name: 'Bill'
    //  }

    //increment value
    //$inc: {
    //     age: 24
    //  }
    //  $set: {
    //      complete: true,
    //  }
    //  })
    // updatePromise
    //.then((result) => {
    //   console.log(result);
    //  })

    //fetching data from mongodb database
    //  const db = client.db(databaseName)
    //  db.collection('users').findOne({
    //   name: 'Bill'

    //search by id
    //    _id: new ObjectID("6198412c68ab2f4b4d13fac9")
    //  }, (error, user) => {
    //   if (error) {
    //    return console.log('Unble to fetch user ');
    //   }
    //  console.log(user);
    //  });
    //find by age using find method
    //  db.collection('users').find({ age: "20" }).toArray((error, users) => {
    //     console.log(users);
    //  });

    //find by age using and  count number of data of age using count method as a cursor
    //  db.collection('users').find({ age: "20" }).count((error, count) => {
    //    console.log(count);
    // });



    //insert new id
    // const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Billy',
    //    age: '20'
    // }, (error, result) => {
    //    if (error) {
    //        return console.log('Unble to insert user ')
    //   }
    //    console.log(result.ops)
    // })

    // console.log('connected successfully')
    // const db = client.db(databaseName)
    //db.collection('users').insertOne({
    //   name: 'venance',
    ///    age: '40'
    //  }, (error, result) => {
    //   if (error) {
    //       return console.log('Unble to insert user ')
    //   }
    //   console.log(result.ops)
    // })

    //inserting multiple document

    db.collection('suscribers').insertMany([

            {
                firstName: 'John',
                lastName: 'Burn',
                dayOfBirth: new Date('04/26/1986'),
                email: 'johnburn@yahoo.com',
                isActive: false,
                address: {
                    street: '8097 middle crt',
                    city: 'Austin',
                    state: 'Texas',
                    zipCode: '73344',
                }
            },

            {
                firstName: 'Bill',
                lastName: 'Black',
                dayOfBirth: new Date('02/10/1980'),
                email: 'bilblackn@yahoo.com',
                isActive: false,
                address: {
                    street: '1509 burnerr street',
                    city: 'Austin',
                    state: 'Texas',
                    zipCode: '73344',
                }
            }
        ],
        (error, result) => {
            if (error) {
                return console.log('Unable to insert documents')
            }
            console.log(result.ops)
        })

    //insert tasks
    //   db.collection("tasks").insertMany([{
    //      description: "Cleaning the house",
    //      completed: true,
    //    },
    //    {
    //       description: "Cleaning the cars",
    //         completed: false,
    //     },
    //     {
    //         description: "building summing pool",
    //        completed: false,
    //    }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }
    //    console.log(result.ops)
    // })

})