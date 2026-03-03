/**
 * Chaos / failure injection config for CI/CD monitoring and root cause analysis testing.
 * Chaos mode and fail-health are always enabled (no env lookup).
 */

/** When true, application intentionally crashes on startup (for chaos testing). Always true. */
export function isChaosModeEnabled(): boolean {
  return true;
}

/** When true, health check endpoint returns HTTP 500 (for chaos testing). Always true. */
export function isFailHealthEnabled(): boolean {
  return true;
}

export interface ChaosLogPayload {
  level: 'error';
  message: string;
  timestamp: string;
  chaos_mode?: boolean;
  fail_health?: boolean;
  env: string;
}

/** Emit a structured error log for chaos/failure scenarios. */
export function logChaosError(payload: Omit<ChaosLogPayload, 'level' | 'timestamp' | 'env'>): void {
  const full: ChaosLogPayload = {
    level: 'error',
    timestamp: new Date().toISOString(),
    env: 'chaos_test',
    ...payload,
  };
  console.error(JSON.stringify(full));
}
