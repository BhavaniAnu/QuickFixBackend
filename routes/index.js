const serviceRoutes = require("./serviceRoutes");
const subServiceRoutes = require("./subServiceRoutes");
const cartRoutes = require("./cartRoutes");
const orderRoutes = require("./orderRoutes");

module.exports = (app) => {
  app.use("/api/service", serviceRoutes);
  app.use("/api/subService", subServiceRoutes);
  app.use("/api/cart", cartRoutes);
  app.use("/api/order", orderRoutes);
};
