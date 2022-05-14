import jwt from 'jsonwebtoken'

/*
export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        let decodedData
        if (token) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET)
            req.userId = decodedData?.id
        }
        next()
    } catch (error) {
        console.log(error)
    }
}
*/

/* 
// JWT - LOCALSTORAGE
export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err)
                return res.status(403).json("Unvalid Token")
            req.user = user
            next()
        })
    } else {
        return res.status(401).json("Not authenticated")
    }
}
*/

// JWT - COOKIES
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    if (!token)
        return res.status(401).json("Not authenticated")

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err)
            return res.status(403).json("Token is not valid")

        req.user = user
        next()
    })
}

// check if a logged in user is authorize (compare ids) or is an admin
export const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("No permission")
        }
    })
}

// check if logged in user is an admin
export const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(403).json("No permission")
        }
    })
}