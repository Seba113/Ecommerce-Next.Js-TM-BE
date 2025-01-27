module.exports = {
    'strapi-neon-tech-db-branches': {
      enabled: true,
      config: {
        neonApiKey: "napi_ey7eaucs600e6ojlwop7n3mv9dt5sdl2d1t5rwhofl401hhiv4nnn28czqac3ll1", // get it from here: https://console.neon.tech/app/settings/api-keys
        neonProjectName: "ecommerce-tm", // the neon project under wich your DB runs
        neonRole: "ecommerce-tm-db_owner", // create it manually under roles for your project first
        gitBranch: "main" // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
      }
    }
  }