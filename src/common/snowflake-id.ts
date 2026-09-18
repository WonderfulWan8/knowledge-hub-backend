import SnowflakeId from 'snowflake-id';

// snowflake-id is a CommonJS package whose ESM default import is wrapped once
// more because the package itself exposes `exports.default`.
type SnowflakeConstructor = new (options?: {
  mid?: number;
  offset?: number;
}) => {
  generate(): string;
};

const Snowflake = (
  SnowflakeId as unknown as { default: SnowflakeConstructor }
).default;

const snowflake = new Snowflake({
  mid: Number(process.env.SNOWFLAKE_WORKER_ID ?? 1),
  offset: Number(process.env.SNOWFLAKE_OFFSET ?? 1704067200000),
});

/** 生成雪花 ID（string），对应 Java long / Postgres BIGINT */
export function nextSnowflakeId(): string {
  return snowflake.generate();
}
