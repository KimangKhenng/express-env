const validateEnv = () => {
    const required = [
        'PORT',
        'MONGODB_URI',
        'JWT_SECRET'
    ];

    const missing = required.filter(key => !process.env[key]);

    if (missing.length > 0) {
        throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
    }

    // Validate formats
    if (process.env.PORT && isNaN(process.env.PORT)) {
        throw new Error('PORT must be a number');
    }

    if (process.env.MAX_FILE_SIZE && isNaN(process.env.MAX_FILE_SIZE)) {
        throw new Error('MAX_FILE_SIZE must be a number');
    }

    console.log('✓ Environment variables validated');
};

export default validateEnv;