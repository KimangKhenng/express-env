// config/config.js
export default {
    // Server
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',

    // Database
    db: {
        uri: process.env.MONGODB_URI,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },

    // JWT
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRE || '7d'
    },

    // Email
    email: {
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASSWORD
    },

    // File Upload
    upload: {
        maxSize: parseInt(process.env.MAX_FILE_SIZE) || 5 * 1024 * 1024, // 5MB
        path: process.env.UPLOAD_PATH || './uploads'
    },

    // Client
    clientUrl: process.env.CLIENT_URL || 'http://localhost:3000'
};