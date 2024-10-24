import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { signInSchema, signUpSchema } from "@/features/auth/schemas";

const app = new Hono()
    .post(
        "/signin",
        zValidator("json", signInSchema),
        async (c) => {
            const { email, password } = c.req.valid("json");
            console.log(email, password);
            return c.json({ data: { email, password } });
        }
    )
    .post(
        "/signup",
        zValidator("json", signUpSchema),
        async (c) => {
            const { email, password, name } = c.req.valid("json");
            console.log(email, password, name);
            return c.json({ data: { email, password, name } });
        }
    );

export default app;