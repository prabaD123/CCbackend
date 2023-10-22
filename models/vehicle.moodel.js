const vehicleOwnerSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
    },
    vehicles: [vehicleSchema],
    location: {
      type: String,
    },
    bio: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
  
  const VehicleOwner = mongoose.model('VehicleOwner', vehicleOwnerSchema);
  
  module.exports = VehicleOwner;