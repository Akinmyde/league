import express from 'express';

const router = express();

router.all('*', (req, res) => {
    res.status(404).send({
        error: 'This route does not exist yet'
    });
});

export default router;