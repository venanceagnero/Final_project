export const addSignupRoute = {
        path: '/signup',
        method: "post",
        handler: async(req, res) => {
            res.send("Adding member")
        },
    },