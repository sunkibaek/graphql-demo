FROM elixir:1.11-slim

WORKDIR /usr/src/app

COPY mix.exs .
COPY mix.lock .

CMD mix local.hex --force && mix deps.get && mix phx.server
