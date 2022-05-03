const serviceRoutes = require("./serviceRoutes");
const subServiceRoutes = require("./subServiceRoutes");
const cartRoutes = require("./cartRoutes");
const orderRoutes = require("./orderRoutes");
const authRoutes = require("./authRoutes");

module.exports = (app) => {
  app.use("/api/service", serviceRoutes);
  app.use("/api/subService", subServiceRoutes);
  app.use("/api/cart", cartRoutes);
  app.use("/api/order", orderRoutes);
  app.use("/api/auth", authRoutes);
};
