export const LocaLURI = "mongodb://localhost/contacts";

export const HostName = "Localhost"

export const SessionSecret = "INFT2202SessionSecret"

import mongoose from 'mongoose';

const MONGODB_URI = 'your_mongodb_uri';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));