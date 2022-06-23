const db = {
    HOST:'localhost',
    USER:'root',
    PASSWORD:'rootpass123',
    DB:'mysqlsequ',
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
};

export default db;