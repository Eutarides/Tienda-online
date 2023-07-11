const db = require('../models');
const Tracked = db.Tracked;

module.exports = class TrackingService {
  logFetch = async (userId, ip, resource, method, statusCode) => {
    try {
      Tracked.create({
        userId: userId,
        ip: ip,
        resource: resource,
        method: method,
        statusCode: statusCode,
      });
      
      console.log('Registro de llamada fetch:', tracked);
    } catch (error) {
      console.error(error);
    }
  };
};