
module.exports = ({ env }) => ({
    "netlify-deployments": {
      enabled: true,
      config: {
        accessToken: "<RI8DUhQqvYxQukjg56LcGKuqKdMW2H-CQzEjy-z6plo>",
        sites: [
          {
            name: 'cromo-back',
            id: "20e50cf8-4570-4cef-9420-b715304c8a6d",
            buildHook: "https://api.netlify.com/build_hooks/<hook_id>",
            branch: 'main' // optional
          }
        ]
      },
    },
  });