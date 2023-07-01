import express from "express";

const router = express.Router();

const asyncMiddleware = fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

const errorMiddleware = (err, req, res, next) => {
    console.log(err);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({error: message});
};

router.get("/", asyncMiddleware(async (req, res, next) => {
    const data = {message: "Hello from the nodejs server!"};
    res.json(data);
}));

router.use(errorMiddleware);

export default router;