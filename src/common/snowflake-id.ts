import snowflakeIdModule from 'snowflake-id';

type SnowflakeIdOptions = {
  mid?: number;
  offset?: number;
};

type SnowflakeIdGenerator = {
  generate(): string;
};

type SnowflakeIdConstructor = new (
  options?: SnowflakeIdOptions,
) => SnowflakeIdGenerator;

// snowflake-id 是 CommonJS 包，Node ESM 导入后实际结构是 { default: Constructor }。
const SnowflakeId = (
  snowflakeIdModule as unknown as { default: SnowflakeIdConstructor }
).default;

const snowflake = new SnowflakeId({
  mid: Number(process.env.SNOWFLAKE_WORKER_ID ?? 1),
  offset: Number(process.env.SNOWFLAKE_OFFSET ?? 1704067200000),
});

/** 生成雪花 ID（string），对应 Postgres BIGINT */
export function nextSnowflakeId(): string {
  return snowflake.generate();
}
