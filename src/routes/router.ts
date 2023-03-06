import express from "express";

import assemble from "./assemble";

const router = express();

router.use(assemble);

export default router;
