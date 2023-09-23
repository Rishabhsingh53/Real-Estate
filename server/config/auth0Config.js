import {auth} from "express-oauth2-jwt-bearer"

const jwtCheck = auth({
    audience : "http://localhost:8000",
    issuerBaseURL : "dev-p06n4n2lrsptzlqw.us.auth0.com",
    tokenSigningAlg:"RS256"
})

export default jwtCheck
