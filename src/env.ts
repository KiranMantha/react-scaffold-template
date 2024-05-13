const envVariables = { ...({ ...process.env } as object) };
export const env: Record<string, string> = { ...envVariables };
