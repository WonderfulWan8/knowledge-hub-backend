import SnowflakeId from 'snowflake-id';

type SnowflakeConstructor = new (options?: {
  mid?: number;
  offset?: number;
}) => {
  generate(): string;
};

// snowflake-id 是 CommonJS 包，在 ESM 下默认导出会包在 .default 中。
const Snowflake = (
  SnowflakeId as unknown as { default: SnowflakeConstructor }
).default;

const snowflake = new Snowflake({
  mid: Number(process.env.SNOWFLAKE_WORKER_ID ?? 1),
  offset: Number(process.env.SNOWFLAKE_OFFSET ?? 1704067200000),
});

/** 生成雪花 ID（string），对应 Postgres BIGINT */
export function nextSnowflakeId(): string {
  return snowflake.generate();
}
