use Mix.Config

config :analytics, Analytics.Endpoint,
  http: [port: {:system, "PORT"}],
  url: [host: "dinchi-analytics-phoenix.herokuapp.com", port: 80],
  cache_static_manifest: "priv/static/manifest.json",
  secret_key_base: System.get_env("SECRET_KEY_BASE")

config :logger, level: :error

config :analytics, Analytics.Repo,
  adapter: Ecto.Adapters.Postgres,
  url: System.get_env("DATABASE_URL"),
  ssl: true,
  pool_size: 20
