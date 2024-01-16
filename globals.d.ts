export {};
declare global {
  interface ProcessEnv {
    [x: string]: string;
    NODE_ENV: "development" | "production" | "test";
  }
  interface Process {
    env: ProcessEnv;
  }
  let process: Process;
}
