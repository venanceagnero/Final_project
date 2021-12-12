export const addDonationRoute = {
        path: '/donation',
        method: "post",
        handler: async(req, res) => {
            res.send("Adding donation")
        },
    },