use Mix.Config

config :phoenixapi, Phoenixapi.Endpoint,
  http: [port: {:system, "PORT"}],
  url: [host: "dinchi-analytics-phoenix.herokuapp.com", port: 80],
  cache_static_manifest: "priv/static/manifest.json",
  secret_key_base: System.get_env("SECRET_KEY_BASE")

config :logger, level: :error

# Configure your database
config :phoenixapi, Phoenixapi.Repo,
  adapter: Ecto.Adapters.Postgres,
  url: System.get_env("DATABASE_URL"),
  ssl: true,
  pool_size: 20
