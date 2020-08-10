const dataBase = require('./db')
const createProffy = require('./createProffy')
dataBase.then(async (db) => {
    proffyValue = {
        name: "Nesha",
        avatar: "https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.0-9/95656214_2993616274037404_558354561752891392_n.jpg?_nc_cat=109&_nc_sid=e3f864&_nc_eui2=AeGoh-UTYtQVB1Vaip_8CqBEAefMI4wCcCUB58wjjAJwJbJIIBtpsECBd762DLGzqrHqkE8ujrepljh7vNQtLgBf&_nc_ohc=KVkTx-M4-gQAX-QLB95&_nc_ht=scontent.fcpq5-1.fna&oh=026f14d0c683d450fac8f89c09d4c6a2&oe=5F54D60A",
        whatsapp:"19993990316",
        bio:"Vendo skins de CSGO"
    }

    classValue ={
        subject: "5",
        cost: "30"
    }

    classScheduleValues = [
        {
            weekday: 2,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 3,
            time_from: 520,
            time_to: 1320
        }
    ]

    // await createProffy(db,{proffyValue,classValue,classScheduleValues})

    const selesctedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selesctedProffys)


    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffy_id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)


    const selectedSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = class_id
        AND class_schedule.weekday = "3"
        AND class_schedule.time_from <= "620"
        AND class_schedule.time_to > "520"
    `)
    // console.log(selectedSchedules)
})