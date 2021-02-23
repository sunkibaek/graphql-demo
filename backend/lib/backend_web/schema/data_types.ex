defmodule BackendWeb.Schema.DataTypes do
  use Absinthe.Schema.Notation

  object :event do
    field :message, :string
  end
end
