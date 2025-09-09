module.exports = {
    apps: [
        {
            name: "next_inventory",
            script: "npm",
            arg:"run dev",
            env: {
                NODE_ENV: "development",
                ENV_VAR1:"environment-variable"
            }
        }
    ]
}   