ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Analytics.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Analytics.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Analytics.Repo)

