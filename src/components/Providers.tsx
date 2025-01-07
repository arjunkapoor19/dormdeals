"use client"

import { QueryClient } from "@tanstack/react-query"
import { useState } from "react"

const Providers = () => {
    const [queryClient] = useState(() => new QueryClient) 
    const [trpcClient] = useState(() => new trpc.createClient()) 
}

export default Providers