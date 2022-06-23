import dbConfig from '../config/dbConfig.js';
import {Sequelize, DataTypes} from 'sequelize';
import productModel from 'productModel.js';

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorsAliases: false,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idel:dbConfig.pool.idle
    }
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.products = productModel(sequelize,DataTypes);

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
  });

export default db;