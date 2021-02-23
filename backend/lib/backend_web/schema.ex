defmodule BackendWeb.Schema do
  use Absinthe.Schema

  import_types(BackendWeb.Schema.DataTypes)

  query do
    @desc "Get a list of events"
    field :events, list_of(:event) do
      resolve(fn _parent, _args, _resolution ->
        {:ok, [%{message: "Hello World!"}]}
      end)
    end
  end
end
