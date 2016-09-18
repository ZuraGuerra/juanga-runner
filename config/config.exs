# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :noaNoa,
  ecto_repos: [NoaNoa.Repo]

# Configures the endpoint
config :noaNoa, NoaNoa.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "h9ub++NDdw6fH7Yq1p7yBbKmavBDItmxR9Dtm3xZlw6eXq/aW1/uQJbwg6SBOoR4",
  render_errors: [view: NoaNoa.ErrorView, accepts: ~w(html json)],
  pubsub: [name: NoaNoa.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
