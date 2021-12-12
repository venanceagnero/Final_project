export const deleteDonateRoute = {
        path: '/donation',
        method: "delete",
        handler: async(req, res) => {
            res.send("Deleting donation")
        },
    },