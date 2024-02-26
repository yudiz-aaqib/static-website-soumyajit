module.exports = {
    apps: [
      {
        name: 'node-js',
        script: 'npm', // Path to your application's entry point
        args: ["start"],
  
        env: {
          NODE_ENV: 'development', // Environment variables for development
          name: "node-js",
          APP_LOG_LEVEL: "true",
          APP_HOST_LEVEL: "true",
          APP_PORT: "3000",
        },
      }
    ]
  };
