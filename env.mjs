import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_APP_API_BASE_URL: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_API_BASE_URL: process.env.NEXT_PUBLIC_APP_API_BASE_URL,
  },
})
